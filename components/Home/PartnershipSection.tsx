import Image from "next/image";
import Slider from "react-slick";
import {
  offersToPartners,
  partners,
  partnershipSliderSettings,
} from "@/Constants/HomePage/PartnerShip";

const PartnershipSection = () => {
  return (
    <section className="bg-center flex pt-24 pb-20 overflow-hidden">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-darkOrange mb-5 md:mb-8 px-4 md:px-8 xl:px-14 text-center md:text-left animate__animated animate__fadeInDown animate__slow wow">
          Medmonk As Your Partner
        </h2>
        <hr className=" h-1.5 w-36 bg-brownCust mb-8 md:hidden block ml-auto mr-auto" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 xl:gap-8 px-4 xl:px-14">
          <div className="partne-left grid grid-cols-1 gap-10 mb-10 md:mb-0">
            {partners.map((partner, index) => (
              <div key={index} className={partner.containerClass}>
                <div className="w-full md:w-36 flex md:flex-row flex-col md:justify-start justify-center">
                  <Image
                    width="0"
                    height="0"
                    sizes="100vw"
                    className="w-24 h-auto m-auto ml-auto md:ml-0"
                    src={partner.logo}
                    alt=""
                  />
                  <hr className=" h-0.5 w-24 bg-darkBlue mb-4 mt-8 md:hidden ml-auto mr-auto md:ml-0" />
                </div>
                <div className="pl-0 md:pl-5 border-l-0 md:border-l-4 border-darkBlue w-full">
                  <h3 className="text-darkBlue mb-1.5 text-xl md:text-2xl font-extrabold">
                    {partner.heading}
                  </h3>
                  <p className="text-darkBlue">{partner.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="partne-right animate__animated animate__fadeInRight animate__slow wow">
            <div className="card-carsual h-96">
              <Slider {...partnershipSliderSettings} className="pb-6">
                {offersToPartners.map((offer, index) => (
                  <div
                    key={index}
                    className="card-box bg-white shadow-xl rounded-md p-6 text-center min-h-[450px]"
                  >
                    <Image
                      width="0"
                      height="0"
                      sizes="100vw"
                      className="h-28 w-auto max-w-full rounded-lg mx-auto"
                      src={offer.logo}
                      alt=""
                    />
                    <h3 className="text-darkBlue mt-2 md:text-2xl text-xl font-extrabold">
                      {offer.heading}
                    </h3>
                    <hr className="h-1 w-24 bg-brownCust mb-2 mt-1 inline-block" />
                    <p className="text-darkBlue">{offer.description}</p>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default PartnershipSection;
