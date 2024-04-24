import Meta from "@/components/Meta";
import { LayoutProps } from "@/Models/Post/LayoutProps";
const Layout: React.FC<LayoutProps> = ({ children, metaData }) => {
  return (
    <>
      <Meta {...metaData} />
      <div className="flex flex-col h-screen justify-between">
        <main className="mb-auto">{children}</main>
      </div>
    </>
  );
};
export default Layout;
