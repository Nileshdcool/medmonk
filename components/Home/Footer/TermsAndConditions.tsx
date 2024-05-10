import { termsAndConditions } from '@/Constants/TermsAndConditions/termsAndConditions';
import React from 'react'; // Assuming types are in a separate file

const TermsAndConditions= () => {
    return (
        <div className="max-w-4xl mx-auto p-4 bg-white shadow-lg rounded-lg my-28 text-gray-700">
            <h1 className="text-2xl font-bold text-center mb-4 text-gray-800">{termsAndConditions.Title}</h1>
            <p>{termsAndConditions.Introduction}</p>
            <h2 className="text-lg font-semibold mt-6">Intellectual Property</h2>
            <p>{termsAndConditions.IntellectualProperty}</p>
            <h2 className="text-lg font-semibold mt-6">Use of Website and Services</h2>
            <p>{termsAndConditions.UseOfWebsiteAndServices}</p>
            <h2 className="text-lg font-semibold mt-6">Medical Information</h2>
            <p>{termsAndConditions.MedicalInformation}</p>
            <h2 className="text-lg font-semibold mt-6">Limitation of Liability</h2>
            <p>{termsAndConditions.LimitationOfLiability}</p>
            <h2 className="text-lg font-semibold mt-6">Changes to this Policy</h2>
            <p>{termsAndConditions.ChangesToPolicy}</p>
            <h2 className="text-lg font-semibold mt-6">Contact Us</h2>
            <p>{termsAndConditions.ContactInfo}  <span className="text-blue-700">
              <a href={`mailto:${termsAndConditions.ContactEmail}`}>
                {termsAndConditions.ContactEmail}
              </a>
            </span></p>
        </div>
    );
};

export default TermsAndConditions;
