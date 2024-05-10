import Layout from "../Layout";
import { GetServerSideProps } from "next";
import { getMetaTags } from "@/services/SeoService";
import { MetaProps } from "@/Interfaces/SEO/MetaProps";
import TermsAndConditions from "@/components/Home/Footer/TermsAndConditions";

const TermsAndConditionsPage = ({ metaTags }: { metaTags: MetaProps }) => {
  return (
    <>
      <Layout metaData={metaTags}>
        <TermsAndConditions/>
      </Layout>
    </>
  );
};
export const getServerSideProps: GetServerSideProps = async (context) => {
  const meta: MetaProps | null = await getMetaTags("LegalStatementPage");
  return { props: { metaTags: meta } };
};
export default TermsAndConditionsPage;
