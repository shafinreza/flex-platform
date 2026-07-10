"use client";

import Image from "next/image";
import { useMemo, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { StoreProductImage } from "@/lib/product-store";

type ProductImageGalleryProps = {
  images: StoreProductImage[];
};

export default function ProductImageGallery({
  images,
}: ProductImageGalleryProps) {
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
  const touchStartX = useRef<number | null>(null);
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

  function handleTouchStart(event: React.TouchEvent<HTMLDivElement>) {
    touchStartX.current = event.touches[0]?.clientX ?? null;
  }

  function handleTouchEnd(event: React.TouchEvent<HTMLDivElement>) {
    if (touchStartX.current === null) return;

    const endX = event.changedTouches[0]?.clientX ?? touchStartX.current;
    const distance = touchStartX.current - endX;

    if (Math.abs(distance) > 45) {
      if (distance > 0) nextImage();
      else previousImage();
    }

    touchStartX.current = null;
  }

  return (
    <div className="lg:sticky lg:top-28 lg:self-start">
      <div
        className="relative grid min-h-[420px] place-items-center overflow-hidden rounded-[2rem] border border-[#173b2f]/10 bg-[#fffaf0] p-5 shadow-sm sm:min-h-[520px] lg:min-h-[620px]"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <Image
          key={activeImage.id}
          src={activeImage.imageUrl}
          alt={activeImage.altText || "FLEX Natural Smooth Peanut Butter"}
          width={1000}
          height={1000}
          priority={activeIndex === 0}
          sizes="(max-width: 1024px) 92vw, 560px"
          className="max-h-[570px] w-full object-contain"
        />

        {gallery.length > 1 ? (
          <>
            <button
              type="button"
              onClick={previousImage}
              className="absolute left-3 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-[#173b2f]/10 bg-[#fffaf0]/95 shadow-sm"
              aria-label="Previous product image"
            >
              <ChevronLeft size={20} />
            </button>

            <button
              type="button"
              onClick={nextImage}
              className="absolute right-3 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-[#173b2f]/10 bg-[#fffaf0]/95 shadow-sm"
              aria-label="Next product image"
            >
              <ChevronRight size={20} />
            </button>

            <span className="absolute bottom-4 right-4 rounded-full bg-[#173b2f] px-3 py-1.5 text-xs font-black text-white">
              {activeIndex + 1} / {gallery.length}
            </span>
          </>
        ) : null}
      </div>
    </div>
  );
}
