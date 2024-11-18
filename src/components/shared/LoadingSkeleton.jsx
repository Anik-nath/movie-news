import React from "react";

const LoadingSkeleton = () => {
  return (
    <div className="py-12 grid grid-cols-1 md:grid-cols-3 gap-x-8 animate-pulse">
      <div className="w-full h-[400px] bg-gray-300 rounded-md my-4"></div>

      <div className="md:col-span-2 space-y-4">
        <div className="h-8 bg-gray-300 rounded-md w-3/4"></div>
        <div className="h-6 bg-gray-300 rounded-md w-full"></div>
        <div className="h-6 bg-gray-300 rounded-md w-1/2"></div>
        <div className="h-6 bg-gray-300 rounded-md w-2/3"></div>
        <div className="h-6 bg-gray-300 rounded-md w-1/4"></div>
      </div>
    </div>
  );
};

export default LoadingSkeleton;
