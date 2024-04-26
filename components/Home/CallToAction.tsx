import React from "react";
const CallToAction = () => {
  return (
    <section className="get-started-sec bg-center flex bg-no-repeat bg-get-started bg-cover py-20 relative">
      {/* <div className="absolute inset-0 bg-gray-400 opacity-50"></div> */}
      <div className="container mx-auto px-4 z-1">
        <div className="w-1/1 pr-4 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-darkBlue mb-2 animate__animated animate__fadeInLeft animate__slow wow">
            READY TO EXPERIENCE THE MEDMONK DIFFERENCE?
          </h2>
          <p className="text-md md:text-xl text-hBlack my-6 font-semibold max-w-3xl ml-auto mr-auto animate__animated animate__fadeInLeft animate__slow wow">
            Explore our innovative solutions that prioritize Speed to Therapy
            and Customization for Your Brand. Click here to get started.
          </p>
          <button
            type="button"
            className="text-white bg-gradient-to-b from-brownCust to-orangeCust hover:bg-gradient-to-br focus:outline-none font-medium text-md px-5 py-2.5 text-center mt-1.5 rounded-full animate__animated animate__fadeInLeft animate__slow wow"
          >
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
