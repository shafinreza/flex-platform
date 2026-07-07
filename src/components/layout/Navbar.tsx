"use client";

import Image from "next/image";
import Link from "next/link";
import CartDrawer from "@/components/cart/CartDrawer";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#4C260F]/10 bg-[#FFF7E8]/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
        <Link href="/" aria-label="FLEX home">
          <Image
            src="/assets/brand/flex-logo.png"
            alt="FLEX"
            width={86}
            height={86}
            priority
            className="h-[68px] w-[68px] object-contain"
          />
        </Link>

        <nav className="hidden items-center gap-9 md:flex">
          <Link href="/shop" className="nav-link">Shop</Link>
          <Link href="/#story" className="nav-link">Why FLEX</Link>
          <Link href="/#recipes" className="nav-link">Recipes</Link>
          <Link href="/#reviews" className="nav-link">Reviews</Link>
          <Link href="/#faq" className="nav-link">FAQ</Link>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/shop"
            className="hidden rounded-full bg-[#0B864E] px-7 py-3.5 text-sm font-black uppercase tracking-[0.14em] text-white transition hover:bg-[#096b3f] md:block"
          >
            Shop Now
          </Link>
          <CartDrawer />
        </div>
      </div>
    </header>
  );
}
