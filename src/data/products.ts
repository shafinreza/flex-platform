export type ProductVariant = {
  id: string;
  name: string;
  shortName: string;
  texture: string;
  size: string;
  price: number;
  compareAtPrice?: number;
  image: string;
  rating: number;
  reviewCount: number;
  features: string[];
  available: boolean;
  badge: string;
  jarCount: number;
};

export type ProductFamily = {
  id: string;
  name: string;
  description: string;
  image: string;
  variants: ProductVariant[];
};

export type Bundle = {
  id: string;
  fullName: string;
  shortName: string;
  description: string;
  price: number;
  compareAtPrice?: number;
  image: string;
  jarCount: number;
  badge: string;
};

export type StorefrontProduct = {
  id: string;
  name: string;
  subtitle: string;
  price: number;
  compareAtPrice?: number;
  image: string;
  href: string;
  badge: string;
  jarCount: number;
};

export const FREE_SHIPPING_THRESHOLD = 25;

export const productFamilies: ProductFamily[] = [
  {
    id: "natural-peanut-butter",
    name: "Natural Peanut Butter",
    description:
      "Premium smooth peanut butter made with roasted peanuts. No added sugar. No palm oil. No nonsense.",
    image: "/assets/products/flex-jar.png",
    variants: [
      {
        id: "natural-smooth-510g",
        name: "Natural Smooth Peanut Butter 510g",
        shortName: "Single Jar",
        texture: "Smooth",
        size: "510g",
        price: 4.99,
        image: "/assets/products/flex-jar.png",
        rating: 4.4,
        reviewCount: 34,
        features: [
          "Roasted peanuts",
          "No added sugar",
          "No palm oil",
          "Smooth texture",
        ],
        available: true,
        badge: "Try FLEX",
        jarCount: 1,
      },
    ],
  },
];

export const bundles: Bundle[] = [
  {
    id: "natural-smooth-2-pack",
    fullName: "FLEX Natural Smooth Peanut Butter — 2 Pack",
    shortName: "2 Pack",
    description: "Two 510g jars. Perfect for regular breakfasts and smoothies.",
    price: 9.49,
    compareAtPrice: 9.98,
    image: "/assets/products/flex-jar.png",
    jarCount: 2,
    badge: "Save 49p",
  },
  {
    id: "natural-smooth-3-pack",
    fullName: "FLEX Natural Smooth Peanut Butter — 3 Pack",
    shortName: "3 Pack",
    description: "Three 510g jars. Great for gym bags, oats and family snacking.",
    price: 13.99,
    compareAtPrice: 14.97,
    image: "/assets/products/flex-jar.png",
    jarCount: 3,
    badge: "Popular",
  },
  {
    id: "natural-smooth-6-pack",
    fullName: "FLEX Natural Smooth Peanut Butter — 6 Pack",
    shortName: "6 Pack",
    description: "Six 510g jars. Best value and unlocks free UK delivery.",
    price: 26.99,
    compareAtPrice: 29.94,
    image: "/assets/products/flex-jar.png",
    jarCount: 6,
    badge: "Best value",
  },
];

export const featuredVariant = productFamilies[0].variants[0];
export const featuredBundle = bundles[2];

export const storefrontProducts: StorefrontProduct[] = [
  {
    id: featuredVariant.id,
    name: "FLEX Natural Smooth",
    subtitle: "Single 510g jar",
    price: featuredVariant.price,
    image: featuredVariant.image,
    href: "/products/natural-smooth-510g",
    badge: featuredVariant.badge,
    jarCount: 1,
  },
  ...bundles.map((bundle) => ({
    id: bundle.id,
    name: bundle.fullName,
    subtitle: bundle.description,
    price: bundle.price,
    compareAtPrice: bundle.compareAtPrice,
    image: bundle.image,
    href: "/products/natural-smooth-510g",
    badge: bundle.badge,
    jarCount: bundle.jarCount,
  })),
];

export const catalog = [
  ...productFamilies.flatMap((family) =>
    family.variants.map((variant) => ({
      id: variant.id,
      name: `FLEX ${variant.name}`,
      price: variant.price,
      image: variant.image,
      jarCount: variant.jarCount,
    }))
  ),
  ...bundles.map((bundle) => ({
    id: bundle.id,
    name: bundle.fullName,
    price: bundle.price,
    image: bundle.image,
    jarCount: bundle.jarCount,
  })),
];

export function getProductById(id: string) {
  return catalog.find((item) => item.id === id);
}
