import {useLoaderData} from '@remix-run/react';
import type {ProductConnection} from '@shopify/hydrogen/storefront-api-types';
import {type LoaderArgs} from '@shopify/remix-oxygen';
import invariant from 'tiny-invariant';
import {
  BackgroundImage,
  Button,
  getPaginationVariables,
  Grid,
  Pagination,
  ProductCard,
  Section,
  Title,
  TwoColumnsText,
} from '~/components';
import {PRODUCT_CARD_FRAGMENT} from '~/data/fragments';
import {getImageLoadingPriority} from '~/lib/const';

const PAGE_BY = 8;

export async function loader({request, context: {storefront}}: LoaderArgs) {
  const variables = getPaginationVariables(request, PAGE_BY);

  const data = await storefront.query<{
    products: ProductConnection;
  }>(ALL_PRODUCTS_QUERY, {
    variables: {
      ...variables,
      country: storefront.i18n.country,
      language: storefront.i18n.language,
    },
  });

  invariant(data, 'No data returned from Shopify API');

  return data.products;
}

export const handle = {
  seo: {
    title: 'Products',
  },
};
export default function AllProducts() {
  const products = useLoaderData<typeof loader>();

  return (
    <>
      <Title>These Stripes are forever</Title>
      <div className="px-6 md:px-8 lg:px-12">
        <BackgroundImage src="bg-[url('https://cloudfront-eu-central-1.images.arcpublishing.com/thenational/6DX4VWEO7T7EJ46H44DRP2J5LE.jpg')]" />
      </div>
      <TwoColumnsText
        title="Our Latest Products"
        description="Archival styles reinvented. The Adidas Adicolor is a modern take on classic adidas looks, with apparel that tells the story of the three stripes with every design."
      />
      <Section>
        <Pagination connection={products}>
          {({
            endCursor,
            hasNextPage,
            hasPreviousPage,
            nextPageUrl,
            nodes,
            prevPageUrl,
            startCursor,
            nextLinkRef,
            isLoading,
          }) => {
            const itemsMarkup = nodes.map((product, i) => (
              <ProductCard
                index={i}
                key={product.id}
                product={product}
                loading={getImageLoadingPriority(i)}
              />
            ));

            return (
              <>
                {hasPreviousPage && (
                  <div className="flex items-center justify-center mt-6">
                    <Button
                      to={prevPageUrl}
                      variant="secondary"
                      prefetch="intent"
                      width="full"
                      disabled={!isLoading}
                      state={{
                        pageInfo: {
                          endCursor,
                          hasNextPage,
                          startCursor,
                        },
                        nodes,
                      }}
                    >
                      {isLoading ? 'Loading...' : 'Previous'}
                    </Button>
                  </div>
                )}
                <Grid data-test="product-grid">{itemsMarkup}</Grid>
                {hasNextPage && (
                  <div className="flex items-center justify-center mt-6">
                    <Button
                      ref={nextLinkRef}
                      to={nextPageUrl}
                      variant="secondary"
                      prefetch="intent"
                      width="full"
                      disabled={!isLoading}
                      state={{
                        pageInfo: {
                          endCursor,
                          hasPreviousPage,
                          startCursor,
                        },
                        nodes,
                      }}
                    >
                      {isLoading ? 'Loading...' : 'Next'}
                    </Button>
                  </div>
                )}
              </>
            );
          }}
        </Pagination>
      </Section>
    </>
  );
}

const ALL_PRODUCTS_QUERY = `#graphql
  ${PRODUCT_CARD_FRAGMENT}
  query AllProducts(
    $country: CountryCode
    $language: LanguageCode
    $first: Int
    $last: Int
    $startCursor: String
    $endCursor: String
  ) @inContext(country: $country, language: $language) {
    products(first: $first, last: $last, before: $startCursor, after: $endCursor) {
      nodes {
        ...ProductCard
      }
      pageInfo {
        hasPreviousPage
        hasNextPage
        startCursor
        endCursor
      }
    }
  }
`;
