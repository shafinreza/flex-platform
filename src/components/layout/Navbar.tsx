"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import CartDrawer from "@/components/cart/CartDrawer";

const navItems = [
  { label: "Products", href: "/shop" },
  { label: "Story", href: "/#story" },
  { label: "FAQ", href: "/#faq" },
  { label: "Blog", href: "/#blog" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[rgba(15,23,32,.12)] bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-[68px] max-w-[1120px] items-center justify-between px-5">
        <Link href="/" aria-label="FLEX home" className="block">
          <span className="inline-block bg-[#6f855f] px-2 py-1 text-2xl font-black leading-none tracking-[-0.08em] text-white">
            FLEX
          </span>
        </Link>

        <nav className="hidden items-center gap-[22px] md:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="border-b border-transparent px-1 py-2 text-xs uppercase tracking-[0.28em] text-[#0f1720]/80 hover:border-[#0f1720]/30"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="/shop"
            className="inline-flex items-center justify-center rounded-[10px] border border-[rgba(15,23,32,.35)] bg-white px-4 py-3 text-xs font-bold uppercase tracking-[0.12em] text-[#0f1720]"
          >
            Where to buy
          </Link>

          <CartDrawer />
        </div>

        <button
          className="grid h-[42px] w-[42px] place-items-center rounded-[10px] border border-[rgba(15,23,32,.12)] bg-white md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X size={21} /> : <Menu size={21} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-[rgba(15,23,32,.12)] bg-white/95 px-5 py-4 md:hidden">
          <nav className="mx-auto flex max-w-[1120px] flex-col gap-2">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-3 text-sm font-bold uppercase tracking-[0.18em]"
              >
                {item.label}
              </Link>
            ))}

            <Link
              href="/shop"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-[10px] bg-[#6f855f] px-4 py-3 text-xs font-bold uppercase tracking-[0.12em] text-white"
            >
              Shop FLEX
            </Link>

            <div className="mt-3">
              <CartDrawer />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
