// Imports //////////////////////////////////////////////////////////////////////
import { useState, useEffect } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import useQueryParams from "./useQueryParams";
//////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////

// ColorsFilter component ///////////////////////////////////////////////////////

function ColorsFilter({ options }) {
  const [colors, setColors] = useState(useQueryParams().colors);
  console.log(colors);

  const { setColors: setColorsParam } = useQueryParams();
  const handleColors = function handleColors(value) {
    // console.log(colors);
    setColors(
      (prevColors) =>
        prevColors.includes(value)
          ? prevColors.filter((c) => c !== value) // Remove the color if it exists
          : [...prevColors, value] // Add the color if it doesn't exist
    );
  };
  useEffect(() => {
    setColorsParam(colors);
  }, [colors]);
  return (
    <div className="px-2 py-2 bg-white border">
      <h3 className="text-md font-bold mb-2">Filter By colors:</h3>
      <ul className="flex flex-col gap-1">
        {options.map((color, index) => (
          <li key={index} className="flex gap-2 items-center">
            <Checkbox
              checked={colors?.includes(color.value)}
              onCheckedChange={() => handleColors(color.value)}
            />{" "}
            <label className="text-gray-800 text-sm font-semibold">
              {color.label}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ColorsFilter;
