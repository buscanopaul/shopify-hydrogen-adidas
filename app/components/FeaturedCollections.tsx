import {Image} from '@shopify/hydrogen';
import type {Collection} from '@shopify/hydrogen/storefront-api-types';
import type {SerializeFrom} from '@shopify/remix-oxygen';
import {Grid, Heading, Link, Section, Text} from '~/components';

export function FeaturedCollections({
  collections,
  title = 'Collections',
  ...props
}: {
  collections: SerializeFrom<Collection[]>;
  title?: string;
  [key: string]: any;
}) {
  const haveCollections = collections && collections.length > 0;
  if (!haveCollections) return null;

  const items = collections.filter((item) => item.image).length;

  return (
    <Section {...props} heading={title}>
      <Grid items={items} className="md:grid-cols-2 lg:grid-cols-4 grid-cols-1">
        {collections.map((collection) => {
          // if (!collection?.image) {
          //   return null;
          // }
          return (
            <Link key={collection.id} to={`/collections/${collection.handle}`}>
              <div className="grid gap-4">
                <div className="card-image bg-primary/5 aspect-square !rounded-none !bg-blue-500">
                  {collection?.image && (
                    <Image
                      alt={`Image of ${collection.title}`}
                      data={collection.image}
                      height={600}
                      sizes="(max-width: 32em) 100vw, 33vw"
                      width={600}
                      widths={[400, 500, 600, 700, 800, 900]}
                      loaderOptions={{
                        scale: 2,
                        crop: 'center',
                      }}
                    />
                  )}
                </div>
                <Heading
                  size="copy"
                  className="uppercase text-black text-2xl font-bold"
                >
                  {collection.title}
                </Heading>
                <Text className="pr-10 text-black line-clamp-2">
                  {collection?.image && collection?.image?.altText
                    ? collection?.image.altText
                    : 'Stock up on hats, socks, and more so you can gift 3-stripes to everyone this season'}
                </Text>
                <div className="flex flex-row items-center mb-20">
                  <Heading
                    size="copy"
                    className="uppercase text-black text-2xl font-semibold pt-5"
                  >
                    SHOP NOW
                  </Heading>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="#000"
                    className="w-4 h-4 mt-5 ml-1"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                    />
                  </svg>
                </div>
              </div>
            </Link>
          );
        })}
      </Grid>
    </Section>
  );
}
