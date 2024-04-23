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
          "get-started":"url(/assets/get-started-img.jpg)"
      },
      colors: {
        'campaign-background': 'var(--campaign-background)',
        'white': '#ffffff',
        'lightGray':'#636569',
        'hBlack':'#222222',
        'darkBlue': "#003A5D",
        'darkOrange': "#BA3725",
        'headerBG' : "#D4D4D4",
        'brownCust' : "#BB3300",
        'orangeCust' : "#FF6C34"
    },
      fontFamily: {
        openSans: ['"Open Sans"', "sans-serif"],  
      }
  },
  },
  plugins: [],
};
export default config;
