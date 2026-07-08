import type { ReactNode } from "react";

type StorefrontContainerProps = {
  children: ReactNode;
  className?: string;
};

export function StorefrontContainer({
  children,
  className = "",
}: StorefrontContainerProps) {
  return <div className={`sf-container ${className}`}>{children}</div>;
}
