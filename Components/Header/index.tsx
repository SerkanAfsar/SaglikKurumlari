"use client";
import { useRef } from "react";
import HeaderMenu from "./HeaderMenu";
import HeaderTop from "./HeaderTop";
import useScrolledElement from "@/Hooks/useScrolledElement";

export default function Header() {
  const ref = useRef<HTMLElement | null>(null);
  const { isScrolled } = useScrolledElement(ref);

  return (
    <header ref={ref} className="relative z-30">
      <HeaderTop />
      <HeaderMenu isScrolled={isScrolled} />
    </header>
  );
}
