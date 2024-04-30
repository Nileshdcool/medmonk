import React from "react";
import { useRouter } from "next/router";

const PageNotFound: React.FC = () => {
    const router = useRouter();
  return (
    <div className="flex items-center justify-center w-full h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-800 md:text-9xl">404</h1>
        <p className="text-xl md:text-3xl font-semibold text-gray-700 mb-8">
          {"Oops! The page you're looking for isn't here."}
        </p>
        <p className="text-lg text-gray-600 mb-8">
          You might have the wrong address, or the page may have moved.
        </p>
        <button onClick={()=> {router.back()}} className="px-6 py-2 text-sm font-semibold rounded bg-blue-500 text-white hover:bg-blue-600 transition-colors">
            Back to Home
        </button>
      </div>
    </div>
  );
};

export default PageNotFound;
