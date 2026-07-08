import Link from "next/link";
import type { ReactNode } from "react";

type StorefrontButtonProps = {
  href?: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "dark" | "light";
  size?: "sm" | "md" | "lg";
  className?: string;
};

export function StorefrontButton({
  href,
  children,
  variant = "primary",
  size = "md",
  className = "",
}: StorefrontButtonProps) {
  const classes = `sf-button sf-button-${variant} sf-button-${size} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return <button className={classes}>{children}</button>;
}
