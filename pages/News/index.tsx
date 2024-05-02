import Layout from "../Layout";
import { GetServerSideProps } from "next";
import PostCard from "@/components/NewsCard";
import { getNews } from "@/services/NewsService";
import { getMetaTags } from "@/services/SeoService";
import { MetaProps } from "@/Interfaces/SEO/MetaProps";
import { NewsPageProps } from "@/Interfaces/News/NewsPageProps";

const NewsPage = ({ posts, metaData }: NewsPageProps) => {
  return (
    <Layout metaData={metaData}>
      <section className=" h-48 xl:h-60 bg-center flex bg-no-repeat bg-home-hero bg-cover items-center mt-16 xl:mt-20">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-black -mb-2 text-darkBlue animate__animated animate__fadeInDown animate__slow">
            {" "}
            News
          </h1>
          <hr className=" h-1.5 w-24 md:w-36 bg-brownCust inline-block animate__animated animate__fadeInDown animate__slow" />
        </div>
      </section>

      <div className="container mx-auto px-4 md:px-8 py-12 text-black">
        {posts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-col-3 gap-4 lg:gap-8">
            {posts.map((post) => (
              <PostCard key={post.HeaderTitle} post={post}></PostCard>
            ))}
          </div>
        ) : (
          <div className="flex justify-center items-center h-64">
            <div className="text-center p-5 border-2 border-gray-300 rounded-lg shadow-xl">
              <p className="text-xl md:text-2xl font-semibold text-gray-800">
                No news articles are available at the moment.
              </p>
              <p className="mt-2 text-gray-600">
                Check back later for the latest updates.
              </p>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const posts = await getNews();
  const serializedPosts = posts.map((post) => ({
    ...post,
    shortDescription: post.ShortDescription ? post.ShortDescription.substring(0, 100) + "..." : "...",
    articleDate:  new Date(post.ArticleDate).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }),
  }));
  const meta: MetaProps | null = await getMetaTags("NewsPage");
  return {
    props: { posts: serializedPosts, metaData: meta },
  };
};

export default NewsPage;
