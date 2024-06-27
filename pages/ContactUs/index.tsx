import Layout from "../Layout";
import { GetServerSideProps } from "next";
import { getMetaTags } from "@/services/SeoService";
import { MetaProps } from "@/Interfaces/SEO/MetaProps";
import { DbCollections } from "@/Constants/DBCollections";
import ContactHero from "@/components/ContactUs/ContactHero";
import LetsContact from "@/components/ContactUs/LetsContact";

const ContactUs = ({ metaTags }: { metaTags: MetaProps }) => {
  return (
    <>
      <Layout metaData={metaTags}>
      {/* <ContactHero/> */}
      <LetsContact/>
      </Layout>
    </>
  );
};
export const getServerSideProps: GetServerSideProps = async (context) => {
  const meta: MetaProps | null = await getMetaTags(DbCollections.Collections.ContactUsPage);
  return { props: { metaTags: meta } };
};
export default ContactUs;
