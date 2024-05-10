import { privacyPolicyData } from "@/Constants/PrivacyPolicy/privacyPolicyData";

const PrivacyPolicy = () =>
    {
        return ( <section className="max-w-4xl mx-auto p-4 bg-white shadow-lg rounded-lg my-28">
        <h1 className="text-2xl font-bold text-center mb-4 text-gray-800">
         {privacyPolicyData.Title}
        </h1>
        <p className="text-gray-700">
         {privacyPolicyData.Introduction}
        </p>
        <h2 className="text-lg font-semibold mt-6 mb-2 text-gray-800">
          Information We Collect
        </h2>
        <p className="text-gray-700">
          {privacyPolicyData.InformationWeCollect}
        </p>
        <h2 className="text-lg font-semibold mt-6 mb-2 text-gray-800">
          How We Use Your Information
        </h2>
        <p className="text-gray-700">
          {privacyPolicyData.HowWeUseInformation}
        </p>
        <h2 className="text-lg font-semibold mt-6 mb-2 text-gray-800">
          Cookies
        </h2>
        <p className="text-gray-700">{privacyPolicyData.Cookies}</p>
        <h2 className="text-lg font-semibold mt-6 mb-2 text-gray-800">
          Third-Party Disclosure
        </h2>
        <p className="text-gray-700">
          {privacyPolicyData.ThirdPartyDisclosure}
        </p>
        <h2 className="text-lg font-semibold mt-6 mb-2 text-gray-800">
          Security Measures
        </h2>
        <p className="text-gray-700">{privacyPolicyData.SecurityMeasures}</p>
        <h2 className="text-lg font-semibold mt-6 mb-2 text-gray-800">
          Changes to this Policy
        </h2>
        <p className="text-gray-700">
          {privacyPolicyData.ChangesToThePolicy}
        </p>
        <h2 className="text-lg font-semibold mt-6 mb-2 text-gray-800">
          Contact Us
        </h2>
        <p className="text-gray-700">
          {privacyPolicyData.ContactUs}{" "}
          <span className="text-blue-700">
            <a href={`mailto:${privacyPolicyData.ContactEmail}`}>
              {privacyPolicyData.ContactEmail}
            </a>
          </span>
        </p>
      </section>);
    }
    export default PrivacyPolicy;