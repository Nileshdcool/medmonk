import Layout from "../Layout";
import { GetServerSideProps } from "next";
import { getMetaTags } from "@/services/SeoService";
import PageNotFound from "@/components/PageNotFound";
import { MetaProps } from "@/Interfaces/SEO/MetaProps";
import Link from "next/link";
import Image from "next/image";
import banner from "@/public/assets/map.png";
import innovation from "@/public/assets/Home.png";
import automationIco2 from "@/public/assets/automation-ico2.png";
import automationIco3 from "@/public/assets/automation-ico3.png";
import automationIco4 from "@/public/assets/automation-ico4.png";
import quoteIco from "@/public/assets/quote-ico.png";

const Services = ({ metaTags }: { metaTags: MetaProps }) => {
  return (
    <>
      <Layout metaData={metaTags}>
      <section className="hreo-sec bg-center flex bg-no-repeat bg-service-hero bg-cover py-20 items-end lg:items-center">
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

      <section className="pt-10 xl:pt-20 overflow-hidden">
            <div className="container mx-auto">
              <div className="max-w-7xl mx-auto px-4">
                {/* <h2 className="text-4xl md:text-5xl font-bold text-darkOrange mb-2 px-4 xl:px-14 animate__ animate__fadeInDown animate__slow wow animated">Founding Values</h2>
                <hr className="h-1.5 w-36 bg-brownCust mb-5 inline-block animate__ animate__fadeInDown animate__slow wow animated"/> */}
                <div className="px-0 xl:px-14">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="card-box ">
                      <h3 className="text-darkBlue mt-1 mb-2 md:text-2xl text-xl font-extrabold">Assistance Programs</h3>
                      <p className="text-darkBlue">Medmonks co-pay, voucher, and patient assistance programs improve patient access to medications. Delivered electronically and traditionally, our programs allow patients to stay on therapy and prevent disruptions to care regardless of the site of administration.</p>
                    </div>
                    <div className="card-box">
                      <h3 className="text-darkBlue mt-1 mb-2 md:text-2xl text-xl font-extrabold">Patient and Provider Support Services</h3>
                      <p className="text-darkBlue">Our Coordinated Care Management team assists prescribers, patients and pharmacies in navigating all aspects of the prescription journey. From benefits verifications, to prior authorizations, to technical and billing support, our Hub Services team is a one stop shop for every stakeholder.</p>
                    </div>
                    <div className="card-box">
                      <h3 className="text-darkBlue mt-1 mb-2 md:text-2xl text-xl font-extrabold">Distribution and Adherence</h3>
                      <p className="text-darkBlue">Depending on the brands strategy, we use a wide variety of electronic and traditional communication channels, specialized for prescribers, pharmacies, and patients. These keep the conversation flowing with continuous in-coming feedback, while keeping programs top of mind.</p>
                    </div>
                    <div className="card-box">
                      <h3 className="text-darkBlue mt-1 mb-2 md:text-2xl text-xl font-extrabold">Analytics and Custom Reports</h3>
                      <p className="text-darkBlue">Our real-time analytics dashboard gives you instant access to program analytics, tracking and reports. Additionally, you can request as many custom reports as needed on a one-off or periodic basis, on intervals that work for you.</p>
                    </div>
                  </div>
                </div>
                <div className=" text-center mt-20 max-w-6xl m-auto">
                  <h2 className="text-darkBlue mt-1 mb-2 md:text-3xl text-2xl font-extrabold quote-text flex">
                  <Image
                          alt=""
                          loading="lazy"
                          width="50"
                          height="50"
                          decoding="async"
                          data-nimg="1"
                          className="h-8 w-auto rounded-lg ml-4"
                          sizes="100vw"
                          src={quoteIco}
                        />
                    Everybody wins when patients get access to their medications... regardless of price.
                  </h2>
                </div>
              </div>
            </div>
          </section>

      <section className="pt-20 xl:pt-36 pb-2 xl:pb-2 overflow-hidden">
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
                    className="pt-14 xl:pt-20 pb-2 xl:pb-2  max-w-full rounded-lg mx-auto mb-5"
                    sizes="100vw"
                    src={banner}
                />
              </div>
            </div>
          </div>
        </section>

        <section className="pt-28 xl:pt-28 pb-16 xl:pb-28 overflow-hidden">
          <div className="container mx-auto">
            <div className="text-center max-w-7xl max-w- mx-auto px-4">
              <h2 className="text-4xl md:text-5xl font-bold text-darkOrange mb-2 px-4 xl:px-14 animate__ animate__fadeInDown animate__slow wow animated">eBV and ePA Automation</h2>
              <hr className="h-1.5 w-36 bg-brownCust mb-5 inline-block animate__ animate__fadeInDown animate__slow wow animated"/>
              <div className="animate__ animate__fadeInDown animate__slow wow animated">
                <p className="mb-5">We take the hassle out of benefit verification and prior authorization through our automated processes. 
                This ensures swift access to therapy, enhancing the patient experience. For healthcare providers, 
                we seamlessly connect patients to hub services and copay support directly through their e-Rx workflow.</p>
              </div>
            </div>
              <div className="container mx-auto px-4 md:px-8 pt-4 text-black automation-boxs"> 
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-col-4 gap-4 md:gap-8 xl:gap-14">
                    <div className="card-box relative bg-white text-center pb-12 pt-32 px-6 mt-32 flex-col border border-gray-200 border-solid shadow-custom rounded-xl animate__animated animate__fadeIn animate__slow wow">
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
                          src={innovation}
                        />
                      </div>
                      <div className="max-w-60 m-auto">
                          Electronically Receive enrollment form from providers office
                      </div>
                    </div>
                    <div className="card-box relative bg-white text-center pb-12 pt-32 px-6 mt-32 flex-col border border-gray-200 border-solid shadow-custom rounded-xl animate__animated animate__fadeIn animate__slow wow">
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
                          src={automationIco2}
                        />
                      </div>
                      <div className="max-w-60 m-auto">
                        Verify coverage of benefits with the patients primary and secondary payers
                      </div>
                    </div>
                    <div className="card-box relative bg-white text-center pb-12 pt-32 px-6 mt-32 flex-col border border-gray-200 border-solid shadow-custom rounded-xl animate__animated animate__fadeIn animate__slow wow">
                      <div className=" bg-white ml-auto text-center rounded-full shadow-custom w-44 h-44 absolute -mt-24 top-0 left-2/4 -translate-x-1/2 py-10">
                        <Image
                          alt=""
                          loading="lazy"
                          width="50"
                          height="50"
                          decoding="async"
                          data-nimg="1"
                          className="h-24 w-auto rounded-lg mx-auto"
                          sizes="100vw"
                          src={automationIco3}
                        />
                      </div>
                      <div className="max-w-60 m-auto">
                        Initiate automated prior authorization request and obtain approval for the treatment
                      </div>
                    </div>
                    <div className="card-box relative bg-white text-center pb-12 pt-32 px-6 mt-32 flex-col border border-gray-200 border-solid shadow-custom rounded-xl animate__animated animate__fadeIn animate__slow wow">
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
                          src={automationIco4}
                        />
                      </div>
                      <div className="max-w-60 m-auto">
                        Verification and prior authorization completed
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
