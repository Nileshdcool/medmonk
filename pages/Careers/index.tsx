import Layout from "../Layout";
import JobList from "@/components/Career/JobList";
import { MetaProps } from "@/Interfaces/SEO/MetaProps";
import { getMetaTags } from "@/services/SeoService";
import { GetServerSideProps } from "next";


const Careers = ({ metaTags }: { metaTags: MetaProps }) => {
  return (
    <Layout metaData={metaTags}>
      <div id="careerBody" className="mt-28">
        <JobList />
      </div>
    </Layout>
  );
};
export const getServerSideProps: GetServerSideProps = async (context) => {
  const meta: MetaProps | null = await getMetaTags("CareerPage");
  return { props: { metaTags: meta } };
};
export default Careers;
