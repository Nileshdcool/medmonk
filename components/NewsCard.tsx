import { FunctionComponent } from "react";
import { NewsCardProps } from "@/Interfaces/News/NewsCardProps";

const PostCard: FunctionComponent<NewsCardProps> = ({ post }) => {
  return (
    <>
      <div className="flex flex-col border border-gray-200 border-solid bg-gray-50 rounded-xl overflow-hidden animate__animated animate__fadeIn animate__slow wow">
        <a
          href={post.redirectLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-shrink-0"
        >
          <img
            src={post.image}
            alt={post.headerTitle}
            className="h-60 xl:h-80 w-full object-cover"
          />
        </a>
        <div className="flex flex-col flex-grow px-4 py-6 xl:p-8">
          <h2 className="text-2xl xl:text-3xl font-semibold mb-3 ms:mb-4">
            <a
              href={post.redirectLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              {post.headerTitle}
            </a>
          </h2>
          <span className="text-gray-600 text-sm lg:text-md mb-4 lg:mb-6">
            {post.articleDate.toString()}
          </span>
          <div className="flex-grow">
            <p className="text-gray-900 text-sm xl:text-lg">{post.shortDescription}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostCard;
