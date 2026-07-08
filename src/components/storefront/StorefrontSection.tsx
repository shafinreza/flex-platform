import type { ReactNode } from "react";

type StorefrontSectionProps = {
  eyebrow?: string;
  title?: string;
  intro?: string;
  children: ReactNode;
  className?: string;
};

export function StorefrontSection({
  eyebrow,
  title,
  intro,
  children,
  className = "",
}: StorefrontSectionProps) {
  return (
    <section className={`sf-section ${className}`}>
      {(eyebrow || title || intro) && (
        <div className="sf-section-header">
          {eyebrow ? <p className="sf-eyebrow">{eyebrow}</p> : null}
          {title ? <h2>{title}</h2> : null}
          {intro ? <p>{intro}</p> : null}
        </div>
      )}
      {children}
    </section>
  );
}
