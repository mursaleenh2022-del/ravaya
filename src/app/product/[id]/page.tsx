import React from "react";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import ProductDetailClient from "@/components/ProductDetailClient";
import productsData from "@/data/products.json";
import { Product } from "@/context/CartContext";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function ProductDetailPage(props: PageProps) {
  const params = await props.params;
  const products = productsData as Product[];
  
  // Find product
  const product = products.find((p) => p.id === params.id);
  if (!product) {
    notFound();
  }

  // Related products (same category, excluding current product, limit to 4)
  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <>
      <Header />
      <main className="flex-grow">
        <ProductDetailClient product={product} relatedProducts={relatedProducts} />
      </main>
      <Footer />
      <CartDrawer />
    </>
  );
}
