import { SuccessStoryType } from "@/Interfaces/Home/SuccessStoryType";

export const successStories: SuccessStoryType[] =
[
    {
        heading: `Patient Success Story - Navigating Insurance with Ease`,
        description: `The complexity of insurance approvals for my life-saving medication was daunting until Medmonk's support team stepped in. They handled everything swiftly, turning a stressful process into a smooth and quick resolution. Kudos to the Medmonk team for their dedication and passion in supporting patients like me through challenging times.`,
        image:"/assets/success-stories1.jpg"
    },
    {
        heading: `Brand Manager - Expanding Access to Rare Disease Treatments`,
        description: `Medmonk's patient financial support program has been instrumental in enhancing access to our rare disease medication directly at the point of care. This initiative has significantly improved our ability to reach patients quickly and efficiently, ensuring they receive the necessary treatments immediately. Thanks to Medmonk, we can support more patients and truly make a difference in their lives.`,
        image: "/assets/success-stories2.jpg"
    },
    {
        heading:` Director Market Access - Seven Years of Strategic Partnership`,
        description: `For seven years, I have valued our partnership with Medmonk. They have provided completely customized solutions tailored specifically for my brand. Their data-driven approach has streamlined our market strategy and significantly enhanced our program effectiveness. Medmonk’s nimble approach to patient support has offered my brand a true partnership, adapting and responding to our needs with precision and care.`,
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