import Image from "next/image";
import type { Metadata } from "next";
import AddToCartButton from "@/components/cart/AddToCartButton";
import NutritionTable from "@/components/product/NutritionTable";
import ProductFAQ from "@/components/product/ProductFAQ";
import ProductReviews from "@/components/product/ProductReviews";
import ProductImageGallery from "@/components/product/ProductImageGallery";
import { getStoreProductById } from "@/lib/product-store";

export const metadata: Metadata = {
  title: "Natural Smooth Peanut Butter 510g",
  description:
    "Shop FLEX Natural Smooth Peanut Butter made with 100% roasted peanuts. No palm oil and no added sugar. Available as a single jar, 2 pack, 3 pack and 6 pack.",
  alternates: {
    canonical: "/products/natural-smooth-510g",
  },
  openGraph: {
    title: "FLEX Natural Smooth Peanut Butter 510g",
    description:
      "100% roasted peanuts. No palm oil. No added sugar. Smooth, rich and made for everyday fuel.",
    url: "/products/natural-smooth-510g",
    type: "website",
    images: ["/assets/products/natural-smooth-510g.png"],
  },
};

const packs = [
  {
    id: "natural-smooth-510g",
    name: "Single Jar",
    detail: "1 × 510g",
    price: "£4.99",
    badge: "Most Popular",
    saving: "",
  },
  {
    id: "natural-smooth-2-pack",
    name: "2 Pack",
    detail: "2 × 510g",
    price: "£9.49",
    badge: "Save 49p",
    saving: "Better than buying singles",
  },
  {
    id: "natural-smooth-3-pack",
    name: "3 Pack",
    detail: "3 × 510g",
    price: "£13.99",
    badge: "Popular",
    saving: "Save 98p",
  },
  {
    id: "natural-smooth-6-pack",
    name: "6 Pack",
    detail: "6 × 510g",
    price: "£26.99",
    badge: "Best Value",
    saving: "Free UK delivery",
  },
];

const trust = [
  "Secure Stripe checkout",
  "Free standard delivery on 6+ jars",
  "No palm oil",
  "No added sugar",
];

export const dynamic = "force-dynamic";

