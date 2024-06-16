import Layout from "../Layout";
import { getMetaTags } from "@/services/SeoService";
import PageNotFound from "@/components/PageNotFound";
import { MetaProps } from "@/Interfaces/SEO/MetaProps";
import Image from "next/image";
import { GetServerSideProps } from "next";
import Connectivity from "@/public/assets/Connectivity.png";
import business from "@/public/assets/business-computer.png";
import chart from "@/public/assets/chart-min.jpg";
import leftarrow from "@/public/assets/leftarrow.jpg";
import rightarrow from "@/public/assets/rightarrow.jpg";
import coins from "@/public/assets/coins.png";

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Product = ({ metaTags }: { metaTags: MetaProps }) => {
  function SampleNextArrow(props:any) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "" }}
      >
        <Image
            alt=""
            loading="lazy"
            width="0"
            height="0"
            decoding="async"
            data-nimg="1"
            className=" max-w-full mx-auto mb-5"
            sizes="100vw"
            onClick={onClick}
            src={rightarrow}
            style={{ ...style, display: "block", background: "green" }}
        />
      </div>
    );
  }
  
  function SamplePrevArrow(props:any) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "" }}
      >
      <Image
        alt=""
        loading="lazy"
        width="0"
        height="0"
        decoding="async"
        data-nimg="1"
        className=" max-w-full mx-auto mb-5"
        sizes="100vw"
        onClick={onClick}
        src={leftarrow}
        style={{ ...style, display: "block", background: "green" }}
    /></div>
    );
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />

  };

  return (
    <>
      <Layout metaData={metaTags}>
      <section className="hreo-sec bg-center flex bg-no-repeat bg-tech-hero bg-cover py-20 items-end lg:items-center">
      <div className="container mx-auto justify-between items-center flex px-4">
        <div className="flex -mt-7">
          <div className="w-1/1 lg:w-1/2 pr-4">
            <h1 className="text-4xl md:text-6xl font-black text-darkBlue mb-4 animate__animated animate__fadeInDown animate__slow">
            Revolutionizing Patient Care with Innovative Technology.
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
    <div className="container mx-auto px-4 md:px-8 py-12 text-black">
      <div className="grid items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-col-2 gap-4 lg:gap-8">
        <section className="pt-28 xl:pt-6 pb-16 xl:pb-20 flex flex-col overflow-hidden animate__animated animate__fadeIn animate__slow wow"> 
            <div className="container mx-auto">
              <div className="text-left max-w-7xl max-w- mx-auto px-4">
                <h2 className="text-4xl md:text-5xl font-bold text-darkOrange mb-2 pr-4 xl:pr-14 animate__ animate__fadeInDown animate__slow wow animated">Direct Connectivity with Payers and Providers</h2>
                <hr className="h-1.5 w-36 bg-brownCust mb-5 inline-block animate__ animate__fadeInDown animate__slow wow animated"/>
                <div className="animate__ animate__fadeInDown animate__slow wow animated pr-4 xl:pr-14">
                  <p className="mb-5">What sets our technology apart is its direct connectivity with payers and providers. 
                  This unique capability, combined with our compassionate team, ensures a seamless and enhanced patient experience. 
                  Medmonks platform acts as a bridge, facilitating efficient communication and coordination among all stakeholders in the healthcare journey.</p>
                  
                </div>
              </div>
            </div>
          </section>
          <section className="pt-28 xl:pt-6 pb-16 xl:pb-20 flex flex-col overflow-hidden animate__animated animate__fadeIn animate__slow wow"> 
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
                        src={Connectivity}
                    />
                </div>
              </div>
            </div>
          </section>
      </div>
      <div className="grid items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-col-2 gap-4 lg:gap-8">
          <section className="pt-28 xl:pt-6 pb-16 xl:pb-20 flex flex-col overflow-hidden animate__animated animate__fadeIn animate__slow wow"> 
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
          <section className="pt-28 xl:pt-6 pb-16 xl:pb-20 flex flex-col overflow-hidden animate__animated animate__fadeIn animate__slow wow"> 
            <div className="container mx-auto">
              <div className="text-left max-w-7xl max-w- mx-auto px-4">
                <h2 className="text-4xl md:text-5xl font-bold text-darkOrange mb-2 pr-4 xl:pr-14 animate__ animate__fadeInDown animate__slow wow animated">Advanced Algorithms and Machine Learning</h2>
                <hr className="h-1.5 w-36 bg-brownCust mb-5 inline-block animate__ animate__fadeInDown animate__slow wow animated"/>
                <div className="animate__ animate__fadeInDown animate__slow wow animated pr-4 xl:pr-14">
                  <p className="mb-5">Our platform leverages advanced algorithms and machine learning techniques to provide actionable insights. This not only optimizes program performance but also maximizes the impact on patient outcomes.</p>
                  
                </div>
              </div>
            </div>
          </section>
      </div>
    </div>

    <section className="pt-8 xl:pt-6 pb-16 xl:pb-20 overflow-hidden">
          <div className="container mx-auto">
            <div className="text-center max-w-7xl max-w- mx-auto px-4">
              <h2 className="text-4xl md:text-5xl font-bold text-darkOrange mb-2 px-4 xl:px-14 animate__ animate__fadeInDown animate__slow wow animated">Data-Driven Decision-Making</h2>
              <hr className="h-1.5 w-36 bg-brownCust mb-5 inline-block animate__ animate__fadeInDown animate__slow wow animated"/>
              <Slider {...settings} className="chartslider">
                  <div>
                    <Image
                          alt=""
                          loading="lazy"
                          width="0"
                          height="0"
                          decoding="async"
                          data-nimg="1"
                          className=" max-w-full mx-auto mb-5"
                          sizes="100vw"
                          src={chart}
                      />
                    </div>
                  <div>
                    <Image
                          alt=""
                          loading="lazy"
                          width="0"
                          height="0"
                          decoding="async"
                          data-nimg="1"
                          className=" max-w-full mx-auto mb-5"
                          sizes="100vw"
                          src={chart}
                      />
                  </div>
                  <div>
                    <Image
                          alt=""
                          loading="lazy"
                          width="0"
                          height="0"
                          decoding="async"
                          data-nimg="1"
                          className=" max-w-full mx-auto mb-5"
                          sizes="100vw"
                          src={chart}
                      />
                  </div>                                    
              </Slider>
            </div>
          </div>
    </section>

    <div className="container mx-auto px-4 md:px-8 py-12 text-black">
      <div className="grid items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-col-2 gap-4 lg:gap-8">
        <section className="pt-28 xl:pt-6 pb-16 xl:pb-20 flex flex-col overflow-hidden animate__animated animate__fadeIn animate__slow wow"> 
            <div className="container mx-auto">
              <div className="text-left max-w-7xl max-w- mx-auto px-4">
                <h2 className="text-4xl md:text-5xl font-bold text-darkOrange mb-2 pr-4 xl:pr-14 animate__ animate__fadeInDown animate__slow wow animated">Cost Reduction</h2>
                <hr className="h-1.5 w-36 bg-brownCust mb-5 inline-block animate__ animate__fadeInDown animate__slow wow animated"/>
                <div className="animate__ animate__fadeInDown animate__slow wow animated pr-4 xl:pr-14">
                  <p className="mb-5">Medmonks technology-based solution is significantly more cost-effective than traditional manual methods. Pharmaceutical brands benefit from an efficient way to offer hub services and co-pay assistance to their patients, ensuring accessibility without compromising on quality.</p>
                  
                </div>
              </div>
            </div>
          </section>
          <section className="pt-28 xl:pt-6 pb-16 xl:pb-20 flex flex-col overflow-hidden animate__animated animate__fadeIn animate__slow wow"> 
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
                        src={coins}
                    />
                </div>
              </div>
            </div>
          </section>
      </div>
      
    </div>

      </Layout>
    </>
  );
};
export const getServerSideProps: GetServerSideProps = async (context) => {
  const meta: MetaProps | null = await getMetaTags("ProductPage");
  return { props: { metaTags: meta } };
};
export default Product;
