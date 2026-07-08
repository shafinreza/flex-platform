"use client";

import { useState } from "react";
import { featuredVariant } from "@/data/products";
import { useCart } from "@/components/cart/CartProvider";
import QuantitySelector from "@/components/shop/QuantitySelector";

export default function ProductInfo() {
  const { addItem } = useCart();
  const [qty, setQty] = useState(1);

  async function buyNow() {
    const response = await fetch("/api/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        items: [{ id: featuredVariant.id, quantity: qty }],
      }),
    });

    const data = await response.json();

    if (data.url) {
      window.location.href = data.url;
    }
  }

  function addToCart() {
    for (let i = 0; i < qty; i++) {
      addItem(featuredVariant.id);
    }

    window.dispatchEvent(new Event("flex:open-cart"));
  }

  return (
    <div className="rounded-[2rem] bg-[#fff8ed] p-6 shadow-sm ring-1 ring-[#173b2f]/10 md:p-8">
      <p className="mb-3 text-sm font-black uppercase tracking-[0.25em] text-[#31574a]">
        FLEX
      </p>

      <h1 className="text-4xl font-black leading-none tracking-tight text-[#173b2f] md:text-6xl">
        {featuredVariant.name}
      </h1>

      <div className="mt-5 flex flex-wrap items-center gap-3">
        <span className="rounded-full bg-[#173b2f] px-4 py-2 text-sm font-black text-[#f6ead8]">
          ★★★★★ {featuredVariant.rating} Amazon rating
        </span>
        <span className="rounded-full bg-[#e5b15a] px-4 py-2 text-sm font-black text-[#173b2f]">
          {featuredVariant.reviewCount} reviews
        </span>
      </div>

      <p className="mt-6 text-4xl font-black text-[#173b2f]">
        £{featuredVariant.price.toFixed(2)}
      </p>

      <p className="mt-5 text-lg leading-8 text-[#31574a]">
        Premium natural smooth peanut butter made with roasted peanuts. No palm
        oil, no added sugar and no unnecessary fillers.
      </p>

      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        {featuredVariant.features.map((item) => (
          <div
            key={item}
            className="rounded-2xl bg-[#f6ead8] px-4 py-3 text-sm font-black text-[#173b2f]"
          >
            ✓ {item}
          </div>
        ))}
      </div>

      <div className="mt-8 flex items-center gap-4">
        <QuantitySelector value={qty} onChange={setQty} />
      </div>

      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        <button
          type="button"
          onClick={addToCart}
          className="h-14 rounded-full bg-[#173b2f] px-6 text-base font-black text-[#f6ead8] transition hover:bg-[#102a22]"
        >
          Add {qty} to cart
        </button>

        <button
          type="button"
          onClick={buyNow}
          className="h-14 rounded-full bg-[#e5b15a] px-6 text-base font-black text-[#173b2f] transition hover:brightness-95"
        >
          Buy now
        </button>
      </div>
    </div>
  );
}
