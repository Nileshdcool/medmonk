import React from "react";
import SiteMap from "./SiteMap";
import Contacts from "./Contacts";
import Copyright from "./Copyright";
import FooterLinks from "./FooterLinks";

import LatestUpdates from "./LatestUpdates";

const Footer = () => {
  return (
    <footer className="bg-headerBG pt-20 px-4">
      <div className="container mx-auto max-w-full">
        <div className="max-w-screen-xl mx-auto px-0 xl:px-4">
          <div className="flex flex-wrap md:grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8 md:text-left text-center">
            <Contacts />
            <SiteMap />
            <LatestUpdates />
          </div>
        </div>
        <FooterLinks />
      </div>
      <Copyright />
    </footer>
  );
};

export default Footer;
