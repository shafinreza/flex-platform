import { ReactNode } from "react";

/*
 * A tiny utility that mimics the behaviour of the popular `clsx`
 * library by concatenating class names and ignoring falsy values.
 * We avoid depending on external packages like `clsx` since they
 * aren't available in this environment. This helper accepts any
 * number of strings and returns a single space‑separated string.
 */
function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(" ");
}

export type SectionHeadingProps = {
  /** Optional eyebrow text displayed above the heading to provide context. */
  eyebrow?: string;
  /** Main heading copy. */
  title: ReactNode;
  /** Optional subtitle displayed below the title. */
  subtitle?: ReactNode;
  /** Additional classes for the container. */
  className?: string;
};

/**
 * Standardised section heading used across pages. It accepts eyebrow,
 * title and subtitle to build a visually consistent heading block. The
 * component automatically applies the brand typography sizing and colours.
 */
export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  className = "",
}: SectionHeadingProps) {
  const containerClasses = cn("space-y-3", className);
  return (
    <div className={containerClasses}>
      {eyebrow && (
        <p className="text-xs font-black uppercase tracking-[0.28em] text-[#6b7d2f]">
          {eyebrow}
        </p>
      )}
      <h2 className="text-4xl font-black leading-tight tracking-tight md:text-6xl">
        {title}
      </h2>
      {subtitle && (
        <p className="max-w-xl text-base md:text-lg text-[#31574a] leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}