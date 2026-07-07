import * as React from "react";
import { cn } from "@/lib/utils";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: string;
  size?: string;
};

export function Button({
  className,
  type = "button",
  variant,
  size,
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cn(
        "inline-flex items-center justify-center disabled:pointer-events-none disabled:opacity-50",
        variant === "ghost" && "bg-transparent hover:bg-black/5",
        size === "icon-sm" && "h-8 w-8 rounded-md p-0",
        className
      )}
      {...props}
    />
  );
}
