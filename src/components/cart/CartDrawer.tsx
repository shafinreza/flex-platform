"use client";

import Image from "next/image";
import Link from "next/link";
import { ShoppingBag, Trash2 } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import FlexButton from "@/components/ui/FlexButton";
import { useCart } from "@/components/cart/CartProvider";

export default function CartDrawer() {
  const {
    items,
    detailedItems,
    removeItem,
    updateQuantity,
    subtotal,
    checkout,
  } = useCart();

  const delivery = subtotal > 0 ? 2.99 : 0;
  const total = subtotal + delivery;
  const cartCount = items.reduce((total, item) => total + item.quantity, 0);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <button
          aria-label="Open cart"
          className="relative grid h-11 w-11 place-items-center rounded-[10px] border border-[rgba(15,23,32,.12)] bg-white transition hover:bg-[#f4f6f3]"
        >
          <ShoppingBag size={18} />

          {cartCount > 0 && (
            <span className="absolute -right-2 -top-2 grid h-5 min-w-5 place-items-center rounded-full bg-[#6f855f] px-1 text-[11px] font-black text-white">
              {cartCount}
            </span>
          )}
        </button>
      </SheetTrigger>

      <SheetContent className="flex w-full flex-col border-l border-[rgba(15,23,32,.12)] bg-[#f4f6f3] p-0 sm:max-w-md">
        <SheetHeader className="border-b border-[rgba(15,23,32,.10)] bg-white px-6 py-5 text-left">
          <SheetTitle className="text-2xl font-black tracking-[-0.03em] text-[#0f1720]">
            Your Cart
          </SheetTitle>
        </SheetHeader>

        {detailedItems.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center px-6 text-center">
            <div className="mb-6 grid h-20 w-20 place-items-center rounded-full bg-white">
              <ShoppingBag size={30} className="text-[#6f855f]" />
            </div>

            <h3 className="text-2xl font-black">Your cart is empty</h3>

            <p className="mt-3 max-w-xs text-sm text-[#5c6773]">
              Add your first jar of FLEX and you’re ready to fuel your limits.
            </p>

            <Link href="/shop" className="mt-7">
              <FlexButton>Shop FLEX</FlexButton>
            </Link>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-5 py-5">
              <div className="space-y-4">
                {detailedItems.map((item) => (
                  <div
                    key={item.id}
                    className="rounded-[18px] border border-[rgba(15,23,32,.10)] bg-white p-4"
                  >
                    <div className="flex gap-4">
                      <div className="grid h-24 w-24 shrink-0 place-items-center rounded-2xl bg-[#f7f9f6] p-2">
                        <Image
                          src={item.image}
                          alt={item.name}
                          width={96}
                          height={96}
                          className="h-full w-full object-contain"
                        />
                      </div>

                      <div className="min-w-0 flex-1">
                        <h3 className="text-base font-black leading-tight text-[#0f1720]">
                          {item.name}
                        </h3>

                        <p className="mt-1 text-sm font-semibold text-[#5c6773]">
                          £{item.price.toFixed(2)}
                        </p>

                        <div className="mt-4 flex items-center justify-between gap-3">
                          <div className="flex items-center rounded-xl border border-[rgba(15,23,32,.14)]">
                            <button
                              onClick={() =>
                                updateQuantity(item.id, item.quantity - 1)
                              }
                              className="grid h-9 w-9 place-items-center text-lg font-bold"
                              aria-label="Decrease quantity"
                            >
                              −
                            </button>

                            <span className="w-8 text-center text-sm font-black">
                              {item.quantity}
                            </span>

                            <button
                              onClick={() =>
                                updateQuantity(item.id, item.quantity + 1)
                              }
                              className="grid h-9 w-9 place-items-center text-lg font-bold"
                              aria-label="Increase quantity"
                            >
                              +
                            </button>
                          </div>

                          <button
                            onClick={() => removeItem(item.id)}
                            className="inline-flex items-center gap-1 text-xs font-black uppercase tracking-[0.12em] text-[#6f855f]"
                          >
                            <Trash2 size={13} />
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-5 rounded-[18px] border border-[rgba(15,23,32,.10)] bg-white p-4">
                <p className="text-sm font-bold text-[#0f1720]">
                  Delivery
                </p>
                <p className="mt-1 text-sm text-[#5c6773]">
                  Standard UK delivery is £2.99. Orders are packed carefully to
                  protect your jar.
                </p>
              </div>
            </div>

            <div className="border-t border-[rgba(15,23,32,.10)] bg-white px-5 py-5">
              <div className="space-y-3 text-sm">
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

              <FlexButton onClick={checkout} className="mt-5 w-full">
                Secure Checkout
              </FlexButton>

              <p className="mt-3 text-center text-xs text-[#5c6773]">
                Secure payment powered by Stripe.
              </p>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}
