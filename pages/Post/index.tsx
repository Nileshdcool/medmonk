import Layout from "../Layout";
import { GetServerSideProps } from "next";
import PostCard from "@/components/PostCard";
import { MetaProps } from "@/Models/MetaProps";
import { getPosts } from "@/services/postsService";
import { PostPageProps } from "@/Models/Post/PostPageProps";

const metaData: MetaProps = {
  title: "Blogs Landing Page",
  description: "All the blogs from medmonk",
  keywords: "medmonk, blogs",
};

const PostPage = ({ posts }: PostPageProps) => {
  return (
    <Layout metaData={metaData}>
      <section className=" h-48 xl:h-60 bg-center flex bg-no-repeat bg-home-hero bg-cover items-center mt-16 xl:mt-20">
        <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-black -mb-2 text-darkBlue animate__animated animate__fadeInDown animate__slow"> News</h1>
            <hr className=" h-1.5 w-24 md:w-36 bg-brownCust inline-block animate__animated animate__fadeInDown animate__slow" />
        </div>
      </section>

      <div className="container mx-auto px-4 md:px-8 py-12 text-black">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-col-3 gap-4 lg:gap-8">
          {posts.map((post) => (
            <PostCard key={post.headerTitle} post={post}></PostCard>
          ))}
        </div>
      </div>
    </Layout>

    
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const posts = await getPosts();
  const serializedPosts = posts.map((post) => ({
    ...post,
    shortDescription: post.shortDescription.substring(0, 100) + "...",
    articleDate: post.articleDate.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }),
  }));
  return {
    props: { posts: serializedPosts },
  };
};

export default PostPage;
