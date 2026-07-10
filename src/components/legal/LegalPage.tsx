import type { ReactNode } from "react";

export default function LegalPage({
  eyebrow,
  title,
  updated = "10 July 2026",
  children,
}: {
  eyebrow: string;
  title: string;
  updated?: string;
  children: ReactNode;
}) {
  return (
    <main className="bg-[#f6ead8] px-5 py-12 text-[#173b2f] md:px-8 md:py-16">
      <article className="mx-auto max-w-4xl rounded-[2rem] border border-[#173b2f]/10 bg-[#fffaf0] p-6 shadow-sm md:p-10">
        <p className="text-xs font-black uppercase tracking-[0.25em] text-[#6f855f]">
          {eyebrow}
        </p>

        <h1 className="mt-3 text-4xl font-black leading-[0.95] tracking-[-0.055em] md:text-6xl">
          {title}
        </h1>

        <p className="mt-4 text-sm font-bold text-[#6f855f]">
          Last updated: {updated}
        </p>

        <div className="legal-content mt-10 space-y-8 text-base leading-7 text-[#31574a]">
          {children}
        </div>
      </article>
    </main>
  );
}
