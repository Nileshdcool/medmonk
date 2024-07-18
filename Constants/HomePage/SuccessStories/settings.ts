export const settings =(self : any) => {
   return ({
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    afterChange: (current: number) => self.setState({ currentSlide: current })
   });
  };