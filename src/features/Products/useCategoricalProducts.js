// Imports /////////////////////////////////////////////////////////////
import { useQuery } from "@tanstack/react-query";
import { getCategoricalProducts } from "@/services/productsApi";
import useQueryParams from "./useQueryParams";
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////

const useCategoricalProducts = function useCategoricalProducts({
  categoryName,
  limit,
}) {
  const { search, sortBy, minPrice, maxPrice, colors, page } = useQueryParams();

  const { data, isLoading, error } = useQuery({
    queryKey: [
      "getProducts",
      { search, categoryName, sortBy, minPrice, maxPrice, colors, page },
    ],
    queryFn: () =>
      getCategoricalProducts({
        search,
        category: categoryName,
        sortBy,
        minPrice,
        maxPrice,
        colors,
        limit: limit || 500,
        page,
      }),
    // Only fetch when there's atleast one filter :
    // enabled: !!category || !!search || !!sortBy || !!color || !!price,
    // Explicitly checking whether color is an empty array:
    // enabled: !!category || !!search || !!sortBy || (Array.isArray(colors) && colors.length > 0) || !!price,
  });
  const products = data?.products;
  const totalResults = data?.totalResults;
  return { products, totalResults, isLoading, error };
};

export default useCategoricalProducts;
