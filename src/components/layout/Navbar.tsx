"use client";

import Link from "next/link";
import { Camera, Menu, X } from "lucide-react";
import { useState } from "react";
import CartDrawer from "@/components/cart/CartDrawer";

const navItems = [
  { label: "Products", href: "/shop" },
  { label: "Story", href: "#story" },
  { label: "FAQ", href: "#faq" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#dfe4dc] bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-[68px] max-w-[1120px] items-center justify-between px-5">
        <Link
          href="/"
          className="bg-[#708963] px-2 py-1 text-2xl font-black leading-none tracking-[-0.08em] text-white"
        >
          FLEX
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-xs font-medium uppercase tracking-[0.42em] text-[#111923]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="/shop"
            className="rounded-xl border border-[#111923]/20 px-5 py-3 text-xs font-black uppercase tracking-[0.16em]"
          >
            Shop FLEX
          </Link>
          <CartDrawer />
          <Link
            href="https://www.instagram.com/eatflex.uk"
            target="_blank"
            className="grid h-11 w-11 place-items-center rounded-xl border border-[#111923]/15"
            aria-label="Instagram"
          >
            <Camera size={17} />
          </Link>
        </div>

        <button
          className="grid h-11 w-11 place-items-center rounded-xl border border-[#111923]/15 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="border-t border-[#dfe4dc] bg-white px-5 py-6 md:hidden">
          <nav className="mx-auto flex max-w-[1120px] flex-col gap-5">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-sm font-black uppercase tracking-[0.2em]"
              >
                {item.label}
              </Link>
            ))}
            <CartDrawer />
          </nav>
        </div>
      )}
    </header>
  );
}
