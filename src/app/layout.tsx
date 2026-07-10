import type { Metadata, Viewport } from "next";
import { Inter, Lilita_One } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { CartProvider } from "@/components/cart/CartProvider";
import Analytics from "@/components/analytics/Analytics";
import CookieConsent from "@/components/cookies/CookieConsent";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const lilita = Lilita_One({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#173b2f",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.eatflex.uk"),
  title: {
    default: "FLEX Natural Peanut Butter | 100% Roasted Peanuts",
    template: "%s | FLEX",
  },
  description:
    "FLEX Natural Smooth Peanut Butter made with 100% roasted peanuts. No palm oil and no added sugar. Shop single jars and money-saving bundles with UK delivery.",
  applicationName: "FLEX",
  keywords: [
    "natural peanut butter",
    "smooth peanut butter",
    "100% peanuts",
    "no palm oil peanut butter",
    "no added sugar peanut butter",
    "peanut butter UK",
    "FLEX peanut butter",
  ],
  authors: [{ name: "FLEX" }],
  creator: "FLEX",
  publisher: "SharkX Ltd",
  category: "food",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://www.eatflex.uk",
    siteName: "FLEX",
    title: "FLEX Natural Peanut Butter",
    description:
      "Natural smooth peanut butter made with 100% roasted peanuts. No palm oil. No added sugar.",
    images: [
      {
        url: "/assets/products/natural-smooth-510g.png",
        width: 1200,
        height: 1200,
        alt: "FLEX Natural Smooth Peanut Butter",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FLEX Natural Peanut Butter",
    description:
      "100% roasted peanuts. No palm oil. No added sugar. Natural fuel, every day.",
    images: ["/assets/products/natural-smooth-510g.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

const organisationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "FLEX",
  legalName: "SharkX Ltd",
  url: "https://www.eatflex.uk",
  logo: "https://www.eatflex.uk/assets/products/flex-jar.png",
  email: "team@eatflex.uk",
  sameAs: ["https://www.instagram.com/eatflex.uk/"],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "FLEX",
  url: "https://www.eatflex.uk",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB" className={`${inter.variable} ${lilita.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organisationSchema),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />

        <CartProvider>
          <Navbar />
          {children}
          <Footer />
        </CartProvider>

        <CookieConsent />
        <Analytics />
      </body>
    </html>
  );
}
