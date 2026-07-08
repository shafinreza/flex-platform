import ProductCard from "@/components/shop/ProductCard";

const products = [
  {
    id: "flex-natural-smooth-510g",
    name: "FLEX Natural Smooth",
    subtitle: "Single 510g jar",
    price: 4.99,
    image: "/flex-jar.png",
    href: "/products/natural-smooth-510g",
    badge: "Try me",
  },
  {
    id: "flex-natural-smooth-3-pack",
    name: "FLEX Smooth 3 Pack",
    subtitle: "3 × 510g jars",
    price: 14.97,
    image: "/flex-jar.png",
    href: "/products/natural-smooth-510g",
    badge: "Stock up",
  },
  {
    id: "flex-natural-smooth-6-pack",
    name: "FLEX Smooth 6 Pack",
    subtitle: "6 × 510g jars",
    price: 29.94,
    image: "/flex-jar.png",
    href: "/products/natural-smooth-510g",
    badge: "Best value",
  },
];

export default function ShopPage() {
  return (
    <main className="bg-[#f6ead8] px-6 py-16 text-[#173b2f]">
      <section className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-3xl">
          <p className="mb-3 text-sm font-black uppercase tracking-[0.25em]">
            Shop FLEX
          </p>

          <h1 className="text-5xl font-black tracking-tight md:text-7xl">
            Peanut butter that actually works hard.
          </h1>

          <p className="mt-6 text-lg leading-8 text-[#31574a]">
            Natural smooth peanut butter, made with roasted peanuts. No palm oil,
            no added sugar, no nonsense.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </main>
  );
}
