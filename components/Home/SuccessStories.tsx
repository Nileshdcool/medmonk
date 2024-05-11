// import React from "react";
// import Image from "next/image";
// import Slider from "react-slick";
// import {
//   settingsSuccessStories,
//   settingsSuccessStoriesNav,
//   successStories,
// } from "@/Constants/HomePage/SuccessStory";

// const SuccessStories = () => {
//   return (
//     <section className="bg-center flex pt-24 pb-20 overflow-hidden">
//       <div className="container mx-auto">
//         <div className="text-center max-w-3xl mx-auto mb-2 md:mb-12">
//           <h2 className="text-4xl md:text-5xl font-bold text-darkOrange mb-2 px-4 xl:px-14 animate__animated animate__fadeInDown animate__slow wow">
//             Success Stories
//           </h2>
//           <hr className=" h-1.5 w-36 bg-brownCust mb-5 inline-block animate__animated animate__fadeInDown animate__slow wow" />
//         </div>
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 xl:gap-3 px-4 xl:px-14 items-center">
//           <div className="partne-left grid grid-cols-1 gap-10 animate__animated animate__fadeInLeft animate__slow wow">
//             <Slider {...settingsSuccessStoriesNav} className="pb-6 text-darkBlue">
//               {successStories.map((story, index) => (
//                 <div key={index} className="ssNav">
//                   <div className="pl-0 md:pl-5 pr-0 lg:pr-20 w-full">
//                     <h3 className="text-darkBlue mb-4 text-2xl font-bold">
//                       {story.heading}
//                     </h3>
//                     <p className="pl-4 border-l-4 border-brownCust">
//                       {story.description}
//                     </p>
//                   </div>
//                 </div>
//               ))}
//             </Slider>
//           </div>
//           <div className="partne-right ml-4 md:ml-0">
//             <div className="card-carsual ssSkider animate__animated animate__fadeInRight animate__slow wow">
//               <Slider {...settingsSuccessStories} className="pb-6">
//                 {successStories.map((story, index) => (
//                   <div key={index} className="card-box bg-white rounded-md">
//                     <Image
//                       width="0"
//                       height="0"
//                       sizes="100vw"
//                       className="max-w-full w-auto h-auto rounded-lg mx-auto"
//                       src={story.image}
//                       alt=""
//                     />
//                   </div>
//                 ))}
//               </Slider>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default SuccessStories;


import React, { Component, RefObject } from 'react';
import Image from "next/image";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {
  //settingsSuccessStories,
  //settingsSuccessStoriesNav,
  successStories,
} from "@/Constants/HomePage/SuccessStory";


interface Slide {
  image: string;
  alt: string;
}

interface SlideSliderProps {
  slides: Slide[];
}

interface SlideSliderState {
  currentSlide: number;
}


class SlideSlider extends Component<SlideSliderProps, SlideSliderState> {
  private mainSliderRef: RefObject<Slider>;
  private thumbSliderRef: RefObject<Slider>;

  constructor(props: SlideSliderProps) {
    super(props);
    this.state = {
      currentSlide: 0
    };
    this.mainSliderRef = React.createRef<Slider>();
    this.thumbSliderRef = React.createRef<Slider>();
  }

  goToSlide = (index: number) => {
    if (this.mainSliderRef.current && this.thumbSliderRef.current) {
      this.mainSliderRef.current.slickGoTo(index);
      this.thumbSliderRef.current.slickGoTo(index);
    }
  };

  beforeSlideChange = (oldIndex: number, newIndex: number) => {
    this.setState({ currentSlide: newIndex });
  };

  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      afterChange: (current: number) => this.setState({ currentSlide: current })
    };

    return (
      <>
      <section className="bg-center flex pt-24 pb-20 overflow-hidden">
        <div className="container mx-auto">
          <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto'>
            <div className="text-center max-w-3xl mx-auto mb-2 md:mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-darkOrange mb-2 px-4 xl:px-14 animate__animated animate__fadeInDown animate__slow wow">
                Success Stories
              </h2>
              <hr className=" h-1.5 w-36 bg-brownCust mb-5 inline-block animate__animated animate__fadeInDown animate__slow wow" />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-3 items-center">
              <div className="partne-left arrow-style grid grid-cols-1 gap-10 animate__animated animate__fadeInLeft animate__slow wow">
              <Slider {...settings} ref={this.mainSliderRef} beforeChange={this.beforeSlideChange} asNavFor={this.thumbSliderRef.current} className=" pb-14 text-darkBlue">
                  {successStories.map((story, index) => (
                      <div key={index} className="ssNav">
                        <div className="pl-5 md:pl-5 pr-0 lg:pr-20 w-full">
                          <h3 className="text-darkBlue mb-4 text-2xl font-bold">
                            {story.heading}
                          </h3>
                          <p className="pl-4 border-l-4 border-brownCust">
                            {story.description}
                          </p>
                        </div>
                      </div>
                    ))}
              
              </Slider>
              </div>
              <div className="partne-right ml-4 md:ml-0">
                <div className="card-carsual ssSkider animate__animated animate__fadeInRight animate__slow wow">
                <Slider
                  {...settings}
                  slidesToShow={2}
                  arrows={false}
                  slidesToScroll={1}
                  focusOnSelect={true}
                  ref={this.thumbSliderRef}
                  beforeChange={this.beforeSlideChange}
                  asNavFor={this.mainSliderRef.current}
                  className="pb-6"
                  >
                  
                      {successStories.map((story, index) => (
                          <div key={index} className="card-box bg-white rounded-md">
                            <Image
                              width="0"
                              height="0"
                              sizes="100vw"
                              className="max-w-full w-auto h-auto rounded-lg mx-auto"
                              src={story.image}
                              alt=""
                            />
                          </div>
                        ))}
                </Slider>
                </div>
                
              </div>
            </div>
          </div>
        </div>
        </section>
      </>
    );
  }
}

const slides: Slide[] = [
  { image: 'image1.jpg', alt: 'Slide 1' },
  { image: 'image2.jpg', alt: 'Slide 2' },
  { image: 'image3.jpg', alt: 'Slide 3' }
];

function SuccessStories() {
  return (
    <div className="App">
      <SlideSlider slides={slides} />
    </div>
  );
}

export default SuccessStories;
