import Layout from "../Layout";
import { MetaProps } from "@/Models/MetaProps";
import PageNotFound from "@/components/PageNotFound";

const metaData: MetaProps = {
    title: "About Us Page",
    description: "Who we are and what we do.",
    keywords: "medmonk, about-us",
  };
  
const AboutUs: React.FC = () => {
return (
    <>
    <Layout metaData={metaData}>
    <PageNotFound/>
    </Layout>   
    </>
);
}

export default AboutUs;