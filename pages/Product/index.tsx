import Layout from "../Layout";
import { MetaProps } from "@/Models/MetaProps";
import PageNotFound from "@/components/PageNotFound";

const metaData: MetaProps = {
  title: "Product Page",
  description: "What are the products we have.",
  keywords: "medmonk, product",
};

const Product: React.FC = () => {
  return (
    <>
      <Layout metaData={metaData}>
        <PageNotFound />
      </Layout>
    </>
  );
};

export default Product;
