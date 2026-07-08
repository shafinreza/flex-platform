import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ImageIcon, Package, Pencil, PoundSterling } from "lucide-react";
import { bundles, featuredVariant, storefrontProducts } from "@/data/products";

export const dynamic = "force-dynamic";

export default function AdminProductsPage() {
  return (
    <main className="px-5 py-6 lg:px-8 lg:py-8">
      <section className="rounded-[2rem] border border-[#173b2f]/10 bg-[#fffaf0] p-6 shadow-sm md:p-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.24em] text-[#6f855f]">
              Products
            </p>
            <h1 className="mt-3 max-w-3xl text-5xl font-black leading-[0.95] tracking-[-0.06em] text-[#173b2f] md:text-6xl">
              Manage FLEX product catalogue.
            </h1>
            <p className="mt-5 max-w-2xl text-base font-bold leading-7 text-[#31574a]">
              Current product and bundle setup used across the storefront. Price
              and image editing will be added in the next sprint.
            </p>
          </div>

          <Link
            href="/shop"
            target="_blank"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#173b2f] px-6 py-4 text-sm font-black text-[#f8ead4] transition hover:bg-[#102a22]"
          >
            View shop
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <section className="mt-6 grid gap-4 md:grid-cols-3">
        <AdminProductStat
          title="Product families"
          value="1"
          note="Natural Peanut Butter"
          icon={<Package size={22} />}
        />
        <AdminProductStat
          title="Active variants"
          value="4"
          note="Single, 2 Pack, 3 Pack, 6 Pack"
          icon={<PoundSterling size={22} />}
        />
        <AdminProductStat
          title="Images"
          value="Static"
          note="Editable images coming next"
          icon={<ImageIcon size={22} />}
        />
      </section>

      <section className="mt-6 grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
        <div className="rounded-[2rem] border border-[#173b2f]/10 bg-[#fffaf0] p-6 shadow-sm">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.22em] text-[#6f855f]">
                Main product
              </p>
              <h2 className="mt-2 text-3xl font-black tracking-[-0.05em]">
                {featuredVariant.name}
              </h2>
              <p className="mt-2 text-sm font-bold leading-6 text-[#31574a]">
                The core FLEX peanut butter product. All pack options currently
                link back to this same product page.
              </p>
            </div>

            <span className="rounded-full bg-[#6f855f] px-3 py-2 text-xs font-black uppercase tracking-wide text-white">
              Live
            </span>
          </div>

          <div className="mt-6 grid gap-5 md:grid-cols-[220px_1fr]">
            <div className="grid min-h-[260px] place-items-center rounded-[1.6rem] bg-[#f6ead8] p-6">
              <Image
                src="/assets/products/natural-smooth-510g.png"
                alt={featuredVariant.name}
                width={360}
                height={360}
                className="h-64 w-auto object-contain mix-blend-multiply"
              />
            </div>

            <div className="space-y-3">
              <AdminDetail label="Product ID" value={featuredVariant.id} />
              <AdminDetail label="Texture" value={featuredVariant.texture} />
              <AdminDetail label="Size" value={featuredVariant.size} />
              <AdminDetail label="Price" value={`£${featuredVariant.price.toFixed(2)}`} />
              <AdminDetail label="Rating" value="4.5 star reviews" />
              <AdminDetail label="Status" value={featuredVariant.available ? "Available" : "Unavailable"} />
            </div>
          </div>

          <div className="mt-6 rounded-3xl bg-[#fff7e8] p-5">
            <p className="text-sm font-black uppercase tracking-[0.22em] text-[#6f855f]">
              Features
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {featuredVariant.features.map((feature) => (
                <span
                  key={feature}
                  className="rounded-full bg-[#fffaf0] px-4 py-2 text-xs font-black uppercase tracking-wide"
                >
                  ✓ {feature}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="rounded-[2rem] border border-[#173b2f]/10 bg-[#fffaf0] p-6 shadow-sm">
          <div className="mb-5 flex items-center justify-between gap-4">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.22em] text-[#6f855f]">
                Pack pricing
              </p>
              <h2 className="mt-2 text-3xl font-black tracking-[-0.05em]">
                Bundle structure
              </h2>
            </div>

            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-full border border-[#173b2f]/10 bg-[#fff7e8] px-4 py-3 text-sm font-black text-[#173b2f]"
            >
              <Pencil size={15} />
              Editing soon
            </button>
          </div>

          <div className="grid gap-3">
            <BundleRow
              name="Single Jar"
              detail="1 × 510g"
              price={`£${featuredVariant.price.toFixed(2)}`}
              compareAt=""
              badge="Most Popular"
            />

            {bundles.map((bundle) => (
              <BundleRow
                key={bundle.id}
                name={bundle.shortName}
                detail={`${bundle.jarCount} × 510g`}
                price={`£${bundle.price.toFixed(2)}`}
                compareAt={
                  bundle.compareAtPrice
                    ? `£${bundle.compareAtPrice.toFixed(2)}`
                    : ""
                }
                badge={bundle.badge}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="mt-6 rounded-[2rem] border border-[#173b2f]/10 bg-[#fffaf0] p-6 shadow-sm">
        <div className="mb-5 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.22em] text-[#6f855f]">
              Storefront cards
            </p>
            <h2 className="mt-2 text-3xl font-black tracking-[-0.05em]">
              What customers see
            </h2>
          </div>
          <p className="text-sm font-bold text-[#31574a]">
            These power homepage, shop and cart product displays.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {storefrontProducts.map((product) => (
            <article
              key={product.id}
              className="rounded-3xl border border-[#173b2f]/10 bg-[#fff7e8] p-4"
            >
              <div className="grid h-44 place-items-center rounded-2xl bg-[#f6ead8] p-4">
                <Image
                  src="/assets/products/natural-smooth-510g.png"
                  alt={product.name}
                  width={220}
                  height={220}
                  className="h-36 w-auto object-contain mix-blend-multiply"
                />
              </div>
              <p className="mt-4 text-xs font-black uppercase tracking-[0.18em] text-[#6f855f]">
                {product.badge}
              </p>
              <h3 className="mt-2 text-xl font-black tracking-[-0.04em]">
                {product.name.replace("FLEX ", "")}
              </h3>
              <p className="mt-2 text-sm font-bold leading-6 text-[#31574a]">
                {product.subtitle}
              </p>
              <p className="mt-4 text-2xl font-black">
                £{product.price.toFixed(2)}
              </p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

function AdminProductStat({
  title,
  value,
  note,
  icon,
}: {
  title: string;
  value: string;
  note: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="rounded-[2rem] border border-[#173b2f]/10 bg-[#fffaf0] p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[#f6ead8] text-[#173b2f]">
          {icon}
        </div>
      </div>
      <p className="mt-5 text-sm font-black uppercase tracking-[0.18em] text-[#6f855f]">
        {title}
      </p>
      <p className="mt-2 text-4xl font-black tracking-[-0.06em]">{value}</p>
      <p className="mt-2 text-sm font-bold text-[#31574a]">{note}</p>
    </div>
  );
}

function AdminDetail({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-4 rounded-2xl bg-[#fff7e8] px-4 py-3">
      <span className="text-sm font-black uppercase tracking-wide text-[#6f855f]">
        {label}
      </span>
      <span className="text-right text-sm font-black">{value}</span>
    </div>
  );
}

function BundleRow({
  name,
  detail,
  price,
  compareAt,
  badge,
}: {
  name: string;
  detail: string;
  price: string;
  compareAt: string;
  badge: string;
}) {
  return (
    <div className="rounded-3xl bg-[#fff7e8] p-4">
      <div className="flex items-start justify-between gap-4">
        <div>
          <span className="rounded-full bg-[#6f855f] px-3 py-1.5 text-[10px] font-black uppercase tracking-wide text-white">
            {badge}
          </span>
          <h3 className="mt-3 text-2xl font-black">{name}</h3>
          <p className="mt-1 text-sm font-bold text-[#31574a]">{detail}</p>
        </div>
        <div className="text-right">
          <p className="text-2xl font-black">{price}</p>
          {compareAt ? (
            <p className="text-sm font-black text-[#31574a]/70 line-through">
              {compareAt}
            </p>
          ) : null}
        </div>
      </div>
    </div>
  );
}
