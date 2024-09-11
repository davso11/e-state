import { useState, useEffect } from "react";

export const useScroll = () => {
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolling(scrollY > 0);
    addEventListener("scroll", onScroll);
    return () => removeEventListener("scroll", onScroll);
  }, []);

  return { isScrolling };
};
