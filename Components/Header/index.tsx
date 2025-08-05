"use client";
import { useRef } from "react";
import HeaderMenu from "./HeaderMenu";
import HeaderTop from "./HeaderTop";
import useScrolledElement from "@/Hooks/useScrolledElement";
import HeaderContextProvider from "./Contexts/HeaderContext";
import HeaderAside from "./HeaderAside";

export default function Header() {
  const ref = useRef<HTMLElement | null>(null);
  const { isScrolled } = useScrolledElement(ref);

  return (
    <HeaderContextProvider>
      <header ref={ref} className="relative z-30">
        <HeaderTop />
        <HeaderMenu isScrolled={isScrolled} />
        <HeaderAside />
      </header>
    </HeaderContextProvider>
  );
}
