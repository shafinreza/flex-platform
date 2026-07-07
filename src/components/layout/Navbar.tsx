"use client";

import Image from "next/image";
import Link from "next/link";
import CartDrawer from "@/components/cart/CartDrawer";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 lg:px-8">
        <Link href="/" aria-label="FLEX home">
          <Image
            src="/assets/brand/flex-logo.png"
            alt="FLEX"
            width={150}
            height={60}
            priority
            className="h-10 w-auto object-contain"
          />
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {[
            ["Products", "/#products"],
            ["Story", "/#story"],
            ["FAQ", "/#faq"],
            ["Blog", "/#blog"],
            ["Contact", "/#contact"],
          ].map(([label, href]) => (
            <Link
              key={label}
              href={href}
              className="text-xs font-bold uppercase tracking-[0.26em] text-[#0f1720]/75 hover:text-[#0f1720]"
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/shop"
            className="hidden rounded-xl border border-black/25 bg-white px-4 py-3 text-xs font-black uppercase tracking-[0.12em] text-[#0f1720] transition hover:bg-[#0B864E] hover:text-white md:inline-flex"
          >
            Shop now
          </Link>
          <CartDrawer />
        </div>
      </div>
    </header>
  );
}
