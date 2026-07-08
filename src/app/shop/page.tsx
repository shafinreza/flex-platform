import type { Metadata } from "next";
import Link from "next/link";
import { FREE_SHIPPING_THRESHOLD, storefrontProducts } from "@/data/products";
import AddToCartButton from "@/components/cart/AddToCartButton";

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

export default function ShopPage() {
  return (
    <main className="storefront">
      <section className="shop-hero">
        <p className="eyebrow">Shop FLEX</p>
        <h1>Choose your everyday fuel.</h1>
        <p>
          Natural smooth peanut butter for breakfast, workouts, snacks and
          recipes. Free UK delivery over {formatPrice(FREE_SHIPPING_THRESHOLD)}.
        </p>
      </section>

      <section className="shop-grid-section">
        <div className="shop-grid">
          {storefrontProducts.map((product) => {
            const isSingle = product.id === "natural-smooth-510g";
            const isBestValue = product.id === "natural-smooth-6-pack";

            return (
              <article
                className={`shop-card ${isBestValue ? "shop-card-featured" : ""}`}
                key={product.id}
              >
                <div className="shop-card-badge-row">
                  <span>{isSingle ? "Most Popular" : product.badge}</span>
                  {isBestValue ? <strong>Free UK delivery</strong> : null}
                </div>

                <Link href={product.href} className="shop-card-image">
                  <div className="mini-jar-stack" data-jars={product.jarCount}>
                    {Array.from({ length: Math.min(product.jarCount, 6) }).map(
                      (_, index) => (
                        <div className="mini-jar" key={index}>
                          FLEX
                        </div>
                      )
                    )}
                  </div>
                </Link>

                <div className="shop-card-content">
                  <p>{product.jarCount} x 510g jar</p>
                  <h2>{isSingle ? "Single Jar" : product.name}</h2>
                  <div className="shop-price-row">
                    <strong>{formatPrice(product.price)}</strong>
                    {product.compareAtPrice ? (
                      <span>{formatPrice(product.compareAtPrice)}</span>
                    ) : null}
                  </div>

                  <AddToCartButton productId={product.id} />

                  <Link href={product.href} className="shop-details-link">
                    View details →
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="shop-promise">
        <div>
          <h2>No added sugar</h2>
          <p>Just simple, natural peanut butter for everyday use.</p>
        </div>
        <div>
          <h2>No palm oil</h2>
          <p>Smooth texture, rich roasted taste and no unnecessary extras.</p>
        </div>
        <div>
          <h2>Free delivery over £25</h2>
          <p>The 6 Pack unlocks free UK delivery automatically.</p>
        </div>
      </section>
    </main>
  );
}
