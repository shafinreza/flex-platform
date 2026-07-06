import Link from "next/link";
import { Camera } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-white/10 bg-[#151515] text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">

        <div className="grid gap-12 md:grid-cols-[2fr_1fr_1fr_1fr]">

          {/* Brand */}

          <div>

            <h2 className="text-4xl font-black tracking-tight">
              FLEX
            </h2>

            <p className="mt-5 max-w-sm text-base leading-7 text-white/70">
              Premium Natural Peanut Butter made from 100% roasted peanuts.
              Built for Better Days.
            </p>

            <div className="mt-8 flex items-center gap-4">

              <a
                href="https://instagram.com/eatflex.uk"
                target="_blank"
                rel="noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 transition hover:border-[#0B864E] hover:bg-[#0B864E]"
              >
                <Camera size={18} />
              </a>

              <a
                href="https://www.amazon.co.uk/dp/B0GZW149KV"
                target="_blank"
                rel="noreferrer"
                className="text-sm font-semibold text-white/80 transition hover:text-white"
              >
                Buy on Amazon
              </a>

            </div>

          </div>

          {/* Shop */}

          <div>

            <h3 className="mb-5 text-sm font-black uppercase tracking-[0.22em] text-white">
              Shop
            </h3>

            <div className="space-y-3">

              <Link
                href="/shop"
                className="block text-white/65 transition hover:text-[#0B864E]"
              >
                Shop
              </Link>

              <Link
                href="/shop"
                className="block text-white/65 transition hover:text-[#0B864E]"
              >
                Bundles
              </Link>

              <Link
                href="/#recipes"
                className="block text-white/65 transition hover:text-[#0B864E]"
              >
                Recipes
              </Link>

              <Link
                href="/#blog"
                className="block text-white/65 transition hover:text-[#0B864E]"
              >
                Blog
              </Link>

            </div>

          </div>

          {/* Company */}

          <div>

            <h3 className="mb-5 text-sm font-black uppercase tracking-[0.22em] text-white">
              Company
            </h3>

            <div className="space-y-3">

              <Link
                href="/#story"
                className="block text-white/65 transition hover:text-[#0B864E]"
              >
                About FLEX
              </Link>

              <Link
                href="/#contact"
                className="block text-white/65 transition hover:text-[#0B864E]"
              >
                Contact
              </Link>

              <Link
                href="/#faq"
                className="block text-white/65 transition hover:text-[#0B864E]"
              >
                FAQ
              </Link>

            </div>

          </div>

          {/* Legal */}

          <div>

            <h3 className="mb-5 text-sm font-black uppercase tracking-[0.22em] text-white">
              Legal
            </h3>

            <div className="space-y-3">

              <Link
                href="#"
                className="block text-white/65 transition hover:text-[#0B864E]"
              >
                Privacy Policy
              </Link>

              <Link
                href="#"
                className="block text-white/65 transition hover:text-[#0B864E]"
              >
                Terms & Conditions
              </Link>

              <Link
                href="#"
                className="block text-white/65 transition hover:text-[#0B864E]"
              >
                Cookies
              </Link>

            </div>

          </div>

        </div>

        <div className="mt-14 border-t border-white/10 pt-8">

          <div className="flex flex-col gap-4 text-sm text-white/50 md:flex-row md:items-center md:justify-between">

            <p>
              © {new Date().getFullYear()} FLEX. All rights reserved.
            </p>

            <p>
              Made with ❤️ in the UK.
            </p>

          </div>

        </div>

      </div>
    </footer>
  );
}