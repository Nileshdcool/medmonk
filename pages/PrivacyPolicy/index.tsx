import Layout from "../Layout";
import { GetServerSideProps } from "next";
import { getMetaTags } from "@/services/SeoService";
import { MetaProps } from "@/Interfaces/SEO/MetaProps";
import PrivacyPolicy from "@/components/Home/Footer/PrivacyPolicy";

const PrivacyPolicyPage = ({ metaTags }: { metaTags: MetaProps }) => {
  return (
    <>
      <Layout metaData={metaTags}>
       <PrivacyPolicy/>
      </Layout>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const meta: MetaProps | null = await getMetaTags("PrivacyPolicyPage");
  return { props: { metaTags: meta } };
};

export default PrivacyPolicyPage;
  