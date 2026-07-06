"use client";

import Image from "next/image";
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
  const { items, removeItem, subtotal } = useCart();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <button
          aria-label="Open cart"
          className="relative grid h-11 w-11 place-items-center rounded-full border-2 border-[#4C260F] bg-white transition hover:bg-[#EFB236]"
        >
          <ShoppingBag size={20} />

          {items.length > 0 && (
            <span className="absolute -right-1 -top-1 grid h-5 w-5 place-items-center rounded-full bg-[#EF6838] text-xs font-black text-white">
              {items.length}
            </span>
          )}
        </button>
      </SheetTrigger>

      <SheetContent className="w-full border-l border-[#4C260F]/20 bg-[#F7F0E6] sm:max-w-md">
        <SheetHeader>
          <SheetTitle className="text-3xl font-black text-[#0B864E]">
            Ready to FLEX?
          </SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="mt-10 rounded-[24px] bg-white p-6 text-center">
            <p className="text-lg font-bold text-[#4C260F]">
              Your cart is empty.
            </p>
            <p className="mt-2 text-sm text-[#4C260F]/70">
              Add your first jar and you’re ready to FLEX.
            </p>
          </div>
        ) : (
          <div className="mt-8 space-y-6">
            {items.map((item) => (
              <div
                key={item.id}
                className="rounded-[24px] border border-[#4C260F]/15 bg-white p-4"
              >
                <div className="flex gap-4">
                  <div className="relative h-20 w-20 shrink-0 rounded-2xl bg-[#F7F3EA]">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-contain p-2"
                    />
                  </div>

                  <div className="flex flex-1 justify-between gap-3">
                    <div>
                      <h3 className="font-black leading-tight text-[#4C260F]">
                        {item.name}
                      </h3>

                      <p className="mt-1 text-sm font-semibold text-[#4C260F]/70">
                        Qty: {item.quantity}
                      </p>

                      <button
                        onClick={() => removeItem(item.id)}
                        className="mt-3 inline-flex items-center gap-1 text-sm font-bold text-[#EF6838]"
                      >
                        <Trash2 size={14} />
                        Remove
                      </button>
                    </div>

                    <div className="font-black text-[#0B864E]">
                      £{(item.price * item.quantity).toFixed(2)}
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <div className="rounded-[24px] border border-[#4C260F]/15 bg-white p-5">
              <div className="flex justify-between font-bold text-[#4C260F]">
                <span>Subtotal</span>
                <span>£{subtotal.toFixed(2)}</span>
              </div>

              <div className="mt-3 flex justify-between text-sm font-semibold text-[#4C260F]/70">
                <span>Delivery</span>
                <span>Calculated at checkout</span>
              </div>

              <div className="mt-5 border-t border-[#4C260F]/15 pt-5">
                <div className="flex justify-between text-2xl font-black text-[#4C260F]">
                  <span>Total</span>
                  <span>£{subtotal.toFixed(2)}</span>
                </div>
              </div>
            </div>

            <FlexButton className="w-full">Secure Checkout</FlexButton>

            <p className="text-center text-sm font-semibold text-[#4C260F]/60">
              Secure payment powered by Stripe.
            </p>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}