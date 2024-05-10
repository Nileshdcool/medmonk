import { cookiesPolicy } from "@/Constants/Cookies/cookiesPolicy"

const Cookies  = ()=>
    {
        return (
            <section className="max-w-4xl mx-auto p-4 bg-white shadow-lg rounded-lg text-gray-700 my-28">
            <h1 className="text-2xl font-bold text-center mb-4">
              {cookiesPolicy.Title}
            </h1>
            <p>{cookiesPolicy.Introduction}</p>
            <h2 className="text-lg font-semibold mt-6">What are Cookies?</h2>
            <p>{cookiesPolicy.WhatAreCookies}</p>
            <h2 className="text-lg font-semibold mt-6">How We Use Cookies</h2>
            <p>{cookiesPolicy.HowWeUseCookies}</p>
            <h2 className="text-lg font-semibold mt-6">
              Types of Cookies We Use
            </h2>
            <ul>
              <li><span className="text-gray-800 font-bold">{cookiesPolicy.TypesOfCookies.Essential.Name}: </span>{cookiesPolicy.TypesOfCookies.Essential.Description}</li>
              <li><span className="text-gray-800 font-bold">{cookiesPolicy.TypesOfCookies.Analytics.Name}: </span>{cookiesPolicy.TypesOfCookies.Analytics.Description}</li>
              <li><span className="text-gray-800 font-bold">{cookiesPolicy.TypesOfCookies.Personalization.Name}: </span>{cookiesPolicy.TypesOfCookies.Personalization.Description}</li>
            </ul>
            <h2 className="text-lg font-semibold mt-6">Managing Cookies</h2>
            <p>{cookiesPolicy.ManagingCookies}</p>
            <h2 className="text-lg font-semibold mt-6">Changes to this Policy</h2>
            <p>{cookiesPolicy.ChangesToPolicy}</p>
            <h2 className="text-lg font-semibold mt-6">Contact Us</h2>
            <p>{cookiesPolicy.ContactInfo}  <span className="text-blue-700">
                <a href={`mailto:${cookiesPolicy.ContactEmail}`}>
                  {cookiesPolicy.ContactEmail}
                </a>
              </span></p>
          </section>
        )
    }

    export default Cookies;