import { FunctionComponent } from "react";
import { PostCardProps } from "@/Models/Post/PostCardProps";

const PostCard: FunctionComponent<PostCardProps> = ({ post }) => {
  return (
    <>
      <div className="flex flex-col bg-white rounded-xl shadow-xl overflow-hidden">
        <a
          href={post.redirectLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-shrink-0"
        >
          <img
            src={post.image}
            alt={post.headerTitle}
            className="h-72 w-full object-cover"
          />
        </a>
        <div className="flex flex-col flex-grow p-8">
          <h2 className="text-3xl font-bold mb-4">
            <a
              href={post.redirectLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              {post.headerTitle}
            </a>
          </h2>
          <span className="text-gray-600 text-md mb-6">
            {post.articleDate.toString()}
          </span>
          <div className="flex-grow">
            <p className="text-gray-900 text-lg">{post.shortDescription}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostCard;
