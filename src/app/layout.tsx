import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: "FLEX — Peanut Butter Made Fun",
  description:
    "FLEX natural peanut butter. High protein, no added sugar, no palm oil, and made for people who move.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB" className={cn("font-sans", geist.variable)}>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}