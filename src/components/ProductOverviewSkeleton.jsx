import React from "react";

const ProductOverviewSkeleton = () => {
  return (
    <div className="animate-pulse p-4">
      {/* Product Image Skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-300 h-80 w-full rounded"></div>

        {/* Product Details Skeleton */}
        <div className="flex flex-col gap-4">
          {/* Title Skeleton */}
          <div className="h-8 w-3/4 bg-gray-300 rounded"></div>

          {/* Price Skeleton */}
          <div className="h-6 w-1/4 bg-gray-300 rounded"></div>

          {/* Rating Skeleton */}
          <div className="h-4 w-1/2 bg-gray-300 rounded"></div>

          {/* Description Skeleton */}
          <div className="flex flex-col gap-2 mt-4">
            <div className="h-4 w-full bg-gray-300 rounded"></div>
            <div className="h-4 w-5/6 bg-gray-300 rounded"></div>
            <div className="h-4 w-2/3 bg-gray-300 rounded"></div>
          </div>

          {/* Button Skeleton */}
          <div className="mt-6">
            <div className="h-12 w-1/3 bg-gray-300 rounded"></div>
          </div>
        </div>
      </div>

      {/* Additional Details Section Skeleton */}
      <div className="mt-10">
        <div className="h-6 w-1/4 bg-gray-300 rounded mb-4"></div>
        <div className="flex flex-col gap-4">
          <div className="h-4 w-full bg-gray-300 rounded"></div>
          <div className="h-4 w-5/6 bg-gray-300 rounded"></div>
          <div className="h-4 w-4/5 bg-gray-300 rounded"></div>
        </div>
      </div>
    </div>
  );
};

export default ProductOverviewSkeleton;
