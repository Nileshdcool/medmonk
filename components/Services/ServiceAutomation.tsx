import Image from "next/image";
import servicesInfo from "@/Constants/Services/ServicesInfo";

const ServiceAutomation = () => {
  return (
    <section className="pt-28 xl:pt-28 pb-16 xl:pb-28 overflow-hidden">
      <div className="container mx-auto">
        <div className="text-center max-w-7xl max-w- mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-darkOrange mb-2 px-4 xl:px-14 animate__ animate__fadeInDown animate__slow wow animated">
            {servicesInfo.Automation.Heading}
          </h2>
          {/* <hr className="h-1.5 w-36 bg-brownCust mb-5 inline-block animate__ animate__fadeInDown animate__slow wow animated" /> */}
          <div className="mt-4 animate__ animate__fadeInDown animate__slow wow animated">
            <p className="mb-5 text-darkBlue">
              {servicesInfo.Automation.Content}
            </p>
          </div>
        </div>
        <div className="container mx-auto px-4 md:px-8 pt-4 text-black automation-boxs">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-col-4 gap-4 md:gap-8 xl:gap-14">
            {servicesInfo.Automation.Cards.map((value, index) => (
              <div
                key={index}
                className="card-box relative bg-white text-center pb-12 pt-32 px-6 mt-32 flex-col border border-gray-200 border-solid shadow-custom rounded-xl animate__animated animate__fadeIn animate__slow wow"
              >
                <div className="bg-white ml-auto text-center rounded-full shadow-custom w-44 h-44 absolute -mt-24 top-0 left-2/4 -translate-x-1/2 py-10">
                  <Image
                    alt=""
                    loading="lazy"
                    width="50"
                    height="50"
                    decoding="async"
                    data-nimg="1"
                    className="h-24 w-auto rounded-lg mx-auto"
                    sizes="100vw"
                    src={value.Image}
                  />
                </div>
                <div className="max-w-60 m-auto text-darkBlue">{value.Description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default ServiceAutomation;
