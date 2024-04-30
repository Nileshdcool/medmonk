import Layout from "../Layout";
import { MetaProps } from "@/Models/MetaProps";
import PageNotFound from "@/components/PageNotFound";

const metaData: MetaProps = {
  title: "Cookies Page",
  description: "About cookies concents",
  keywords: "medmonk, cookies",
};

const Cookies: React.FC = () => {
  return (
    <>
      <Layout metaData={metaData}>
        <PageNotFound />
      </Layout>
    </>
  );
};

export default Cookies;
