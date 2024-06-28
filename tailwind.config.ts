import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
          "home-hero":"url(/assets/home-hero.jpg)",
          "tech-hero":"url(/assets/tech-hero-min.png)",
          "service-hero":"url(/assets/service-banner.jpg)",
          "get-started":"url(/assets/get-started-img.jpg)",
          "contact-hero":"url(/assets/contact-banner.jpg)",
      },
      colors: {
        'campaign-background': 'var(--campaign-background)',
        'white': '#ffffff',
        'lightGray':'#636569',
        'hBlack':'#222222',
        'darkBlue': "#003A5D",
        'darkOrange': "#BA3725",
        'headerBG' : "#D4D4D4",
        'LGray' : "rgba(212,212,212,0.74)",
        'brownCust' : "#BB3300",
        'orangeCust' : "#FF6C34"
    },
      fontFamily: {
        openSans: ['"Open Sans"', "sans-serif"],  
      },
      boxShadow: {
        'custom': 'inset 3px 3px 6px 0 rgba(0,0,0,0.20), 15px 15px 15px 0 rgba(0,0,0,0.20)',
                    
      },
  },
  },
  plugins: [],
};
export default config;
