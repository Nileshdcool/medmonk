import { productPageInfo } from "@/Constants/Product/productPageInfo";

const ProductHero = () => {
  return (
    <section className="hreo-sec bg-center flex bg-no-repeat bg-tech-hero bg-cover pt-20 md:pb-20 pb-4 items-end lg:items-center">
      <div className="container mx-auto justify-between items-center flex px-4">
        <div className="flex -mt-7">
          <div className="w-1/1 lg:w-1/2 pr-18">
            <h1 className="text-4xl md:text-6xl font-black text-darkBlue mb-4 animate__animated animate__fadeInDown animate__slow">
              {productPageInfo.Hero.Heading}
            </h1>
            {/* <hr className=" h-1.5 w-36 bg-brownCust mb-5 hidden sm:inline-block animate__animated animate__fadeInDown animate__slow" /> */}
            <p className="mt-4 sm:text-lg text-md text-darkBlue mb-8 pr-0 xl:pr-24 font-semibold animate__animated animate__fadeInUp animate__slow">
              {productPageInfo.Hero.Content}
            </p>
            <button
              type="button"
              className="hidden animate__animated animate__fadeInUp animate__slow text-white bg-gradient-to-b from-brownCust to-orangeCust hover:bg-gradient-to-br focus:outline-none font-medium text-md px-5 py-2.5 text-center me-2 mb-2 rounded-full animate__animated animate__fadeInDown"
            >
              Watch Video
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ProductHero;
