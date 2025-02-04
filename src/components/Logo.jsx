// Imports //////////////////////////////////////////////////////////////
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////

function Logo({ className }) {
  return (
    <h3
      className={cn(
        "text-2xl md:text-3xl italic tracking-tight font-bold text-[#6366F1]",
        className
      )}
    >
      <Link to="/">BataLite</Link>
    </h3>
  );
}

export default Logo;
