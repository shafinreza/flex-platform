import type { Metadata } from "next";
import { Inter, Lilita_One } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { CartProvider } from "@/components/cart/CartProvider";

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
  title: "FLEX — Performance Peanut Butter",
  description:
    "FLEX performance peanut butter. 100% roasted peanuts. No palm oil. No added sugar. Built for training days and everyday fuel.",
  openGraph: {
    title: "FLEX — Performance Peanut Butter",
    description:
      "Clean, performance-driven fuel. Roasted peanuts. No fillers. Just FLEX.",
    type: "website",
    images: ["/assets/products/flex-jar.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "FLEX — Performance Peanut Butter",
    description:
      "Clean, performance-driven fuel. Roasted peanuts. No fillers. Just FLEX.",
    images: ["/assets/products/flex-jar.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB">
      <body className={`${inter.variable} ${lilita.variable}`}>
        <CartProvider>
          <Navbar />
          {children}
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
