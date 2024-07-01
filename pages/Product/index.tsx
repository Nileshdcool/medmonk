import Layout from "../Layout";
import "slick-carousel/slick/slick.css";
import { GetServerSideProps } from "next";
import "slick-carousel/slick/slick-theme.css";
import { getMetaTags } from "@/services/SeoService";
import { MetaProps } from "@/Interfaces/SEO/MetaProps";
import { DbCollections } from "@/Constants/DBCollections";
import ProductHero from "@/components/Product/ProductHero";
import CostReduction from "@/components/Product/CostReduction";
import DecisionMaking from "@/components/Product/DecisionMaking";
import ProductAdvancement from "@/components/Product/ProductAdvancement";
import ProductConnectivity from "@/components/Product/ProductConnectivity";


const Product = ({ metaTags }: { metaTags: MetaProps }) => {
  return (
    <>
      <Layout metaData={metaTags}>
        <ProductHero />
        <div className="container mx-auto px-4 md:px-8 py-12 text-black">
          <ProductConnectivity />
          <ProductAdvancement />
        </div>
        <DecisionMaking />
        <CostReduction />
      </Layout>
    </>
  );
};
export const getServerSideProps: GetServerSideProps = async (context) => {
  const meta: MetaProps | null = await getMetaTags(DbCollections.Collections.ProductPage);
  return { props: { metaTags: meta } };
};
export default Product;
