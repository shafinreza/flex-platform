"use client";

import Image from "next/image";
import Link from "next/link";
import FlexButton from "@/components/ui/FlexButton";
import { useCart } from "@/components/cart/CartProvider";

export default function CartPage() {
  const {
    detailedItems,
    subtotal,
    removeItem,
    updateQuantity,
    checkout,
  } = useCart();

  const delivery = subtotal > 0 ? 2.99 : 0;
  const total = subtotal + delivery;

  return (
    <main className="px-5 py-16">
      <div className="mx-auto max-w-[1120px]">
        <h1 className="mb-10 text-[64px] font-black leading-[.9] tracking-[-0.05em]">
          YOUR CART
        </h1>

        {detailedItems.length === 0 ? (
          <div className="rounded-[18px] border border-[rgba(15,23,32,.10)] bg-white p-8">
            <p className="text-[#5c6773]">Your cart is empty.</p>

            <Link href="/shop">
              <FlexButton className="mt-6">Continue Shopping</FlexButton>
            </Link>
          </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-[1fr_360px]">
            <div className="space-y-4">
              {detailedItems.map((item) => (
                <div
                  key={item.id}
                  className="grid gap-5 rounded-[18px] border border-[rgba(15,23,32,.10)] bg-white p-5 md:grid-cols-[120px_1fr_auto]"
                >
                  <div className="grid place-items-center rounded-2xl bg-[#f7f9f6] p-3">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={120}
                      height={120}
                      className="h-24 w-24 object-contain"
                    />
                  </div>

                  <div>
                    <h2 className="text-xl font-black">{item.name}</h2>
                    <p className="mt-2 text-[#5c6773]">
                      £{item.price.toFixed(2)}
                    </p>

                    <button
                      onClick={() => removeItem(item.id)}
                      className="mt-4 text-sm font-bold text-[#6f855f]"
                    >
                      Remove
                    </button>
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="grid h-10 w-10 place-items-center rounded-xl border border-[rgba(15,23,32,.16)] bg-white text-xl"
                    >
                      −
                    </button>

                    <span className="w-8 text-center font-bold">
                      {item.quantity}
                    </span>

                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="grid h-10 w-10 place-items-center rounded-xl border border-[rgba(15,23,32,.16)] bg-white text-xl"
                    >
                      +
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <aside className="h-fit rounded-[18px] border border-[rgba(15,23,32,.10)] bg-white p-6">
              <h2 className="text-2xl font-black">Order summary</h2>

              <div className="mt-6 space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-[#5c6773]">Subtotal</span>
                  <span className="font-bold">£{subtotal.toFixed(2)}</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-[#5c6773]">Delivery</span>
                  <span className="font-bold">£{delivery.toFixed(2)}</span>
                </div>

                <div className="border-t border-[rgba(15,23,32,.10)] pt-4">
                  <div className="flex justify-between text-xl font-black">
                    <span>Total</span>
                    <span>£{total.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              <FlexButton onClick={checkout} className="mt-6 w-full">
                Secure Checkout
              </FlexButton>

              <p className="mt-4 text-center text-xs text-[#5c6773]">
                Secure payment powered by Stripe.
              </p>
            </aside>
          </div>
        )}
      </div>
    </main>
  );
}
