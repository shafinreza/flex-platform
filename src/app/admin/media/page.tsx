import Link from "next/link";
import { ArrowLeft, ImageIcon, Upload } from "lucide-react";

export const dynamic = "force-dynamic";

export default async function AdminMediaPage({
  searchParams,
}: {
  searchParams: Promise<{ uploaded?: string; url?: string; error?: string }>;
}) {
  const params = await searchParams;

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
          Upload FLEX product images.
        </h1>

        <p className="mt-5 max-w-2xl text-base font-bold leading-7 text-[#31574a]">
          Upload product photography to Supabase Storage and use the generated
          URL across homepage, shop, product page and cart.
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

            {params.uploaded && params.url ? (
              <div className="mt-6 rounded-2xl bg-[#f6ead8] p-4">
                <p className="text-sm font-black text-[#173b2f]">
                  Uploaded successfully:
                </p>
                <p className="mt-2 break-all text-xs font-bold text-[#31574a]">
                  {params.url}
                </p>
              </div>
            ) : null}

            {params.error ? (
              <p className="mt-5 rounded-2xl bg-red-50 p-4 text-sm font-black text-red-700">
                Upload failed. Check Supabase bucket and service role key.
              </p>
            ) : null}
          </form>
        </div>
      </section>
    </main>
  );
}
