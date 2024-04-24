import Layout from '../Layout';
import { GetServerSideProps } from 'next';
import { MetaProps } from '@/Models/MetaProps';
import { getPosts } from '@/services/postsService';
import { PostPageProps } from '@/Models/Post/PostPageProps';


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
            <div key={post.headerTitle} className="flex flex-col bg-white rounded-xl shadow-xl overflow-hidden">
              <a href={post.redirectLink} target="_blank" rel="noopener noreferrer" className="flex-shrink-0">
                <img src={post.image} alt={post.headerTitle} className="h-72 w-full object-cover" />
              </a>
              <div className="flex flex-col flex-grow p-8">
                <h2 className="text-3xl font-bold mb-4">
                  <a href={post.redirectLink} target="_blank" rel="noopener noreferrer">{post.headerTitle}</a>
                </h2>
                <span className="text-gray-600 text-md mb-6">
                  {post.articleDate.toString()}
                </span>
                <div className="flex-grow">
                  <p className="text-gray-900 text-lg">
                    {post.shortDescription}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      </Layout>
    );
  };
  
export const getServerSideProps: GetServerSideProps = async (context) => {
  const posts = await getPosts();
  const serializedPosts = posts.map(post => ({
    ...post,
    shortDescription: post.shortDescription.substring(0,100) + "...",
    articleDate: post.articleDate.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
  }));
  return {
    props: { posts: serializedPosts },
  };
};

export default PostPage;
