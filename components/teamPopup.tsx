// components/Popup.js
import React from "react";
import Image from "next/image";
import styles from "../styles/popup.module.css";
import popClose from "@/public/assets/pop-close.svg";

const Popup = ({
  isOpen,
  onClose,
  member,
}: {
  isOpen: boolean;
  onClose: () => void;
  member: TeamMember | undefined;
}) => {
  if (!isOpen) return null;
  if (!member) {
    onClose();
    return null;
  }
  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.popup} onClick={(e) => e.stopPropagation()}>
        <div className={styles.content}>
          <div className="card-box max-w-6xl bg-white rounded-md">
            <button className={styles.closeButton} onClick={onClose}>
              <Image
                alt=""
                loading="lazy"
                width="0"
                height="0"
                decoding="async"
                data-nimg="1"
                className="max-w-5"
                sizes="100vw"
                src={popClose}
              />
            </button>
            <div className="max-w-60 mx-auto">
              <Image
                alt=""
                loading="lazy"
                width="0"
                height="0"
                decoding="async"
                data-nimg="1"
                className=" max-w-full rounded-lg mb-5 shadow-2xl"
                sizes="100vw"
                style={{ width: "100%" }}
                src={member.image}
              />
              <h3 className="text-darkBlue mt-1 md:text-2xl text-xl font-extrabold">
                {member.name}
              </h3>
              <h4 className="text-darkBlue md:text-2xl text-md font-extrabold -mt-1">
                <small>{member.degree}</small>
              </h4>
              <p className="text-lightGray font-bold text-sm mt-1">
                {member.position}
              </p>
            </div>
            {member.descriptionParagraphs.map((para, index) => (
              <p key={index} className="text-lightGray my-3">
                {para}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
