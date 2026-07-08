import { prisma } from "@/lib/prisma";

const defaults: Record<string, string> = {
  hero_image: "/assets/products/natural-smooth-510g.png",
  ingredients_image: "/assets/products/natural-smooth-510g.png",
};

export async function getSiteAsset(key: string) {
  const asset = await prisma.site_assets.findUnique({
    where: { key },
  });

  return asset?.value || defaults[key] || "";
}
