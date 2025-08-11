"use client";

import { useEffect, useState } from "react";

const useScroll = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    setScrollPosition(window.scrollY);

    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return scrollPosition;
};

export default useScroll;
