"use client";

import { ShoppingBag, X } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import FlexButton from "@/components/ui/FlexButton";

const cartItems = [
  {
    name: "FLEX Natural Peanut Butter Smooth 510g",
    quantity: 1,
    price: 5.49,
  },
];

export default function CartDrawer() {
  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <Sheet>
      <SheetTrigger asChild>
        <button
          aria-label="Open cart"
          className="grid h-11 w-11 place-items-center rounded-full border-2 border-[#4C260F] bg-white transition hover:bg-[#EFB236]"
        >
          <ShoppingBag size={20} />
        </button>
      </SheetTrigger>

      <SheetContent className="w-full border-l-2 border-[#4C260F] bg-[#EFDFC7] sm:max-w-md">
        <SheetHeader>
          <SheetTitle className="text-3xl font-black text-[#0B864E]">
            Ready to FLEX?
          </SheetTitle>
        </SheetHeader>

        <div className="mt-8 space-y-6">
          {cartItems.map((item) => (
            <div
              key={item.name}
              className="rounded-3xl border-2 border-[#4C260F] bg-white p-5"
            >
              <div className="flex justify-between gap-4">
                <div>
                  <h3 className="font-black text-[#4C260F]">{item.name}</h3>
                  <p className="mt-1 text-sm font-semibold text-[#4C260F]/70">
                    Qty: {item.quantity}
                  </p>
                </div>

                <div className="font-black text-[#0B864E]">
                  £{(item.price * item.quantity).toFixed(2)}
                </div>
              </div>
            </div>
          ))}

          <div className="rounded-3xl border-2 border-[#4C260F] bg-white p-5">
            <div className="flex justify-between font-bold">
              <span>Subtotal</span>
              <span>£{subtotal.toFixed(2)}</span>
            </div>

            <div className="mt-3 flex justify-between font-bold">
              <span>Delivery</span>
              <span>Calculated at checkout</span>
            </div>

            <div className="mt-5 border-t-2 border-[#4C260F] pt-5">
              <div className="flex justify-between text-2xl font-black">
                <span>Total</span>
                <span>£{subtotal.toFixed(2)}</span>
              </div>
            </div>
          </div>

          <FlexButton className="w-full">
            Secure Checkout
          </FlexButton>

          <p className="text-center text-sm font-semibold text-[#4C260F]/70">
            Secure payment powered by Stripe.
          </p>
        </div>
      </SheetContent>
    </Sheet>
  );
}