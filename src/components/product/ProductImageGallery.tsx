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
      <div className="grid gap-3 lg:grid-cols-[86px_minmax(0,1fr)]">
        {gallery.length > 1 ? (
          <div className="order-2 flex gap-2 overflow-x-auto pb-1 lg:order-1 lg:max-h-[620px] lg:flex-col lg:overflow-y-auto lg:overflow-x-hidden lg:pr-1">
            {gallery.slice(0, 10).map((image, index) => (
              <button
                key={image.id}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`grid h-20 w-20 shrink-0 place-items-center overflow-hidden rounded-xl border bg-[#fffaf0] p-1.5 transition ${
                  activeIndex === index
                    ? "border-2 border-[#173b2f]"
                    : "border-[#173b2f]/10 hover:border-[#173b2f]/40"
                }`}
                aria-label={`View product image ${index + 1}`}
                aria-current={activeIndex === index ? "true" : undefined}
              >
                <Image
                  src={image.imageUrl}
                  alt={image.altText || `FLEX product image ${index + 1}`}
                  width={120}
                  height={120}
                  sizes="80px"
                  className="h-full w-full object-contain"
                />
              </button>
            ))}
          </div>
        ) : null}

        <div
          className="relative order-1 grid min-h-[420px] place-items-center overflow-hidden rounded-[2rem] border border-[#173b2f]/10 bg-[#fffaf0] p-5 shadow-sm sm:min-h-[520px] lg:order-2 lg:min-h-[620px]"
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
    </div>
  );
}
