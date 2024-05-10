import Layout from "../Layout";
import { GetServerSideProps } from "next";
import { getMetaTags } from "@/services/SeoService";
import PageNotFound from "@/components/PageNotFound";
import { MetaProps } from "@/Interfaces/SEO/MetaProps";

const AboutUs = ({ metaTags }: { metaTags: MetaProps }) => {
  return (
    <>
      <Layout metaData={metaTags}>
        <PageNotFound />
      </Layout>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const meta: MetaProps | null = await getMetaTags("AboutUsPage");
  return { props: { metaTags: meta } };
};

export default AboutUs;
