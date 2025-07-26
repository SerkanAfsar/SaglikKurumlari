import { cn } from "@/utils";
import Link from "next/link";
import React from "react";

export type CustomLinkButtonProps = React.ComponentPropsWithoutRef<
  typeof Link
> & {
  linkType: "primary" | "secondary";
};

const CustomLinkButton = React.forwardRef<
  HTMLAnchorElement,
  CustomLinkButtonProps
>(({ href, linkType, className, children, ...rest }, ref) => {
  return (
    <Link
      ref={ref}
      href={href}
      {...rest}
      className={cn(
        "flexCenter px-6 py-3",
        className && className,
        linkType == "primary" ? "bg-primary" : "bg-secondary",
      )}
    >
      {children}
    </Link>
  );
});

CustomLinkButton.displayName = "CustomLinkButton";

export default CustomLinkButton;
