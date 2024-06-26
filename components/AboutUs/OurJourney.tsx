import aboutUsConstants from "@/Constants/AboutUs/aboutUsConstants";

const OurJourney = () =>
    {
        return (<section className="pb-16 xl:pb-20 overflow-hidden">
            <div className="container mx-auto">
              <div className="text-center mx-auto px-4">
                <h2 className="text-4xl md:text-5xl font-bold text-darkOrange mb-2 px-4 xl:px-14 animate__ animate__fadeInDown animate__slow wow animated">Our Journey</h2>
                <hr className="h-1.5 w-36 bg-brownCust mb-5 inline-block animate__ animate__fadeInDown animate__slow wow animated"/>
              </div>
              <div className="max-w-7xl mx-auto pt-4 xl:pt-8 px-6 lg:px-0">
                <ul className="block md:grid grid-cols-12 items-center align-middle text-center gap-3 journy-step text-sm text-lightGray">
                 {aboutUsConstants.journeyPaths.map((path, index)=><li key={index}>{path}</li>)}
                </ul>
              </div>
            </div>
          </section>)
    }

    export default OurJourney;