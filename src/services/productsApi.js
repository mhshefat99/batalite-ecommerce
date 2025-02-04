// Imports //////////////////////////////////////////////////////////////////
import axios from "axios";
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////

// const BASE_URL = "https://batalite-api.glitch.me/products";
const BASE_URL = import.meta.env.VITE_BATALITE_BASE_URL;

const getProducts = async function (filters) {
  // Destructuring filters ---------------------
  const { search, category, limit, minPrice, maxPrice, colors, sortBy } =
    filters;

  // First get queryParams from the url , initially queryParams is = null ------------
  const queryParams = new URLSearchParams();
  // Using this queryParams we will construct a string ------------------

  // Appending fields to the string  ------------------------------------
  if (category) queryParams.append("subCategory", category);
  if (search) queryParams.append("search", search);
  if (sortBy) queryParams.append("sortBy", sortBy);
  if (minPrice) queryParams.append("price_gte", minPrice);
  if (maxPrice) queryParams.append("price_lte", maxPrice);
  if (limit) queryParams.append("_limit", limit);
  // if (colors && colors.length > 0)
  //   queryParams.append("colors", colors.join(","));

  // Build the final URL
  const url = `${BASE_URL}?${queryParams.toString()}`;
  console.log(url);

  // try {
  //   const res = await fetch(url);
  //   if (!res.ok) throw new Error(`Http Error! status: ${res.status} `);
  //   return await res.json();
  // } catch (error) {
  //   console.log(error.message);
  //   throw error;
  // }

  const response = await axios.get(url);
  return response.data;
};

const getProductDetails = async function (id) {
  const res = await axios.get(`${BASE_URL}/${id}`);
  console.log(res.data);
  return res.data;
};

const getCategoricalProducts = async function (filters = {}) {
  const { search, category, sortBy, minPrice, maxPrice } = filters;
  await console.log(category === "men");

  const queryParams = new URLSearchParams();
  if (category === "men" || category === "women" || category === "kids") {
    queryParams.append("category", category);
  } else {
    queryParams.append("subCategory", category);
    console.log("executed");
  }

  if (search) queryParams.append("search", search);
  if (sortBy) queryParams.append("sortBy", sortBy);
  if (minPrice) queryParams.append("price_gte", minPrice);
  if (maxPrice) queryParams.append("price_lte", maxPrice);

  const url = `${BASE_URL}?${queryParams.toString()}`;
  console.log(url); // For debugging; consider removing or replacing for production

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error; // Re-throw the error to handle it where this function is called
  }
};

export { getProducts, getProductDetails, getCategoricalProducts };

// Another colors implementation ---------------------------

// if (colors && colors.length > 0) {
//   colors.forEach((color) => queryParams.append("color", color));
// } else if (colors) {
//   queryParams.append("color", colors[0]);
// }
