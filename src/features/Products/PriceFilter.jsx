// Imports ///////////////////////////////////////////////////////////////////
import useQueryParams from "./useQueryParams";
//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////

function PriceFilter({ options }) {
  const { minPrice, maxPrice, setPrice } = useQueryParams();

  function handleChecked(option) {
    console.log(minPrice, maxPrice);
    if (minPrice && minPrice === option.min) return true;
    if (maxPrice && maxPrice === option.max) return true;
  }

  return (
    <div className="px-2 py-2 bg-white border">
      <h3 className="text-md font-bold mb-2">Filter By Price:</h3>
      <fieldset className="flex flex-col gap-1">
        {options.map((option, index) => {
          return (
            <div key={index} className="flex items-center gap-2">
              <input
                key={index}
                type="radio"
                name="price-filter"
                checked={handleChecked(option)}
                onChange={() => setPrice(option)}
              />
              <label htmlFor="" className="text-gray-800 text-sm font-semibold">
                {option.label}
              </label>
            </div>
          );
        })}
      </fieldset>
    </div>
  );
}

export default PriceFilter;
