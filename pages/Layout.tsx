import Meta from "@/components/Meta";
import { LayoutProps } from "@/Models/Post/LayoutProps";
const Layout: React.FC<LayoutProps> = ({ children, metaData }) => {
  return (
    <>
      <Meta {...metaData} />
      <main className="mb-auto">{children}</main>
    </>
  );
};
export default Layout;
