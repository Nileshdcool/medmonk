import Layout from "./Layout";
import "slick-carousel/slick/slick.css";
import { GetServerSideProps } from "next";
import "slick-carousel/slick/slick-theme.css";
import { getMetaTags } from "@/services/SeoService";
import { MetaProps } from "@/Interfaces/SEO/MetaProps";
import HeroSection from "@/components/Home/HeroSection";
import CallToAction from "@/components/Home/CallToAction";
import SuccessStories from "@/components/Home/SuccessStories";
import ValuePropositions from "@/components/Home/ValuePropositions";
import PartnershipSection from "@/components/Home/PartnershipSection";
import LogoSlider from "@/components/Home/Footer/LogoSlider/LogoSlider";


export default function Home({ metaTags }: { metaTags: MetaProps }) {
  return (
    <Layout metaData={metaTags}>
      <HeroSection />
      <ValuePropositions />
      <PartnershipSection />
      <LogoSlider />
      <SuccessStories />
      <CallToAction />
    </Layout>
  );
}
export const getServerSideProps: GetServerSideProps = async (context) => {
  const meta: MetaProps | null = await getMetaTags("HomePage");
  console.log("Metadata fetched for HomePage:", JSON.stringify(meta));
  return { props: { metaTags: meta } };
};