import Layout from "../Layout";
import { GetServerSideProps } from "next";
import { getMetaTags } from "@/services/SeoService";
import { MetaProps } from "@/Interfaces/SEO/MetaProps";

import ServiceHero from "@/components/Services/ServiceHero";
import PatientSupport from "@/components/Services/PatientSupport";
import ServiceIntegration from "@/components/Services/ServiceIntegration";
import ServiceAutomation from "@/components/Services/ServiceAutomation";
import { DbCollections } from "@/Constants/DBCollections";

const Services = ({ metaTags }: { metaTags: MetaProps }) => {
  return (
    <>
      <Layout metaData={metaTags}>
        <ServiceHero />
        <PatientSupport />
        <ServiceIntegration />
        <ServiceAutomation />
      </Layout>
    </>
  );
};
export const getServerSideProps: GetServerSideProps = async (context) => {
  const meta: MetaProps | null = await getMetaTags(DbCollections.Collections.ServicesPage);
  return { props: { metaTags: meta } };
};
export default Services;
