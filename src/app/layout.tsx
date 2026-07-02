import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";

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
    <html lang="en-GB">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}