import type {Product} from '@shopify/hydrogen/storefront-api-types';
import type {SerializeFrom} from '@shopify/remix-oxygen';
import {ProductCard, Section} from '~/components';

const mockProducts = new Array(12).fill('');

export function ProductSwimlane({
  title = 'Featured Products',
  products = mockProducts,
  count = 3,
  ...props
}: {
  title?: string;
  products?: SerializeFrom<Product[]>;
  count?: number;
}) {
  return (
    <Section heading={title} padding="y" {...props}>
      <div className="swimlane md:pb-8 md:scroll-px-8 lg:scroll-px-12 md:px-8 lg:px-12 overflow-x-scroll scroll-smooth group-horizontal">
        {products.map((product) => (
          <ProductCard
            product={product}
            key={product.id}
            className="snap-start w-80"
          />
        ))}
      </div>
    </Section>
  );
}
