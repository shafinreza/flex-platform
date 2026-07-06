"use client";

import Image from "next/image";
import { useState } from "react";

type Props = {
  images: string[];
  alt: string;
};

export default function ProductGallery({ images, alt }: Props) {
  const [selected, setSelected] = useState(0);

  return (
    <div className="space-y-5">
      <div className="overflow-hidden rounded-3xl border bg-white p-8">
        <Image
          src={images[selected]}
          alt={alt}
          width={700}
          height={700}
          priority
          className="mx-auto transition duration-300 hover:scale-105"
        />
      </div>

      <div className="flex gap-3">
        {images.map((image, index) => (
          <button
            key={image + index}
            onClick={() => setSelected(index)}
            className={`overflow-hidden rounded-xl border p-2 transition ${
              selected === index
                ? "border-[#6f855f]"
                : "border-gray-200"
            }`}
          >
            <Image
              src={image}
              alt=""
              width={80}
              height={80}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
