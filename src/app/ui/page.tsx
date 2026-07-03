import FlexButton from "@/components/ui/FlexButton";
import ProductCard from "@/components/shop/ProductCard";

export default function UIPage() {
  return (
    <main className="min-h-screen bg-[#EFDFC7] px-8 py-16">
      <div className="mx-auto max-w-7xl">

        <h1 className="mb-3 text-6xl font-black text-[#0B864E]">
          FLEX Design System
        </h1>

        <p className="mb-12 max-w-2xl text-xl text-[#4C260F]">
          Everything below is reusable throughout the website.
        </p>

        <section className="mb-20">
          <h2 className="mb-6 text-3xl font-black text-[#4C260F]">
            Buttons
          </h2>

          <div className="flex flex-wrap gap-4">
            <FlexButton>Shop Now</FlexButton>
            <FlexButton variant="outline">See Recipes</FlexButton>
            <FlexButton variant="secondary">Best Value</FlexButton>
          </div>
        </section>

        <section>
          <h2 className="mb-6 text-3xl font-black text-[#4C260F]">
            Product Cards
          </h2>

          <div className="grid gap-8 md:grid-cols-2">

            <ProductCard
              badge="Single Jar"
              title="FLEX Smooth 510g"
              subtitle="High Protein • No Added Sugar • No Palm Oil"
              price="£5.49"
            />

            <ProductCard
              variant="bundle"
              badge="BEST VALUE"
              title="Pack of 6"
              subtitle="Perfect for families and meal prep."
              savings="Save £7.95"
              price="£24.99"
            />

          </div>
        </section>

      </div>
    </main>
  );
}