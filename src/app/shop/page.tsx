import QuickBuy from "@/components/home/QuickBuy";
import TrustBar from "@/components/home/TrustBar";

export default function ShopPage() {
  return (
    <main>
      <section className="bg-[radial-gradient(900px_520px_at_30%_40%,rgba(255,255,255,.55),rgba(255,255,255,0)),linear-gradient(0deg,rgba(111,133,95,.12),rgba(111,133,95,.12))] px-5 py-16">
        <div className="mx-auto max-w-[1120px]">
          <p className="mb-3 text-sm text-[#0f1720]/75">
            Clean performance nutrition
          </p>

          <h1 className="text-[72px] font-black leading-[.86] tracking-[-0.05em] text-white drop-shadow-md md:text-[92px]">
            SHOP FLEX
          </h1>

          <p className="mt-5 max-w-[62ch] text-[#0f1720]/85">
            Start with our original smooth peanut butter or stock up with a 6-pack.
            More products are coming soon.
          </p>
        </div>
      </section>

      <TrustBar />

      <section className="px-5 py-[72px]">
        <div className="mx-auto max-w-[1120px]">
          <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <h2 className="text-[62px] font-black leading-[.9] tracking-[-0.04em]">
                PRODUCTS
              </h2>
              <p className="mt-3 max-w-[62ch] text-[#5c6773]">
                Simple, clean performance fuel. Built for training days,
                breakfast bowls and everyday snacks.
              </p>
            </div>

            <div className="rounded-full border border-[rgba(15,23,32,.12)] bg-white px-4 py-2 text-sm font-bold text-[#5c6773]">
              2 products
            </div>
          </div>

          <QuickBuy />
        </div>
      </section>
    </main>
  );
}
