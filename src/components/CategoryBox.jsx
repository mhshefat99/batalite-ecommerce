// Imports ///////////////////////////////////////////////////////////
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function CategoryBox({ children, className, categoryName, url }) {
  return (
    <div className={cn("relative h-[250px]", className)}>
      {categoryName && (
        <div className="inset-0 bg-black bg-opacity-20 absolute top-0 left-0 flex items-center justify-center">
          <Link to={url}>
            <p className="bg-white text-[#6366F1] text-xl tracking-tight font-bold px-3 py-2 rounded-sm shadow-sm">
              {categoryName}
            </p>
          </Link>
        </div>
      )}
      {children}
    </div>
  );
}

export default CategoryBox;
