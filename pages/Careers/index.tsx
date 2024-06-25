import Layout from "../Layout";
import { GetServerSideProps } from "next";
import { getMetaTags } from "@/services/SeoService";
import PageNotFound from "@/components/PageNotFound";
import { MetaProps } from "@/Interfaces/SEO/MetaProps";

//import banner from "@/public/assets/map.png";
//import innovation from "@/public/assets/Home.png";


const Careers = ({ metaTags }: { metaTags: MetaProps }) => {
  return (
    <>
      <Layout metaData={metaTags}>
          <section className="pt-28 xl:pt-36 pb-16 xl:pb-20">
          <div className="text-center max-w-3xl mx-auto px-4">
              <h2
                className="text-4xl md:text-5xl font-bold text-darkOrange mb-2 px-4 xl:px-14 animate__ animate__fadeInDown animate__slow wow      animated"
                style={{ visibility: "visible" }}
              >
                Careers
              </h2>
              <hr
                className="h-1.5 w-36 bg-brownCust mb-5 inline-block animate__ animate__fadeInDown animate__slow wow      animated"
                style={{ visibility: "visible" }}
              />
            </div>
          </section>
      </Layout>
    </>
  );
};
export const getServerSideProps: GetServerSideProps = async (context) => {
  const meta: MetaProps | null = await getMetaTags("ServicesPage");
  return { props: { metaTags: meta } };
};
export default Careers;
