import React from "react";

export type CustomElementTypeProps<T extends React.ElementType> = {
  as?: T;
  children: React.ReactNode;
} & React.ComponentPropsWithoutRef<T>;

export default function CustomElement<T extends React.ElementType = "div">({
  children,
  as,
  ...rest
}: CustomElementTypeProps<T>) {
  const Component = as || "div";
  return <Component {...rest}>{children}</Component>;
}
