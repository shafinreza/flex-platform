import type { ReactNode } from "react";

type StorefrontBadgeProps = {
  children: ReactNode;
  tone?: "green" | "cream" | "lime" | "dark";
  className?: string;
};

export function StorefrontBadge({
  children,
  tone = "green",
  className = "",
}: StorefrontBadgeProps) {
  return <span className={`sf-badge sf-badge-${tone} ${className}`}>{children}</span>;
}
