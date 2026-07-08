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
import { STANDARD_SHIPPING_PRICE } from "@/data/shipping";
import { useCart } from "@/components/cart/CartProvider";
import { trackCheckoutStarted } from "@/lib/analytics";

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
    setJarQuantity,
    subtotal,
    checkout,
  } = useCart();

  const delivery =
    subtotal >= FREE_SHIPPING_THRESHOLD || subtotal === 0
      ? 0
      : STANDARD_SHIPPING_PRICE;

  const total = subtotal + delivery;
  const cartCount = items.reduce((total, item) => total + item.quantity, 0);
  const jarCount = detailedItems.reduce(
    (total, item) => total + item.jarCount * item.quantity,
    0
  );
  const singleJarTotal = jarCount * 4.99;
  const savings = Math.max(0, singleJarTotal - subtotal);
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

      <SheetContent className="flex h-[100svh] max-h-[100svh] w-full flex-col overflow-hidden bg-[#f6ead8] p-0 text-[#173b2f] sm:max-w-lg">
        <SheetHeader className="shrink-0 border-b border-[#173b2f]/10 px-5 py-5 text-left sm:p-6">
          <SheetTitle className="text-2xl font-black text-[#173b2f]">
            Your cart {cartCount > 0 ? `(${cartCount})` : ""}
          </SheetTitle>
        </SheetHeader>

        {detailedItems.length === 0 ? (
          <div className="flex min-h-0 flex-1 flex-col items-center justify-center p-8 text-center">
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
            <div className="shrink-0 border-b border-[#173b2f]/10 px-5 py-4 sm:p-6">
              <div className="flex items-center gap-3 text-sm font-black leading-tight">
                <Truck className="h-5 w-5 shrink-0" />
                {remainingForFreeShipping > 0
                  ? `£${remainingForFreeShipping.toFixed(2)} away from free UK delivery`
                  : "You unlocked free UK delivery"}
              </div>

              <div className="mt-3 h-2.5 overflow-hidden rounded-full bg-[#fff8ed]">
                <div
                  className="h-full rounded-full bg-[#e5b15a]"
                  style={{ width: `${progress}%` }}
                />
              </div>

              {savings > 0 ? (
                <p className="mt-3 rounded-2xl bg-[#fff8ed] px-4 py-3 text-sm font-black leading-tight text-[#173b2f]">
                  You saved £{savings.toFixed(2)} with bundle pricing.
                </p>
              ) : null}
            </div>

            <div className="shrink-0 space-y-3 overflow-visible px-5 py-4">
              {detailedItems.map((item) => (
                <div
                  key={item.id}
                  className="rounded-3xl bg-[#fff8ed] p-3 shadow-sm ring-1 ring-[#173b2f]/10"
                >
                  <div className="flex gap-3">
                    <div className="grid h-20 w-20 shrink-0 place-items-center rounded-2xl bg-[#f6ead8]">
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={80}
                        height={80}
                        className="h-16 w-auto object-contain"
                      />
                    </div>

                    <div className="min-w-0 flex-1">
                      <h3 className="line-clamp-3 text-sm font-black leading-5">
                        {item.name}
                      </h3>
                      <p className="mt-1 text-sm font-black">
                        £{item.price.toFixed(2)}
                      </p>
                    </div>
                  </div>

                  <div className="mt-3 flex items-center justify-between gap-3">
                    <div className="flex w-fit items-center rounded-full border border-[#173b2f]/15">
                      <button
                        type="button"
                        onClick={() => setJarQuantity(item.id, item.jarCount - 1)}
                        className="grid h-9 w-9 place-items-center text-lg font-black"
                        aria-label="Decrease quantity"
                      >
                        −
                      </button>
                      <span className="w-8 text-center text-sm font-black">
                        {item.jarCount}
                      </span>
                      <button
                        type="button"
                        onClick={() => setJarQuantity(item.id, item.jarCount + 1)}
                        className="grid h-9 w-9 place-items-center text-lg font-black"
                        aria-label="Increase quantity"
                      >
                        +
                      </button>
                    </div>

                    <button
                      type="button"
                      onClick={() => removeItem(item.id)}
                      className="inline-flex shrink-0 items-center gap-1 text-[11px] font-black uppercase tracking-[0.12em] text-[#31574a]"
                    >
                      <Trash2 className="h-3 w-3" />
                      Remove
                    </button>
                  </div>
                </div>
              ))}

              {!hasSixPack ? (
                <button
                  type="button"
                  onClick={() => addItem(featuredBundle.id)}
                  className="w-full rounded-3xl border-2 border-dashed border-[#173b2f]/25 bg-[#fff8ed] p-4 text-left transition hover:border-[#173b2f]"
                >
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-[#31574a]">
                    Upgrade offer
                  </p>
                  <p className="mt-2 text-lg font-black">
                    Upgrade to 6-pack — £{featuredBundle.price.toFixed(2)}
                  </p>
                  <p className="mt-1 text-sm font-bold text-[#31574a]">
                    Best value + free UK delivery.
                  </p>
                </button>
              ) : null}
            </div>

            <div className="mt-auto shrink-0 border-t border-[#173b2f]/10 bg-[#fff8ed] px-5 py-4">
              <div className="space-y-2 text-sm font-bold">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>£{subtotal.toFixed(2)}</span>
                </div>

                {savings > 0 ? (
                  <div className="flex justify-between text-[#6f855f]">
                    <span>Bundle saving</span>
                    <span>-£{savings.toFixed(2)}</span>
                  </div>
                ) : null}

                <div className="flex justify-between">
                  <span>Delivery</span>
                  <span>{delivery === 0 ? "Free" : `£${delivery.toFixed(2)}`}</span>
                </div>

                <div className="flex justify-between pt-1 text-lg font-black">
                  <span>Total</span>
                  <span>£{total.toFixed(2)}</span>
                </div>
              </div>

              <button
                type="button"
                onClick={() => {
                  trackCheckoutStarted(subtotal);
                  checkout();
                }}
                className="mt-4 h-14 w-full rounded-full bg-[#173b2f] text-base font-black text-[#f8ead4] transition hover:bg-[#102a22]"
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
