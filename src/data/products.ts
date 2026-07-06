export const productFamilies = [
  {
    id: "natural-peanut-butter",
    name: "Natural Peanut Butter",
    description:
      "100% roasted peanuts. High protein. No added sugar. No palm oil.",
    image: "/assets/products/natural-smooth-510g.png",
    variants: [
      {
        id: "natural-smooth-510g",
        name: "Natural Smooth 510g",
        texture: "Smooth",
        size: "510g",
        price: 5.49,
        image: "/assets/products/natural-smooth-510g.png",
        rating: 4.3,
        reviewCount: 34,
        features: [
          "100% Roasted Peanuts",
          "High Protein",
          "No Added Sugar",
          "No Palm Oil",
        ],
        available: true,
      },
    ],
  },
];

export const bundles = [
  {
    id: "natural-smooth-510g-pack-6",
    name: "Pack of 6",
    fullName: "6 × FLEX Natural Smooth 510g",
    quantity: 6,
    price: 24.99,
    savings: "Save £7.95",
    image: "/assets/products/natural-smooth-510g.png",
    variantId: "natural-smooth-510g",
    available: true,
  },
];

export const featuredVariant = productFamilies[0].variants[0];