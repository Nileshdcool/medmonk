import Link from "next/link";
import Image from "next/image";
import banner from "@/public/assets/map.png";

const ServiceIntegration = () => {
  return (
    <section className="pt-20 xl:pt-36 pb-2 xl:pb-2 overflow-hidden">
      <div className="container mx-auto">
        <div className="text-center max-w-7xl max-w- mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-darkOrange mb-2 px-4 xl:px-14 animate__ animate__fadeInDown animate__slow wow animated">
            Seamless Integration
          </h2>
          <hr className="h-1.5 w-36 bg-brownCust mb-5 inline-block animate__ animate__fadeInDown animate__slow wow animated" />
          <div className="animate__ animate__fadeInDown animate__slow wow animated">
            <p className="mb-5 text-darkBlue">
              Our platform seamlessly integrates with
              <Link href="#" style={{ color: "#BA3725", fontWeight: 700 }}>
                &nbsp;98% of U.S. pharmacy&nbsp;
              </Link>
              and provider billing terminals, ensuring hassle-free enrollment and access to copay assistance in less than 3 seconds for both medical and pharmacy benefits. This not only enhances the patient experience but also accelerates the speed of therapy.
            </p>
            <Image
              alt=""
              loading="lazy"
              width="0"
              height="0"
              decoding="async"
              data-nimg="1"
              className="pt-14 xl:pt-20 pb-2 xl:pb-2  max-w-full rounded-lg mx-auto mb-5"
              sizes="100vw"
              src={banner}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default ServiceIntegration;
