// Imports ////////////////////////////////////////////////////////////////////////
import CategoryFilter from "./CategoryFilter";
import PriceFilter from "./PriceFilter";
import ColorsFilter from "./ColorsFilter";
import categoryItems from "@/data/categoryItems";
import colorItems from "@/data/colorItems";
import priceFilterItems from "@/data/priceFilterItem";
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////

function ProductsFilter() {
  return (
    <div>
      <CategoryFilter options={categoryItems} />
      <ColorsFilter options={colorItems} />
      <PriceFilter options={priceFilterItems} />
    </div>
  );
}

export default ProductsFilter;
