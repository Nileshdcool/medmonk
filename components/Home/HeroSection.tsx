const HeroSection = () => {
  return (
    <section className="hreo-sec bg-center flex bg-no-repeat bg-home-hero bg-cover pt-20 md:pb-20 pb-6 items-end lg:items-center">
      <div className="container mx-auto justify-between items-center flex px-4">
        <div className="flex -mt-7">
          <div className="w-1/1 lg:w-1/2 pr-18">
            <h1 className="text-4xl md:text-6xl font-black text-darkBlue mb-4 animate__animated animate__fadeInDown animate__slow">
              Revolutionizing Patient Access to Vital Therapies
            </h1>

            {/* <hr className=" h-1.5 w-36 bg-brownCust mb-5 hidden sm:inline-block animate__animated animate__fadeInDown animate__slow" /> */}
            <p className="sm:text-lg text-md mt-4 text-darkBlue mb-8 pr-0 xl:pr-24 font-semibold animate__animated animate__fadeInUp animate__slow">
            At Medmonk, we strongly believe that patients receiving their medication without unnecessary delays is a collective win. {"It's"} a win for the patient, a win for the healthcare provider, and a win for the pharmaceutical brand. Together, we enhance the process by which patients stay on track with their treatment, enabling them to focus on their health and well-being.
            </p>
            <button
              type="button"
              className="hidden animate__animated animate__fadeInUp animate__slow text-white bg-gradient-to-b from-brownCust to-orangeCust hover:bg-gradient-to-br focus:outline-none font-medium text-md px-5 py-2.5 text-center me-2 mb-2 rounded-full animate__animated animate__fadeInDown"
            >
              Watch Video
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default HeroSection;
