import Layout from "../Layout";
import { MetaProps } from "@/Models/MetaProps";
import PageNotFound from "@/components/PageNotFound";

const metaData: MetaProps = {
  title: "Privacy Policy Page",
  description: "Our Privacy Policy",
  keywords: "medmonk, privacy-policy",
};

const PrivacyPolicy: React.FC = () => {
  return (
    <>
      <Layout metaData={metaData}>
        <PageNotFound />
      </Layout>
    </>
  );
};

export default PrivacyPolicy;
