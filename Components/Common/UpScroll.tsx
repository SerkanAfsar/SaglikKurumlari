"use client";
import useWindowScrolled from "@/Hooks/useWindowScrolled";
import { cn } from "@/utils";
import { CircleArrowUp } from "lucide-react";

export default function UpScroll() {
  const { scrolled } = useWindowScrolled();

  if (scrolled) {
    return (
      <CircleArrowUp
        size={50}
        color="#fff"
        onClick={() => {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }}
        className={cn(
          "fill-secondary animate-animateFadeIn fixed right-5 bottom-5 z-10 block cursor-pointer transition-all",
        )}
      />
    );
  }

  return null;
}
