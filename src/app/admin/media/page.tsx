import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ImageIcon, Upload } from "lucide-react";
import { listMediaFiles } from "@/lib/media-store";

export const dynamic = "force-dynamic";

export default async function AdminMediaPage() {
  const files = await listMediaFiles();

  return (
    <main className="px-5 py-6 lg:px-8 lg:py-8">
      <Link
        href="/admin/products"
        className="mb-6 inline-flex items-center gap-2 text-sm font-black text-[#173b2f]"
      >
        <ArrowLeft size={16} />
        Back to products
      </Link>

      <section className="rounded-[2rem] border border-[#173b2f]/10 bg-[#fffaf0] p-8 shadow-sm">
        <p className="text-sm font-black uppercase tracking-[0.24em] text-[#6f855f]">
          Media Library
        </p>

        <h1 className="mt-3 max-w-3xl text-5xl font-black leading-[0.95] tracking-[-0.06em] text-[#173b2f] md:text-6xl">
          FLEX product images.
        </h1>

        <p className="mt-5 max-w-2xl text-base font-bold leading-7 text-[#31574a]">
          Upload and manage product photography for homepage, shop, product page
          and cart.
        </p>
      </section>

      <section className="mt-6 rounded-[2rem] border border-[#173b2f]/10 bg-[#fffaf0] p-6 shadow-sm">
        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="rounded-3xl bg-[#f6ead8] p-6">
            <div className="grid h-20 w-20 place-items-center rounded-3xl bg-[#fffaf0] text-[#173b2f]">
              <ImageIcon size={32} />
            </div>
            <h2 className="mt-6 text-3xl font-black tracking-[-0.05em]">
              Upload image
            </h2>
            <p className="mt-2 text-sm font-bold leading-6 text-[#31574a]">
              Recommended: transparent PNG, square crop, high resolution.
            </p>
          </div>

          <form
            action="/api/admin/media/upload"
            method="post"
            encType="multipart/form-data"
            className="rounded-3xl bg-[#fff7e8] p-6"
          >
            <label className="block">
              <span className="text-sm font-black uppercase tracking-[0.18em] text-[#6f855f]">
                Image file
              </span>
              <input
                type="file"
                name="file"
                accept="image/*"
                required
                className="mt-3 w-full rounded-2xl border border-[#173b2f]/10 bg-[#fffaf0] p-4 text-sm font-black"
              />
            </label>

            <button
              type="submit"
              className="mt-5 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#173b2f] px-6 text-sm font-black text-[#f8ead4]"
            >
              <Upload size={16} />
              Upload
            </button>
          </form>
        </div>
      </section>

      <section className="mt-6 rounded-[2rem] border border-[#173b2f]/10 bg-[#fffaf0] p-6 shadow-sm">
        <div className="mb-5 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.22em] text-[#6f855f]">
              Uploaded images
            </p>
            <h2 className="mt-2 text-3xl font-black tracking-[-0.05em]">
              Media gallery
            </h2>
          </div>
          <p className="text-sm font-bold text-[#31574a]">
            {files.length} image{files.length === 1 ? "" : "s"} uploaded
          </p>
        </div>

        {files.length === 0 ? (
          <div className="rounded-3xl bg-[#fff7e8] p-10 text-center">
            <h3 className="text-2xl font-black">No images yet</h3>
            <p className="mt-2 text-sm font-bold text-[#31574a]">
              Upload your first product image above.
            </p>
          </div>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {files.map((file) => (
              <article
                key={file.path}
                className="rounded-3xl border border-[#173b2f]/10 bg-[#fff7e8] p-4"
              >
                <div className="grid h-56 place-items-center rounded-2xl bg-[#f6ead8] p-4">
                  <Image
                    src={file.url}
                    alt={file.name}
                    width={320}
                    height={320}
                    className="max-h-48 w-auto object-contain mix-blend-multiply"
                  />
                </div>

                <p className="mt-4 truncate text-sm font-black">{file.name}</p>

                <a
                  href={file.url}
                  target="_blank"
                  className="mt-3 inline-flex h-10 w-full items-center justify-center rounded-full border border-[#173b2f]/10 bg-[#fffaf0] px-4 text-xs font-black text-[#173b2f]"
                >
                  Open image
                </a>

                <input
                  readOnly
                  value={file.url}
                  className="mt-3 w-full rounded-2xl border border-[#173b2f]/10 bg-[#fffaf0] px-3 py-2 text-xs font-bold text-[#31574a]"
                />
              </article>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
