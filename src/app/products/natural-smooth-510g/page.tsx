import Image from "next/image";
import FlexButton from "@/components/ui/FlexButton";
import { featuredVariant, productFamilies } from "@/data/products";

export default function NaturalSmoothPage() {
  const product = featuredVariant;
  const family = productFamilies[0];

  return (
    <main className="bg-[#F7F0E6] px-6 py-16 text-[#4C260F]">
      <section className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2">
        <div className="flex items-center justify-center rounded-[32px] bg-white p-10 shadow-sm">
          <Image
            src={product.image}
            alt={product.name}
            width={520}
            height={520}
            priority
            className="max-h-[520px] w-auto object-contain"
          />
        </div>

        <div className="flex flex-col justify-center">
          <p className="mb-3 text-sm font-black uppercase tracking-[0.22em] text-[#0B864E]">
            {family.name}
          </p>

          <h1 className="text-5xl font-black leading-tight md:text-7xl">
            {product.name}
          </h1>

          <p className="mt-5 text-xl font-medium text-[#4C260F]/75">
            {family.description}
          </p>

          <div className="mt-6 text-lg font-bold">
            ★★★★★ {product.rating} ({product.reviewCount} reviews)
          </div>

          <div className="mt-8 text-5xl font-black text-[#0B864E]">
            £{product.price.toFixed(2)}
          </div>

          <div className="mt-8 flex gap-4">
            <div>
              <p className="mb-2 text-sm font-bold">Texture</p>
              <button className="rounded-full bg-[#0B864E] px-5 py-2 font-bold text-white">
                {product.texture}
              </button>
            </div>

            <div>
              <p className="mb-2 text-sm font-bold">Size</p>
              <button className="rounded-full border border-[#4C260F]/20 bg-white px-5 py-2 font-bold">
                {product.size}
              </button>
            </div>
          </div>

          <div className="mt-8 grid gap-3">
            {product.features.map((feature) => (
              <div
                key={feature}
                className="rounded-full bg-white px-5 py-3 font-bold"
              >
                {feature}
              </div>
            ))}
          </div>

          <div className="mt-8">
            <FlexButton className="w-full md:w-auto">
              Add to Cart
            </FlexButton>
          </div>
        </div>
      </section>
    </main>
  );
}