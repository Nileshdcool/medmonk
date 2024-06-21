import Image from "next/image";
import { useState } from "react";
import Popup from "@/components/teamPopup";
import aboutUsConstants from "@/Constants/AboutUs/aboutUsConstants";
const TeamSection = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedMember, setSelectedMember] = useState<TeamMember>();
  const togglePopup = (member: TeamMember) => {
    setSelectedMember(() => member);
    setIsPopupOpen(!isPopupOpen);
  };
  const onClose = () => {
    setIsPopupOpen(false);
  };
  return (
    <>
      <Popup isOpen={isPopupOpen} onClose={onClose} member={selectedMember} />
      <div className="pt-6 max-w-7xl mx-auto px-2 lg:px-2">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3">
          {aboutUsConstants.teamMembers.map((member, index) => (
            <div
              key={index}
              className="card-box bg-white rounded-md p-2 xl:p-6"
            >
              {member.image}
              <Image
                alt={member.name}
                loading="lazy"
                width="0"
                height="0"
                decoding="async"
                data-nimg="1"
                className="max-w-full rounded-lg mx-auto mb-5 shadow-2xl"
                sizes="100vw"
                style={{ width: "100%" }}
                src={member.image}
              />
              <h3 className="text-darkBlue mt-1 md:text-2xl text-xl font-extrabold">
                {member.name}
              </h3>
              {member.degree && (
                <h4 className="text-darkBlue md:text-2xl text-md font-extrabold -mt-1">
                  <small>{member.degree}</small>
                </h4>
              )}
              <p className="text-lightGray font-bold text-sm mt-1">
                {member.position}
              </p>
              <p className="text-lightGray my-3">{member.description}</p>
              <a
                href="javascript:void(0)"
                onClick={() => togglePopup(member)} // assuming togglePopup is defined to handle the popup
                className="text-darkBlue font-bold"
              >
                READ MORE
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TeamSection;
