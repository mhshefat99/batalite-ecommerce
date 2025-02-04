// Imports /////////////////////////////////////////////////////////////
import { useQuery } from "@tanstack/react-query";
import { getCategoricalProducts } from "@/services/productsApi";
import useQueryParams from "./useQueryParams";
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////

const useCategoricalProducts = function useCategoricalProducts({
  categoryName,
}) {
  const { search, sortBy, minPrice, maxPrice, colors } = useQueryParams();

  const { data, isLoading, error } = useQuery({
    queryKey: [
      "getProducts",
      { search, categoryName, sortBy, minPrice, maxPrice, colors },
    ],
    queryFn: () =>
      getCategoricalProducts({
        search,
        category: categoryName,
        sortBy,
        minPrice,
        maxPrice,
        colors,
      }),
    // Only fetch when there's atleast one filter :
    // enabled: !!category || !!search || !!sortBy || !!color || !!price,
    // Explicitly checking whether color is an empty array:
    // enabled: !!category || !!search || !!sortBy || (Array.isArray(colors) && colors.length > 0) || !!price,
  });
  return { data, isLoading, error };
};

export default useCategoricalProducts;
