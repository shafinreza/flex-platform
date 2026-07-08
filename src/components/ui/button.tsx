"use client";

import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonProps = {
  children?: ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "ghost" | "outline" | "destructive";
  size?: "sm" | "md" | "lg" | "icon" | "icon-sm";
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className,
  ...props
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center rounded-full font-black transition hover:-translate-y-0.5 disabled:pointer-events-none disabled:opacity-50",
    size === "sm" && "min-h-10 px-4 text-sm",
    size === "md" && "min-h-12 px-6 text-sm",
    size === "lg" && "min-h-14 px-8 text-base",
    size === "icon" && "h-10 w-10 p-0",
    size === "icon-sm" && "h-8 w-8 p-0",
    variant === "primary" &&
      "bg-[#173b2f] text-[#f8ead4] hover:bg-[#102a22]",
    variant === "secondary" &&
      "bg-[#d9eb7c] text-[#173b2f] hover:bg-[#c9dd66]",
    variant === "ghost" &&
      "bg-transparent text-[#173b2f] hover:bg-[#173b2f]/5",
    variant === "outline" &&
      "border border-[#173b2f]/15 bg-white/40 text-[#173b2f] hover:bg-white/70",
    variant === "destructive" &&
      "bg-red-600 text-white hover:bg-red-700",
    className
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}

export default Button;
