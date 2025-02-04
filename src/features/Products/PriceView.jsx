// Imports ////////////////////////////////////////////////////////////////
import { cn } from "@/lib/utils";
///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////

function PriceView({ product, className }) {
  return (
    <div className={cn("", className)}>
      {product.prevPrice ? (
        <div className="flex gap-2 text-sm">
          <p className="font-bold text-[#6366F1]">{`$${product.price}`}</p>{" "}
          <span className="line-through  text-gray-500 text-xs font-normal">
            {`$${product.prevPrice}`}
          </span>
        </div>
      ) : (
        <p className="font-bold text-[#6366F1]">{`$${product.price}`}</p>
      )}
    </div>
  );
}

export default PriceView;
