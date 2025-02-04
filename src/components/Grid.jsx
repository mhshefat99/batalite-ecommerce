// Imports ///////////////////////////////////////////////////////////////
import { cn } from "@/lib/utils";
//////////////////////////////////////////////////////////////////////////

function Grid({ className, data, render }) {
  return (
    <div className={cn("grid grid-cols-4 gap-x-2 gap-y-3", className)}>
      {data.map(render)}
    </div>
  );
}

export default Grid;
