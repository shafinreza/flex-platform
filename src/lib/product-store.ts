import { prisma } from "@/lib/prisma";
import { catalog } from "@/data/products";

export type StoreProduct = {
  id: string;
  name: string;
  price: number;
  image: string;
  jarCount: number;
  active: boolean;
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

export async function getStoreProducts(): Promise<StoreProduct[]> {
  await syncStaticProductsToDatabase();

  const dbProducts = await prisma.products.findMany({
    where: { active: true },
    orderBy: { created_at: "asc" },
  });

  return catalog.map((fallback) => {
    const dbProduct = dbProducts.find((product) => product.slug === fallback.id);

    return {
      id: fallback.id,
      name: dbProduct?.name ?? fallback.name,
      price: Number(dbProduct?.price ?? fallback.price),
      image: dbProduct?.image ?? fallback.image,
      jarCount: fallback.jarCount,
      active: dbProduct?.active ?? true,
    };
  });
}

export async function getStoreProductById(id: string) {
  const products = await getStoreProducts();
  return products.find((product) => product.id === id);
}
