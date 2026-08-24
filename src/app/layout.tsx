import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import { CartProvider } from "@/context/CartContext";
import SmoothScroll from "@/components/SmoothScroll";
import BackToTop from "@/components/BackToTop";
import "./globals.css";

const playfairDisplay = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ravaya | The Art of Premium Heritage",
  description: "Ultra-luxury South Asian ethnic wear, meticulously handcrafted.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfairDisplay.variable} ${inter.variable}`}>
      <body className="bg-background text-foreground font-body antialiased min-h-screen selection:bg-gold selection:text-cream">
        <SmoothScroll>
          <CartProvider>
            {children}
            <BackToTop />
          </CartProvider>
        </SmoothScroll>
      </body>
    </html>
  );
}
