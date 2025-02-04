// Imports /////////////////////////////////////////////////////////////////////
import React from "react";
import { cn } from "@/lib/utils";
import { useState, createContext, useContext } from "react";
import { Button } from "./ui/button";
/////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////

// Implementing context /////////////////////////////////////////////////////////
const TabsContext = createContext();
const useTabsContext = () => {
  const context = useContext(TabsContext);
  if (!context) throw new Error("Can't use TabsContext outside Tabs component");
  return context;
};
/////////////////////////////////////////////////////////////////////////////////

const Tabs = React.forwardRef(
  ({ children, initialActiveTab, className }, ref) => {
    const [activeTab, setActiveTab] = useState(initialActiveTab);
    const handleTab = function handleTab(tabIndex) {
      setActiveTab((activeTab) =>
        tabIndex === activeTab ? activeTab : tabIndex
      );
    };
    return (
      <div className={cn("w-full h-full", className)} ref={ref}>
        <TabsContext.Provider value={{ activeTab, handleTab }}>
          {children}
        </TabsContext.Provider>
      </div>
    );
  }
);

Tabs.displayName = Tabs;

const TabsList = React.forwardRef(({ children, className }, ref) => {
  return (
    <div className={cn("w-full bg-white py-1 border-b", className)} ref={ref}>
      {children}
    </div>
  );
});

TabsList.displayName = TabsList;

const TabTrigger = React.forwardRef(
  ({ children, className, tabIndex }, ref) => {
    const { activeTab, handleTab } = useTabsContext();
    return (
      <Button
        variant="ghost"
        className={cn(
          `${
            activeTab === tabIndex ? "bg-gray-100 text-black" : "text-gray-600"
          }`,
          className
        )}
        ref={ref}
        onClick={() => handleTab(tabIndex)}
      >
        {children}
      </Button>
    );
  }
);

TabTrigger.displayName = TabTrigger;

const TabContent = React.forwardRef(
  ({ children, className, tabIndex }, ref) => {
    const { activeTab } = useTabsContext();
    if (tabIndex !== activeTab) return;
    return (
      <div className={cn("w-full", className)} ref={ref}>
        {children}
      </div>
    );
  }
);

TabContent.displayName = TabContent;
export { Tabs, TabsList, TabTrigger, TabContent };
