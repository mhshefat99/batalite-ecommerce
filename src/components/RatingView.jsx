// Imports /////////////////////////////////////////////////////////////////////
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function RatingView({ product, className }) {
  return (
    <div className={cn(`flex ${className}`)}>
      {Array.from({ length: 5 }).map((_, index) => (
        <Star
          fill={
            index < Math.floor(product.averageRating)
              ? "#6366F1"
              : "transparent"
          }
          strokeWidth={index < Math.floor(product.averageRating) ? 0 : 2}
          key={index}
          className={`h-4 w-4 ${
            index < Math.floor(product.averageRating)
              ? "text-red-600"
              : "text-gray-300"
          }`}
        />
      ))}
    </div>
  );
}

export default RatingView;
