import { CookiesPolicyType } from "@/Interfaces/Coolies/CookiesPolicyType";

export const cookiesPolicy: CookiesPolicyType = {
  Title: "Medmonk Cookies Policy",
  Introduction:
    "This Cookies Policy explains how Medmonk uses cookies and similar technologies on our website.",
  WhatAreCookies:
    "Cookies are small text files stored on your device when visiting a website. They help us recognize your device and provide personalized features.",
  HowWeUseCookies:
    "We use cookies for various purposes, including authentication, analytics, and personalization.",
  TypesOfCookies: {
    Essential: {
      Name: "cookies",
      Description:
        "These cookies are essential for the website to function correctly.",
    },
    Analytics: {
      Name: "Analytics cookies",
      Description:
        "These cookies help us understand how visitors interact with our website.",
    },
    Personalization: {
      Name: "Personalization cookies",
      Description:
        "These cookies are used to personalize your experience based on your preferences.",
    },
  },
  ManagingCookies:
    "You can control cookies through your browser settings. As you know, disabling cookies may affect some website features.",
  ChangesToPolicy:
    "We reserve the right to modify this Cookies Policy at any time. Changes will be effective immediately upon posting on this page.",
  ContactInfo:
    "If you have any questions or concerns about our Cookies Policy, please get in touch with us at",
  ContactEmail: "Info@medmonk.com",
};
