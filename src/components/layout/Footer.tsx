import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#4C260F] px-6 py-16 text-[#EFDFC7]">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-10 md:flex-row">
        <div>
          <h2 className="text-4xl font-black text-white">FLEX</h2>

          <p className="mt-3 max-w-sm text-[#EFDFC7]/80">
            Natural peanut butter made for people who move.
          </p>

          <p className="mt-4 text-sm text-[#EFDFC7]/60">
            100% roasted peanuts. No added sugar. No palm oil.
          </p>
        </div>

        <div className="grid gap-3 font-semibold">
          <Link href="/">Home</Link>
          <Link href="/shop">Shop</Link>
          <Link href="/products/natural-smooth-510g">Product</Link>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-7xl border-t border-[#EFDFC7]/20 pt-6 text-sm text-[#EFDFC7]/60">
        © 2026 FLEX. All rights reserved.
      </div>
    </footer>
  );
}
