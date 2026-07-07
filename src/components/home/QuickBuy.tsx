"use client";

import Image from "next/image";
import { useState } from "react";
import AddToCartButton from "@/components/cart/AddToCartButton";
import { bundles, featuredVariant } from "@/data/products";

export default function QuickBuy() {
  const bundle = bundles[0];

  return (
    <section id="products" className="bg-[#f4f6f3] px-5 py-16 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h2 className="font-display text-5xl leading-none tracking-[-0.02em] md:text-6xl">
          OUR PRODUCTS
        </h2>

        <p className="mt-2 max-w-2xl text-[#5c6773]">
          Simple, clean performance fuel. Built for training days, breakfast
          bowls and everyday snacks.
        </p>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <ProductCard
            productId={featuredVariant.id}
            title="FLEX Natural Peanut Butter — Smooth"
            subtitle={featuredVariant.size}
            price={featuredVariant.price}
            image={featuredVariant.image}
          />

          {bundle && (
            <ProductCard
              productId={bundle.id}
              title="6 × FLEX Natural Smooth"
              subtitle="6 × 510g jars"
              price={bundle.price}
              image={bundle.image}
              bundle
            />
          )}
        </div>
      </div>
    </section>
  );
}

function ProductCard({
  productId,
  title,
  subtitle,
  price,
  image,
  bundle = false,
}: {
  productId: string;
  title: string;
  subtitle: string;
  price: number;
  image: string;
  bundle?: boolean;
}) {
  const [quantity, setQuantity] = useState(1);

  return (
    <article className="rounded-[18px] border border-black/10 bg-white p-6">
      <div className="grid items-center gap-6 md:grid-cols-[.9fr_1.1fr]">
        <div className="grid min-h-[260px] place-items-center rounded-2xl border border-black/10 bg-[#f7f9f6] p-6">
          {bundle ? (
            <div className="relative h-[230px] w-[260px]">
              {[0, 1, 2].map((i) => (
                <Image
                  key={i}
                  src={image}
                  alt="FLEX jar"
                  width={155}
                  height={155}
                  className="absolute object-contain drop-shadow-xl"
                  style={{
                    left: `${i * 48}px`,
                    top: `${i === 1 ? 18 : 46}px`,
                    zIndex: i === 1 ? 3 : 2,
                  }}
                />
              ))}
            </div>
          ) : (
            <Image
              src={image}
              alt={title}
              width={250}
              height={250}
              className="max-h-[250px] w-auto object-contain drop-shadow-xl"
            />
          )}
        </div>

        <div>
          <h3 className="text-2xl font-black leading-tight">{title}</h3>

          <p className="mt-2 text-[#5c6773]">{subtitle}</p>

          <ul className="mt-5 space-y-2 text-sm text-[#0f1720]/80">
            <li>✓ 100% roasted peanuts</li>
            <li>✓ No palm oil</li>
            <li>✓ No added sugar</li>
            <li>✓ High protein</li>
          </ul>

          <div className="mt-5 text-4xl font-black text-[#6f855f]">
            £{price.toFixed(2)}
          </div>

          <div className="mt-5 flex flex-wrap items-center gap-3">
            <div className="flex items-center rounded-xl border border-black/15 bg-white">
              <button
                type="button"
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="grid h-11 w-11 place-items-center text-lg font-black"
              >
                −
              </button>

              <span className="w-10 text-center text-sm font-black">
                {quantity}
              </span>

              <button
                type="button"
                onClick={() => setQuantity((q) => q + 1)}
                className="grid h-11 w-11 place-items-center text-lg font-black"
              >
                +
              </button>
            </div>

            <AddToCartButton productId={productId} quantity={quantity}>
              Add to Cart
            </AddToCartButton>
          </div>
        </div>
      </div>
    </article>
  );
}
