import { LogoTabType } from "@/Interfaces/Home/LogoTabType";

export const pharmaceuticalPartners : string[][][] = [
  [
    [
      "/assets/logo1.png",
      "/assets/logo2.png",
      "/assets/logo3.png",
      "/assets/logo4.png",
      "/assets/logo5.png",
      "/assets/logo6.png",
    ],
    [
      "/assets/logo7.png",
      "/assets/logo8.png",
      "/assets/logo9.png",
      "/assets/logo10.png",
      "/assets/logo11.png",
      "/assets/logo2.png",
    ],
  ],
  [
    [
      "/assets/logo1.png",
      "/assets/logo2.png",
      "/assets/logo3.png",
      "/assets/logo4.png",
      "/assets/logo5.png",
      "/assets/logo6.png",
    ],
    [
      "/assets/logo7.png",
      "/assets/logo8.png",
      "/assets/logo9.png",
      "/assets/logo10.png",
      "/assets/logo11.png",
      "/assets/logo2.png",
    ],
  ],
];
export const specialtyPharmacyPartners = [
  [
    [
      "/assets/logo1-spp.png",
      "/assets/logo2-spp.png",
      "/assets/logo3-spp.png",
      "/assets/logo4-spp.png",
      "/assets/logo5-spp.png",
      "/assets/logo6-spp.png",
    ],
    [
      "/assets/logo7-spp.png",
      "/assets/logo8-spp.png",
      "/assets/logo9-spp.png",
      "/assets/logo10-spp.png",
      "/assets/logo11-spp.png",
      "/assets/logo12-spp.png",
    ],
    [
      "/assets/logo13-spp.png",
      "/assets/logo14-spp.png",
      "/assets/logo15-spp.png",
      "/assets/logo16-spp.png",
      "/assets/logo17-spp.png",
      "/assets/logo18-spp.png",
    ],
  ],
  [
    [
      "/assets/logo19-spp.png",
      "/assets/logo20-spp.png",
      "/assets/logo3-spp.png",
      "/assets/logo21-spp.png",
      "/assets/logo22-spp.png",
      "/assets/logo23-spp.png",
    ],
    [
      "/assets/logo24-spp.png",
      "/assets/logo25-spp.png",
      "/assets/logo26-spp.png",
      "/assets/logo27-spp.png",
      "/assets/logo28-spp.png",
      "/assets/logo29-spp.png",
    ],
    [
      "/assets/logo30-spp.png",
      "/assets/logo31-spp.png",
      "/assets/logo32-spp.png",
      "/assets/logo33-spp.png",
      "/assets/logo34-spp.png",
      "/assets/logo35-spp.png",
    ],
  ],
  [
    [
      "/assets/logo37-spp.png",
      "/assets/logo38-spp.png",
      "/assets/logo39-spp.png",
      "/assets/logo40-spp.png",
      "/assets/logo41-spp.png",
      "/assets/logo42-spp.png",
    ],
    [
      "/assets/logo43-spp.png",
      "/assets/logo44-spp.png",
      "/assets/logo45-spp.png",
      "/assets/logo46-spp.png",
      "/assets/logo47-spp.png",
      "/assets/logo48-spp.png",
    ],
  ],
];
export const logoTabs: LogoTabType[] = [
  {
    name: "Pharmaceutical Partners",
    logos: pharmaceuticalPartners,
  },
  {
    name: "Specialty Pharmacy Partners",
    logos: specialtyPharmacyPartners,
  },
];
export const settingsLogo = {
    dots: true,
    arrows: true,
    slidesToShow: 1,
    autoplay: false,
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