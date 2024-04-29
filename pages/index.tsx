import Layout from "./Layout";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MetaProps } from "@/Models/MetaProps";
import Footer from "@/components/Home/Footer/Footer";
import HeroSection from "@/components/Home/HeroSection";
import CallToAction from "@/components/Home/CallToAction";
import SuccessStories from "@/components/Home/SuccessStories";
import ValuePropositions from "@/components/Home/ValuePropositions";
import PartnershipSection from "@/components/Home/PartnershipSection";
import LogoSlider from "@/components/Home/Footer/LogoSlider/LogoSlider";

const metaData: MetaProps = {
  title: "Blogs Landing Page",
  description: "All the blogs from medmonk",
  keywords: "medmonk, blogs",
};
export default function Home() {
  return (
    <Layout metaData={metaData}>
      <HeroSection />
      <ValuePropositions />
      <PartnershipSection />
      <LogoSlider />
      <SuccessStories />
      <CallToAction />
      <Footer />
    </Layout>
  );
}
