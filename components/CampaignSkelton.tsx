import React from 'react';

const CampaignSkelton = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-white">
        <div className="animate-pulse bg-gray-300 shadow-lg rounded-lg overflow-hidden w-full md:max-w-4xl">
          <div className="h-56 bg-gray-200 w-full"></div>
          <div className="p-10 space-y-4">
            <div className="h-10 bg-gray-200 rounded"></div>
            <div className="h-10 bg-gray-200 rounded"></div>
            <div className="h-10 bg-gray-200 rounded"></div>
            <div className="h-10 bg-gray-200 rounded"></div>
            <div className="h-10 bg-gray-200 rounded"></div>
            <div className="h-12 bg-blue-600 rounded-md w-1/3 mx-auto text-center pt-3">Loading...</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CampaignSkelton;
