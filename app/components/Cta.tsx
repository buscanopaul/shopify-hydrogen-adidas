export function Cta() {
  return (
    <div className="py-8 px-6 md:px-8 lg:px-12 relative bg-black">
      <div className="md:flex items-center mb-14">
        <h2 className="uppercase font-bold text-3xl md:mb-0 mb-10">
          Join our Adiclub & Get
          <span className="md:text-white text-blue-500">15% off</span>
        </h2>
        <a href="#" className="bg-white py-4 px-14 ml-20">
          <span className="text-black uppercase font-bold">
            Sign up for free
          </span>
        </a>
      </div>
      <p className="mb-7 text-gray-600">
        By clicking the "sign up" button. i confirm I am over 13 years of age.
      </p>
      <p className="text-gray-600 md:pr-20">
        sign me up for the adidas emails, featuring exclusive offers, latest
        product info, news about upcoming events and more. Please see your terms
        and conditions and privacy policy for more details. selected products
        may be excluded from the 15% promotion.
      </p>
    </div>
  );
}
