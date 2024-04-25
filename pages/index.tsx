import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import React, { useState } from 'react';

export default function Home() {

  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabIndex:any) => {
    setActiveTab(tabIndex);
  };

  const settings = {
    dots: true,
    arrows: true,
    slide: ".card-box",
    slidesToShow: 2,
    autoplay: true,
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

  const settingsLogo = {
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

  const settingsSuccessStories = {
    dots: false,
    arrows: false,
    slidesToShow: 2,
    autoplay: true,
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

  const settingsSuccessStoriesNav = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    focusOnSelect: true,
  };

  const getTabContentClassName = (tabIndex:any) => {
    // Define a base class and conditionally add additional classes based on activeTab
    let baseClassName = 'text-brownCust hover:text-white border hover:border-brownCust border-lightGray hover:bg-gradient-to-b from-brownCust to-orangeCust focus:outline-none font-medium text-md px-5 py-2.5 text-center me-0 ms:me-2 mb-2 rounded-full';
    if (activeTab === tabIndex) {
      baseClassName = 'text-white bg-gradient-to-b from-brownCust to-orangeCust hover:bg-gradient-to-br focus:outline-none font-medium text-md px-5 py-2.5 text-center me-0 md:me-2 mb-2 rounded-full'; // Add 'active' class if it's the activeTab
    }
    return baseClassName;
  };


  return (
    <main>
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

                  <div className="flex">
                    <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse ml-6">
                      <button
                        type="button"
                        className="text-white bg-gradient-to-b from-brownCust to-orangeCust hover:bg-gradient-to-br focus:outline-none font-medium text-sm px-5 py-2 text-center rounded-full"
                      >
                        CONTACT US
                      </button>
                      <button
                        data-collapse-toggle="navbar-sticky"
                        type="button"
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 roun  ded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
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
                          <path
                            stroke="currentColor"
                            d="M1 1h15M1 7h15M1 13h15"
                          />
                        </svg>
                      </button>
                    </div>
                    <div
                      className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
                      id="navbar-sticky"
                    >
                      <ul className="font-openSans text-sm flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:space-x-6 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                          <a
                            href="#"
                            className="block py-2 px-3 text-white bg-brownCust rounded md:bg-transparent md:text-brownCust md:p-0 md:dark:text-brownCust"
                            aria-current="page"
                          >
                            HOME
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-brownCust md:p-0 md:dark:hover:text-brownCust dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                          >
                            ABOUT US
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-brownCust md:p-0 md:dark:hover:text-brownCust dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                          >
                            PRODUCT
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-brownCust md:p-0 md:dark:hover:text-brownCust dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                          >
                            SERVICES
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-brownCust md:p-0 md:dark:hover:text-brownCust dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                          >
                            NEWS & TRENDS
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>

      <section className="hreo-sec bg-center flex bg-no-repeat bg-home-hero bg-cover py-20 items-end lg:items-start">
        <div className="container mx-auto justify-between items-center flex px-4">
          <div className="flex -mt-7">
            <div className="w-1/1 lg:w-1/2 pr-4">
              <h1 className="text-4xl md:text-6xl font-black text-darkBlue mb-4">
                Revolutionizing Patient Access to Vital Therapies
              </h1>
              <hr className=" h-1.5 w-36 bg-brownCust mb-5 hidden sm:inline-block" />
              <p className="sm:text-lg text-md text-darkBlue mb-8  font-semibold">
                At Medmonk, we strongly believe that a patient receiving their
                medication without unnecessary delays is a collective win. It s
                a win for the patient, a win for the healthcare provider, and a
                win for the pharmaceutical brand. Together, enhance the process
                that patients stay on track with their treatment, enabling them
                to focus on their health and well-being.
              </p>
              <button
                type="button"
                className="text-white bg-gradient-to-b from-brownCust to-orangeCust hover:bg-gradient-to-br focus:outline-none font-medium text-md px-5 py-2.5 text-center me-2 mb-2 rounded-full"
              >
                Watch Video
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-center flex px-4 xl:px-0">
        <div className="container mx-auto justify-between items-center flex">
          <div className="grid text-center md:text-left sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 xl:gap-8 py-8 xl:py-14 px-8 xl:px-14 bg-white shadow-xl rounded-md lg:-mt-36 -mt-10 mx-0 xl:mx-10">
            <div>
              <Image
                width="0"
                height="0"
                sizes="100vw"
                className="h-16 w-auto rounded-lg inline-block"
                src="/assets/Medmonk-Network.png"
                alt=""
              />
              <hr className=" h-0.5 w-24 bg-brownCust mb-2 mt-4 block ml-auto mr-auto md:ml-0" />
              <h3 className="font-semibold text-hBlack mb-2 text-lg">
                Medmonk Network:
              </h3>
              <p>
                Connected and contracted with 98% of specialty pharmacies across
                the U.S.
              </p>
            </div>
            <div>
              <Image
                width="0"
                height="0"
                sizes="100vw"
                className="h-16 max-w-full rounded-lg w-auto inline-block" 
                src="/assets/Support-Provided.png"
                alt=""
              />
              <hr className=" h-0.5 w-24 bg-brownCust mb-2 mt-4 block ml-auto mr-auto md:ml-0" />
              <h3 className="font-semibold text-hBlack mb-2 text-1xl">
                Support Provided:
              </h3>
              <p>2.3 million patients supported with $2 billion in claims</p>
            </div>
            <div>
              <Image
                width="0"
                height="0"
                sizes="100vw"
                className="h-16 max-w-full rounded-lg w-auto inline-block"
                src="/assets/Brand-Loyalty.png"
                alt=""
              />
              <hr className=" h-0.5 w-24 bg-brownCust mb-2 mt-4 block ml-auto mr-auto md:ml-0" />
              <h3 className="font-semibold text-hBlack mb-2 text-lg">
                Brand Loyalty:
              </h3>
              <p>Brands stay with us for an average of 7 years</p>
            </div>
            <div>
              <Image
                width="0"
                height="0"
                sizes="100vw"
                className="h-16 max-w-full rounded-lg w-auto inline-block"
                src="/assets/Enrollment-Efficiency.png"
                alt=""
              />
              <hr className=" h-0.5 w-24 bg-brownCust mb-2 mt-4 block ml-auto mr-auto md:ml-0" />
              <h3 className="font-semibold text-hBlack mb-2 text-lg">
                Enrollment Efficiency:
              </h3>
              <p>Patient enrollment completed within an average of 3 minutes</p>
            </div>
            <div>
              <Image
                width="0"
                height="0"
                sizes="100vw"
                className="h-16 max-w-full rounded-lg w-auto inline-block"
                src="/assets/Quick-Financial-Assistance.png"
                alt=""
              />
              <hr className=" h-0.5 w-24 bg-brownCust mb-2 mt-4 block ml-auto mr-auto md:ml-0" />
              <h3 className="font-semibold text-hBlack mb-2 text-lg">
                Quick Financial Assistance:
              </h3>
              <p>Access to copay support typically under 3 seconds</p>
            </div>
            <div>
              <Image
                width="0"
                height="0"
                sizes="100vw"
                className="h-16 max-w-full rounded-lg w-auto inline-block"
                src="/assets/Patient-Approval.png"
                alt=""
              />
              <hr className=" h-0.5 w-24 bg-brownCust mb-2 mt-4 block ml-auto mr-auto md:ml-0" />
              <h3 className="font-semibold text-hBlack mb-2 text-lg">
                Patient Approval:
              </h3>
              <p>Boasts a 99.9% patient satisfaction rate</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-center flex pt-24 pb-20 overflow-hidden">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-darkOrange mb-5 md:mb-8 px-4 md:px-8 xl:px-14 text-center md:text-left">
            Medmonk As Your Partner
          </h2>
          <hr className=" h-1.5 w-36 bg-brownCust mb-8 md:hidden block ml-auto mr-auto" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 xl:gap-8 px-4 xl:px-14">
            <div className="partne-left grid grid-cols-1 gap-10">
              <div className="flex md:flex-row flex-col text-center md:text-left">
                <div className="w-full md:w-36 flex md:flex-row flex-col md:justify-start justify-center">
                  <Image
                    width="0"
                    height="0"
                    sizes="100vw"
                    className="w-24 h-auto m-auto ml-auto md:ml-0"
                    src="/assets/Medmon-Partner1.png"
                    alt=""
                  />
                  <hr className=" h-0.5 w-24 bg-darkBlue mb-4 mt-8 md:hidden ml-auto mr-auto md:ml-0" />
                </div>
                <div className="pl-0 md:pl-5 border-l-0 md:border-l-4 border-darkBlue w-full">
                  <h3 className="text-darkBlue mb-1.5 text-xl md:text-2xl font-extrabold ">
                    EXPERTISE IN RARE DISEASES
                  </h3>
                  <p>
                    Medmonk specializes in managing therapies that treat rare
                    diseases, bringing unparalleled expertise to the patient
                    ecosystem Our team understands the unique challenges these
                    conditions present, and we tailor our services to support
                    each and every patient.
                  </p>
                </div>
              </div>
              <div className="flex md:flex-row flex-col text-center md:text-left">
                <div className="w-full md:w-36 flex md:flex-row flex-col md:justify-start justify-center">
                  <Image
                    width="0"
                    height="0"
                    sizes="100vw"
                    className="w-24 h-auto m-auto ml-auto md:ml-0"
                    src="/assets/Medmon-Partner2.png"
                    alt=""
                  />
                  <hr className=" h-0.5 w-24 bg-darkBlue mb-4 mt-8 md:hidden ml-auto mr-auto md:ml-0" />
                </div>
                <div className="pl-0 md:pl-5 border-l-0 md:border-l-4 border-darkBlue w-full">
                  <h3 className="text-darkBlue mb-1.5 text-xl md:text-2xl font-extrabold">
                    EXTENSIVE SPECIALTY PHARMACIES NETWORK
                  </h3>
                  <p>
                    Medmonk is connected and contracted with 98% of specialty
                    pharmacies, buy & bill facilities, and infusion centers
                    nationwide. This extensive network ensures seamless
                    collaboration and efficient solutions.
                  </p>
                </div>
              </div>
              <div className="flex md:flex-row flex-col text-center md:text-left">
                <div className="w-full md:w-36 flex md:flex-row flex-col md:justify-start justify-center">
                  <Image
                    width="0"
                    height="0"
                    sizes="100vw"
                    className="w-24 h-auto m-auto ml-auto md:ml-0"
                    src="/assets/Medmon-Partner3.png"
                    alt=""
                  />
                  <hr className=" h-0.5 w-24 bg-darkBlue mb-4 mt-8 md:hidden ml-auto mr-auto md:ml-0" />
                </div>
                <div className="pl-0 md:pl-5 border-l-0 md:border-l-4 border-darkBlue w-full">
                  <h3 className="text-darkBlue mb-1.5 text-xl md:text-2xl font-extrabold">
                    EFFORTLESS INTEGRATION
                  </h3>
                  <p>
                    Our platform seamlessly integrates with 98% of US pharmacies
                    and providers billing terminals. This simplifies the hub,
                    co-pay, and patient assistance enrollment process, ensuring
                    a smooth experience for all users in both medical and
                    pharmacy benefits.
                  </p>
                </div>
              </div>
            </div>
            <div className="partne-right">
              <div className="card-carsual">
                <Slider {...settings} className="pb-6">
                  <div className="card-box bg-white shadow-xl rounded-md p-6 text-center">
                    <Image
                      width="0"
                      height="0"
                      sizes="100vw"
                      className="h-28 w-auto max-w-full rounded-lg mx-auto"
                      src="/assets/speed.png"
                      alt=""
                    />
                    <h3 className="text-darkBlue mt-2 md:text-2xl text-xl font-extrabold">
                      SPEED
                    </h3>
                    <hr className=" h-1 w-24 bg-brownCust mb-2 mt-1 inline-block" />
                    <p>
                      Medmonks automated system enables instant financial
                      assistance and patient enrollment into the hub, all within
                      a remarkable timeframe of under three seconds.
                    </p>
                  </div>
                  <div className="card-box bg-white shadow-xl rounded-md p-6 text-center">
                    <Image
                      width="0"
                      height="0"
                      sizes="100vw"
                      className="h-28 w-auto max-w-full rounded-lg mx-auto"
                      src="/assets/customization.png"
                      alt=""
                    />
                    <h3 className="text-darkBlue mt-2 md:text-2xl text-xl font-extrabold">
                      CUSTOMIZATION
                    </h3>
                    <hr className=" h-1 w-24 bg-brownCust mb-2 mt-1 inline-block" />
                    <p>
                      We tailor support programs for brands, addressing the
                      individual needs of conditions, patients, providers, and
                      prescribers, with a focus on agility and customization in
                      its unique landscape.
                    </p>
                  </div>
                  <div className="card-box bg-white shadow-xl rounded-md p-6 text-center">
                    <Image
                      width="0"
                      height="0"
                      sizes="100vw"
                      className="h-28 w-auto max-w-full rounded-lg mx-auto"
                      src="/assets/customization1.png"
                      alt=""
                    />
                    <h3 className="text-darkBlue mt-2 md:text-2xl text-xl font-extrabold">
                      SPEED
                    </h3>
                    <hr className=" h-1 w-24 bg-brownCust mb-2 mt-1 inline-block" />
                    <p>
                      Medmonks automated system enables instant financial
                      assistance and patient enrollment into the hub, all within
                      a remarkable timeframe of under three seconds.
                    </p>
                  </div>
                  <div className="card-box bg-white shadow-xl rounded-md p-6 text-center">
                    <Image
                      width="0"
                      height="0"
                      sizes="100vw"
                      className="h-28 w-auto max-w-full rounded-lg mx-auto"
                      src="/assets/customization.png"
                      alt=""
                    />
                    <h3 className="text-darkBlue mt-2 md:text-2xl text-xl font-extrabold">
                      CUSTOMIZATION
                    </h3>
                    <hr className=" h-1 w-24 bg-brownCust mb-2 mt-1 inline-block" />
                    <p>
                      We tailor support programs for brands, addressing the
                      individual needs of conditions, patients, providers, and
                      prescribers, with a focus on agility and customization in
                      its unique landscape.
                    </p>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-10 pb-20">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold text-darkOrange mb-2 px-4 xl:px-14">
              Partners
            </h2>
            <hr className=" h-1.5 w-36 bg-brownCust mb-5 inline-block" />
            <p>
              At Medmonk, collaboration is key. We partner with leading
              healthcare organizations, pharmaceutical companies, and patient
              advocacy groups to expand our reach and impact. Together, we are
              dedicated to advancing patient care and ensuring access to vital
              medications.
            </p>
            <div className="flex mt-6 justify-center flex-col md:flex-row" id="default-tab" data-tabs-toggle="#default-tab-content" role="tablist">
              <button
                type="button"
                //className="text-white bg-gradient-to-b from-brownCust to-orangeCust hover:bg-gradient-to-br focus:outline-none font-medium text-md px-5 py-2.5 text-center me-2 mb-2 rounded-full"
                className={getTabContentClassName(1)}
                onClick={() => handleTabClick(1)}
             >
                Pharmaceutical Partners
              </button>
              <button
                type="button"
                //className="text-brownCust hover:text-white border hover:border-brownCust border-lightGray hover:bg-gradient-to-b from-brownCust to-orangeCust focus:outline-none font-medium text-md px-5 py-2.5 text-center me-2 mb-2 rounded-full"
                className={getTabContentClassName(2)}
                onClick={() => handleTabClick(2)}
              >
                Specialty Pharmacy Partners
              </button>
            </div>
          </div>

          {activeTab === 1 &&  <Slider
            {...settingsLogo}
            className="brand-logos pb-6 max-w-4xl m-auto">
            <div>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-0 xl:gap-0 pt-14 px-0 xl:px-0 max-w-6xl m-auto">
                <div className="brand-logo">
                  <Image
                    width="0"
                    height="0"
                    sizes="100vw"
                    className="h-12 w-auto rounded-lg"
                    src="/assets/logo1.png"
                    alt=""
                  />
                </div>
                <div className="brand-logo">
                  <Image
                    width="0"
                    height="0"
                    sizes="100vw"
                    className="h-12 w-auto rounded-lg"
                    src="/assets/logo2.png"
                    alt=""
                  />
                </div>
                <div className="brand-logo">
                  <Image
                    width="0"
                    height="0"
                    sizes="100vw"
                    className="h-12 w-auto rounded-lg"
                    src="/assets/logo3.png"
                    alt=""
                  />
                </div>
                <div className="brand-logo">
                  <Image
                    width="0"
                    height="0"
                    sizes="100vw"
                    className="h-12 w-auto rounded-lg"
                    src="/assets/logo4.png"
                    alt=""
                  />
                </div>
                <div className="brand-logo">
                  <Image
                    width="0"
                    height="0"
                    sizes="100vw"
                    className="h-12 w-auto rounded-lg"
                    src="/assets/logo5.png"
                    alt=""
                  />
                </div>
                <div className="brand-logo">
                  <Image
                    width="0"
                    height="0"
                    sizes="100vw"
                    className="h-12 w-auto rounded-lg"
                    src="/assets/logo6.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-0 xl:gap-0 pt-0 lg:pt-14 px-0 xl:px-0 max-w-6xl m-auto">
                <div className="brand-logo">
                  <Image
                    width="0"
                    height="0"
                    sizes="100vw"
                    className="h-12 w-auto rounded-lg"
                    src="/assets/logo7.png"
                    alt=""
                  />
                </div>
                <div className="brand-logo">
                  <Image
                    width="0"
                    height="0"
                    sizes="100vw"
                    className="h-12 w-auto rounded-lg"
                    src="/assets/logo8.png"
                    alt=""
                  />
                </div>
                <div className="brand-logo">
                  <Image
                    width="0"
                    height="0"
                    sizes="100vw"
                    className="h-12 w-auto rounded-lg"
                    src="/assets/logo9.png"
                    alt=""
                  />
                </div>
                <div className="brand-logo">
                  <Image
                    width="0"
                    height="0"
                    sizes="100vw"
                    className="h-12 w-auto rounded-lg"
                    src="/assets/logo10.png"
                    alt=""
                  />
                </div>
                <div className="brand-logo">
                  <Image
                    width="0"
                    height="0"
                    sizes="100vw"
                    className="h-12 w-auto rounded-lg"
                    src="/assets/logo11.png"
                    alt=""
                  />
                </div>
                <div className="brand-logo">
                  <Image
                    width="0"
                    height="0"
                    sizes="100vw"
                    className="h-12 w-auto  rounded-lg"
                    src="/assets/logo2.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-0 xl:gap-0 pt-14 px-0 xl:px-0 max-w-6xl m-auto">
                <div className="brand-logo">
                  <Image
                    width="0"
                    height="0"
                    sizes="100vw"
                    className="h-12 w-auto rounded-lg"
                    src="/assets/logo1.png"
                    alt=""
                  />
                </div>
                <div className="brand-logo">
                  <Image
                    width="0"
                    height="0"
                    sizes="100vw"
                    className="h-12 w-auto rounded-lg"
                    src="/assets/logo2.png"
                    alt=""
                  />
                </div>
                <div className="brand-logo">
                  <Image
                    width="0"
                    height="0"
                    sizes="100vw"
                    className="h-12 w-auto rounded-lg"
                    src="/assets/logo3.png"
                    alt=""
                  />
                </div>
                <div className="brand-logo">
                  <Image
                    width="0"
                    height="0"
                    sizes="100vw"
                    className="h-12 w-auto rounded-lg"
                    src="/assets/logo4.png"
                    alt=""
                  />
                </div>
                <div className="brand-logo">
                  <Image
                    width="0"
                    height="0"
                    sizes="100vw"
                    className="h-12 w-auto rounded-lg"
                    src="/assets/logo5.png"
                    alt=""
                  />
                </div>
                <div className="brand-logo">
                  <Image
                    width="0"
                    height="0"
                    sizes="100vw"
                    className="h-12 w-auto rounded-lg"
                    src="/assets/logo6.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-0 xl:gap-0 pt-0 lg:pt-14 px-0 xl:px-0 max-w-6xl m-auto">
                <div className="brand-logo">
                  <Image
                    width="0"
                    height="0"
                    sizes="100vw"
                    className="h-12 w-auto rounded-lg"
                    src="/assets/logo7.png"
                    alt=""
                  />
                </div>
                <div className="brand-logo">
                  <Image
                    width="0"
                    height="0"
                    sizes="100vw"
                    className="h-12 w-auto rounded-lg"
                    src="/assets/logo8.png"
                    alt=""
                  />
                </div>
                <div className="brand-logo">
                  <Image
                    width="0"
                    height="0"
                    sizes="100vw"
                    className="h-12 w-auto rounded-lg"
                    src="/assets/logo9.png"
                    alt=""
                  />
                </div>
                <div className="brand-logo">
                  <Image
                    width="0"
                    height="0"
                    sizes="100vw"
                    className="h-12 w-auto rounded-lg"
                    src="/assets/logo10.png"
                    alt=""
                  />
                </div>
                <div className="brand-logo">
                  <Image
                    width="0"
                    height="0"
                    sizes="100vw"
                    className="h-12 w-auto rounded-lg"
                    src="/assets/logo11.png"
                    alt=""
                  />
                </div>
                <div className="brand-logo">
                  <Image
                    width="0"
                    height="0"
                    sizes="100vw"
                    className="h-12 w-auto  rounded-lg"
                    src="/assets/logo2.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </Slider>
          }
         
         {activeTab === 2 &&  <Slider {...settingsLogo} className="brand-logos pb-6 max-w-4xl m-auto">
            <div>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-0 xl:gap-0 pt-14 px-0 xl:px-0 max-w-6xl m-auto">
                <div className="brand-logo">
                  <Image
                    width="0"
                    height="0"
                    sizes="100vw"
                    className="h-12 w-auto rounded-lg"
                    src="/assets/logo1-spp.png"
                    alt=""
                  />
                </div>
                <div className="brand-logo">
                  <Image
                    width="0"
                    height="0"
                    sizes="100vw"
                    className="h-12 w-auto rounded-lg"
                    src="/assets/logo2-spp.png"
                    alt=""
                  />
                </div>
                <div className="brand-logo">
                  <Image
                    width="0"
                    height="0"
                    sizes="100vw"
                    className="h-12 w-auto rounded-lg"
                    src="/assets/logo3-spp.png"
                    alt=""
                  />
                </div>
                <div className="brand-logo">
                  <Image
                    width="0"
                    height="0"
                    sizes="100vw"
                    className="h-12 w-auto rounded-lg"
                    src="/assets/logo4-spp.png"
                    alt=""
                  />
                </div>
                <div className="brand-logo">
                  <Image
                    width="0"
                    height="0"
                    sizes="100vw"
                    className="h-12 w-auto rounded-lg"
                    src="/assets/logo5-spp.png"
                    alt=""
                  />
                </div>
                <div className="brand-logo">
                  <Image
                    width="0"
                    height="0"
                    sizes="100vw"
                    className="h-12 w-auto  rounded-lg"
                    src="/assets/logo6-spp.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-0 xl:gap-0 pt-0 lg:pt-14 px-0 xl:px-0 max-w-6xl m-auto">
                <div className="brand-logo">
                  <Image
                    width="0"
                    height="0"
                    sizes="100vw"
                    className="h-12 w-auto rounded-lg"
                    src="/assets/logo7-spp.png"
                    alt=""
                  />
                </div>
                <div className="brand-logo">
                  <Image
                    width="0"
                    height="0"
                    sizes="100vw"
                    className="h-12 w-auto rounded-lg"
                    src="/assets/logo8-spp.png"
                    alt=""
                  />
                </div>
                <div className="brand-logo">
                  <Image
                    width="0"
                    height="0"
                    sizes="100vw"
                    className="h-12 w-auto rounded-lg"
                    src="/assets/logo9-spp.png"
                    alt=""
                  />
                </div>
                <div className="brand-logo">
                  <Image
                    width="0"
                    height="0"
                    sizes="100vw"
                    className="h-12 w-auto rounded-lg"
                    src="/assets/logo10-spp.png"
                    alt=""
                  />
                </div>
                <div className="brand-logo">
                  <Image
                    width="0"
                    height="0"
                    sizes="100vw"
                    className="h-12 w-auto rounded-lg"
                    src="/assets/logo11-spp.png"
                    alt=""
                  />
                </div>
                <div className="brand-logo">
                  <Image
                    width="0"
                    height="0"
                    sizes="100vw"
                    className="h-12 w-auto  rounded-lg"
                    src="/assets/logo12-spp.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-0 xl:gap-0 pt-0 lg:pt-14 px-0 xl:px-0 max-w-6xl m-auto">
                <div className="brand-logo">
                  <Image
                    width="0"
                    height="0"
                    sizes="100vw"
                    className="h-12 w-auto rounded-lg"
                    src="/assets/logo13-spp.png"
                    alt=""
                  />
                </div>
                <div className="brand-logo">
                  <Image
                    width="0"
                    height="0"
                    sizes="100vw"
                    className="h-12 w-auto rounded-lg"
                    src="/assets/logo14-spp.png"
                    alt=""
                  />
                </div>
                <div className="brand-logo">
                  <Image
                    width="0"
                    height="0"
                    sizes="100vw"
                    className="h-12 w-auto rounded-lg"
                    src="/assets/logo15-spp.png"
                    alt=""
                  />
                </div>
                <div className="brand-logo">
                  <Image
                    width="0"
                    height="0"
                    sizes="100vw"
                    className="h-12 w-auto rounded-lg"
                    src="/assets/logo16-spp.png"
                    alt=""
                  />
                </div>
                <div className="brand-logo">
                  <Image
                    width="0"
                    height="0"
                    sizes="100vw"
                    className="h-12 w-auto rounded-lg"
                    src="/assets/logo17-spp.png"
                    alt=""
                  />
                </div>
                <div className="brand-logo">
                  <Image
                    width="0"
                    height="0"
                    sizes="100vw"
                    className="h-12 w-auto  rounded-lg"
                    src="/assets/logo18-spp.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-0 xl:gap-0 pt-14 px-0 xl:px-0 max-w-6xl m-auto">
                <div className="brand-logo">
                  <Image
                    width="0"
                    height="0"
                    sizes="100vw"
                    className="h-12 w-auto rounded-lg"
                    src="/assets/logo19-spp.png"
                    alt=""
                  />
                </div>
                <div className="brand-logo">
                  <Image
                    width="0"
                    height="0"
                    sizes="100vw"
                    className="h-12 w-auto rounded-lg"
                    src="/assets/logo20-spp.png"
                    alt=""
                  />
                </div>
                <div className="brand-logo">
                  <Image
                    width="0"
                    height="0"
                    sizes="100vw"
                    className="h-12 w-auto rounded-lg"
                    src="/assets/logo3-spp.png"
                    alt=""
                  />
                </div>
                <div className="brand-logo">
                  <Image
                    width="0"
                    height="0"
                    sizes="100vw"
                    className="h-12 w-auto rounded-lg"
                    src="/assets/logo21-spp.png"
                    alt=""
                  />
                </div>
                <div className="brand-logo">
                  <Image
                    width="0"
                    height="0"
                    sizes="100vw"
                    className="h-12 w-auto rounded-lg"
                    src="/assets/logo22-spp.png"
                    alt=""
                  />
                </div>
                <div className="brand-logo">
                  <Image
                    width="0"
                    height="0"
                    sizes="100vw"
                    className="h-12 w-auto  rounded-lg"
                    src="/assets/logo23-spp.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-0 xl:gap-0 pt-0 lg:pt-14 px-0 xl:px-0 max-w-6xl m-auto">
                <div className="brand-logo">
                  <Image
                    width="0"
                    height="0"
                    sizes="100vw"
                    className="h-12 w-auto rounded-lg"
                    src="/assets/logo24-spp.png"
                    alt=""
                  />
                </div>
                <div className="brand-logo">
                  <Image
                    width="0"
                    height="0"
                    sizes="100vw"
                    className="h-12 w-auto rounded-lg"
                    src="/assets/logo25-spp.png"
                    alt=""
                  />
                </div>
                <div className="brand-logo">
                  <Image
                    width="0"
                    height="0"
                    sizes="100vw"
                    className="h-12 w-auto rounded-lg"
                    src="/assets/logo26-spp.png"
                    alt=""
                  />
                </div>
                <div className="brand-logo">
                  <Image
                    width="0"
                    height="0"
                    sizes="100vw"
                    className="h-12 w-auto rounded-lg"
                    src="/assets/logo27-spp.png"
                    alt=""
                  />
                </div>
                <div className="brand-logo">
                  <Image
                    width="0"
                    height="0"
                    sizes="100vw"
                    className="h-12 w-auto rounded-lg"
                    src="/assets/logo28-spp.png"
                    alt=""
                  />
                </div>
                <div className="brand-logo">
                  <Image
                    width="0"
                    height="0"
                    sizes="100vw"
                    className="h-12 w-auto  rounded-lg"
                    src="/assets/logo29-spp.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-0 xl:gap-0 pt-0 lg:pt-14 px-0 xl:px-0 max-w-6xl m-auto">
                <div className="brand-logo">
                  <Image
                    width="0"
                    height="0"
                    sizes="100vw"
                    className="h-12 w-auto rounded-lg"
                    src="/assets/logo30-spp.png"
                    alt=""
                  />
                </div>
                <div className="brand-logo">
                  <Image
                    width="0"
                    height="0"
                    sizes="100vw"
                    className="h-12 w-auto rounded-lg"
                    src="/assets/logo31-spp.png"
                    alt=""
                  />
                </div>
                <div className="brand-logo">
                  <Image
                    width="0"
                    height="0"
                    sizes="100vw"
                    className="h-12 w-auto rounded-lg"
                    src="/assets/logo32-spp.png"
                    alt=""
                  />
                </div>
                <div className="brand-logo">
                  <Image
                    width="0"
                    height="0"
                    sizes="100vw"
                    className="h-12 w-auto rounded-lg"
                    src="/assets/logo33-spp.png"
                    alt=""
                  />
                </div>
                <div className="brand-logo">
                  <Image
                    width="0"
                    height="0"
                    sizes="100vw"
                    className="h-12 w-auto rounded-lg"
                    src="/assets/logo34-spp.png"
                    alt=""
                  />
                </div>
                <div className="brand-logo">
                  <Image
                    width="0"
                    height="0"
                    sizes="100vw"
                    className="h-12 w-auto  rounded-lg"
                    src="/assets/logo35-spp.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-0 xl:gap-0 pt-14 px-0 xl:px-0 max-w-6xl m-auto">
                <div className="brand-logo">
                  <Image
                    width="0"
                    height="0"
                    sizes="100vw"
                    className="h-12 w-auto rounded-lg"
                    src="/assets/logo37-spp.png"
                    alt=""
                  />
                </div>
                <div className="brand-logo">
                  <Image
                    width="0"
                    height="0"
                    sizes="100vw"
                    className="h-12 w-auto rounded-lg"
                    src="/assets/logo38-spp.png"
                    alt=""
                  />
                </div>
                <div className="brand-logo">
                  <Image
                    width="0"
                    height="0"
                    sizes="100vw"
                    className="h-12 w-auto rounded-lg"
                    src="/assets/logo39-spp.png"
                    alt=""
                  />
                </div>
                <div className="brand-logo">
                  <Image
                    width="0"
                    height="0"
                    sizes="100vw"
                    className="h-12 w-auto rounded-lg"
                    src="/assets/logo40-spp.png"
                    alt=""
                  />
                </div>
                <div className="brand-logo">
                  <Image
                    width="0"
                    height="0"
                    sizes="100vw"
                    className="h-12 w-auto rounded-lg"
                    src="/assets/logo41-spp.png"
                    alt=""
                  />
                </div>
                <div className="brand-logo">
                  <Image
                    width="0"
                    height="0"
                    sizes="100vw"
                    className="h-12 w-auto  rounded-lg"
                    src="/assets/logo42-spp.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-0 xl:gap-0 pt-0 lg:pt-14 px-0 xl:px-0 max-w-6xl m-auto">
                <div className="brand-logo">
                  <Image
                    width="0"
                    height="0"
                    sizes="100vw"
                    className="h-12 w-auto rounded-lg"
                    src="/assets/logo43-spp.png"
                    alt=""
                  />
                </div>
                <div className="brand-logo">
                  <Image
                    width="0"
                    height="0"
                    sizes="100vw"
                    className="h-12 w-auto rounded-lg"
                    src="/assets/logo44-spp.png"
                    alt=""
                  />
                </div>
                <div className="brand-logo">
                  <Image
                    width="0"
                    height="0"
                    sizes="100vw"
                    className="h-12 w-auto rounded-lg"
                    src="/assets/logo45-spp.png"
                    alt=""
                  />
                </div>
                <div className="brand-logo">
                  <Image
                    width="0"
                    height="0"
                    sizes="100vw"
                    className="h-12 w-auto rounded-lg"
                    src="/assets/logo46-spp.png"
                    alt=""
                  />
                </div>
                <div className="brand-logo">
                  <Image
                    width="0"
                    height="0"
                    sizes="100vw"
                    className="h-12 w-auto rounded-lg"
                    src="/assets/logo47-spp.png"
                    alt=""
                  />
                </div>
                <div className="brand-logo">
                  <Image
                    width="0"
                    height="0"
                    sizes="100vw"
                    className="h-12 w-auto  rounded-lg"
                    src="/assets/logo48-spp.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </Slider>
        }
        </div>
      </section>

      <section className="bg-center flex pt-24 pb-20 overflow-hidden">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-2 md:mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-darkOrange mb-2 px-4 xl:px-14">
              Success Stories
            </h2>
            <hr className=" h-1.5 w-36 bg-brownCust mb-5 inline-block" />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 xl:gap-3 px-4 xl:px-14 items-center">
            <div className="partne-left grid grid-cols-1 gap-10">
              <Slider {...settingsSuccessStoriesNav} className="pb-6">
                <div className="ssNav">
                  <div className="pl-0 md:pl-5 pr-0 lg:pr-20 w-full">
                    <h3 className="text-darkBlue mb-4 text-2xl font-bold">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industrys
                      standard dummy text
                    </h3>
                    <p className="pl-4 border-l-4 border-brownCust">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industrys
                      standard dummy text ever since the 1500s Lorem Ipsum is
                      simply dummy text of the printing and typesetting
                      industry. Lorem Ipsum has been the industrys standard
                      dummy text ever since the 1500s
                    </p>
                  </div>
                </div>
                <div className="ssNav">
                  <div className="pl-0 md:pl-5 pr-0 lg:pr-20 w-full">
                    <h3 className="text-darkBlue mb-4 text-2xl font-bold">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industrys
                      standard dummy text
                    </h3>
                    <p className="pl-4 border-l-4 border-brownCust">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industrys
                      standard dummy text ever since the 1500s Lorem Ipsum is
                      simply dummy text of the printing and typesetting
                      industry. Lorem Ipsum has been the industrys standard
                      dummy text ever since the 1500s
                    </p>
                  </div>
                </div>
                <div className="ssNav">
                  <div className="pl-0 md:pl-5 pr-0 lg:pr-20 w-full">
                    <h3 className="text-darkBlue mb-4 text-2xl font-bold">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industrys
                      standard dummy text
                    </h3>
                    <p className="pl-4 border-l-4 border-brownCust">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industrys
                      standard dummy text ever since the 1500s Lorem Ipsum is
                      simply dummy text of the printing and typesetting
                      industry. Lorem Ipsum has been the industrys standard
                      dummy text ever since the 1500s
                    </p>
                  </div>
                </div>
              </Slider>
            </div>
            <div className="partne-right ml-4 md:ml-0">
              <div className="card-carsual ssSkider">
                <Slider {...settingsSuccessStories} className="pb-6">
                  <div className="card-box bg-white rounded-md">
                    <Image
                      width="0"
                      height="0"
                      sizes="100vw"
                      className="max-w-full w-auto h-auto rounded-lg mx-auto"
                      src="/assets/success-stories1.jpg"
                      alt=""
                    />
                  </div>
                  <div className="card-box bg-white rounded-md">
                    <Image
                      width="0"
                      height="0"
                      sizes="100vw"
                      className="max-w-full w-auto h-auto rounded-lg mx-auto"
                      src="/assets/success-stories2.jpg"
                      alt=""
                    />
                  </div>
                  <div className="card-box bg-white rounded-md">
                    <Image
                      width="0"
                      height="0"
                      sizes="100vw"
                      className="max-w-full w-auto h-auto rounded-lg mx-auto"
                      src="/assets/success-stories1.jpg"
                      alt=""
                    />
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="get-started-sec bg-center flex bg-no-repeat bg-get-started bg-cover py-20 relative">
        {/* <div className="absolute inset-0 bg-gray-400 opacity-50"></div> */}
        <div className="container mx-auto px-4 z-1">
          <div className="w-1/1 text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold text-darkBlue mb-2">
              READY TO EXPERIENCE THE MEDMONK DIFFERENCE?
            </h2>
            <p className="text-md md:text-xl text-hBlack my-6 font-semibold max-w-3xl ml-auto mr-auto">
              Explore our innovative solutions that prioritize Speed to Therapy
              and Customization for Your Brand. Click here to get started.
            </p>
            <button
              type="button"
              className="text-white bg-gradient-to-b from-brownCust to-orangeCust hover:bg-gradient-to-br focus:outline-none font-medium text-md px-5 py-2.5 text-center mt-1.5 rounded-full"
            >
              Get Started
            </button>
          </div>
        </div>
      </section>

      <footer className="bg-headerBG pt-20 px-4">
        <div className="container mx-auto">
          <div className="mx-0 xl:mx-10">
            <div className="flex flex-wrap md:grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8">
              <div className="w-full">
                <a
                  href="https://flowbite.com/"
                  className="flex items-center space-x-3 rtl:space-x-reverse mb-4"
                >
                  <Image
                    className="object-fill h-auto w-100"
                    width={220}
                    height={58}
                    src="/assets/medmonk-logo.png"
                    alt="MedMonk Logo"
                  />
                </a>
                <h3 className="font-semibold text-hBlack mb-2 text-lg">
                  Contact us
                </h3>
                <ul className="flex flex-col gap-2">
                  <li>
                    <a href="#" className="hover:text-brownCust">
                      <Image
                        width="0"
                        height="0"
                        sizes="100vw"
                        className="w-6 inline-block align-middle mr-1"
                        src="/assets/phone-ico.png"
                        alt=""
                      />{" "}
                      +91-999999999
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-brownCust">
                      <Image
                        width="0"
                        height="0"
                        sizes="100vw"
                        className="w-6 inline-block align-middle mr-1"
                        src="/assets/email-ico.png"
                        alt=""
                      />{" "}
                      demogmail.com
                    </a>
                  </li>
                </ul>
              </div>
              <div className=" w-1/2 -mr-8">
                <h3 className="font-semibold text-hBlack mb-2 text-lg">
                  Sitemap
                </h3>
                <ul className="flex flex-col gap-1">
                  <li>
                    <a href="#" className="hover:text-brownCust">
                      About us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-brownCust">
                      Product
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-brownCust">
                      Services
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-brownCust">
                      New & Trends
                    </a>
                  </li>
                </ul>
              </div>
              <div className=" w-1/2 border-l-2 md:border-l-0 border-darkBlue pl-8 md:pl-0">
                <h3 className="font-semibold text-hBlack mb-2 text-lg">
                  Accredited by
                </h3>
                <ul className="flex flex-col gap-1">
                  <li>
                    <a href="#" className="hover:text-brownCust">
                      Text/Logo?
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-brownCust">
                      Text/Logo?
                    </a>
                  </li>
                </ul>
              </div>
              <div className="w-full">
                <h3 className="text-darkBlue mb-3 text-xl font-bold">
                  Get the latest updates
                </h3>

                <div className="mx-auto max-w-screen-md sm:text-center">
                  <form action="#">
                    <div className="items-center mx-auto mb-3 space-y-4 max-w-screen-sm flex space-y-0">
                      <div className="relative w-full">
                        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                          <svg
                            className="w-5 h-5 text-gray-500 dark:text-gray-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                          </svg>
                        </div>
                        <input
                          className="block p-3 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:rounded-none sm:rounded-l-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                          placeholder="Enter your email"
                          type="email"
                          id="email"
                        />
                      </div>
                      <div>
                        <button
                          type="submit"
                          className="py-2 px-5 w-full text-xl font-medium text-center text-white bg-brownCust hover:bg-orangeCust rounded-lg border cursor-pointer bg-primary-700 border-primary-600 sm:rounded-none sm:rounded-r-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                        >
                          Go
                        </button>
                      </div>
                    </div>
                  </form>
                </div>

                <h3 className="text-darkBlue mb-1.5 text-xl font-bold">
                  Follow us on:
                </h3>
                <ul className="flex gap-4 social-ico mt-3">
                  <li>
                    <a href="#">
                      <Image
                        width="0"
                        height="0"
                        sizes="100vw"
                        className="h-5 w-auto"
                        src="/assets/Telegram.png"
                        alt=""
                      />{" "}
                      <Image
                        width="0"
                        height="0"
                        sizes="100vw"
                        className="h-5 hov w-auto hidden"
                        src="/assets/Telegram-h.png"
                        alt=""
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <Image
                        width="0"
                        height="0"
                        sizes="100vw"
                        className="h-5 w-auto"
                        src="/assets/Instagram.png"
                        alt=""
                      />{" "}
                      <Image
                        width="0"
                        height="0"
                        sizes="100vw"
                        className="h-5 hov w-auto hidden"
                        src="/assets/Instagram-h.png"
                        alt=""
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <Image
                        width="0"
                        height="0"
                        sizes="100vw"
                        className="h-5 w-auto"
                        src="/assets/Medium.png"
                        alt=""
                      />{" "}
                      <Image
                        width="0"
                        height="0"
                        sizes="100vw"
                        className="h-5 hov w-auto hidden"
                        src="/assets/Medium-h.png"
                        alt=""
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <Image
                        width="0"
                        height="0"
                        sizes="100vw"
                        className="h-5 w-auto"
                        src="/assets/Linkedin.png"
                        alt=""
                      />{" "}
                      <Image
                        width="0"
                        height="0"
                        sizes="100vw"
                        className="h-5 hov w-auto hidden"
                        src="/assets/Linkedin-h.png"
                        alt=""
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <Image
                        width="0"
                        height="0"
                        sizes="100vw"
                        className="h-5 w-auto"
                        src="/assets/Facebook.png"
                        alt=""
                      />{" "}
                      <Image
                        width="0"
                        height="0"
                        sizes="100vw"
                        className="h-5 hov w-auto hidden"
                        src="/assets/Facebook-h.png"
                        alt=""
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <Image
                        width="0"
                        height="0"
                        sizes="100vw"
                        className="h-5 w-auto"
                        src="/assets/Twitter.png"
                        alt=""
                      />{" "}
                      <Image
                        width="0"
                        height="0"
                        sizes="100vw"
                        className="h-5 hov w-auto hidden"
                        src="/assets/Twitter-h.png"
                        alt=""
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <Image
                        width="0"
                        height="0"
                        sizes="100vw"
                        className="h-5 w-auto"
                        src="/assets/YouTub.png"
                        alt=""
                      />{" "}
                      <Image
                        width="0"
                        height="0"
                        sizes="100vw"
                        className="h-5 hov w-auto hidden"
                        src="/assets/YouTub-h.png"
                        alt=""
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <Image
                        width="0"
                        height="0"
                        sizes="100vw"
                        className="h-5 w-auto"
                        src="/assets/Twitch.png"
                        alt=""
                      />{" "}
                      <Image
                        width="0"
                        height="0"
                        sizes="100vw"
                        className="h-5 hov w-auto hidden"
                        src="/assets/Twitch-h.png"
                        alt=""
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-links mt-8">
            <ul className="flex flex-row gap-3 justify-center">
              <li>
                <a href="#" className="hover:text-brownCust">
                  Privacy policy
                </a>
              </li>
              |
              <li>
                <a href="#" className="hover:text-brownCust">
                  Legal statement
                </a>
              </li>
              |
              <li>
                <a href="#" className="hover:text-brownCust">
                  Cookies
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="bg-darkBlue py-5 px-4 -mx-4 mt-16">
          <div className="container max-w-4xl mx-auto text-white text-center">
            <p className="text-xl mb-3 font-medium">
              © 2024 MEDMONK. All Rights Reserved
            </p>
            <p className="text-sm">
              Lorem ipsum is a placeholder text commonly used to demonstrate the
              visual form of a document or a typeface without relying on
              meaningful content
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
