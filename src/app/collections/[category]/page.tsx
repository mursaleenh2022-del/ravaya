import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductGrid from "@/components/ProductGrid";
import CartDrawer from "@/components/CartDrawer";
import CategoryHero from "@/components/CategoryHero";
import productsData from "@/data/products.json";
import { Product } from "@/context/CartContext";
import { notFound } from "next/navigation";

// The valid categories based on the site's structure
const VALID_CATEGORIES = ["casual", "festive", "bridal", "formal"];

export async function generateStaticParams() {
  return VALID_CATEGORIES.map((category) => ({
    category: category,
  }));
}

export default async function CategoryPage(props: {
  params: Promise<{ category: string }>;
}) {
  const params = await props.params;
  const rawCategory = params.category;
  
  if (!VALID_CATEGORIES.includes(rawCategory.toLowerCase())) {
    notFound();
  }

  // Capitalize the category name for display
  const categoryName = rawCategory.charAt(0).toUpperCase() + rawCategory.slice(1);
  const products = productsData as Product[];
  
  // Filter products by category for this page's ProductGrid
  const categoryProducts = products.filter(
    p => p.category.toLowerCase() === rawCategory.toLowerCase()
  );

  return (
    <>
      <Header />

      <main className="flex-grow bg-background">
        
        {/* Dedicated Category Hero with consistent luxury aesthetic */}
        <CategoryHero categoryName={categoryName} />

        {/* The Grid filtered just for this category */}
        <section className="py-24 md:py-32 bg-background relative z-10">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-24">
              <div className="max-w-2xl">
                <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gold mb-4 block">
                  The {categoryName} Edit
                </span>
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-display text-foreground leading-[1.1]">
                  Explore the Collection
                </h2>
              </div>
            </div>

            {/* Note: the ProductGrid component has its own local client-side category filter.
                We pass initialCategory so it pre-selects it, but users could theoretically click other pills if they wanted. */}
            <ProductGrid initialProducts={products} initialCategory={categoryName} />
          </div>
        </section>

      </main>

      <Footer />
      
      <CartDrawer />
    </>
  );
}
