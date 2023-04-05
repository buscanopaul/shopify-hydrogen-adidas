import {useLoaderData} from '@remix-run/react';
import type {
  Collection,
  CollectionConnection,
} from '@shopify/hydrogen/storefront-api-types';
import {json, type LoaderArgs, type MetaFunction} from '@shopify/remix-oxygen';
import {
  BackgroundImage,
  Button,
  getPaginationVariables,
  Grid,
  Heading,
  Link,
  Pagination,
  Section,
  Title,
} from '~/components';
import {getImageLoadingPriority} from '~/lib/const';
import data from '../../../data/collections.json';

const PAGINATION_SIZE = 8;

export const handle = {
  seo: {
    title: 'All Collections',
  },
};

export const loader = async ({request, context: {storefront}}: LoaderArgs) => {
  const variables = getPaginationVariables(request, PAGINATION_SIZE);
  const {collections} = await storefront.query<{
    collections: CollectionConnection;
  }>(COLLECTIONS_QUERY, {
    variables: {
      ...variables,
      country: storefront.i18n.country,
      language: storefront.i18n.language,
    },
  });

  return json({collections});
};

export const meta: MetaFunction = () => {
  return {
    title: 'All Collections',
  };
};

export default function Collections() {
  const {collections} = useLoaderData<typeof loader>();

  return (
    <>
      <Title>Collections</Title>
      <div className="px-6 md:px-8 lg:px-12">
        <BackgroundImage src="bg-[url('https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/enUS/Images/style-fw22-superstar-alwayson-launch-pdp-dual-storytab-d_tcm221-943677.jpg')]" />
      </div>
      <Section>
        <Pagination connection={collections}>
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
          }) => (
            <>
              {hasPreviousPage && (
                <div className="flex items-center justify-center mt-6">
                  <Button
                    to={prevPageUrl}
                    variant="secondary"
                    width="full"
                    prefetch="intent"
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
                    {isLoading ? 'Loading...' : 'Previous products'}
                  </Button>
                </div>
              )}
              <Grid
                items={nodes.length === 3 ? 3 : 3}
                data-test="collection-grid"
              >
                {nodes.map((collection, i) => (
                  <CollectionCard
                    index={i}
                    collection={collection as Collection}
                    key={collection.id}
                    loading={getImageLoadingPriority(i, 2)}
                  />
                ))}
              </Grid>
              {hasNextPage && (
                <div className="flex items-center justify-center mt-6">
                  <Button
                    ref={nextLinkRef}
                    to={nextPageUrl}
                    variant="secondary"
                    width="full"
                    prefetch="intent"
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
                    {isLoading ? 'Loading...' : 'Next products'}
                  </Button>
                </div>
              )}
            </>
          )}
        </Pagination>
      </Section>
    </>
  );
}

function CollectionCard({
  collection,
  loading,
  index,
}: {
  collection: Collection;
  loading?: HTMLImageElement['loading'];
  index: number;
}) {
  return (
    <Link to={`/collections/${collection.handle}`} className="grid gap-4">
      <div className="card-image bg-primary/5 aspect-[3/3] bg-gray-100">
        {collection?.image && (
          <img
            alt={collection.title}
            src={data.collections[index].url}
            height={400}
            sizes="(max-width: 32em) 100vw, 33vw"
            width={600}
            loading={loading}
          />
        )}
      </div>
      <Heading as="h3" size="copy" className="text-black">
        {collection.title}
        {/* {data.collections[index].title} */}
      </Heading>
    </Link>
  );
}

const COLLECTIONS_QUERY = `#graphql
  query Collections(
    $country: CountryCode
    $language: LanguageCode
    $first: Int
    $last: Int
    $startCursor: String
    $endCursor: String
  ) @inContext(country: $country, language: $language) {
    collections(first: $first, last: $last, before: $startCursor, after: $endCursor) {
      nodes {
        id
        title
        description
        handle
        seo {
          description
          title
        }
        image {
          id
          url
          width
          height
          altText
        }
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
