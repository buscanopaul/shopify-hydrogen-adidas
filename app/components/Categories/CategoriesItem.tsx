import {Link} from '@remix-run/react';

type Props = {
  title: string;
  bg: string;
};

export function CategoriesItem({title, bg}: Props) {
  return (
    <Link to={`/collections/`}>
      <div className="flex items-center justify-between text-black mb-10 pb-7 border-b border-black hover:text-gray-400 group">
        <img
          src="https://legendary-digital-network-assets.s3.amazonaws.com/wp-content/uploads/2022/04/19103627/adidas-mms-shoes.png"
          alt="Shoes"
          className="absolute w-80 h-80 object-cover top-1/2 right-10 transform -translate-x-1/2 -translate-y-1/2 hidden lg:group-hover:block transition"
        />
        <h1 className="lg:text-7xl text-4xl uppercase font-bold transition">
          {title}
        </h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="#000"
          className="lg:w-20 w-14"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
          />
        </svg>
      </div>
    </Link>
  );
}
