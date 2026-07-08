import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AddToCartButton from "@/components/cart/AddToCartButton";
import { FREE_SHIPPING_THRESHOLD, storefrontProducts } from "@/data/products";

export const metadata: Metadata = {
  title: "Shop FLEX Peanut Butter | Natural Smooth Bundles",
  description:
    "Shop FLEX Natural Smooth Peanut Butter. Single jar, 2 pack, 3 pack and 6 pack bundles. Free UK delivery over £25.",
};

function formatPrice(price: number) {
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
  }).format(price);
}

function getCardMeta(productId: string) {
  if (productId === "natural-smooth-510g") {
    return {
      label: "Most Popular",
      subtitle: "Single 510g Jar",
      bullets: ["Try FLEX", "No palm oil", "No added sugar"],
      saving: null,
    };
  }

  if (productId === "natural-smooth-2-pack") {
    return {
      label: "Save 49p",
      subtitle: "2 × 510g Jars",
      bullets: ["Regular use", "Smooth texture", "Better value"],
      saving: "Save £0.49",
    };
  }

  if (productId === "natural-smooth-3-pack") {
    return {
      label: "Popular",
      subtitle: "3 × 510g Jars",
      bullets: ["Family friendly", "Oats & smoothies", "Save vs singles"],
      saving: "Save £0.98",
    };
  }

  return {
    label: "Best Value",
    subtitle: "6 × 510g Jars",
    bullets: ["Free UK delivery", "Best value", "Stock up"],
    saving: "Save £2.95",
  };
}

export default function ShopPage() {
  return (
    <main className="bg-[#f6ead8] text-[#173b2f]">
      <section className="px-6 py-10 md:py-14">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-sm font-black uppercase tracking-[0.28em] text-[#6f855f]">
            Shop FLEX
          </p>
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1fr] lg:items-end">
            <div>
              <h1 className="max-w-4xl text-5xl font-black leading-[0.9] tracking-[-0.06em] md:text-7xl">
                Choose your everyday fuel.
              </h1>
              <p className="mt-5 max-w-2xl text-lg font-medium leading-relaxed text-[#31574a]">
                Natural smooth peanut butter for breakfast, workouts, snacks and
                recipes. Free UK delivery over {formatPrice(FREE_SHIPPING_THRESHOLD)}.
              </p>
            </div>

            <div className="rounded-[2rem] bg-[#fffaf0] p-5 shadow-sm ring-1 ring-[#173b2f]/10">
              <div className="grid gap-3 sm:grid-cols-3">
                <div>
                  <p className="text-3xl font-black">100%</p>
                  <p className="text-sm font-bold text-[#31574a]">
                    Roasted peanuts
                  </p>
                </div>
                <div>
                  <p className="text-3xl font-black">0</p>
                  <p className="text-sm font-bold text-[#31574a]">
                    Added sugar
                  </p>
                </div>
                <div>
                  <p className="text-3xl font-black">£25+</p>
                  <p className="text-sm font-bold text-[#31574a]">
                    Free delivery
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 pb-12 md:pb-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-6 flex flex-col gap-4 rounded-[2rem] bg-[#fffaf0] p-4 shadow-sm ring-1 ring-[#173b2f]/10 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.22em] text-[#6f855f]">
                Natural Smooth
              </p>
              <p className="mt-1 text-sm font-bold text-[#31574a]">
                Pick the pack size that works best for you.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 text-xs font-black uppercase tracking-wide">
              <span className="rounded-full bg-[#f6ead8] px-4 py-2">
                Featured
              </span>
              <span className="rounded-full bg-[#f6ead8] px-4 py-2">
                Best value
              </span>
              <span className="rounded-full bg-[#f6ead8] px-4 py-2">
                Free delivery £25+
              </span>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {storefrontProducts.map((product) => {
              const meta = getCardMeta(product.id);

              return (
                <article
                  key={product.id}
                  className="group flex min-h-[520px] flex-col rounded-[2rem] border border-[#173b2f]/10 bg-[#fff7e8] p-5 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className="rounded-full bg-[#6f855f] px-3 py-1.5 text-[10px] font-black uppercase tracking-wide text-white">
                      {meta.label}
                    </span>
                    <span className="text-lg font-black">
                      {formatPrice(product.price)}
                    </span>
                  </div>

                  <Link
                    href={product.href}
                    className="mt-5 grid min-h-[230px] place-items-center rounded-[1.6rem] bg-[#f6ead8] p-5"
                  >
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={360}
                      height={360}
                      className="h-56 w-auto object-contain mix-blend-multiply transition duration-200 group-hover:scale-105"
                    />
                  </Link>

                  <div className="flex flex-1 flex-col pt-5">
                    <p className="text-xs font-black uppercase tracking-[0.18em] text-[#6f855f]">
                      {meta.subtitle}
                    </p>

                    <h2 className="mt-2 text-2xl font-black leading-tight tracking-[-0.05em]">
                      {product.id === "natural-smooth-510g"
                        ? "FLEX Natural Smooth"
                        : product.name.replace("FLEX ", "")}
                    </h2>

                    <p className="mt-3 text-sm font-bold leading-relaxed text-[#31574a]">
                      {product.subtitle}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {meta.bullets.map((bullet) => (
                        <span
                          key={bullet}
                          className="rounded-full bg-[#fffaf0] px-3 py-2 text-[11px] font-black uppercase tracking-wide"
                        >
                          ✓ {bullet}
                        </span>
                      ))}
                    </div>

                    <div className="mt-auto pt-5">
                      {product.compareAtPrice ? (
                        <div className="mb-3 flex items-center gap-3">
                          <span className="text-sm font-black text-[#31574a] line-through">
                            {formatPrice(product.compareAtPrice)}
                          </span>
                          {meta.saving ? (
                            <span className="rounded-full bg-[#e5b15a] px-3 py-1 text-xs font-black">
                              {meta.saving}
                            </span>
                          ) : null}
                        </div>
                      ) : null}

                      <AddToCartButton
                        productId={product.id}
                        className="inline-flex h-12 w-full items-center justify-center rounded-full bg-[#173b2f] px-6 text-sm font-black text-[#f8ead4] transition hover:bg-[#102a22]"
                      />

                      <Link
                        href={product.href}
                        className="mt-3 inline-flex h-12 w-full items-center justify-center rounded-full border border-[#173b2f]/15 px-6 text-sm font-black text-[#173b2f] transition hover:bg-white"
                      >
                        View details
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#fffaf0] px-6 py-10 md:py-12">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">
          <div>
            <h2 className="text-2xl font-black">No added sugar</h2>
            <p className="mt-2 text-sm font-bold leading-relaxed text-[#31574a]">
              Just simple, natural peanut butter for everyday use.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-black">No palm oil</h2>
            <p className="mt-2 text-sm font-bold leading-relaxed text-[#31574a]">
              Smooth texture, rich roasted taste and no unnecessary extras.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-black">Free delivery over £25</h2>
            <p className="mt-2 text-sm font-bold leading-relaxed text-[#31574a]">
              The 6 Pack unlocks free UK delivery automatically.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
