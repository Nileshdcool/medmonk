import Meta from "@/components/Meta";
import Header from "@/components/Home/Header";
import { LayoutProps } from "@/Models/Post/LayoutProps";

const Layout: React.FC<LayoutProps> = ({ children, metaData }) => {
  return (
    <>
      <Meta {...metaData} />
      <Header />
      <main className="mb-auto">{children}</main>
    </>
  );
};
export default Layout;
