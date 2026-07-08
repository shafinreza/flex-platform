"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import { ShoppingBag, Trash2, Truck } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { FREE_SHIPPING_THRESHOLD, featuredBundle } from "@/data/products";
import { useCart } from "@/components/cart/CartProvider";

export default function CartDrawer() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function openCart() {
      setOpen(true);
    }

    window.addEventListener("flex:open-cart", openCart);
    window.addEventListener("flex-cart-open", openCart);

    return () => {
      window.removeEventListener("flex:open-cart", openCart);
      window.removeEventListener("flex-cart-open", openCart);
    };
  }, []);

  const {
    items,
    detailedItems,
    addItem,
    removeItem,
    updateQuantity,
    subtotal,
    checkout,
  } = useCart();

  const delivery = subtotal >= FREE_SHIPPING_THRESHOLD || subtotal === 0 ? 0 : 2.99;
  const total = subtotal + delivery;
  const cartCount = items.reduce((total, item) => total + item.quantity, 0);
  const remainingForFreeShipping = Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal);
  const progress = Math.min(100, (subtotal / FREE_SHIPPING_THRESHOLD) * 100);
  const hasSixPack = items.some((item) => item.id === featuredBundle.id);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger className="relative grid h-12 w-12 place-items-center rounded-full border border-[#173b2f]/20 bg-[#fff8ed] text-[#173b2f] transition hover:bg-white">
        <ShoppingBag className="h-5 w-5" />
        {cartCount > 0 ? (
          <span className="absolute -right-1 -top-1 grid h-5 min-w-5 place-items-center rounded-full bg-[#e5b15a] px-1 text-xs font-black text-[#173b2f]">
            {cartCount}
          </span>
        ) : null}
      </SheetTrigger>

      <SheetContent className="flex w-full flex-col bg-[#f6ead8] p-0 text-[#173b2f] sm:max-w-md">
        <SheetHeader className="border-b border-[#173b2f]/10 p-6 text-left">
          <SheetTitle className="text-2xl font-black text-[#173b2f]">
            Your cart {cartCount > 0 ? `(${cartCount})` : ""}
          </SheetTitle>
        </SheetHeader>

        {detailedItems.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center p-8 text-center">
            <h3 className="text-3xl font-black">Your cart is empty</h3>
            <p className="mt-3 max-w-xs text-sm font-bold leading-6 text-[#31574a]">
              Start with the 6-pack to unlock free UK delivery.
            </p>
            <Link
              href="/shop"
              onClick={() => setOpen(false)}
              className="mt-6 rounded-full bg-[#173b2f] px-7 py-4 text-sm font-black text-[#f8ead4]"
            >
              Shop FLEX
            </Link>
          </div>
        ) : (
          <>
            <div className="border-b border-[#173b2f]/10 p-6">
              <div className="flex items-center gap-3 text-sm font-black">
                <Truck className="h-5 w-5" />
                {remainingForFreeShipping > 0
                  ? `£${remainingForFreeShipping.toFixed(2)} away from free UK delivery`
                  : "You unlocked free UK delivery"}
              </div>

              <div className="mt-4 h-3 overflow-hidden rounded-full bg-[#fff8ed]">
                <div
                  className="h-full rounded-full bg-[#e5b15a]"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            <div className="flex-1 space-y-4 overflow-y-auto p-6">
              {detailedItems.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4 rounded-3xl bg-[#fff8ed] p-4 shadow-sm ring-1 ring-[#173b2f]/10"
                >
                  <div className="grid h-24 w-24 shrink-0 place-items-center rounded-2xl bg-[#f6ead8]">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={90}
                      height={90}
                      className="h-20 w-auto object-contain"
                    />
                  </div>

                  <div className="min-w-0 flex-1">
                    <h3 className="text-sm font-black leading-5">{item.name}</h3>
                    <p className="mt-1 text-sm font-black">
                      £{item.price.toFixed(2)}
                    </p>

                    <div className="mt-3 flex items-center justify-between">
                      <div className="flex items-center rounded-full border border-[#173b2f]/15">
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="grid h-9 w-9 place-items-center text-lg font-black"
                          aria-label="Decrease quantity"
                        >
                          −
                        </button>
                        <span className="w-8 text-center text-sm font-black">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="grid h-9 w-9 place-items-center text-lg font-black"
                          aria-label="Increase quantity"
                        >
                          +
                        </button>
                      </div>

                      <button
                        type="button"
                        onClick={() => removeItem(item.id)}
                        className="inline-flex items-center gap-1 text-xs font-black uppercase tracking-[0.12em] text-[#31574a]"
                      >
                        <Trash2 className="h-3 w-3" />
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}

              {!hasSixPack ? (
                <button
                  type="button"
                  onClick={() => addItem(featuredBundle.id)}
                  className="w-full rounded-3xl border-2 border-dashed border-[#173b2f]/25 bg-[#fff8ed] p-5 text-left transition hover:border-[#173b2f]"
                >
                  <p className="text-sm font-black uppercase tracking-[0.2em] text-[#31574a]">
                    Upgrade offer
                  </p>
                  <p className="mt-2 text-xl font-black">
                    Add 6-pack for £{featuredBundle.price.toFixed(2)}
                  </p>
                  <p className="mt-1 text-sm font-bold text-[#31574a]">
                    Best value and qualifies for free UK delivery.
                  </p>
                </button>
              ) : null}
            </div>

            <div className="border-t border-[#173b2f]/10 bg-[#fff8ed] p-6">
              <div className="space-y-3 text-sm font-bold">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>£{subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Delivery</span>
                  <span>{delivery === 0 ? "Free" : `£${delivery.toFixed(2)}`}</span>
                </div>
                <div className="flex justify-between text-lg font-black">
                  <span>Total</span>
                  <span>£{total.toFixed(2)}</span>
                </div>
              </div>

              <button
                type="button"
                onClick={checkout}
                className="mt-5 h-14 w-full rounded-full bg-[#173b2f] text-base font-black text-[#f8ead4] transition hover:bg-[#102a22]"
              >
                Secure checkout
              </button>

              <p className="mt-3 text-center text-xs font-bold text-[#31574a]">
                Secure payment powered by Stripe.
              </p>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}
