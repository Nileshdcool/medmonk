import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from "@/components/Home/Header";
import HeroSection from "@/components/Home/HeroSection";
import ValuePropositions from "@/components/Home/ValuePropositions";
import PartnershipSection from "@/components/Home/PartnershipSection";
import LogoSlider from "@/components/Home/Footer/LogoSlider/LogoSlider";
import SuccessStories from "@/components/Home/SuccessStories";
import CallToAction from "@/components/Home/CallToAction";
import Footer from "@/components/Home/Footer/Footer";
import Layout from "./Layout";
import { MetaProps } from "@/Models/MetaProps";
import React, { useState, useEffect } from "react";
import Head from "next/head";
declare global {
  interface Window {
    WOW: any; // Define the type of the WOW property
  }
}
const metaData: MetaProps = {
  title: "Blogs Landing Page",
  description: "All the blogs from medmonk",
  keywords: "medmonk, blogs",
};

export default function Home() {
  useEffect(() => {
    const loadWow = async () => {
      // Load the wow.min.js script dynamically
      const script = document.createElement("script");
      script.src =
        "https://cdnjs.cloudflare.com/ajax/libs/wow/1.1.2/wow.min.js";
      script.async = true;
      document.body.appendChild(script);

      // Wait for the script to load before initializing WOW
      await new Promise((resolve) => {
        script.onload = resolve;
      });

      // Initialize WOW when the script is loaded
      new window.WOW().init();
    };

    loadWow();
  }, []);
  return (
    <Layout metaData={metaData}>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
      />
      <Header />
      <HeroSection />
      <ValuePropositions />
      <PartnershipSection />
      <LogoSlider />
      <SuccessStories />
      <CallToAction />
      <Footer />
    </Layout>
  );
}
