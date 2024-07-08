import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Links } from "@/Constants/HomePage/Footer/Links";

const FooterLinks = () => {
  const router = useRouter();
  return (
    <div className="footer-links mt-4 text-center md:text-left">
      <ul className="block md:flex flex-row gap-3 justify-center">
        {Links.map((link, index) => (
          <React.Fragment key={index}>
            <li>
              <Link
                href={link.href}
                className={`hover:text-brownCust ${
                  router.pathname == link.href ? "text-brownCust" : ""
                }`}
              >
                {link.text}
              </Link>
            </li>
            {link.separator}
          </React.Fragment>
        ))}
      </ul>
    </div>
  );
};
export default FooterLinks;
