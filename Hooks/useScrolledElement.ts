import React, { useEffect, useState } from "react";

export default function useScrolledElement(
  refElement: React.RefObject<HTMLElement | null>
) {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  useEffect(() => {
    const handler = () => {
      if (refElement.current) {
        setIsScrolled(window.scrollY >= refElement.current.clientHeight);
      }
    };
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, [refElement]);
  return { isScrolled };
}
