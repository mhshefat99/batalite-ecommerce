// Imports //////////////////////////////////////////////////////////////
import { useSearchParams } from "react-router-dom";
/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////

// Implementing Hook ////////////////////////////////////////////////////
const useQueryParams = function useQueryParams() {
  const [searchParams, setSearchParams] = useSearchParams();

  // Getting values from params ------------------
  const search = searchParams.get("search") || "";
  const category = searchParams.get("category") || "";
  const sortBy = searchParams.get("sortBy") || "";
  const minPrice = searchParams.get("minPrice") || "";
  const maxPrice = searchParams.get("maxPrice") || "";

  // Suppose url format is : host/endpoint?color:red&color:blue :
  //   const colors = searchParams.getAll("color") || [];
  // Above method returns a array of color from the url : ["red","blue"];

  // Suppose url format is : host/endpoint?color:red,blue :
  // To retrieve from url like this :
  const colors = searchParams.get("color")?.split(",") || [];

  // Setting values into params -----------------------------
  const setQueryParams = function setQueryParams(field, value) {
    searchParams.set(field, value);
    setSearchParams(searchParams);
  };

  const setColors = function setColors(colors) {
    if (colors.length < 1) {
      setSearchParams((prev) => {
        prev.delete("colors");
        return prev;
      });
    } else {
      searchParams.set("colors", colors.join(","));
    }
    setSearchParams(searchParams);
  };

  const setPrice = function setPrice(option) {
    if (option.min === 0) {
      setSearchParams((prev) => {
        prev.delete("minPrice");
      });
      searchParams.set("maxPrice", option.max);
    }
    if (option.max === 0) {
      setSearchParams((prev) => {
        prev.delete("maxPrice");
      });
      searchParams.set("minPrice", option.min);
    }
    if (option.min !== 0 && option.max !== 0) {
      setQueryParams("minPrice", option.min);
      setQueryParams("maxPrice", option.max);
    }
    setSearchParams(searchParams);
  };

  // returning search params --------------------------
  return {
    search,
    category,
    sortBy,
    minPrice,
    maxPrice,
    colors,
    setQueryParams,
    setColors,
    setPrice,
  };
};

export default useQueryParams;
