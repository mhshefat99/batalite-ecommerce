// Imports ///////////////////////////////////////////////////
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";
import useIsMobile from "@/hooks/useIsMobile";
import MaxWidthWrapper from "../MaxWidthWrapper";
import navItems from "@/data/navItemsUpdated";
import topbarItems from "@/data/topbarItems";
import { NavLink } from "react-router-dom";
//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////

function Header() {
  const isMobile = useIsMobile();
  return (
    <header className="border-b">
      <MaxWidthWrapper className="bg-white">
        {/* Topbar section-------------- */}
        <Topbar />
        {/* Navigation section---------- */}
        {isMobile ? (
          <MobileMenu navItems={navItems} />
        ) : (
          <DesktopMenu navItems={navItems} />
        )}
      </MaxWidthWrapper>
    </header>
  );
}

// Topbar component //////////////////////////////////////////////////
function Topbar() {
  return (
    <div className="hidden md:flex justify-end border-b px-4 py-2">
      <ul className="flex justify-between items-center gap-4">
        {topbarItems.map((item, index) => {
          const hasUrl = item.url ? true : false;
          if (hasUrl)
            return (
              <li key={index} className="text-sm font-semibold text-gray-700">
                <NavLink to={item.url}>{item.title}</NavLink>
              </li>
            );
          return (
            <li key={index} className="text-sm font-semibold text-gray-700">
              {item.title}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// Exporting Header component-----------------------------------------
export default Header;
