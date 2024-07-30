// components/LogoSlider.tsx
import Partner from "./Partner";
import Slider from "react-slick";
import TabButton from "./TabButton";
import React, { useState } from "react";
import { logoTabs, settingsLogo } from "@/Constants/HomePage/Logos";

const LogoSlider = () => {
  const [activeTab, setActiveTab] = useState(0);
  const handleTabClick = (tabIndex: any) => {
    setActiveTab(tabIndex);
  };
  return (
    <section className="pt-10 pb-20 overflow-hidden">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-darkOrange mb-2 px-4 xl:px-14 animate__animated animate__fadeInDown animate__slow wow">
            Partners
          </h2>
          {/* <hr className=" h-1.5 w-36 bg-brownCust mb-5 inline-block animate__animated animate__fadeInDown animate__slow wow" /> */}
          <p className="text-darkBlue mt-4 animate__animated animate__fadeInDown animate__slow wow">
            {logoTabs[activeTab].description}
          </p>
          <div
            className="flex mt-6 justify-center flex-col md:flex-row animate__animated animate__fadeInUp animate__slow wow"
            id="default-tab"
            data-tabs-toggle="#default-tab-content"
            role="tablist"
          >
            {logoTabs.map((tab, index) => (
              <TabButton
                key={index}
                isActive={activeTab === index}
                onClick={() => handleTabClick(index)}
              >
                {tab.name}
              </TabButton>
            ))}
          </div>
        </div>
        <Slider {...settingsLogo} className="brand-logos pb-6 max-w-4xl m-auto">
          {logoTabs[activeTab].logos.map((logosTab, index) => (
            
            <div key={index}>

              {logosTab.map((logos, tabIndex) => (
                <Partner
                  key={tabIndex}
                  containerClass={logos.containerClass}
                  images={logos.images}
                />
              ))}
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default LogoSlider;
