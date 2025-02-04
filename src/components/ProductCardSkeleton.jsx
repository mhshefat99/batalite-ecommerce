// ProductCardSkeleton.js
import React from "react";
import {
  Card,
  CardHeader,
  CardDescription,
  CardFooter,
} from "@/components/Card";

const ProductCardSkeleton = () => {
  return (
    <Card className="border border-gray-300 p-2 flex flex-col justify-between animate-pulse">
      {/* Skeleton for image */}
      <CardHeader className="relative overflow-hidden group border-b pb-2">
        <div className="w-full h-48 bg-gray-300"></div>
        <div className="absolute bottom-0 left-0 w-full h-12 bg-gray-200 transform translate-y-12 group-hover:translate-y-0"></div>
      </CardHeader>

      {/* Skeleton for description */}
      <CardDescription className="pb-2 pt-2">
        <div className="flex justify-end">
          <div className="h-4 w-16 bg-gray-300 rounded"></div>
        </div>
        <div className="mt-3 h-6 w-3/4 bg-gray-300 rounded"></div>
        <div className="mt-2 h-4 w-1/2 bg-gray-300 rounded"></div>
      </CardDescription>

      {/* Skeleton for footer */}
      <CardFooter>
        <div className="w-full h-10 bg-gray-300 rounded"></div>
      </CardFooter>
    </Card>
  );
};

export default ProductCardSkeleton;
