import Layout from "../Layout";
import { MetaProps } from "@/Models/MetaProps";
import PageNotFound from "@/components/PageNotFound";

const metaData: MetaProps = {
  title: "Legal Statement Page",
  description: "All the Legal Statements",
  keywords: "medmonk, legal-statements",
};

const LegalStatement: React.FC = () => {
  return (
    <>
      <Layout metaData={metaData}>
        <PageNotFound />
      </Layout>
    </>
  );
};

export default LegalStatement;
