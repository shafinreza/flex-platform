import type { Metadata } from "next";
import { ExternalLink, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact FLEX",
  description:
    "Contact FLEX about orders, products, wholesale and customer support.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <main className="bg-[#f6ead8] px-5 py-12 text-[#173b2f] md:px-8 md:py-16">
      <section className="mx-auto max-w-5xl rounded-[2rem] border border-[#173b2f]/10 bg-[#fffaf0] p-6 shadow-sm md:p-10">
        <p className="text-xs font-black uppercase tracking-[0.25em] text-[#6f855f]">
          Contact FLEX
        </p>

        <h1 className="mt-3 max-w-3xl text-5xl font-black leading-[0.92] tracking-[-0.06em] md:text-7xl">
          We&apos;re here to help.
        </h1>

        <p className="mt-5 max-w-2xl text-lg font-bold leading-8 text-[#31574a]">
          Questions about an order, the product, wholesale or working with
          FLEX? Send us a message and include your order number where relevant.
        </p>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          <a
            href="mailto:team@eatflex.uk"
            className="rounded-[1.75rem] bg-[#f6ead8] p-6 transition hover:-translate-y-1 hover:shadow-md"
          >
            <Mail size={28} />
            <h2 className="mt-5 text-2xl font-black">Email us</h2>
            <p className="mt-2 font-bold text-[#31574a]">
              team@eatflex.uk
            </p>
          </a>

          <a
            href="https://www.instagram.com/eatflex.uk/"
            target="_blank"
            rel="noreferrer"
            className="rounded-[1.75rem] bg-[#f6ead8] p-6 transition hover:-translate-y-1 hover:shadow-md"
          >
            <ExternalLink size={28} />
            <h2 className="mt-5 text-2xl font-black">Instagram</h2>
            <p className="mt-2 font-bold text-[#31574a]">@eatflex.uk</p>
          </a>
        </div>

        <div className="mt-8 rounded-[1.75rem] bg-[#173b2f] p-6 text-[#f8ead4]">
          <h2 className="text-2xl font-black">Customer support</h2>
          <p className="mt-2 max-w-2xl font-bold leading-7 text-[#f8ead4]/80">
            We aim to reply within two working days. Include your FLEX order
            number for the fastest response.
          </p>
        </div>
      </section>
    </main>
  );
}
