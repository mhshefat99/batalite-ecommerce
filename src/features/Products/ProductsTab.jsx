// Imports ///////////////////////////////////////////////////////////////////
import { Tabs, TabsList, TabContent, TabTrigger } from "@/components/Tabs";
import useProducts from "./useProducts";
import ProductCard from "./ProductCard";
import ProductCardSkeleton from "@/components/ProductCardSkeleton";
//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////

function ProductsTab() {
  const { products, isLoading, error } = useProducts({ limit: 10 });
  return (
    <Tabs initialActiveTab="new-arrivals">
      <TabsList>
        <TabTrigger tabIndex="new-arrivals">New Arrivals</TabTrigger>
        <TabTrigger tabIndex="most-popular">Most Popular</TabTrigger>
      </TabsList>
      <TabContent
        tabIndex="new-arrivals"
        className="grid grid-cols-5 gap-x-2 gap-y-3 w-full"
      >
        {isLoading &&
          Array.from({ length: 10 }).map((_, index) => (
            <ProductCardSkeleton key={index} />
          ))}

        {error && <p>Error: {error.message || "Something went wrong"}</p>}
        {!isLoading &&
          !error &&
          Array.isArray(products) &&
          products.length === 0 && <p>No product found</p>}
        {!isLoading &&
          !error &&
          Array.isArray(products) &&
          products.length > 0 &&
          products
            // .slice(0, 10)
            .map((product, index) => (
              <ProductCard product={product} key={index} />
            ))}
      </TabContent>
      <TabContent
        tabIndex="most-popular"
        className="grid grid-cols-5 gap-x-2 gap-y-3"
      >
        {isLoading &&
          Array.from({ length: 10 }).map((_, index) => (
            <ProductCardSkeleton key={index} />
          ))}
        {error && <p>Error: {error.message || "Something went wrong"}</p>}
        {!isLoading &&
          !error &&
          Array.isArray(products) &&
          products.length === 0 && <p>No product found</p>}
        {!isLoading &&
          !error &&
          Array.isArray(products) &&
          products.length > 0 &&
          products
            .reverse()
            .map((product, index) => (
              <ProductCard product={product} key={index} />
            ))}
      </TabContent>
    </Tabs>
  );
}

export default ProductsTab;
