"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { StoreProductImage } from "@/lib/product-store";

type ProductImageGalleryProps = {
  images: StoreProductImage[];
};

export default function ProductImageGallery({ images }: ProductImageGalleryProps) {
  const gallery = useMemo(
    () =>
      images.length
        ? images
        : [
            {
              id: "fallback-main",
              imageUrl: "/assets/products/natural-smooth-510g.png",
              altText: "FLEX Natural Smooth Peanut Butter",
              sortOrder: 0,
              isPrimary: true,
            },
          ],
    [images]
  );

  const [activeIndex, setActiveIndex] = useState(0);
  const activeImage = gallery[activeIndex];

  function previousImage() {
    setActiveIndex((current) =>
      current === 0 ? gallery.length - 1 : current - 1
    );
  }

  function nextImage() {
    setActiveIndex((current) =>
      current === gallery.length - 1 ? 0 : current + 1
    );
  }

  return (
    <div className="lg:sticky lg:top-28 lg:self-start">
      <div className="relative overflow-hidden rounded-[2rem] border border-[#173b2f]/10 bg-[#fffaf0] p-6 shadow-sm">
        <Image
          src={activeImage.imageUrl}
          alt={activeImage.altText || "FLEX Natural Smooth Peanut Butter"}
          width={900}
          height={900}
          priority
          className="mx-auto h-auto max-h-[590px] w-auto object-contain mix-blend-multiply"
        />

        {gallery.length > 1 ? (
          <>
            <button
              type="button"
              onClick={previousImage}
              className="absolute left-4 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-[#fffaf0]/90 text-[#173b2f] shadow-sm ring-1 ring-[#173b2f]/10"
              aria-label="Previous image"
            >
              <ChevronLeft size={20} />
            </button>

            <button
              type="button"
              onClick={nextImage}
              className="absolute right-4 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-[#fffaf0]/90 text-[#173b2f] shadow-sm ring-1 ring-[#173b2f]/10"
              aria-label="Next image"
            >
              <ChevronRight size={20} />
            </button>
          </>
        ) : null}
      </div>

      <div className="mt-4 grid grid-cols-4 gap-3 sm:grid-cols-6">
        {gallery.slice(0, 8).map((image, index) => (
          <button
            key={image.id}
            type="button"
            onClick={() => setActiveIndex(index)}
            className={`grid h-24 place-items-center rounded-2xl border p-2 transition ${
              activeIndex === index
                ? "border-[#173b2f] bg-[#fffaf0]"
                : "border-[#173b2f]/10 bg-[#fff7e8] hover:bg-[#fffaf0]"
            }`}
            aria-label={`View product image ${index + 1}`}
          >
            <Image
              src={image.imageUrl}
              alt={image.altText || `FLEX product image ${index + 1}`}
              width={140}
              height={140}
              className="max-h-16 w-auto object-contain mix-blend-multiply"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
