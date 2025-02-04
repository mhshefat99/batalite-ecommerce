// Imports ////////////////////////////////////////////////////////////////////////
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import ProductsFilter from "@/features/Products/ProductsFilter";
import ProductCard from "@/features/Products/ProductCard";
import ProductCardSkeleton from "@/components/ProductCardSkeleton";
import Breadcrumb from "@/components/Breadcrumb";
import useProducts from "@/features/Products/useProducts";
import Grid from "@/components/Grid";
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////

function Collections() {
  const { data, isLoading, error } = useProducts();
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
            <ProductsFilter />
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
              data.length === 0 && (
                <p className="text-center text-2xl font-bold">
                  No product found
                </p>
              )}
            {!isLoading && !error && Array.isArray(data) && data.length > 0 && (
              <div>
                <h2 className="text-xl font-bold text-gray-700">All Shoes</h2>
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

export default Collections;
