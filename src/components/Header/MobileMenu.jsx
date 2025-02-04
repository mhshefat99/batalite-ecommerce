// Imports //////////////////////////////////////////////////
import { useState } from "react";
import { Menu } from "lucide-react";
import Logo from "../Logo";
import Sidebar from "../Sidebar";
import { NavLink } from "react-router-dom";
import { ChevronDown } from "lucide-react";
/////////////////////////////////////////////////////////////

function MobileMenu({ navItems }) {
  const [isOpen, setOpen] = useState(false);
  const [openCategories, setOpenCategories] = useState({}); // State to track open/close categories

  const handleSidebarOpen = () => {
    setOpen((prev) => !prev);
  };

  const handleToggle = (index) => {
    setOpenCategories((prevState) => ({
      ...prevState,
      [index]: !prevState[index], // Toggle the current category
    }));
  };

  return (
    <div className="relative">
      {/* Top Menu Bar */}
      <div className="flex justify-between items-center px-2 py-2 bg-gray-100">
        <Logo />
        <button
          onClick={handleSidebarOpen}
          className="p-2 rounded-md bg-gray-200 hover:bg-gray-300"
        >
          <Menu />
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 w-screen h-screen bg-gray-900 bg-opacity-50 z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
        }`}
      >
        <Sidebar isOpen={isOpen} onClose={handleSidebarOpen}>
          <nav className="flex flex-col items-start gap-5 ml-9">
            {navItems.map((navItem, navIndex) => {
              const isClickable = !!navItem.url;
              const isSubmenu = navItem.submenu.length > 0;
              const isCategoryOpen = openCategories[navIndex]; // Check if this category is open

              return (
                /**structure is => <div>
                                   {isClickable ? 
                                     <h3><span>menuTitle chevronBtn </span></h3>
                                     :
                                     <h3>menuTitle</h3>
                                   }
                                   **if the menuItem has submenu \)
                                    {isSubmenu && 
                                     <ul>
                                       <li>submenuTitle</li>
                                       <li>submenuTitle</li>
                                       <li>submenuTitle</li
                                     </ul>
                                   </div>
                                    }
                **/
                <div key={navIndex} className="w-full">
                  {isClickable ? (
                    <h3 className="text-md font-semibold text-gray-700 tracking-tight">
                      <NavLink to={navItem.url}>
                        <span className="flex items-center justify-between">
                          {navItem.title}
                          {isSubmenu && (
                            <button
                              onClick={(e) => {
                                e.preventDefault(); // Prevent navigation
                                handleToggle(navIndex);
                              }}
                              className="ml-2"
                            >
                              <ChevronDown />
                            </button>
                          )}
                        </span>
                      </NavLink>
                    </h3>
                  ) : (
                    <h3 className="text-md font-semibold text-gray-700 tracking-tight">
                      <span className="flex items-center justify-between">
                        {navItem.title}
                        {isSubmenu && (
                          <button
                            onClick={() => handleToggle(navIndex)}
                            className="ml-2"
                          >
                            <ChevronDown />
                          </button>
                        )}
                      </span>
                    </h3>
                  )}
                  {/* Submenu */}
                  {isSubmenu && isCategoryOpen && (
                    <ul className="bg-white border flex flex-col items-start gap-2 w-full pt-2 pb-4 shadow-sm">
                      {navItem.submenu.map((submenuItem, subIndex) => (
                        <li
                          key={subIndex}
                          className="text-gray-600 text-sm font-medium list-none"
                          onClick={() => {
                            setOpen(false); // Close sidebar
                            setOpenCategories({}); // Reset categories
                          }}
                        >
                          <NavLink to={submenuItem.url}>
                            {submenuItem.title}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              );
            })}
          </nav>
        </Sidebar>
      </div>
    </div>
  );
}

export default MobileMenu;
