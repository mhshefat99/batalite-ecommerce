import { useState, useEffect } from "react";

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  const checkMobile = () => {
    // You can adjust the max width based on your requirements
    setIsMobile(window.innerWidth <= 768);
  };

  useEffect(() => {
    checkMobile(); // Initial check on mount

    // Add event listener for window resize
    window.addEventListener("resize", checkMobile);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []); // Empty dependency array ensures it runs once when the component mounts

  return isMobile;
};

export default useIsMobile;
