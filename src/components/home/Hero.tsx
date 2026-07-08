import Link from "next/link";
import AddToCartButton from "@/components/cart/AddToCartButton";

const product = {
  id: "flex-natural-smooth-510g",
  name: "FLEX Natural Smooth Peanut Butter",
  price: 4.99,
  image: "/flex-jar.png",
  quantity: 1,
};

export default function Hero() {
  return (
    <section className="min-h-[90vh] bg-[#f6ead8] px-6 py-12 text-[#173b2f]">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
        <div>
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em]">
            Natural Peanut Butter
          </p>

          <h1 className="max-w-2xl text-5xl font-black leading-none tracking-tight md:text-7xl">
            Fuel your FLEX.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-[#31574a]">
            Premium smooth peanut butter made with roasted peanuts. No palm oil,
            no added sugar, no nonsense — just clean, creamy fuel.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <AddToCartButton product={product} />

            <Link
              href="/products/natural-smooth-510g"
              className="inline-flex h-14 items-center justify-center rounded-full border-2 border-[#173b2f] px-8 text-base font800 font-bold transition hover:bg-[#173b2f] hover:text-[#f6ead8]"
            >
              View product
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap gap-3 text-sm font-semibold">
            <span className="rounded-full bg-white/70 px-4 py-2">
              No added sugar
            </span>
            <span className="rounded-full bg-white/70 px-4 py-2">
              No palm oil
            </span>
            <span className="rounded-full bg-white/70 px-4 py-2">
              510g jar
            </span>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 rounded-[3rem] bg-[#e5b15a] blur-3xl opacity-40" />
          <div className="relative rounded-[3rem] bg-[#fff8ed] p-8 shadow-2xl">
            <img
              src="/flex-jar.png"
              alt="FLEX Natural Smooth Peanut Butter"
              className="mx-auto max-h-[520px] w-auto object-contain"
            />

            <div className="mt-6 rounded-3xl bg-[#173b2f] p-6 text-[#f6ead8]">
              <div className="flex items-end justify-between gap-4">
                <div>
                  <p className="text-sm opacity-80">510g jar</p>
                  <p className="text-3xl font-black">£4.99</p>
                </div>
                <p className="text-right text-sm font-semibold">
                  Smooth, roasted, naturally powerful.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}