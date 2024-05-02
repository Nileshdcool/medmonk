import Layout from "../Layout";
import { GetServerSideProps } from "next";
import { MetaProps } from "@/Interfaces/SEO/MetaProps";
import PageNotFound from "@/components/PageNotFound";
import { getMetaTags } from "@/services/SeoService";

const LegalStatement = ({ metaTags }: { metaTags: MetaProps }) => {
  return (
    <>
      <Layout metaData={metaTags}>
        <PageNotFound />
      </Layout>
    </>
  );
};
export const getServerSideProps: GetServerSideProps = async (context) => {
  const meta: MetaProps | null = await getMetaTags("LegalStatementPage");
  return { props: { metaTags: meta } };
};
export default LegalStatement;