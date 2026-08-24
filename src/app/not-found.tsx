import React from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="flex-grow bg-cream/20 flex items-center justify-center py-20 px-6">
        <div className="max-w-md w-full bg-white border border-border-light rounded-[32px] p-10 text-center shadow-soft">
          <div className="text-gold text-5xl mb-4 font-display font-semibold select-none">404</div>
          <h1 className="text-2xl font-display font-semibold text-ink mb-2">Design Not Found</h1>
          <p className="text-sm text-ink/65 leading-relaxed mb-8">
            The page you are looking for does not exist or has been moved. Explore our seasonal stitched and unstitched collections instead.
          </p>
          <Link
            href="/"
            className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-ink text-white font-semibold text-xs tracking-wider uppercase hover:bg-gold transition-colors cursor-pointer shadow-soft"
          >
            Back to Storefront
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
