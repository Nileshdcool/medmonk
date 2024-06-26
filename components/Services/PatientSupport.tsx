import Image from "next/image";
import quoteIco from "@/public/assets/quote-ico.png";
import servicesInfo from "@/Constants/Services/ServicesInfo";

const PatientSupport = () => {
  return (
    <section className="pt-10 xl:pt-20 overflow-hidden">
      <div className="container mx-auto">
        <div className="max-w-7xl mx-auto px-4">
          {/* <h2 className="text-4xl md:text-5xl font-bold text-darkOrange mb-2 px-4 xl:px-14 animate__ animate__fadeInDown animate__slow wow animated">Founding Values</h2>
                <hr className="h-1.5 w-36 bg-brownCust mb-5 inline-block animate__ animate__fadeInDown animate__slow wow animated"/> */}
          <div className="px-0 xl:px-14">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {servicesInfo.PatientSupport.Types.map((support, index) => (
                <div key={index} className="card-box ">
                  <h3 className="text-darkBlue mt-1 mb-2 md:text-2xl text-xl font-extrabold">
                    {support.Heading}
                  </h3>
                  <p className="text-darkBlue">{support.Description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className=" text-center mt-20 max-w-6xl m-auto">
            <h2 className="text-darkBlue mt-1 mb-2 md:text-2xl text-1xl font-extrabold quote-text flex justify-center">
              <Image
                alt=""
                loading="lazy"
                width="50"
                height="50"
                decoding="async"
                data-nimg="1"
                className="h-8 w-auto rounded-lg mr-4"
                sizes="100vw"
                src={quoteIco}
              />
              {servicesInfo.PatientSupport.Quote}
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};
export default PatientSupport;
