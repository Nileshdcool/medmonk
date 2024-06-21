import TeamSection from "./TeamSection";
import aboutUsConstants from "@/Constants/AboutUs/aboutUsConstants";
const LeadershipTeam = () => {
  return (
    <section className="pb-16 xl:pb-20 overflow-hidden">
      <div className="container mx-auto">
        <div className="text-center max-w-4xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-darkOrange mb-2 px-4 xl:px-14 animate__ animate__fadeInDown animate__slow wow animated">
            Meet The Leadership Team
          </h2>
          <hr className="h-1.5 w-36 bg-brownCust mb-5 inline-block animate__ animate__fadeInDown animate__slow wow animated" />
          <div className="animate__ animate__fadeInDown animate__slow wow animated">
            <p className="text-lightGray">{aboutUsConstants.aboutLeadership}</p>
          </div>
        </div>
        <TeamSection />
      </div>
    </section>
  );
};
export default LeadershipTeam;
