import { useEffect, useState } from "react";

export default function useWindowScrolled() {
  const [scrolled, setIsScrolled] = useState<boolean>(false);
  useEffect(() => {
    const handler = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);
  return { scrolled };
}
