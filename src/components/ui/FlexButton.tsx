import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type FlexButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
};

export default function FlexButton({
  children,
  variant = "primary",
  className,
  ...props
}: FlexButtonProps) {
  const styles = {
    primary: "bg-[#6f855f] text-white border-[#6f855f] hover:bg-[#627756]",
    secondary: "bg-[#0f1720] text-white border-[#0f1720]",
    outline: "bg-white text-[#0f1720] border-[rgba(15,23,32,.35)]",
    ghost: "bg-transparent text-[#0f1720] border-[rgba(15,23,32,.18)]",
  };

  return (
    <Button
      className={cn(
        "inline-flex h-auto items-center justify-center gap-2 rounded-[10px] border px-4 py-3 text-xs font-bold uppercase tracking-[0.12em]",
        styles[variant],
        className
      )}
      {...props}
    >
      {children}
    </Button>
  );
}
