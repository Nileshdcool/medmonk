import React from "react";
import { SiteMaps } from "@/Constants/HopePage/Footer/SiteMaps";

const SiteMap = () => {
  return (
    <div className=" w-1/2 -mr-8">
      <h3 className="font-semibold text-hBlack mb-2 text-lg">Sitemap</h3>
      <ul className="flex flex-col gap-1">
        {SiteMaps.map((menuItem, index) => (
          <li key={index}>
            <a
              href={menuItem.href}
              className="hover:text-brownCust"
              aria-current="page"
            >
              {menuItem.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SiteMap;
