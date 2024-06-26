import aboutUsConstants from "@/Constants/AboutUs/aboutUsConstants";

const AsATeam = () =>
    {
        return (<section className="pt-28 xl:pt-36 pb-16 xl:pb-20 overflow-hidden">
            <div className="container mx-auto">
              <div className="text-center max-w-7xl max-w- mx-auto px-4">
                <h2 className="text-4xl md:text-5xl font-bold text-darkOrange mb-2 px-4 xl:px-14 animate__ animate__fadeInDown animate__slow wow animated">MedMonk As A Team</h2>
                <hr className="h-1.5 w-36 bg-brownCust mb-5 inline-block animate__ animate__fadeInDown animate__slow wow animated"/>
                <div className="animate__ animate__fadeInDown animate__slow wow animated text-justify">
                  {
                    aboutUsConstants.asATeamParagraphs.map((para, index)=><p key={index} className="mb-5 text-lightGray">{para}</p>)
                  }
                  <p></p>
                </div>
              </div>
            </div>
          </section>)
    }
    export default AsATeam;