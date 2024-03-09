import React from "react";

type T = {
  as: string;
  className: string;
  children: React.ReactNode;
};

export default function Text({ as, className, children }: Readonly<T>) {
  const Component: any = as || "div";

  return <Component className={`${className}`}>{children}</Component>;
}
