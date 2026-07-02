import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type FlexButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
};

export default function FlexButton({
  children,
  variant = "primary",
  className,
  ...props
}: FlexButtonProps) {
  const styles = {
    primary:
      "bg-[#0B864E] text-white border-2 border-[#4C260F] shadow-[5px_5px_0_#4C260F] hover:translate-x-1 hover:translate-y-1 hover:shadow-none",
    secondary:
      "bg-[#EFB236] text-[#4C260F] border-2 border-[#4C260F] shadow-[5px_5px_0_#4C260F] hover:translate-x-1 hover:translate-y-1 hover:shadow-none",
    outline:
      "bg-white text-[#4C260F] border-2 border-[#4C260F] hover:bg-[#EFDFC7]",
  };

  return (
    <Button
      className={cn(
        "rounded-full px-8 py-6 text-base font-black uppercase tracking-[0.14em] transition",
        styles[variant],
        className
      )}
      {...props}
    >
      {children}
    </Button>
  );
}