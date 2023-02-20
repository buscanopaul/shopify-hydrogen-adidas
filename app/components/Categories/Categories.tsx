import {CategoriesItem} from './CategoriesItem';

export function Categories() {
  return (
    <div className="py-8 px-6 md:px-8 lg:px-12 relative">
      <CategoriesItem title="Shoes" />
      <CategoriesItem title="Clothing" />
      <CategoriesItem title="Best Sellers" />
      <CategoriesItem title="New Arrivals" />
    </div>
  );
}
