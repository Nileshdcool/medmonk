import Layout from "../Layout";
import { getMetaTags } from "@/services/SeoService";
import PageNotFound from "@/components/PageNotFound";
import { MetaProps } from "@/Interfaces/SEO/MetaProps";

import { GetServerSideProps } from "next";
const Product = ({ metaTags }: { metaTags: MetaProps }) => {
  return (
    <>
      <Layout metaData={metaTags}>
        <PageNotFound />
      </Layout>
    </>
  );
};
export const getServerSideProps: GetServerSideProps = async (context) => {
  const meta: MetaProps | null = await getMetaTags("ProductPage");
  return { props: { metaTags: meta } };
};
export default Product;
