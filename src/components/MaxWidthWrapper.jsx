// Imports ///////////////////////////////////////////////////////
import { cn } from "@/lib/utils";
//////////////////////////////////////////////////////////////////

function MaxWidthWrapper({ children, className }) {
  return <div className={cn("max-w-7xl mx-auto", className)}>{children}</div>;
}

export default MaxWidthWrapper;
