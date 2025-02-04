// Imports ///////////////////////////////////////////////////////////////
import { cn } from "@/lib/utils";
//////////////////////////////////////////////////////////////////////////

function Sidebar({ children, className, isOpen, onClose }) {
  return (
    <div className="w-screen h-dvh bg-gray-900 bg-opacity-30 fixed inset-0">
      <div
        className={cn(
          `min-w-[75%] max-w-[85%] bg-white h-dvh px-2 transform transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } relative overflow-x-scroll`,
          className
        )}
      >
        <div className="text-right">
          <button className="border" onClick={onClose}>
            x
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}

export default Sidebar;
