// Imports ////////////////////////////////////////////////////////////////////////
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import PriceFilter from "@/features/Products/PriceFilter";
import ProductCard from "@/features/Products/ProductCard";
import ProductCardSkeleton from "@/components/ProductCardSkeleton";
import Breadcrumb from "@/components/Breadcrumb";
import useCategoricalProducts from "@/features/Products/useCategoricalProducts";
import priceFilterItems from "@/data/priceFilterItem";
import useQueryParams from "@/features/Products/useQueryParams";
import Pagination from "@/features/Products/Pagination";
import { useParams } from "react-router-dom";
import Grid from "@/components/Grid";

////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////

const limit = 12;

function CategoricalCollections() {
  const { page, setPage } = useQueryParams();
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

  const { products, totalResults, isLoading, error } = useCategoricalProducts({
    categoryName,
    limit,
  });
  console.log(Math.ceil(totalResults / limit));
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
              Array.isArray(products) &&
              products.length === 0 && <p>No product found</p>}
            {!isLoading &&
              !error &&
              Array.isArray(products) &&
              products.length > 0 && (
                <div>
                  <h2 className="text-xl font-bold text-gray-700">
                    {capitalizeCategoryName}
                  </h2>
                  <p>{`${totalResults} items`}</p>
                  <div>Top</div>
                  <Grid
                    data={products}
                    render={(product, index) => (
                      <ProductCard product={product} key={index} />
                    )}
                  />
                </div>
              )}
            <Pagination
              activePage={page}
              totalPages={Math.ceil(totalResults / limit)}
              handlePrevious={() => setPage(Math.max(page - 1, 1))}
              handlePageNumClick={setPage}
              handleNext={() => setPage(Math.min(page + 1, totalResults))}
            />
          </div>
        </section>
      </MaxWidthWrapper>
    </div>
  );
}

export default CategoricalCollections;
