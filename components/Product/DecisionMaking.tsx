import Image from "next/image";
import Slider from "react-slick";
import leftarrow from "@/public/assets/leftarrow.jpg";
import rightarrow from "@/public/assets/rightarrow.jpg";
import { productPageInfo } from "@/Constants/Product/productPageInfo";
const DecisionMaking = () => {
  function SampleNextArrow(props: any) {
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
  function SamplePrevArrow(props: any) {
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
        />
      </div>
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
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <section className="pt-8 xl:pt-6 pb-2 xl:pb-20 overflow-hidden">
      <div className="container mx-auto">
        <div className="text-center max-w-7xl max-w- mx-auto px-4">
          <h2 className="mb-4 text-4xl md:text-5xl font-bold text-darkOrange mb-2 px-4 xl:px-14 animate__ animate__fadeInDown animate__slow wow animated">
            Data-Driven Decision-Making
          </h2>
          {/* <hr className="h-1.5 w-36 bg-brownCust mb-5 inline-block animate__ animate__fadeInDown animate__slow wow animated" /> */}
          <Slider {...settings} className="chartslider">
            {productPageInfo.DecisionMaking.map((decision, index) => (
              <div key={index}>
                <Image
                  alt=""
                  loading="lazy"
                  width="0"
                  height="0"
                  decoding="async"
                  data-nimg="1"
                  className="w-auto max-w-full mx-auto mb-5"
                  sizes="100vw"
                  src={decision.ImageUrl}
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};
export default DecisionMaking;
