"use client";

import Image from "next/image";
import Link from "next/link";
import CartDrawer from "@/components/cart/CartDrawer";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#173b2f]/10 bg-[#f6ead8]/90 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/assets/brand/flex-logo.png"
            alt="FLEX"
            width={150}
            height={54}
            priority
            className="h-12 w-auto md:h-14"
          />
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-black uppercase tracking-[0.16em] text-[#173b2f] md:flex">
          <Link href="/shop" className="transition hover:text-[#6f855f]">
            Shop
          </Link>
          <Link href="/#products" className="transition hover:text-[#6f855f]">
            Products
          </Link>
          <Link href="/#story" className="transition hover:text-[#6f855f]">
            Story
          </Link>
          <Link href="/#faq" className="transition hover:text-[#6f855f]">
            FAQ
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/shop"
            className="hidden rounded-full bg-[#173b2f] px-5 py-3 text-sm font-black text-[#f8ead4] transition hover:bg-[#102a22] sm:inline-flex"
          >
            Shop now
          </Link>
          <CartDrawer />
        </div>
      </div>
    </header>
  );
}
