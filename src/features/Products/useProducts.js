// Imports /////////////////////////////////////////////////////////////
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "@/services/productsApi";
import useQueryParams from "./useQueryParams";
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////

// Limit items to fetch -----------
const useProducts = function useProducts(params) {
  // Getting limit from user to fetch limited number of results per call
  const { limit } = params;
  const { search, category, sortBy, minPrice, maxPrice, colors, page } =
    useQueryParams();

  const { data, isLoading, error } = useQuery({
    queryKey: [
      "getProducts",
      { search, category, sortBy, minPrice, maxPrice, colors, page },
    ],
    queryFn: () =>
      getProducts({
        search,
        category,
        sortBy,
        minPrice,
        maxPrice,
        colors,
        page,
        limit: limit || 500,
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

export default useProducts;
