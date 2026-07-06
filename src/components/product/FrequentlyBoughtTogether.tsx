"use client";

import Image from "next/image";
import FlexButton from "@/components/ui/FlexButton";
import { bundles, featuredVariant } from "@/data/products";
import { useCart } from "@/components/cart/CartProvider";

export default function FrequentlyBoughtTogether() {
  const { addItem } = useCart();

  const bundle = bundles[0];

  if (!bundle) return null;

  return (
    <section className="bg-[#f4f6f3] px-6 pb-20">
      <div className="mx-auto max-w-7xl rounded-3xl border border-black/10 bg-white p-8">

        <h2 className="mb-8 text-3xl font-black">
          Frequently Bought Together
        </h2>

        <div className="grid gap-10 lg:grid-cols-[1fr_auto_1fr_auto] items-center">

          <div className="text-center">
            <Image
              src={featuredVariant.image}
              alt={featuredVariant.name}
              width={220}
              height={220}
              className="mx-auto"
            />

            <h3 className="mt-4 font-bold">
              {featuredVariant.name}
            </h3>

            <p className="text-[#6f855f] font-bold">
              £{featuredVariant.price.toFixed(2)}
            </p>
          </div>

          <div className="text-5xl font-light">
            +
          </div>

          <div className="text-center">
            <Image
              src={bundle.image}
              alt={bundle.fullName}
              width={220}
              height={220}
              className="mx-auto"
            />

            <h3 className="mt-4 font-bold">
              {bundle.fullName}
            </h3>

            <p className="font-bold text-[#6f855f]">
              £{bundle.price.toFixed(2)}
            </p>
          </div>

          <div className="space-y-4">

            <div>
              <div className="text-sm uppercase tracking-widest text-slate-500">
                Bundle Price
              </div>

              <div className="text-4xl font-black">
                £{(featuredVariant.price + bundle.price).toFixed(2)}
              </div>
            </div>

            <FlexButton
              onClick={() => {
                addItem(featuredVariant.id);
                addItem(bundle.id);
              }}
            >
              Add Bundle
            </FlexButton>

          </div>

        </div>

      </div>
    </section>
  );
}