export default async function ProductPage() {
  const product = await getStoreProductById("natural-smooth-510g");
  const gallery = product?.gallery?.length
    ? product.gallery
    : [
        {
          id: "fallback-main",
          imageUrl: product?.image || "/assets/products/natural-smooth-510g.png",
          altText: "FLEX Natural Smooth Peanut Butter",
          sortOrder: 0,
          isPrimary: true,
        },
      ];
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product?.name || "FLEX Natural Smooth Peanut Butter 510g",
    description:
      "Natural smooth peanut butter made with 100% roasted peanuts. No palm oil and no added sugar.",
    image: gallery.map((image) =>
      image.imageUrl.startsWith("http")
        ? image.imageUrl
        : `https://www.eatflex.uk${image.imageUrl}`
    ),
    brand: {
      "@type": "Brand",
      name: "FLEX",
    },
    sku: "FLEX-PB-510-NATURAL-SMOOTH",
    gtin13: "5070003089116",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.5",
      reviewCount: "34",
    },
    offers: {
      "@type": "Offer",
      priceCurrency: "GBP",
      price: String(product?.price ?? 4.99),
      availability: "https://schema.org/InStock",
      url: "https://www.eatflex.uk/products/natural-smooth-510g",
      seller: {
        "@type": "Organization",
        name: "FLEX",
      },
    },
  };

  return (
    <main className="bg-[#f6ead8] text-[#173b2f]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productSchema),
        }}
      />
      <section className="px-6 py-8 md:py-10">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.92fr_1fr]">
          <ProductImageGallery images={gallery} />

          <div>
            <p className="text-sm font-black uppercase tracking-[0.28em] text-[#6f855f]">
              Natural Smooth Peanut Butter
            </p>

            <h1 className="mt-4 text-5xl font-black leading-[0.9] tracking-[-0.06em] md:text-7xl">
              Clean fuel. Rich roasted taste.
            </h1>

            <div className="mt-5 flex items-center gap-2 text-sm font-black">
              <span
                className="text-[#e5b15a]"
                aria-label="Rated 4.5 out of 5 stars"
              >
                ★★★★☆
              </span>
              <span>4.5 star reviews</span>
            </div>

            <p className="mt-5 max-w-xl text-lg font-medium leading-relaxed text-[#31574a]">
              Premium smooth peanut butter made from 100% roasted peanuts. No
              palm oil, no added sugar, no fillers. Built for breakfast,
              workouts, smoothies and everyday snacking.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {["100% roasted peanuts", "No palm oil", "No added sugar", "25.7g protein /100g"].map(
                (item) => (
                  <span
                    key={item}
                    className="rounded-full bg-[#fffaf0] px-4 py-3 text-xs font-black uppercase tracking-wide"
                  >
                    ✓ {item}
                  </span>
                )
              )}
            </div>

            <div className="mt-8 rounded-[2rem] border border-[#173b2f]/10 bg-[#fffaf0] p-5 shadow-sm">
              <div className="mb-5">
                <p className="text-sm font-black uppercase tracking-[0.22em] text-[#6f855f]">
                  Choose your pack
                </p>
                <h2 className="mt-2 text-3xl font-black tracking-[-0.05em]">
                  Stock up and save.
                </h2>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {packs.map((pack) => (
                  <article
                    key={pack.id}
                    className="rounded-3xl border border-[#173b2f]/10 bg-[#fff7e8] p-4 transition hover:-translate-y-0.5 hover:shadow-md"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <span className="rounded-full bg-[#6f855f] px-3 py-1.5 text-[10px] font-black uppercase tracking-wide text-white">
                          {pack.badge}
                        </span>
                        <h3 className="mt-4 text-2xl font-black">{pack.name}</h3>
                        <p className="mt-1 text-sm font-bold text-[#31574a]">
                          {pack.detail}
                        </p>
                      </div>

                      <p className="text-2xl font-black">{pack.price}</p>
                    </div>

                    {pack.saving ? (
                      <p className="mt-3 text-sm font-black text-[#6f855f]">
                        {pack.saving}
                      </p>
                    ) : null}

                    <AddToCartButton
                      productId={pack.id}
                      className="mt-4 inline-flex h-12 w-full items-center justify-center rounded-full bg-[#173b2f] px-6 text-sm font-black text-[#f8ead4] transition hover:bg-[#102a22]"
                    />
                  </article>
                ))}
              </div>

              <div className="mt-5 grid gap-2 sm:grid-cols-2">
                {trust.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl bg-[#fff7e8] px-4 py-3 text-sm font-black"
                  >
                    ✓ {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-5 rounded-[2rem] bg-[#173b2f] p-5 text-[#f8ead4]">
              <p className="text-sm font-black uppercase tracking-[0.22em] text-[#d9eb7c]">
                Delivery & returns
              </p>
              <p className="mt-2 text-xl font-black">
                Free UK delivery over £25
              </p>
              <p className="mt-1 text-sm font-bold text-[#f8ead4]/80">
                Standard UK delivery is £1.99. Six or more jars qualify for
                free standard delivery. Express options are available at checkout.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#fffaf0] px-6 py-10 md:py-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-7">
            <p className="mb-3 text-sm font-black uppercase tracking-[0.28em] text-[#6f855f]">
              Why FLEX
            </p>
            <h2 className="max-w-4xl text-4xl font-black tracking-[-0.05em] md:text-5xl">
              Built for breakfast, workouts and everyday snacking.
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-4">
            {[
              ["Clean ingredients", "Made with roasted peanuts only."],
              ["No palm oil", "Naturally smooth without unnecessary oils."],
              ["No added sugar", "Rich roasted taste without added sugar."],
              ["High protein", "25.7g protein per 100g."],
            ].map(([title, text]) => (
              <div
                key={title}
                className="rounded-3xl border border-[#173b2f]/10 bg-[#fff7e8] p-5 shadow-sm"
              >
                <h3 className="text-xl font-black">{title}</h3>
                <p className="mt-2 text-sm font-bold leading-relaxed text-[#31574a]">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f6ead8] px-6 py-10 md:py-12">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-[#173b2f]/10 bg-[#fffaf0] p-6 shadow-sm">
          <p className="text-sm font-black uppercase tracking-[0.28em] text-[#6f855f]">
            Frequently bought together
          </p>
          <div className="mt-5 grid gap-6 md:grid-cols-[1fr_auto_1fr_auto] md:items-center">
            <div className="flex items-center gap-4 rounded-3xl bg-[#fff7e8] p-4">
              <Image
                src="/assets/products/natural-smooth-510g.png"
                alt="FLEX Single Jar"
                width={140}
                height={140}
                className="h-24 w-auto object-contain mix-blend-multiply"
              />
              <div>
                <h3 className="text-xl font-black">Single Jar</h3>
                <p className="text-sm font-bold text-[#31574a]">£4.99</p>
              </div>
            </div>

            <span className="hidden text-3xl font-black md:block">+</span>

            <div className="flex items-center gap-4 rounded-3xl bg-[#fff7e8] p-4">
              <Image
                src="/assets/products/natural-smooth-510g.png"
                alt="FLEX 6 Pack"
                width={140}
                height={140}
                className="h-24 w-auto object-contain mix-blend-multiply"
              />
              <div>
                <h3 className="text-xl font-black">6 Pack</h3>
                <p className="text-sm font-bold text-[#31574a]">£26.99</p>
              </div>
            </div>

            <AddToCartButton
              productId="natural-smooth-6-pack"
              className="inline-flex h-12 items-center justify-center rounded-full bg-[#173b2f] px-6 text-sm font-black text-[#f8ead4]"
            >
              Add best value pack
            </AddToCartButton>
          </div>
        </div>
      </section>

      <NutritionTable />
      <ProductReviews />
      <ProductFAQ />

      <div className="sticky bottom-0 z-40 border-t border-[#173b2f]/10 bg-[#fffaf0]/95 px-4 py-3 backdrop-blur md:hidden">
        <AddToCartButton
          productId="natural-smooth-510g"
          className="inline-flex h-12 w-full items-center justify-center rounded-full bg-[#173b2f] px-6 text-sm font-black text-[#f8ead4]"
        >
          Add Single Jar — £4.99
        </AddToCartButton>
      </div>
    </main>
  );
}
