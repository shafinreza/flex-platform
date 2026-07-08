import Image from "next/image";
import Link from "next/link";
import AddToCartButton from "@/components/cart/AddToCartButton";

const productPage = "/products/natural-smooth-510g";

const products = [
  {
    id: "natural-smooth-510g",
    title: "Natural Smooth Peanut Butter",
    subtitle: "Single 510g jar",
    text: "100% roasted peanuts with a smooth texture and rich roasted taste.",
    price: "£4.99",
    badge: "Most Popular",
    image: "/assets/products/natural-smooth-510g.png",
    bullets: ["100% roasted peanuts", "No palm oil", "No added sugar"],
  },
  {
    id: "natural-smooth-6-pack",
    title: "Natural Smooth Peanut Butter — 6 Pack",
    subtitle: "6 × 510g jars",
    text: "Best value bundle for families, gym bags, oats and smoothies.",
    price: "£26.99",
    badge: "Best Value",
    image: "/assets/products/natural-smooth-510g.png",
    bullets: ["Free UK delivery", "Best value", "6 jars included"],
  },
];

export default function HomeProductRange() {
  return (
    <section id="products" className="bg-[#fffaf0] px-6 py-10 md:py-12">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-8 max-w-2xl text-center">
          <p className="mb-3 text-sm font-black uppercase tracking-[0.28em] text-[#6f855f]">
            Our Range
          </p>
          <h2 className="text-4xl font-black tracking-[-0.05em] text-[#173b2f] md:text-5xl">
            Simple. Natural. Delicious.
          </h2>
        </div>

        <div className="grid gap-6">
          {products.map((product) => (
            <article
              key={product.id}
              className="grid min-h-[420px] items-center gap-8 rounded-[2rem] border border-[#173b2f]/10 bg-[#fff7e8] p-6 shadow-sm md:grid-cols-[0.42fr_0.58fr] md:p-8"
            >
              <div className="relative grid h-full min-h-[300px] place-items-center rounded-[1.6rem] bg-[#f6ead8] p-8">
                <span className="absolute left-5 top-5 rounded-2xl bg-[#6f855f] px-3 py-2 text-xs font-black uppercase tracking-wide text-white">
                  {product.badge}
                </span>
                <Image
                  src={product.image}
                  alt={product.title}
                  width={520}
                  height={520}
                  className="h-72 w-auto object-contain mix-blend-multiply md:h-80"
                />
              </div>

              <div>
                <p className="text-sm font-black uppercase tracking-[0.18em] text-[#6f855f]">
                  {product.subtitle}
                </p>

                <h3 className="mt-3 max-w-2xl text-4xl font-black leading-[0.95] tracking-[-0.06em] text-[#173b2f] md:text-5xl">
                  {product.title}
                </h3>

                <p className="mt-4 max-w-xl text-lg font-medium leading-relaxed text-[#31574a]">
                  {product.text}
                </p>

                <div className="mt-5 flex flex-wrap gap-3">
                  {product.bullets.map((bullet) => (
                    <span
                      key={bullet}
                      className="rounded-full bg-[#fffaf0] px-4 py-3 text-xs font-black uppercase tracking-wide text-[#173b2f]"
                    >
                      ✓ {bullet}
                    </span>
                  ))}
                </div>

                <p className="mt-6 text-4xl font-black tracking-[-0.05em] text-[#173b2f]">
                  {product.price}
                </p>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <AddToCartButton
                    productId={product.id}
                    className="inline-flex h-12 items-center justify-center rounded-full bg-[#173b2f] px-8 text-sm font-black text-[#f8ead4] transition hover:bg-[#102a22]"
                  />
                  <Link
                    href={productPage}
                    className="inline-flex h-12 items-center justify-center rounded-full border border-[#173b2f]/15 px-8 text-sm font-black text-[#173b2f] transition hover:bg-white"
                  >
                    View details
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
