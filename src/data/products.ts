export const productFamilies = [
  {
    id: "natural-peanut-butter",
    name: "Natural Peanut Butter",
    description:
      "100% roasted peanuts. High protein. No added sugar. No palm oil.",
    image: "/assets/products/flex-jar.png",
    variants: [
      {
        id: "natural-smooth-510g",
        name: "Natural Smooth 510g",
        texture: "Smooth",
        size: "510g",
        price: 5.49,
        image: "/assets/products/flex-jar.png",
        rating: 4.4,
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

export const bundles = [];

export const featuredVariant = productFamilies[0].variants[0];
