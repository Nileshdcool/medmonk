import { PartnershipType } from "@/Interfaces/Home/PartnershipType";
import { OfferToPartnerType } from "@/Interfaces/Home/OfferToPartnerType";

export const partners: PartnershipType[] = [
  {
    containerClass:
      "flex md:flex-row flex-col text-center md:text-left animate__animated animate__fadeInLeft animate__slow wow",
    heading: "EXPERTISE IN RARE DISEASES",
    description: `Medmonk specializes in managing therapies that treat rare
        diseases, bringing unparalleled expertise to the patient
        ecosystem Our team understands the unique challenges these
        conditions present, and we tailor our services to support each
        and every patient.`,
    logo: "/assets/Medmon-Partner1.png",
  },
  {
    containerClass:
      "flex md:flex-row flex-col text-center md:text-left animate__animated animate__fadeInLeft animate__slow wow",
    heading: "EXTENSIVE SPECIALTY PHARMACIES NETWORK",
    description: `Medmonk is connected and contracted with 98% of specialty
    pharmacies, buy & bill facilities, and infusion centers
    nationwide. This extensive network ensures seamless
    collaboration and efficient solutions.`,
    logo: "/assets/Medmon-Partner2.png",
  },
  {
    containerClass:
      "flex md:flex-row flex-col text-center md:text-left animate__animated animate__fadeInLeft animate__slow  wow",
    heading: "EFFORTLESS INTEGRATION",
    description: `Our platform seamlessly integrates with 98% of US pharmacies
    and providers billing terminals. This simplifies the hub,
    co-pay, and patient assistance enrollment process, ensuring a
    smooth experience for all users in both medical and pharmacy
    benefits.`,
    logo: "/assets/Medmon-Partner3.png",
  },
];
export const offersToPartners: OfferToPartnerType[] = [
  {
    heading: "SPEED",
    description: `Medmonks automated system enables instant financial
        assistance and patient enrollment into the hub, all within a
        remarkable timeframe of under three seconds.`,
    logo: "/assets/speed.png",
  },
  {
    heading: "CUSTOMIZATION",
    description: `We tailor support programs for brands, addressing the
        individual needs of conditions, patients, providers, and
        prescribers, with a focus on agility and customization in
        its unique landscape.`,
    logo: "/assets/customization.png",
  },
  {
    heading: "SPEED",
    description: `Medmonks automated system enables instant financial
        assistance and patient enrollment into the hub, all within a
        remarkable timeframe of under three seconds.`,
    logo: "/assets/customization1.png",
  },
  {
    heading: "CUSTOMIZATION",
    description: `We tailor support programs for brands, addressing the
        individual needs of conditions, patients, providers, and
        prescribers, with a focus on agility and customization in
        its unique landscape.`,
    logo: "/assets/customization.png",
  },
];

export const partnershipSliderSettings = {
  dots: true,
  arrows: true,
  slide: ".card-box",
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
