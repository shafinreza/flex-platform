"use client";

import Image from "next/image";
import Link from "next/link";
import CartDrawer from "@/components/cart/CartDrawer";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#4C260F]/10 bg-[#FFF7E8]/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="flex items-center">
          <Image
            src="/assets/brand/flex-logo.png"
            alt="FLEX"
            width={78}
            height={78}
            className="h-16 w-16 rounded-2xl object-contain"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-10 md:flex">
          {["Shop", "Why Flex", "Recipes", "Reviews", "FAQ"].map((item) => (
            <Link
              key={item}
              href={item === "Shop" ? "/shop" : `/#${item.toLowerCase().replace(" ", "-")}`}
              className="text-sm font-black uppercase tracking-[0.18em] text-[#0f1720]"
            >
              {item}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Link
            href="/shop"
            className="hidden rounded-full bg-[#0B864E] px-8 py-4 text-sm font-black uppercase tracking-[0.14em] text-white transition hover:bg-[#096b3f] md:block"
          >
            Shop Now →
          </Link>
          <CartDrawer />
        </div>
      </div>
    </header>
  );
}
