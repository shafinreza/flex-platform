import Link from "next/link";
import { ExternalLink, Mail } from "lucide-react";

const footerGroups = [
  {
    title: "Shop",
    links: [
      { label: "Shop FLEX", href: "/shop" },
      { label: "Natural Smooth", href: "/products/natural-smooth-510g" },
      { label: "Bundles", href: "/shop" },
    ],
  },
  {
    title: "Help",
    links: [
      { label: "Contact", href: "/contact" },
      { label: "Returns & Refunds", href: "/returns" },
      { label: "FAQ", href: "/#faq" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms & Conditions", href: "/terms" },
      { label: "Cookie Policy", href: "/cookies" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#111111] px-5 py-14 text-white lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.3fr_1fr_1fr_1fr]">
        <div>
          <h2 className="text-4xl font-black tracking-[-0.05em]">FLEX</h2>

          <p className="mt-4 max-w-sm leading-7 text-white/65">
            Natural peanut butter made from 100% roasted peanuts. No palm oil.
            No added sugar.
          </p>

          <div className="mt-6 flex gap-3">
            <a
              href="mailto:team@eatflex.uk"
              className="grid h-11 w-11 place-items-center rounded-full border border-white/15 text-white/75 transition hover:bg-white hover:text-black"
              aria-label="Email FLEX"
            >
              <Mail size={18} />
            </a>

            <a
              href="https://www.instagram.com/eatflex.uk/"
              target="_blank"
              rel="noreferrer"
              className="grid h-11 w-11 place-items-center rounded-full border border-white/15 text-white/75 transition hover:bg-white hover:text-black"
              aria-label="FLEX on Instagram"
            >
              <ExternalLink size={18} />
            </a>
          </div>
        </div>

        {footerGroups.map((group) => (
          <div key={group.title}>
            <h3 className="text-sm font-black uppercase tracking-[0.22em]">
              {group.title}
            </h3>

            <div className="mt-5 space-y-3">
              {group.links.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="block text-white/70 transition hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mx-auto mt-12 flex max-w-7xl flex-col gap-3 border-t border-white/10 pt-8 text-sm text-white/45 md:flex-row md:items-center md:justify-between">
        <p>
          © 2026 FLEX, a trading name of SharkX Ltd. All rights reserved.
        </p>

        <p>
          Questions?{" "}
          <a href="mailto:team@eatflex.uk" className="text-white/75">
            team@eatflex.uk
          </a>
        </p>
      </div>
    </footer>
  );
}
