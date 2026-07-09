import { unstable_cache } from "next/cache";
import { prisma } from "@/lib/prisma";
import { catalog } from "@/data/products";

export type StoreProductImage = {
  id: string;
  imageUrl: string;
  altText: string;
  sortOrder: number;
  isPrimary: boolean;
};

export type StoreProduct = {
  id: string;
  name: string;
  price: number;
  image: string;
  jarCount: number;
  active: boolean;
  gallery: StoreProductImage[];
};

export async function syncStaticProductsToDatabase() {
  for (const item of catalog) {
    await prisma.products.upsert({
      where: { slug: item.id },
      update: {},
      create: {
        slug: item.id,
        name: item.name,
        description: `${item.jarCount} jar pack`,
        price: item.price,
        image: item.image,
        active: true,
      },
    });
  }
}

async function getStoreProductsFromDatabase(): Promise<StoreProduct[]> {
  const dbProducts = await prisma.products.findMany({
    where: { active: true },
    orderBy: { created_at: "asc" },
    include: {
      product_images: {
        orderBy: [{ is_primary: "desc" }, { sort_order: "asc" }],
      },
    },
  });

  return catalog.map((fallback) => {
    const dbProduct = dbProducts.find((product) => product.slug === fallback.id);

    const gallery =
      dbProduct?.product_images.map((image) => ({
        id: image.id,
        imageUrl: image.image_url,
        altText: image.alt_text ?? dbProduct.name,
        sortOrder: image.sort_order,
        isPrimary: image.is_primary,
      })) ?? [];

    const primaryImage =
      gallery.find((image) => image.isPrimary)?.imageUrl ||
      gallery[0]?.imageUrl ||
      dbProduct?.image ||
      fallback.image;

    return {
      id: fallback.id,
      name: dbProduct?.name ?? fallback.name,
      price: Number(dbProduct?.price ?? fallback.price),
      image: primaryImage,
      jarCount: fallback.jarCount,
      active: dbProduct?.active ?? true,
      gallery,
    };
  });
}

export const getStoreProducts = unstable_cache(
  getStoreProductsFromDatabase,
  ["store-products"],
  {
    tags: ["store-products"],
    revalidate: 300,
  }
);

export async function getFreshStoreProducts() {
  return getStoreProductsFromDatabase();
}

export async function getStoreProductById(id: string) {
  const products = await getStoreProducts();
  return products.find((product) => product.id === id);
}
