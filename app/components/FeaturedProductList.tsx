import {Link} from '@remix-run/react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import data from '../data/newArrivals.json';

export function FeaturedProductList() {
  var settings = {
    infinite: false,
    arrows: false,
    dots: true,
    autoplay: false,
    speed: 1100,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <section className="timeline-carousel px-6 md:px-8 lg:px-12">
        <div className="flex md:flex-row flex-col items-start justify-between mb-9">
          <h2 className="text-2xl font-bold uppercase text-black mb-5">
            Featured Products
          </h2>
          <Link
            to={`/products/the-full-stack`}
            className="flex items-start md:justify-center"
          >
            <h2 className="text-2xl font-bold uppercase text-black">
              View All
            </h2>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="#000"
              className="w-3 h-3 pt-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
              />
            </svg>
          </Link>
        </div>
        <div
          className="timeline-carousel__item-wrapper"
          data-js="timeline-carousel"
        >
          <Slider {...settings}>
            <div className="timeline-carousel__item">
              <div className="timeline-carousel__image">
                <Link to={`/products`}>
                  <div className="media-wrapper media-wrapper--overlay bg-[#E7EFF9] bg-[url('https://cdn.shopify.com/s/files/1/0077/7741/9322/products/501f90ce463c492b8ba9ae0400f5b19b_9366_1024x1024.jpg?v=1669649362')] bg-cover bg-center bg-no-repeat"></div>
                </Link>
              </div>
              <div className="timeline-carousel__item-inner mr-8">
                <Link
                  to={`/products`}
                  className="flex items-center justify-between text-black font-bold text-xl pt-5 mb-1"
                >
                  <h4>{data.newArrivals[0].title}</h4>
                  <h4>$ {data.newArrivals[0].price}</h4>
                </Link>
                <p className="text-gray-400">Men's Original</p>
              </div>
            </div>

            <div className="timeline-carousel__item">
              <div className="timeline-carousel__image">
                <div className="media-wrapper media-wrapper--overlay bg-[#E7EFF9] bg-[url('https://sneakernews.com/wp-content/uploads/2022/01/adidas-trae-young-1-cool-grey-GY0302-3.jpg')] bg-cover bg-center"></div>
              </div>
              <div className="timeline-carousel__item-inner pr-8">
                <div className="flex items-center justify-between text-black font-bold text-xl pt-5 mb-1">
                  <h4>Forum 84 Camp Low Shoes</h4>
                  <h4>$ 120</h4>
                </div>
                <p className="text-gray-400">Men's Original</p>
              </div>
            </div>

            <div className="timeline-carousel__item">
              <div className="timeline-carousel__image">
                <div className="media-wrapper media-wrapper--overlay bg-[#E7EFF9] bg-[url('https://sneakernews.com/wp-content/uploads/2023/02/adidas-ultraboost-valentines-day-2023-HQ3857-3.jpg')] bg-cover bg-center"></div>
              </div>
              <div className="timeline-carousel__item-inner pr-8">
                <div className="flex items-center justify-between text-black font-bold text-xl pt-5 mb-1">
                  <h4>Forum 84 Camp Low Shoes</h4>
                  <h4>$ 120</h4>
                </div>
                <p className="text-gray-400">Men's Original</p>
              </div>
            </div>

            <div className="timeline-carousel__item">
              <div className="timeline-carousel__image">
                <div className="media-wrapper media-wrapper--overlay bg-[#E7EFF9] bg-[url('https://sneakernews.com/wp-content/uploads/2023/02/adidas-ultraboost-valentines-day-2023-HQ3857-3.jpg')] bg-cover bg-center"></div>
              </div>
              <div className="timeline-carousel__item-inner pr-8">
                <div className="flex items-center justify-between text-black font-bold text-xl pt-5 mb-1">
                  <h4>Forum 84 Camp Low Shoes</h4>
                  <h4>$ 120</h4>
                </div>
                <p className="text-gray-400">Men's Original</p>
              </div>
            </div>

            <div className="timeline-carousel__item">
              <div className="timeline-carousel__image">
                <div className="media-wrapper media-wrapper--overlay bg-[#E7EFF9] bg-[url('https://sneakernews.com/wp-content/uploads/2023/02/adidas-ultraboost-valentines-day-2023-HQ3857-3.jpg')] bg-cover bg-center"></div>
              </div>
              <div className="timeline-carousel__item-inner pr-8">
                <div className="flex items-center justify-between text-black font-bold text-xl pt-5 mb-1">
                  <h4>Forum 84 Camp Low Shoes</h4>
                  <h4>$ 120</h4>
                </div>
                <p className="text-gray-400">Men's Original</p>
              </div>
            </div>

            <div className="timeline-carousel__item">
              <div className="timeline-carousel__image">
                <div className="media-wrapper media-wrapper--overlay bg-[#E7EFF9] bg-[url('https://sneakernews.com/wp-content/uploads/2023/02/adidas-ultraboost-valentines-day-2023-HQ3857-3.jpg')] bg-cover bg-center"></div>
              </div>
              <div className="timeline-carousel__item-inner pr-8">
                <div className="flex items-center justify-between text-black font-bold text-xl pt-5 mb-1">
                  <h4>Forum 84 Camp Low Shoes</h4>
                  <h4>$ 120</h4>
                </div>
                <p className="text-gray-400">Men's Original</p>
              </div>
            </div>
          </Slider>
        </div>
      </section>
    </>
  );
}
