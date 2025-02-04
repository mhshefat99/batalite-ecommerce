// Imports /////////////////////////////////////////////////////////////////
import { Button } from "@/components/ui/button";
import useQueryParams from "./useQueryParams";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////

// CategoryFilter component /////////////////////////////////////////////////
function CategoryFilter({ options }) {
  const { category, setQueryParams } = useQueryParams();
  const [open, setOpen] = useState(true);
  const [openCategories, setOpenCategories] = useState({}); // State to track open/close
  function handleToggle(index) {
    setOpenCategories((prevState) => ({
      ...prevState,
      [index]: !prevState[index], // Toggle the current category
    }));
  }

  return (
    <div className="border py-2 px-2 flex flex-col gap-2 bg-white">
      <div className="flex justify-between items-center">
        <h3 className="text-md font-bold">Shop By Categories</h3>
        <Button
          variant="ghost"
          className="text-md font-bold p-0 border w-max h-max"
          onClick={() => setOpen((open) => !open)}
        >
          {open ? "-" : "+"}
        </Button>
      </div>
      {open && (
        <div className="flex flex-col items-start space-y-1">
          {options.map((option, index) => {
            const isCategoryOpen = openCategories[index]; // Check if this category is open
            return (
              <div key={index}>
                <p className="flex items-center gap-1">
                  <span
                    className={`text-sm text-gray-700 ${
                      isCategoryOpen && "font-bold"
                    }`}
                  >
                    {option.category.label}
                  </span>
                  {option.subCategory && (
                    <span onClick={() => handleToggle(index)}>
                      <ChevronDown
                        size={16}
                        className={`cursor-pointer text-gray-700 ${
                          isCategoryOpen ? "rotate-180" : ""
                        }`}
                      />
                    </span>
                  )}
                </p>
                {option.subCategory && isCategoryOpen && (
                  <ul>
                    {option.subCategory.map((subCategory, index) => {
                      return (
                        <li key={index}>
                          <Button
                            variant="ghost"
                            value={category}
                            className={`p-0 w-max h-max py-1 px-2 text-sm text-gray-700
                              ${
                                subCategory.value === category
                                  ? "bg-gray-100 border"
                                  : ""
                              }`}
                            onClick={() =>
                              setQueryParams("category", subCategory.value)
                            }
                          >
                            {subCategory.label}
                          </Button>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default CategoryFilter;

{
  /* <Button
              variant="link"
              key={index}
              className={option.value === value && "bg-red-300"}
              // disabled={option.value === value}
              onClick={() => setQueryParams("category", option.value)}
            >
              {option.label}
            </Button> */
}
