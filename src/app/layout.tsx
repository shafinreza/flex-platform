import type { Metadata } from "next";
import { Inter, Lilita_One } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { CartProvider } from "@/components/cart/CartProvider";
import Analytics from "@/components/analytics/Analytics";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

const lilita = Lilita_One({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "FLEX — Natural Smooth Peanut Butter",
  description:
    "FLEX natural smooth peanut butter. No added sugar, no palm oil, smooth roasted peanuts. Available as single jar, 2-pack, 3-pack and 6-pack.",
  openGraph: {
    title: "FLEX — Natural Smooth Peanut Butter",
    description:
      "Clean, smooth peanut butter made with roasted peanuts. No added sugar. No palm oil.",
    type: "website",
    images: ["/assets/products/flex-jar.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "FLEX — Natural Smooth Peanut Butter",
    description:
      "Clean, smooth peanut butter made with roasted peanuts. No added sugar. No palm oil.",
    images: ["/assets/products/flex-jar.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${lilita.variable}`}>
      <body>
        <CartProvider>
          <Navbar />
          {children}
          <Footer />
        </CartProvider>
        <Analytics />
      </body>
    </html>
  );
}
