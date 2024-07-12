import Image from "next/image";
import coins from "@/public/assets/cost-reduction-business-concept-finance.jpg";
import { productPageInfo } from "@/Constants/Product/productPageInfo";
const CostReduction = () => {
  return (
    <div className="container mx-auto px-4 md:px-8 py-12 text-black">
      <div className="grid items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-col-2 gap-4 lg:gap-8">
        <section className="pt-2 xl:pt-6 pb-2 xl:pb-20 flex flex-col overflow-hidden animate__animated animate__fadeIn animate__slow wow">
          <div className="container mx-auto">
            <div className="text-left max-w-7xl max-w- mx-auto px-4">
              <h2 className="text-4xl md:text-5xl font-bold text-darkOrange mb-2 pr-4 xl:pr-14 animate__ animate__fadeInDown animate__slow wow animated">
                {productPageInfo.CostReduction.Heading}
              </h2>
              <hr className="h-1.5 w-36 bg-brownCust mb-5 inline-block animate__ animate__fadeInDown animate__slow wow animated" />
              <div className="animate__ animate__fadeInDown animate__slow wow animated pr-4 xl:pr-14">
                <p className="mb-5">{productPageInfo.CostReduction.Content}</p>
              </div>
            </div>
          </div>
        </section>
        <section className="sm:order-1 -order-1 pt-2 xl:pt-6 pb-2 xl:pb-20 flex flex-col overflow-hidden animate__animated animate__fadeIn animate__slow wow">
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
                  className=" max-w-full mx-auto md:mb-5 mb-0"
                  sizes="100vw"
                  src={coins}
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CostReduction;
