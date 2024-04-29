import React from "react";
import Link from "next/link";
import { SiteMaps } from "@/Constants/HomePage/Footer/SiteMaps";

const SiteMap = () => {
  return (
    <div className=" w-1/2 -mr-8">
      <h3 className="font-semibold text-hBlack mb-2 text-lg">Sitemap</h3>
      <ul className="flex flex-col gap-1">
        {SiteMaps.map((menuItem, index) => (
          <li key={index}>
            <Link href={menuItem.href} className="hover:text-brownCust">
              {menuItem.text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SiteMap;
