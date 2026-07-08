import Link from "next/link";
import { FREE_SHIPPING_THRESHOLD } from "@/data/products";
import Button from "@/components/ui/button";

/**
 * A call-to-action band used at the end of the home page. It emphasises the
 * free delivery threshold and prompts the user to shop. The dark
 * background contrasts against lighter sections and draws the eye.
 */
export default function CTA() {
  return (
    <section className="mx-auto my-10 max-w-7xl px-6">
      <div className="relative overflow-hidden rounded-3xl bg-[#173b2f] p-8 text-center md:p-12">
        <div className="relative z-10 mx-auto max-w-2xl">
          <p className="mb-3 text-sm font-black uppercase tracking-[0.25em] text-[#d9eb7c]">
            Do not miss out
          </p>
          <h2 className="text-3xl font-black leading-tight tracking-tight text-[#f8ead4] md:text-5xl">
            Free UK delivery over £{FREE_SHIPPING_THRESHOLD}
          </h2>
          <p className="mt-4 text-base font-medium text-[#e5d7c2]">
            Stock up on your favourite peanut butter and save on shipping. The
            6-pack qualifies automatically.
          </p>
          <div className="mt-8 flex justify-center">
            <Link href="/shop" className="inline-block">
              <Button variant="secondary">Shop now</Button>
            </Link>
          </div>
        </div>
        {/* Decorative blurred accent */}
        <div className="absolute -bottom-10 -left-20 h-96 w-96 rounded-full bg-[#e5b15a] opacity-20 blur-3xl" />
        <div className="absolute -top-16 -right-24 h-80 w-80 rounded-full bg-[#6f855f] opacity-10 blur-3xl" />
      </div>
    </section>
  );
}