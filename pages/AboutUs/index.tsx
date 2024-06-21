import React from "react";
import Layout from "../Layout";
import { GetServerSideProps } from "next";
import AsATeam from "@/components/AboutUs/AsATeam";
import { getMetaTags } from "@/services/SeoService";
import { MetaProps } from "@/Interfaces/SEO/MetaProps";
import OurJourney from "@/components/AboutUs/OurJourney";
import FoundingValues from "@/components/AboutUs/FoundingValues";
import LeadershipTeam from "@/components/AboutUs/LeadershipTeam";

const AboutUs = ({ metaTags }: { metaTags: MetaProps }) => {
  return (
    <>
      <Layout metaData={metaTags}>
        <AsATeam />
        <LeadershipTeam />
        <OurJourney />
        <FoundingValues />
      </Layout>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const meta: MetaProps | null = await getMetaTags("AboutUsPage");
  return { props: { metaTags: meta } };
};

export default AboutUs;
