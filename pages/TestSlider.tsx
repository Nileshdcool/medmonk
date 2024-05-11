import React, { Component, RefObject } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


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
      <div>
        <Slider {...settings} ref={this.mainSliderRef} beforeChange={this.beforeSlideChange} asNavFor={this.thumbSliderRef.current} >
          {this.props.slides.map((slide, index) => (
            <div key={index} className='h-10 bg-red-500'>
              <img src={slide.image} alt={slide.alt} />
            </div>
          ))}
        </Slider>
        <div className="thumbnail-slider mt-5">
          <Slider
            {...settings}
            slidesToShow={1}
            slidesToScroll={1}
            focusOnSelect={true}
            ref={this.thumbSliderRef}
            beforeChange={this.beforeSlideChange}
            asNavFor={this.mainSliderRef.current}
             >
            {this.props.slides.map((slide, index) => (
              <div key={index} className='h-10 bg-red-500'>
                <img
                  src={slide.image}
                  alt={slide.alt}
                  className={
                    this.state.currentSlide === index ? 'active' : ''
                  }
                  onClick={() => this.goToSlide(index)}
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    );
  }
}

const slides: Slide[] = [
  { image: 'image1.jpg', alt: 'Slide 1' },
  { image: 'image2.jpg', alt: 'Slide 2' },
  { image: 'image3.jpg', alt: 'Slide 3' }
];

function App() {
  return (
    <div className="App">
      <SlideSlider slides={slides} />
    </div>
  );
}

export default App;
