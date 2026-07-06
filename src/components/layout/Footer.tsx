import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[radial-gradient(900px_600px_at_20%_20%,rgba(255,255,255,.08),rgba(255,255,255,0)),#0b1016] px-5 py-14 text-white">
      <div className="mx-auto grid max-w-[1120px] gap-8 md:grid-cols-[1fr_1.3fr]">
        <div>
          <div className="mb-3 text-4xl font-black tracking-[-0.06em]">
            FLEX
          </div>

          <p className="max-w-sm text-white/55">
            Premium minimalist performance nutrition. Built for training days
            and family pantries.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="mb-3 text-xs font-black uppercase tracking-[0.14em] text-white/70">
              Company
            </div>
            <div className="grid gap-2 text-white/75">
              <Link href="/#story">Our story</Link>
              <Link href="/#contact">Contact</Link>
              <Link href="/#blog">Blog</Link>
            </div>
          </div>

          <div>
            <div className="mb-3 text-xs font-black uppercase tracking-[0.14em] text-white/70">
              Support
            </div>
            <div className="grid gap-2 text-white/75">
              <Link href="/#faq">FAQ</Link>
              <Link href="/shop">Where to buy</Link>
              <Link href="/cart">Cart</Link>
            </div>
          </div>

          <div>
            <div className="mb-3 text-xs font-black uppercase tracking-[0.14em] text-white/70">
              Social
            </div>
            <div className="grid gap-2 text-white/75">
              <Link href="https://instagram.com/eatflex.uk" target="_blank">
                Instagram
              </Link>
              <Link href="/shop">Shop FLEX</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-8 max-w-[1120px] border-t border-white/10 pt-5 text-sm text-white/50">
        © 2026 FLEX. All rights reserved.
      </div>
    </footer>
  );
}
