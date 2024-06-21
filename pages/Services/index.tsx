import Layout from "../Layout";
import { GetServerSideProps } from "next";
import { getMetaTags } from "@/services/SeoService";
import PageNotFound from "@/components/PageNotFound";
import { MetaProps } from "@/Interfaces/SEO/MetaProps";
import Link from "next/link";
import Image from "next/image";
import banner from "@/public/assets/map.png";
import innovation from "@/public/assets/Home.png";

const Services = ({ metaTags }: { metaTags: MetaProps }) => {
  return (
    <>
      <Layout metaData={metaTags}>
      <section className="hreo-sec bg-center flex bg-no-repeat bg-tech-hero bg-cover py-20 items-end lg:items-center">
        <div className="container mx-auto justify-between items-center flex px-4">
          <div className="flex -mt-7">
            <div className="w-1/1 lg:w-1/2 pr-4">
              <h1 className="text-4xl md:text-6xl font-black text-darkBlue mb-4 animate__animated animate__fadeInDown animate__slow">
              Our Complete Patient Support Solution
              </h1>

              <hr className=" h-1.5 w-36 bg-brownCust mb-5 hidden sm:inline-block animate__animated animate__fadeInDown animate__slow" />
              <p className="sm:text-lg text-md text-darkBlue mb-8  font-semibold animate__animated animate__fadeInUp animate__slow">
              In the complex landscape of healthcare, patients often struggle with navigating complex systems. Medmonk recognizes that navigating insurance, 
                understanding out-of-pocket costs, and coordinating treatment plans can be overwhelming. Our mission is to shift the focus back to what truly matters  - patient health.
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

      <section className="pt-28 xl:pt-36 pb-2 xl:pb-2 overflow-hidden">
          <div className="container mx-auto">
            <div className="text-center max-w-7xl max-w- mx-auto px-4">
              <h2 className="text-4xl md:text-5xl font-bold text-darkOrange mb-2 px-4 xl:px-14 animate__ animate__fadeInDown animate__slow wow animated">Seamless Integration</h2>
              <hr className="h-1.5 w-36 bg-brownCust mb-5 inline-block animate__ animate__fadeInDown animate__slow wow animated"/>
              <div className="animate__ animate__fadeInDown animate__slow wow animated">
                <p className="mb-5">Our platform seamlessly integrates with <Link href="#" style={{color:"#BA3725",fontWeight:700}}>98% of U.S. pharmacy</Link> and provider billing terminals, 
                ensuring hassle-free enrollment and access to co-pay assistance in less than 3 seconds for both medical and pharmacy benefits. 
                This not only enhances the patient experience but also accelerates the speed of therapy.</p>
                <Image
                    alt=""
                    loading="lazy"
                    width="0"
                    height="0"
                    decoding="async"
                    data-nimg="1"
                    className="pt-28 xl:pt-36 pb-2 xl:pb-2  max-w-full rounded-lg mx-auto mb-5"
                    sizes="100vw"
                    src={banner}
                />
              </div>
            </div>
          </div>
        </section>

        <section className="pt-28 xl:pt-36 pb-16 xl:pb-20 overflow-hidden">
          <div className="container mx-auto">
            <div className="text-center max-w-7xl max-w- mx-auto px-4">
              <h2 className="text-4xl md:text-5xl font-bold text-darkOrange mb-2 px-4 xl:px-14 animate__ animate__fadeInDown animate__slow wow animated">eBV and ePA Automation</h2>
              <hr className="h-1.5 w-36 bg-brownCust mb-5 inline-block animate__ animate__fadeInDown animate__slow wow animated"/>
              <div className="animate__ animate__fadeInDown animate__slow wow animated">
                <p className="mb-5">We take the hassle out of benefit verification and prior authorization through our automated processes. 
                This ensures swift access to therapy, enhancing the patient experience. For healthcare providers, 
                we seamlessly connect patients to hub services and copay support directly through their e-Rx workflow.</p>
              </div>
              <div className="container mx-auto px-4 md:px-8 py-12 text-black hidden"> 
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-col-3 gap-4 lg:gap-8">
                    <div className="flex flex-col border border-gray-200 border-solid bg-gray-50 shadow-2xl rounded-xl overflow-hidden animate__animated animate__fadeIn animate__slow wow">
                        Electronically Receive enrollment form from provider’s office
                    </div>
                    <div className="card-box bg-white text-center ">
                    
                    <div className="card-box bg-white ml-16 text-center rounded-full shadow-2xl">
                      <Image
                        alt=""
                        loading="lazy"
                        width="50"
                        height="50"
                        decoding="async"
                        data-nimg="1"
                        className="h-40 w-auto rounded-lg mx-auto mb-5 p-10"
                        sizes="100vw"
                        src={innovation}
                    />
                    </div>
                    <div className="p-16 pt-32 flex flex-col border border-gray-200 border-solid bg-gray-50 shadow-2xl rounded-xl overflow-hidden animate__animated animate__fadeIn animate__slow wow">
                        Electronically Receive enrollment form from provider’s office
                    </div>
                  </div>
                  </div>
                  
              </div>
            </div>
          </div>
        </section>

      </Layout>
    </>
  );
};
export const getServerSideProps: GetServerSideProps = async (context) => {
  const meta: MetaProps | null = await getMetaTags("ServicesPage");
  return { props: { metaTags: meta } };
};
export default Services;
