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
      <div className="container mx-auto px-8 py-12 text-black">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-col-3 gap-8">
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
