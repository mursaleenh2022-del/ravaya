"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Product, useCart } from "@/context/CartContext";

interface ProductCardProps {
  product: Product;
  index?: number;
}

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
  const { addToCart, setCartOpen } = useCart();

  const formatPrice = (amount: number) => {
    return new Intl.NumberFormat("en-PK", {
      style: "currency",
      currency: "PKR",
      maximumFractionDigits: 0
    }).format(amount);
  };

  const isDiscounted = product.compareAtPrice && product.compareAtPrice > product.price;

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1, product.variants[0]?.options[0] || "Standard");
    setCartOpen(true);
  };

  // Stagger entrance based on column index (max 4 columns)
  const delay = (index % 4) * 0.15;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      className="group flex flex-col w-full relative transition-all duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/canvas:grayscale-[0.7] group-hover/canvas:opacity-40 hover:!grayscale-0 hover:!opacity-100 hover:scale-[1.03] z-10 hover:z-50"
    >
      {/* Minimalist Image Container */}
      <Link href={`/product/${product.id}`} className="relative w-full aspect-[2/3] overflow-hidden bg-foreground block rounded-sm">
        
        {/* Status Tags */}
        <div className="absolute top-5 left-5 z-20 flex flex-col gap-2">
          {!product.inStock && (
            <span className="bg-background/90 backdrop-blur-md px-3 py-1.5 text-foreground text-[9px] font-bold tracking-[0.25em] uppercase shadow-md">
              Sold Out
            </span>
          )}
        </div>
        
        {/* Slow Focus Image Reveal */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src={product.images[0]}
            alt={product.name}
            className="absolute inset-0 w-full h-full object-cover transition-all duration-[1.5s] ease-out group-hover:opacity-0 group-hover:scale-105"
            loading="lazy"
          />
          {product.images[1] && (
            <img
              src={product.images[1]}
              alt={`${product.name} detail`}
              className="absolute inset-0 w-full h-full object-cover opacity-0 scale-100 transition-all duration-[1.5s] ease-out group-hover:scale-105 group-hover:opacity-100 z-10"
              loading="lazy"
            />
          )}
        </div>

        {/* Hover Gradient Mask */}
        <div className="absolute inset-0 bg-gradient-to-t from-ink/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 z-10 pointer-events-none" />

        {/* Quick Add Action (Slide up on hover) */}
        {product.inStock && (
          <div className="absolute bottom-0 left-0 w-full p-6 z-20 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 ease-out flex justify-center">
            <button 
              onClick={handleQuickAdd}
              className="w-full bg-cream/90 backdrop-blur-md text-ink font-semibold text-[10px] tracking-[0.2em] uppercase py-4 hover:bg-gold hover:text-white transition-all"
            >
              Add to Collection
            </button>
          </div>
        )}
      </Link>

      {/* Minimalist Centered Typography Meta Block */}
      <div className="flex flex-col items-center text-center pt-8 pb-4 transition-colors duration-500">
        <Link href={`/product/${product.id}`} className="mb-2 inline-block">
          <h3 className="font-display font-medium text-lg sm:text-xl text-foreground group-hover:text-gold transition-colors leading-relaxed tracking-wide">
            {product.name}
          </h3>
        </Link>
        <span className="text-xs font-semibold tracking-[0.2em] uppercase text-foreground/40 mb-3 block">
          {product.fabric}
        </span>
        <div className="flex items-center gap-4 mt-1">
          <span className="text-sm font-body font-semibold text-foreground tracking-[0.1em]">
            {formatPrice(product.price)}
          </span>
        </div>
      </div>
    </motion.div>
  );
}
