"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import CartDrawer from "@/components/cart/CartDrawer";

const navItems = [
  { label: "Shop", href: "/shop" },
  { label: "Why FLEX", href: "/#story" },
  { label: "Recipes", href: "/#recipes" },
  { label: "Reviews", href: "/#reviews" },
  { label: "FAQ", href: "/#faq" },
];

function Logo() {
  return (
    <Link href="/" aria-label="FLEX home" className="flex items-center gap-3">
      <div className="relative h-11 w-11 overflow-hidden rounded-2xl bg-[#6f855f]">
        <Image
          src="/assets/brand/flex-logo.png"
          alt="FLEX"
          fill
          className="object-contain p-1.5"
          onError={(e) => {
            e.currentTarget.style.display = "none";
          }}
        />
        <span className="absolute inset-0 grid place-items-center text-sm font-black text-white">
          F
        </span>
      </div>

      <div className="leading-none">
        <p className="text-xl font-black tracking-[-0.08em] text-[#0f1720]">
          FLEX
        </p>
        <p className="text-[10px] font-black uppercase tracking-[0.22em] text-[#6f855f]">
          Peanut Butter
        </p>
      </div>
    </Link>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-[#fffaf2]/90 backdrop-blur-xl">
      <div className="mx-auto flex h-[74px] max-w-7xl items-center justify-between px-5 lg:px-8">
        <Logo />

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-xs font-black uppercase tracking-[0.22em] text-[#0f1720]/70 transition hover:text-[#0f1720]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="/shop"
            className="rounded-full bg-[#0f1720] px-5 py-3 text-xs font-black uppercase tracking-[0.14em] text-white transition hover:bg-[#6f855f]"
          >
            Shop now
          </Link>

          <CartDrawer />
        </div>

        <button
          className="grid h-11 w-11 place-items-center rounded-full border border-black/10 bg-white md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={21} /> : <Menu size={21} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-black/10 bg-[#fffaf2] px-5 py-4 md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-2xl px-4 py-4 text-sm font-black uppercase tracking-[0.16em] hover:bg-white"
              >
                {item.label}
              </Link>
            ))}

            <div className="mt-3">
              <CartDrawer />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
