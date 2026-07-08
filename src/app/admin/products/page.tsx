import Image from "next/image";
import Link from "next/link";
import { revalidatePath } from "next/cache";
import { ArrowRight, ImageIcon, Package, Pencil, PoundSterling } from "lucide-react";
import { prisma } from "@/lib/prisma";
import { bundles, catalog, featuredVariant } from "@/data/products";
import { getStoreProducts, syncStaticProductsToDatabase } from "@/lib/product-store";

export const dynamic = "force-dynamic";

async function updateProduct(formData: FormData) {
  "use server";

  const slug = String(formData.get("slug") || "");
  const price = Number(formData.get("price"));
  const image = String(formData.get("image") || "");

  if (!slug || Number.isNaN(price) || price <= 0) {
    throw new Error("Invalid product update");
  }

  await prisma.products.update({
    where: { slug },
    data: {
      price,
      image,
    },
  });

  revalidatePath("/");
  revalidatePath("/shop");
  revalidatePath("/products/natural-smooth-510g");
  revalidatePath("/admin/products");
}

export default async function AdminProductsPage() {
  await syncStaticProductsToDatabase();

  const products = await getStoreProducts();

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
              Edit product prices and image paths. Stripe checkout now reads the
              same product prices from the database.
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
          title="Editable prices"
          value="Live"
          note="Used by Stripe checkout"
          icon={<PoundSterling size={22} />}
        />
        <AdminProductStat
          title="Images"
          value="Editable"
          note="Use local path or hosted URL"
          icon={<ImageIcon size={22} />}
        />
      </section>

      <section className="mt-6 rounded-[2rem] border border-[#173b2f]/10 bg-[#fffaf0] p-6 shadow-sm">
        <div className="mb-5">
          <p className="text-sm font-black uppercase tracking-[0.22em] text-[#6f855f]">
            Editable product data
          </p>
          <h2 className="mt-2 text-3xl font-black tracking-[-0.05em]">
            Prices and images
          </h2>
        </div>

        <div className="grid gap-4">
          {products.map((product) => (
            <form
              key={product.id}
              action={updateProduct}
              className="grid gap-5 rounded-3xl border border-[#173b2f]/10 bg-[#fff7e8] p-5 md:grid-cols-[160px_1fr_auto]"
            >
              <input type="hidden" name="slug" value={product.id} />

              <div className="grid h-40 place-items-center rounded-2xl bg-[#f6ead8] p-4">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={220}
                  height={220}
                  className="h-32 w-auto object-contain mix-blend-multiply"
                />
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="md:col-span-2">
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-[#6f855f]">
                    {product.id}
                  </p>
                  <h3 className="mt-2 text-2xl font-black tracking-[-0.04em]">
                    {product.name}
                  </h3>
                  <p className="mt-1 text-sm font-bold text-[#31574a]">
                    {product.jarCount} jar pack
                  </p>
                </div>

                <label className="block">
                  <span className="text-xs font-black uppercase tracking-wide text-[#6f855f]">
                    Price
                  </span>
                  <input
                    name="price"
                    type="number"
                    step="0.01"
                    min="0.01"
                    defaultValue={product.price}
                    className="mt-2 h-12 w-full rounded-2xl border border-[#173b2f]/10 bg-[#fffaf0] px-4 text-sm font-black text-[#173b2f] outline-none"
                  />
                </label>

                <label className="block">
                  <span className="text-xs font-black uppercase tracking-wide text-[#6f855f]">
                    Image path
                  </span>
                  <input
                    name="image"
                    type="text"
                    defaultValue={product.image}
                    className="mt-2 h-12 w-full rounded-2xl border border-[#173b2f]/10 bg-[#fffaf0] px-4 text-sm font-black text-[#173b2f] outline-none"
                  />
                </label>
              </div>

              <div className="flex items-end">
                <button
                  type="submit"
                  className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-[#173b2f] px-6 text-sm font-black text-[#f8ead4] transition hover:bg-[#102a22] md:w-auto"
                >
                  <Pencil size={15} />
                  Save
                </button>
              </div>
            </form>
          ))}
        </div>
      </section>

      <section className="mt-6 grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
        <div className="rounded-[2rem] border border-[#173b2f]/10 bg-[#fffaf0] p-6 shadow-sm">
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

        <div className="rounded-[2rem] border border-[#173b2f]/10 bg-[#fffaf0] p-6 shadow-sm">
          <p className="text-sm font-black uppercase tracking-[0.22em] text-[#6f855f]">
            Static fallback
          </p>
          <h2 className="mt-2 text-3xl font-black tracking-[-0.05em]">
            Code fallback remains active
          </h2>
          <p className="mt-2 text-sm font-bold leading-6 text-[#31574a]">
            If a database product is missing, FLEX still has catalogue fallback
            data to protect the storefront.
          </p>
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
      <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[#f6ead8] text-[#173b2f]">
        {icon}
      </div>
      <p className="mt-5 text-sm font-black uppercase tracking-[0.18em] text-[#6f855f]">
        {title}
      </p>
      <p className="mt-2 text-4xl font-black tracking-[-0.06em]">{value}</p>
      <p className="mt-2 text-sm font-bold text-[#31574a]">{note}</p>
    </div>
  );
}
