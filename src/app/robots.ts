import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/admin/",
          "/api/",
          "/login",
          "/cart",
          "/checkout/",
        ],
      },
    ],
    sitemap: "https://www.eatflex.uk/sitemap.xml",
    host: "https://www.eatflex.uk",
  };
}
