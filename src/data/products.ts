export type ProductVariant = {
  id: string;
  name: string;
  texture: string;
  size: string;
  price: number;
  image: string;
  rating: number;
  reviewCount: number;
  features: string[];
  available: boolean;
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
  image: string;
  jarCount: number;
  badge: string;
};

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
        name: "Natural Smooth 510g",
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
      },
    ],
  },
];

export const bundles: Bundle[] = [
  {
    id: "natural-smooth-6-pack",
    fullName: "FLEX Natural Smooth Peanut Butter — Pack of 6",
    shortName: "Pack of 6",
    description: "Six 510g jars. Ideal for families, fitness routines and meal prep.",
    price: 29.94,
    image: "/assets/products/flex-jar.png",
    jarCount: 6,
    badge: "Best value",
  },
];

export const featuredVariant = productFamilies[0].variants[0];
export const featuredBundle = bundles[0];

export const storefrontProducts = [
  {
    id: featuredVariant.id,
    name: "FLEX Natural Smooth",
    subtitle: "Single 510g jar",
    price: featuredVariant.price,
    image: featuredVariant.image,
    href: "/products/natural-smooth-510g",
    badge: "Single jar",
  },
  {
    id: featuredBundle.id,
    name: "FLEX Smooth Pack of 6",
    subtitle: "6 × 510g jars",
    price: featuredBundle.price,
    image: featuredBundle.image,
    href: "/products/natural-smooth-510g",
    badge: featuredBundle.badge,
  },
];
