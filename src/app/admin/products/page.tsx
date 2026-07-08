import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ImageIcon, Package, Pencil, PoundSterling, Star, Trash2 } from "lucide-react";
import { prisma } from "@/lib/prisma";
import { featuredVariant } from "@/data/products";
import { getStoreProducts, syncStaticProductsToDatabase } from "@/lib/product-store";
import { listMediaFiles } from "@/lib/media-store";

export const dynamic = "force-dynamic";

export default async function AdminProductsPage() {
  await syncStaticProductsToDatabase();

  const products = await getStoreProducts();
  const dbProducts = await prisma.products.findMany({
    include: { product_images: { orderBy: { sort_order: "asc" } } },
  });
  const mediaFiles = await listMediaFiles();

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
              Edit prices, main images and Amazon-style product galleries.
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
        <AdminProductStat title="Product families" value="1" note="Natural Peanut Butter" icon={<Package size={22} />} />
        <AdminProductStat title="Editable prices" value="Live" note="Used by Stripe checkout" icon={<PoundSterling size={22} />} />
        <AdminProductStat title="Gallery images" value="Live" note="Multiple images per product" icon={<ImageIcon size={22} />} />
      </section>

      <section className="mt-6 rounded-[2rem] border border-[#173b2f]/10 bg-[#fffaf0] p-6 shadow-sm">
        <div className="mb-5">
          <p className="text-sm font-black uppercase tracking-[0.22em] text-[#6f855f]">
            Editable product data
          </p>
          <h2 className="mt-2 text-3xl font-black tracking-[-0.05em]">
            Prices, main images and galleries
          </h2>
        </div>

        <div className="grid gap-5">
          {products.map((product) => {
            const dbProduct = dbProducts.find((item) => item.slug === product.id);
            const gallery = dbProduct?.product_images || [];

            return (
              <article
                key={product.id}
                className="rounded-3xl border border-[#173b2f]/10 bg-[#fff7e8] p-5"
              >
                <form
                  action="/api/admin/products/update"
                  method="post"
                  className="grid gap-5 md:grid-cols-[160px_1fr_auto]"
                >
                  <input type="hidden" name="slug" value={product.id} />
                  <input type="hidden" name="name" value={product.name} />

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
                        Main image path
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

                <div className="mt-5 grid gap-5 border-t border-[#173b2f]/10 pt-5 lg:grid-cols-[0.9fr_1.1fr]">
                  <div className="rounded-3xl bg-[#f6ead8] p-4">
                    <p className="text-sm font-black uppercase tracking-[0.2em] text-[#6f855f]">
                      Add from media library
                    </p>

                    <div className="mt-4 grid max-h-72 gap-3 overflow-y-auto sm:grid-cols-2">
                      {mediaFiles.length === 0 ? (
                        <p className="text-sm font-bold text-[#31574a]">
                          No media uploaded yet.
                        </p>
                      ) : (
                        mediaFiles.map((file) => (
                          <form
                            key={`${product.id}-${file.path}`}
                            action="/api/admin/products/gallery/add"
                            method="post"
                            className="rounded-2xl bg-[#fffaf0] p-3"
                          >
                            <input type="hidden" name="slug" value={product.id} />
                            <input type="hidden" name="imageUrl" value={file.url} />
                            <input type="hidden" name="altText" value={product.name} />

                            <Image
                              src={file.url}
                              alt={file.name}
                              width={180}
                              height={180}
                              className="mx-auto h-28 w-auto object-contain mix-blend-multiply"
                            />

                            <button
                              type="submit"
                              className="mt-3 h-9 w-full rounded-full bg-[#173b2f] text-xs font-black text-[#f8ead4]"
                            >
                              Add to gallery
                            </button>
                          </form>
                        ))
                      )}
                    </div>
                  </div>

                  <div className="rounded-3xl bg-[#f6ead8] p-4">
                    <p className="text-sm font-black uppercase tracking-[0.2em] text-[#6f855f]">
                      Product gallery
                    </p>

                    {gallery.length === 0 ? (
                      <p className="mt-4 rounded-2xl bg-[#fffaf0] p-4 text-sm font-bold text-[#31574a]">
                        No gallery images yet. Add images from the media library.
                      </p>
                    ) : (
                      <div className="mt-4 grid gap-3 sm:grid-cols-2">
                        {gallery.map((image) => (
                          <div
                            key={image.id}
                            className="rounded-2xl bg-[#fffaf0] p-3"
                          >
                            <Image
                              src={image.image_url}
                              alt={image.alt_text || product.name}
                              width={220}
                              height={220}
                              className="mx-auto h-32 w-auto object-contain mix-blend-multiply"
                            />

                            <div className="mt-3 flex gap-2">
                              <form
                                action="/api/admin/products/gallery/primary"
                                method="post"
                                className="flex-1"
                              >
                                <input type="hidden" name="imageId" value={image.id} />
                                <button
                                  type="submit"
                                  className="inline-flex h-9 w-full items-center justify-center gap-1 rounded-full bg-[#173b2f] px-3 text-xs font-black text-[#f8ead4]"
                                >
                                  <Star size={12} />
                                  {image.is_primary ? "Primary" : "Set primary"}
                                </button>
                              </form>

                              <form
                                action="/api/admin/products/gallery/delete"
                                method="post"
                              >
                                <input type="hidden" name="imageId" value={image.id} />
                                <button
                                  type="submit"
                                  className="grid h-9 w-9 place-items-center rounded-full border border-[#173b2f]/10 bg-[#fff7e8]"
                                  aria-label="Delete image"
                                >
                                  <Trash2 size={14} />
                                </button>
                              </form>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
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
            Image system
          </p>
          <h2 className="mt-2 text-3xl font-black tracking-[-0.05em]">
            Amazon-style galleries
          </h2>
          <p className="mt-2 text-sm font-bold leading-6 text-[#31574a]">
            Add multiple images, set a primary image and use the primary image
            across homepage, shop, cart and checkout.
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
