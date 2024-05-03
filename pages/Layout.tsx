import Meta from "@/components/Meta";
import Header from "@/components/Home/Header";
import Footer from "@/components/Home/Footer/Footer";
import { LayoutProps } from "@/Interfaces/LayoutProps";

const Layout: React.FC<LayoutProps> = ({ children, metaData }) => {
  return (
    <>
      <Meta {...metaData} />
      <Header />
      <main className="mb-auto">{children}</main>
      <Footer/>
    </>
  );
};
export default Layout;
