import Image from "next/image";
import Link from "next/link";
import { FREE_SHIPPING_THRESHOLD, featuredBundle, featuredVariant } from "@/data/products";
import Button from "@/components/ui/button";

/**
 * Home page hero section. Presents the product with a large photograph,
 * concise messaging and clear calls to action. Designed to evoke the
 * premium yet minimal aesthetic of modern health food brands. The hero
 * uses a responsive grid that collapses on mobile, and features a
 * background accent behind the jar image to add depth.
 */
export default function NewHero() {
  return (
    <section className="relative overflow-hidden bg-[#f6ead8]">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-16 md:gap-16 md:py-24 lg:grid-cols-2">
        {/* Copy */}
        <div>
          <p className="mb-4 text-sm font-black uppercase tracking-[0.28em] text-[#6b7d2f]">
            {featuredVariant.shortName}
          </p>
          <h1 className="text-5xl font-black leading-[0.9] tracking-tight md:text-7xl">
            Fuel your FLEX
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-[#31574a]">
            Premium smooth peanut butter made from 100% roasted peanuts. No palm
            oil. No added sugar. Built for breakfast, shakes and everyday
            snacking.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link href="/shop" className="inline-block">
              <Button variant="primary">Shop now — £{featuredVariant.price.toFixed(2)}</Button>
            </Link>
            <Link href="#benefits" className="inline-block">
              <Button variant="secondary">See benefits</Button>
            </Link>
          </div>
          {/* Trust features */}
          <div className="mt-10 grid max-w-sm grid-cols-3 gap-3 text-center text-xs font-black uppercase tracking-wide">
            <div className="rounded-full bg-white/60 px-3 py-4">No added sugar</div>
            <div className="rounded-full bg-white/60 px-3 py-4">No palm oil</div>
            <div className="rounded-full bg-white/60 px-3 py-4">
              Free delivery £{FREE_SHIPPING_THRESHOLD}+
            </div>
          </div>
        </div>
        {/* Product visual */}
        <div className="relative flex justify-center">
          {/* Coloured blob behind jar */}
          <div className="absolute inset-6 -z-10 rounded-[3rem] bg-[#e5b15a] opacity-30 blur-3xl" />
          {/* Jar card */}
          <div className="relative rounded-[3rem] bg-[#fff8ed] p-8 shadow-2xl ring-1 ring-[#173b2f]/10">
            <Image
              src={featuredVariant.image}
              alt="FLEX Natural Smooth Peanut Butter"
              width={450}
              height={520}
              priority
              className="mx-auto max-h-[520px] w-auto object-contain"
            />
            {/* Offer bar */}
            <div className="mt-6 rounded-3xl bg-[#173b2f] p-6 text-[#f8ead4]">
              <div className="flex items-end justify-between gap-4">
                <div>
                  <p className="text-sm font-bold opacity-80">Best value</p>
                  <p className="text-3xl font-black">
                    6-pack £{featuredBundle.price.toFixed(2)}
                  </p>
                </div>
                <p className="max-w-[180px] text-right text-sm font-bold">
                  Unlock free UK delivery and stock up properly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}