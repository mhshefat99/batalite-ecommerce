import { NavLink } from "react-router-dom";
function NavItem({ navItem, isClickable, isSubmenu }) {
  return (
    <div className="relative group">
      {isClickable ? (
        <h3 className="text-md font-semibold text-gray-700 tracking-tight">
          <NavLink to={navItem.url}>{navItem.title}</NavLink>
        </h3>
      ) : (
        <h3 className="text-md font-semibold text-gray-700 tracking-tight">
          {navItem.title}
        </h3>
      )}
      {isSubmenu && (
        <ul className="absolute z-50 bg-white -left-10 hidden group-hover:flex flex-col gap-2 w-max px-4 pt-2 pb-4 shadow-sm">
          {navItem.submenu.map((submenuItem, subIndex) => {
            return (
              <li key={subIndex} className="text-gray-600 text-sm font-medium">
                <NavLink to={submenuItem.url}>{submenuItem.title}</NavLink>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default NavItem;
