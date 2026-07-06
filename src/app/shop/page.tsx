import QuickBuy from "@/components/home/QuickBuy";
import TrustBar from "@/components/home/TrustBar";

export default function ShopPage() {
  return (
    <main>
      <section className="bg-[#EFDFC7] px-6 py-16 text-center">
        <h1 className="text-5xl font-black text-[#4C260F] md:text-7xl">
          Shop FLEX
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg font-semibold text-[#4C260F]/75">
          Natural smooth peanut butter made with roasted peanuts. Choose one jar
          or stock up with a bundle.
        </p>
      </section>

      <QuickBuy />
      <TrustBar />
    </main>
  );
}
