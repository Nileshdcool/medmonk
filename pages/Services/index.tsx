import Layout from "../Layout";
import { MetaProps } from "@/Models/MetaProps";
import PageNotFound from "@/components/PageNotFound";

const metaData: MetaProps = {
  title: "Services Page",
  description: "What are the services we offer",
  keywords: "medmonk, services",
};

const Services: React.FC = () => {
  return (
    <>
      <Layout metaData={metaData}>
        <PageNotFound />
      </Layout>
    </>
  );
};

export default Services;
