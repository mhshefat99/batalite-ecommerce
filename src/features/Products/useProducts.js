// Imports /////////////////////////////////////////////////////////////
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "@/services/productsApi";
import useQueryParams from "./useQueryParams";
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////

const useProducts = function useProducts(params) {
  const { search, category, sortBy, minPrice, maxPrice, colors } =
    useQueryParams();

  const { data, isLoading, error } = useQuery({
    queryKey: [
      "getProducts",
      { search, category, sortBy, minPrice, maxPrice, colors },
    ],
    queryFn: () =>
      getProducts({
        search,
        category,
        sortBy,
        minPrice,
        maxPrice,
        colors,
        limit: params?.limit || 500,
      }),
    // Only fetch when there's atleast one filter :
    // enabled: !!category || !!search || !!sortBy || !!color || !!price,
    // Explicitly checking whether color is an empty array:
    // enabled: !!category || !!search || !!sortBy || (Array.isArray(colors) && colors.length > 0) || !!price,
  });
  return { data, isLoading, error };
};

export default useProducts;
