import React from "react";
import Image from "next/image";
import { SocialIconsList } from "@/Constants/HomePage/Footer/SocialIconsList";

const SocialIcons = () => {
  return (
    <ul className="flex gap-4 social-ico mt-3">
      {SocialIconsList.map((icon, index) => (
        <li key={index}>
          <a href={icon.link}>
            <Image
              width="0"
              height="0"
              sizes="100vw"
              className="h-5 w-auto"
              src={icon.src}
              alt=""
            />
            <Image
              width="0"
              height="0"
              sizes="100vw"
              className="h-5 hov w-auto hidden"
              src={icon.hoverSrc}
              alt=""
            />
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SocialIcons;
