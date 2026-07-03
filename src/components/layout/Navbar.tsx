"use client";

import Link from "next/link";
import { Menu, User, X } from "lucide-react";
import { useState } from "react";
import CartDrawer from "@/components/cart/CartDrawer";

const navItems = [
  { label: "Shop", href: "/shop" },
  { label: "Recipes", href: "/recipes" },
  { label: "About", href: "/about" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b-2 border-[#4C260F] bg-[#EFDFC7]/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <Link href="/" className="text-4xl font-black tracking-tight text-[#0B864E]">
          FLEX
        </Link>

        <nav className="hidden items-center gap-10 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-black uppercase tracking-[0.18em] text-[#4C260F] transition hover:text-[#0B864E]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="/account"
            aria-label="Account"
            className="grid h-11 w-11 place-items-center rounded-full border-2 border-[#4C260F] bg-white transition hover:bg-[#EFB236]"
          >
            <User size={20} />
          </Link>

          <CartDrawer />

          <Link
            href="/shop"
            className="rounded-full border-2 border-[#4C260F] bg-[#0B864E] px-6 py-3 text-sm font-black uppercase tracking-[0.14em] text-white shadow-[4px_4px_0_#4C260F] transition hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
          >
            Shop Now
          </Link>
        </div>

        <button
          className="grid h-11 w-11 place-items-center rounded-full border-2 border-[#4C260F] bg-white md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="border-t-2 border-[#4C260F] bg-[#EFDFC7] px-5 py-6 md:hidden">
          <nav className="flex flex-col gap-5">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-xl font-black uppercase tracking-wide text-[#4C260F]"
              >
                {item.label}
              </Link>
            ))}

            <CartDrawer />

            <Link
              href="/shop"
              onClick={() => setOpen(false)}
              className="rounded-full border-2 border-[#4C260F] bg-[#0B864E] px-6 py-4 text-center font-black uppercase tracking-wide text-white shadow-[4px_4px_0_#4C260F]"
            >
              Shop Now
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}