import Image from "next/image";
import Link from "next/link";

const products = [
  {
    title: "Natural Smooth Peanut Butter",
    text: "Single 510g jar. 100% roasted peanuts, smooth texture.",
    price: "£4.99",
    image: "/assets/products/natural-smooth-510g.png",
    href: "/products/natural-smooth-510g",
  },
  {
    title: "Natural Smooth Peanut Butter — 6 Pack",
    text: "Six 510g jars. Best value and free UK delivery.",
    price: "£26.99",
    image: "/assets/products/flex-jar.png",
    href: "/shop",
  },
];

export default function HomeProductRange() {
  return (
    <section id="products" className="bg-[#fffaf0] px-6 py-14 md:py-18">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-8 max-w-2xl text-center">
          <p className="mb-3 text-sm font-black uppercase tracking-[0.28em] text-[#6f855f]">
            Our Range
          </p>
          <h2 className="text-4xl font-black tracking-[-0.05em] text-[#173b2f] md:text-5xl">
            Simple. Natural. Delicious.
          </h2>
          <p className="mt-3 text-lg text-[#31574a]">
            Made with roasted peanuts. Nothing else.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {products.map((product) => (
            <article
              key={product.title}
              className="grid items-center gap-6 rounded-3xl border border-[#173b2f]/10 bg-[#fff7e8] p-6 shadow-sm sm:grid-cols-[0.9fr_1.1fr]"
            >
              <Image
                src={product.image}
                alt={product.title}
                width={360}
                height={360}
                className="mx-auto h-56 w-auto object-contain"
              />

              <div>
                <h3 className="text-2xl font-black tracking-[-0.04em] text-[#173b2f]">
                  {product.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-[#31574a]">
                  {product.text}
                </p>
                <p className="mt-5 text-2xl font-black text-[#173b2f]">
                  {product.price}
                </p>
                <Link
                  href={product.href}
                  className="mt-5 inline-flex rounded-full bg-[#173b2f] px-7 py-4 text-sm font-black text-[#f8ead4] transition hover:bg-[#102a22]"
                >
                  View product
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
