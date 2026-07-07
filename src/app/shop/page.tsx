import QuickBuy from "@/components/home/QuickBuy";
import TrustBar from "@/components/home/TrustBar";

export default function ShopPage() {
  return (
    <main className="bg-[#f4f6f3]">
      <section className="bg-[radial-gradient(900px_520px_at_30%_40%,rgba(255,255,255,.55),rgba(255,255,255,0)),linear-gradient(0deg,rgba(111,133,95,.12),rgba(111,133,95,.12))] px-5 py-14">
        <div className="mx-auto max-w-7xl">
          <p className="mb-3 text-sm text-[#0f1720]/75">
            Clean performance nutrition
          </p>

          <h1 className="font-display text-5xl leading-none tracking-[-0.02em] text-white drop-shadow-md md:text-7xl">
            SHOP FLEX
          </h1>

          <p className="mt-5 max-w-[62ch] text-[#0f1720]/85">
            Add FLEX to your cart and checkout securely in seconds.
          </p>
        </div>
      </section>

      <TrustBar />
      <QuickBuy />
    </main>
  );
}
