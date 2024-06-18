// components/Popup.js
import React from 'react';
import Image from "next/image";
import styles from '../styles/popup.module.css';
import teamMember from "@/public/assets/team-member.jpg";
import popClose from "@/public/assets/pop-close.svg";

const Popup = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

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
                    <div className='max-w-60 mx-auto'>
                        <Image
                            alt=""
                            loading="lazy"
                            width="0"
                            height="0"
                            decoding="async"
                            data-nimg="1"
                            className=" max-w-full rounded-lg mb-5 shadow-2xl"
                            sizes="100vw"
                            src={teamMember}
                        />
                        <h3 className="text-darkBlue mt-1 md:text-2xl text-xl font-extrabold">ASHAR HASAN R.</h3>
                        <h4 className="text-darkBlue md:text-2xl text-md font-extrabold -mt-1"><small>Ph, MBA.</small></h4>
                        <p className="text-lightGray font-bold text-sm mt-1">Chief Executive Officer</p>
                    </div>
                    <p className="text-lightGray my-3">Transitioned from Chief Business Development Officer to Chief Executive Officer, bringing over a decade of experience in strategic innovation and business growth at Medmonk. Passionate about revolutionizing access and affordability, Ashar leads Medmonk, a technology-driven company specializing in patient support services for the treatment of complex chronic rare diseases. As a dedicated pharmacist, Ashar consistently places patients first, ensuring that all strategies and initiatives enhance both patient and provider experiences. </p>
                    <p className="text-lightGray my-3">As the visionary founder and CEO of Premier Specialty Infusion (PSI), Ashar transformed the specialty infusion services landscape nationwide. Previously, co-founded and led Envoy Innovations, empowering healthcare providers with cutting-edge technology to analyze treatment outcomes. At Walgreens/OptionCare, led the Immunoglobulin Program to national prominence following the acquisition of Rx Solutions, where Ashar served as CEO/President and guided it into becoming the fastest-growing specialty injectable provider. Early leadership roles at Crescent Healthcare and Apria Healthcare provided a strong foundation in operational and strategic expertise. </p>
                    <p className="text-lightGray my-3">In addition to leadership roles, Ashar has authored numerous publications related to treatment modalities for complex chronic therapies, further contributing to the field. Combining visionary thinking and industry expertise, Ashar consistently delivers exceptional results and advances specialty drug therapy delivery, always with a patient-first approach.</p>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Popup;
