import Image from "next/image";
import business from "@/public/assets/business-computer.png";
import { productPageInfo } from "@/Constants/Product/productPageInfo";
const ProductAdvancement = () => {
  return (
    <div className="grid items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-col-2 gap-4 lg:gap-8">
      <section className="pt-2 xl:pt-6 pb-2 xl:pb-20 flex flex-col overflow-hidden animate__animated animate__fadeIn animate__slow wow">
        <div className="container mx-auto">
          <div className="text-center max-w-7xl max-w- mx-auto px-4">
            <div className="animate__ animate__fadeInDown animate__slow wow animated">
              <Image
                alt=""
                loading="lazy"
                width="0"
                height="0"
                decoding="async"
                data-nimg="1"
                className=" max-w-full mx-auto mb-5"
                sizes="100vw"
                src={business}
              />
            </div>
          </div>
        </div>
      </section>
      <section className="pt-2 xl:pt-6 pb-2 xl:pb-20 flex flex-col overflow-hidden animate__animated animate__fadeIn animate__slow wow">
        <div className="container mx-auto">
          <div className="text-left max-w-7xl max-w- mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold text-darkOrange mb-2 pr-4 xl:pr-14 animate__ animate__fadeInDown animate__slow wow animated">
              {productPageInfo.Advancement.Heading}
            </h2>
            <hr className="h-1.5 w-36 bg-brownCust mb-5 inline-block animate__ animate__fadeInDown animate__slow wow animated" />
            <div className="animate__ animate__fadeInDown animate__slow wow animated pr-4 xl:pr-14">
              <p className="mb-5">{productPageInfo.Advancement.Content}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default ProductAdvancement;
