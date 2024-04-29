import { SuccessStoryType } from "@/Interfaces/Home/SuccessStoryType";

export const successStories: SuccessStoryType[] =
[
    {
        heading: `Lorem Ipsum is simply dummy text of the printing and
        typesetting industry. Lorem Ipsum has been the industrys
        standard dummy text`,
        description: `Lorem Ipsum is simply dummy text of the printing and
        typesetting industry. Lorem Ipsum has been the industrys
        standard dummy text ever since the 1500s Lorem Ipsum is
        simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industrys standard
        dummy text ever since the 1500s`,
        image:"/assets/success-stories1.jpg"
    },
    {
        heading: `Lorem Ipsum is simply dummy text of the printing and
        typesetting industry. Lorem Ipsum has been the industrys
        standard dummy text`,
        description: `Lorem Ipsum is simply dummy text of the printing and
        typesetting industry. Lorem Ipsum has been the industrys
        standard dummy text ever since the 1500s Lorem Ipsum is
        simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industrys standard
        dummy text ever since the 1500s`,
        image: "/assets/success-stories2.jpg"
    },
    {
        heading:`Lorem Ipsum is simply dummy text of the printing and
        typesetting industry. Lorem Ipsum has been the industrys
        standard dummy text`,
        description: `Lorem Ipsum is simply dummy text of the printing and
        typesetting industry. Lorem Ipsum has been the industrys
        standard dummy text ever since the 1500s Lorem Ipsum is
        simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industrys standard
        dummy text ever since the 1500s`,
        image: "/assets/success-stories1.jpg"
    }
];

export const settingsSuccessStories = {
  dots: false,
  arrows: false,
  slidesToShow: 2,
  autoplay: true,
  centerMode: false,
  adaptiveHeight: true,
  centerPadding: "0",

  responsive: [
    {
      breakpoint: 768,
      settings: {},
    },
    {
      breakpoint: 480,
      settings: {},
    },
  ],
};
export const settingsSuccessStoriesNav = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    focusOnSelect: true,
  };