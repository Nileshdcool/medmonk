// components/Header.jsx
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { HeaderMenuItems } from "@/Constants/HomePage/HeaderMenuItems";

// declare global {
//   interface Window {
//     WOW: any; // Define the type of the WOW property
//   }
// }

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const loadWow = async () => {
      // Load the wow.min.js script dynamically
      const script = document.createElement("script");
      script.src =
        "https://cdnjs.cloudflare.com/ajax/libs/wow/1.1.2/wow.min.js";
      script.async = true;
      document.body.appendChild(script);

      // Wait for the script to load before initializing WOW
      await new Promise((resolve) => {
        script.onload = resolve;
      });

      // Initialize WOW when the script is loaded
      new window.WOW().init();
    };

    loadWow();
  }, []);

  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
      />

      <header className="bg-headerBG">
        <div className="container 2xl mx-auto">
          <div className="flex flex-row">
            <div className="basis-3/4 bg-darkBlue">
              <nav className="bg-headerBG dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                  <Link
                    href="/"
                    className="flex items-center space-x-3 rtl:space-x-reverse"
                  >
                    <Image
                      className="object-fill h-auto w-auto xl:w-54"
                      width={220}
                      height={58}
                      src="/assets/medmonk-logo.png"
                      alt="MedMonk Logo"
                    />
                  </Link>

                  <div className="flex items-center">
                    <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse ml-6">
                      <button
                        type="button"
                        className="text-white bg-gradient-to-b from-brownCust to-orangeCust hover:bg-gradient-to-br focus:outline-none font-medium text-sm px-5 py-2 text-center rounded-full hidden md:inline-block"
                      >
                        CONTACT US
                      </button>
                    </div>
                    <div className={isOpen ? "open" : "hidden md:inline-block"}>
                      <div
                        className="md:relative absolute items-center justify-between w-full md:flex md:w-auto  bg-white md:bg-transparent left-0 right-0 mt-9 md:mt-0"
                        id="navbar-sticky"
                      >
                        <ul className=" font-openSans text-sm flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:space-x-6 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                          {HeaderMenuItems.map((item, index) => (
                            <li key={index}>
                              <Link
                                href={item.href}
                                className={
                                  item.isActive
                                    ? "block py-2 px-3 text-white bg-brownCust rounded md:bg-transparent md:text-brownCust md:p-0 md:dark:text-brownCust"
                                    : "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-brownCust md:p-0 md:dark:hover:text-brownCust dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                                }
                                aria-current={
                                  item.isActive ? "page" : undefined
                                }
                              >
                                {item.text}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={toggleMenu}
                    data-collapse-toggle="navbar-sticky"
                    type="button"
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-orangeCust roun ded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    aria-controls="navbar-sticky"
                    aria-expanded="false"
                  >
                    <span className="sr-only">Open main menu</span>
                    <svg
                      className="w-5 h-5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 17 14"
                    >
                      <path stroke="currentColor" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                  </button>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
