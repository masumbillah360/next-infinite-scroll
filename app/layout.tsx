import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Infinite Scroll",
  description: "Explore Infinite Scroll Using Next JS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
          <body className={inter.className}>
              <main className="max-w-7xl mx-auto bg-[#0F1117]">
                  <Hero />
                  {children}
                  <Footer />
              </main>
          </body>
      </html>
  );
}
