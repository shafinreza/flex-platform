import Link from "next/link";
import FlexButton from "@/components/ui/FlexButton";

export default function CheckoutCancelPage() {
  return (
    <main className="px-5 py-20">
      <div className="mx-auto max-w-[760px] rounded-[18px] border border-[rgba(15,23,32,.10)] bg-white p-8 text-center">
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-[#6f855f]">
          Checkout cancelled
        </p>

        <h1 className="text-[56px] font-black leading-[.9] tracking-[-0.05em]">
          NO PAYMENT TAKEN
        </h1>

        <p className="mx-auto mt-5 max-w-xl text-[#5c6773]">
          Your cart has been saved. You can return to checkout whenever you’re ready.
        </p>

        <Link href="/shop">
          <FlexButton className="mt-8">Back to Shop</FlexButton>
        </Link>
      </div>
    </main>
  );
}
