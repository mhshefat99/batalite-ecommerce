// Imports ///////////////////////////////////////////////////////////////////
import React from "react";
import { cn } from "@/lib/utils";
//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////

// Card component ////////////////////////////////////////////////////
const Card = React.forwardRef(({ children, className }, ref) => {
  return (
    <div className={cn(`relative`, className)} ref={ref}>
      {children}
    </div>
  );
});
Card.displayName = Card;

// CardHeader /////////////////////////////////////////////////////////
const CardHeader = React.forwardRef(({ children, className }, ref) => {
  return (
    <div className={cn(`relative w-full h-64`, className)} ref={ref}>
      {children}
    </div>
  );
});
CardHeader.displayName = CardHeader;

// CardDescription /////////////////////////////////////////////////////
const CardDescription = React.forwardRef(({ children, className }, ref) => {
  return (
    <div className={cn(``, className)} ref={ref}>
      {children}
    </div>
  );
});
CardDescription.displayName = CardDescription;

// CardFooter //////////////////////////////////////////////////////////
const CardFooter = React.forwardRef(({ children, className }, ref) => {
  return (
    <div className={cn(``, className)} ref={ref}>
      {children}
    </div>
  );
});
CardFooter.displayName = CardFooter;

export { Card, CardHeader, CardDescription, CardFooter };
