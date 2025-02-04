// Imports ///////////////////////////////////////////////////////////////////
import Logo from "../Logo";
import UserProfile from "@/features/Authentication/UserProfile";
import NavItem from "./NavItem";
import { Link } from "react-router-dom";
import { ShoppingBag } from "lucide-react";
import { useSelector } from "react-redux";
import { getTotalCartQuantity } from "@/features/Cart/cartSlice";

//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////

// DesktopMenu component /////////////////////////////////////////////////////
function DesktopMenu({ navItems }) {
  const totalCartQuantity = useSelector(getTotalCartQuantity);

  return (
    <div className="flex justify-between items-center py-3 px-2 md:px-4">
      {/* Logo section----------------- --- */}
      <div>
        <Logo />
      </div>
      {/* Nav section------------------ --- */}
      <nav className="flex justify-between items-center gap-8 ml-9">
        {navItems.map((navItem, navIndex) => {
          const isClickable = navItem.url ? true : false;
          const isSubmenu = navItem.submenu.length > 0;
          return (
            <NavItem
              key={navIndex}
              navItem={navItem}
              isClickable={isClickable}
              isSubmenu={isSubmenu}
            />
          );
        })}
      </nav>
      {/* Right section -- */}
      <div className="flex items-center gap-4">
        {/* Cart button ---------------------------- */}
        <Link to="/cart">
          <div className="border px-2 py-1 flex items-center gap-2">
            <ShoppingBag />
            <div>
              <p className="text-xs font-semibold">
                <span className="text-[#6366F1] font-bold">
                  {totalCartQuantity}
                </span>{" "}
                Items
              </p>
              <p className="text-sm font-bold">Cart</p>
            </div>
          </div>
        </Link>
        {/* Profile button----------------------------- */}
        <UserProfile />
      </div>
    </div>
  );
}

export default DesktopMenu;
