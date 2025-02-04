// Imports ////////////////////////////////////////////////////////////////////////
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import PriceFilter from "@/features/Products/PriceFilter";
import ProductCard from "@/features/Products/ProductCard";
import ProductCardSkeleton from "@/components/ProductCardSkeleton";
import Breadcrumb from "@/components/Breadcrumb";
import useCategoricalProducts from "@/features/Products/useCategoricalProducts";
import Grid from "@/components/Grid";
import priceFilterItems from "@/data/priceFilterItem";
import { useParams } from "react-router-dom";
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////

function CategoricalCollections() {
  let { categoryName } = useParams();
  const capitalizeCategoryName = categoryName
    .replace(/-/g, " ")
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
  console.log(categoryName);
  // Replace "mens" with "men" and "womens" with "women" in the categoryName
  if (
    categoryName !== "men" ||
    categoryName !== "women" ||
    categoryName !== "kids"
  ) {
    categoryName = categoryName
      ?.replace(/\bmens\b/, "men")
      ?.replace(/\bwomens\b/, "women");
  }

  const { data, isLoading, error } = useCategoricalProducts({ categoryName });
  return (
    <div className="px-4 bg-white">
      <MaxWidthWrapper>
        {/* Breadcrumb ----------------------------------------- */}
        <section id="breadcrumb" className="py-3 my-2 border">
          <Breadcrumb />
        </section>

        {/* Sidebar and Products container------------------- */}
        <section id="collections-main" className="flex justify-between gap-4">
          {/* Sidebar ------------------------------------------ */}
          <aside className="w-[250px] max-w-[350px] border self-start shrink-0">
            <PriceFilter options={priceFilterItems} />
          </aside>
          {/* Main--------------------------------------------- */}
          <div className="w-full">
            {isLoading && (
              <div className="w-full grid grid-cols-4 gap-x-2 gap-y-3">
                {Array.from({ length: 20 }).map((_, index) => (
                  <ProductCardSkeleton key={index} />
                ))}
              </div>
            )}
            {error && <p>Error: {error.message || "Something went wrong"}</p>}
            {!isLoading &&
              !error &&
              Array.isArray(data) &&
              data.length === 0 && <p>No product found</p>}
            {!isLoading && !error && Array.isArray(data) && data.length > 0 && (
              <div>
                <h2 className="text-xl font-bold text-gray-700">
                  {capitalizeCategoryName}
                </h2>
                <p>{`${data.length} items`}</p>
                <div>Top</div>
                <Grid
                  data={data}
                  render={(product, index) => (
                    <ProductCard product={product} key={index} />
                  )}
                />
              </div>
            )}
          </div>
        </section>
      </MaxWidthWrapper>
    </div>
  );
}

export default CategoricalCollections;
