"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useCart, Product } from "@/context/CartContext";
import ProductCard from "./ProductCard";

interface ProductDetailClientProps {
  product: Product;
  relatedProducts: Product[];
}

export default function ProductDetailClient({ product, relatedProducts }: ProductDetailClientProps) {
  const { addToCart, setCartOpen } = useCart();
  
  // Selected Image State
  const [activeImage, setActiveImage] = useState(product.images[0]);
  
  // Selected Variant State
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]?.options[0] || "Standard");
  
  // Quantity State
  const [quantity, setQuantity] = useState(1);

  // Format price
  const formatPrice = (amount: number) => {
    return new Intl.NumberFormat("en-PK", {
      style: "currency",
      currency: "PKR",
      maximumFractionDigits: 0
    }).format(amount);
  };

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedVariant);
    setCartOpen(true);
  };

  const isDiscounted = product.compareAtPrice && product.compareAtPrice > product.price;

  return (
    <div className="bg-cream/20 min-h-screen pt-40 lg:pt-48 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumbs */}
        <div className="mb-10 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-ink/40 select-none">
          <Link href="/" className="hover:text-gold transition-colors">Home</Link>
          <span>/</span>
          <Link href={`/collections/${product.category.toLowerCase()}`} className="hover:text-gold transition-colors">{product.category}</Link>
          <span>/</span>
          <span className="text-ink/80 truncate max-w-[200px]">{product.name}</span>
        </div>

        {/* PDP Layout Grid (Original Card Layout) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 bg-white border border-border-light rounded-[32px] p-6 sm:p-8 lg:p-12 shadow-soft mb-16 md:mb-24">
          
          {/* Left Column: Image Gallery */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            
            {/* Main Zoomable Image Frame */}
            <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden bg-cream-dark shadow-soft group">
              <img 
                src={activeImage} 
                alt={product.name} 
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-ink/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>

            {/* Thumbnail selector row (Aspect aspect-[3/4]) */}
            {product.images.length > 1 && (
              <div className="grid grid-cols-4 gap-3">
                {product.images.map((imgUrl, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImage(imgUrl)}
                    className={`relative aspect-[3/4] rounded-xl overflow-hidden bg-cream-dark border-2 transition-all cursor-pointer ${
                      activeImage === imgUrl ? "border-gold shadow-soft scale-98" : "border-transparent opacity-75 hover:opacity-100"
                    }`}
                  >
                    <img 
                      src={imgUrl} 
                      alt={`${product.name} view ${idx + 1}`} 
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}

          </div>

          {/* Right Column: Buying Pane */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              {/* Category & Tags strip */}
              <div className="flex items-center gap-3.5 mb-2.5">
                <span className="text-xs font-bold tracking-widest uppercase text-gold">
                  {product.category}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-border-light" />
                <span className="text-xs text-ink/50 font-bold uppercase tracking-wider">
                  {product.fabric} Weave
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-border-light" />
                <span className="text-xs text-ink/50 font-bold uppercase tracking-wider">
                  {product.pieces}
                </span>
              </div>

              {/* Title */}
              <h1 className="text-3xl sm:text-4xl font-display font-semibold text-ink leading-tight mb-4">
                {product.name}
              </h1>

              {/* Pricing row */}
              <div className="flex items-baseline gap-4 mb-6">
                <span className="text-2xl sm:text-3xl font-bold text-ink">
                  {formatPrice(product.price)}
                </span>
                {isDiscounted && (
                  <span className="text-base sm:text-lg text-ink/35 line-through">
                    {formatPrice(product.compareAtPrice!)}
                  </span>
                )}
              </div>

              {/* Description */}
              <p className="text-sm text-ink/70 leading-relaxed mb-6 pb-6 border-b border-border-light/40">
                {product.description}
              </p>

              {/* Variant Selector */}
              {product.variants.length > 0 && (
                <div className="mb-6 pb-6 border-b border-border-light/40">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-gold mb-3.5 block">
                    Choose {product.variants[0].name}
                  </span>
                  <div className="flex flex-wrap gap-2.5">
                    {product.variants[0].options.map((opt) => (
                      <button
                        key={opt}
                        onClick={() => setSelectedVariant(opt)}
                        className={`px-4.5 py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer border ${
                          selectedVariant === opt
                            ? "bg-ink border-ink text-white shadow-soft"
                            : "bg-white border-border-light text-ink/75 hover:border-gold hover:text-gold"
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Quantity Select & Add to Cart Row */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-8">
                
                {/* Quantity selector */}
                <div className="flex flex-col gap-1.5">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-gold select-none">
                    Quantity
                  </span>
                  <div className="flex items-center border border-border-light rounded-xl overflow-hidden bg-cream/30 h-12 self-start">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-4 py-2 text-ink/50 hover:bg-cream-dark transition-colors font-bold h-full cursor-pointer flex items-center justify-center"
                    >
                      -
                    </button>
                    <span className="px-3 text-sm font-bold text-ink select-none min-w-[24px] text-center">
                      {quantity}
                    </span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-4 py-2 text-ink/50 hover:bg-cream-dark transition-colors font-bold h-full cursor-pointer flex items-center justify-center"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Add to Cart button */}
                <div className="flex-1 flex flex-col gap-1.5">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-gold select-none opacity-0 hidden sm:block">
                    Add action
                  </span>
                  <button
                    onClick={handleAddToCart}
                    disabled={!product.inStock}
                    className={`w-full h-12 rounded-full font-semibold text-sm tracking-wider uppercase flex items-center justify-center transition-all shadow-soft cursor-pointer ${
                      product.inStock
                        ? "bg-ink text-white hover:bg-gold active:scale-98"
                        : "bg-ink/10 text-ink/40 cursor-not-allowed"
                    }`}
                  >
                    {product.inStock ? "Add to Shopping Bag" : "Sold Out"}
                  </button>
                </div>

              </div>

            </div>

            {/* Trust row */}
            <div className="bg-cream/40 border border-border-light/50 rounded-2xl p-4.5 space-y-3 shadow-soft">
              <div className="flex items-center gap-3">
                <span className="text-gold font-bold">✓</span>
                <span className="text-[11px] font-bold uppercase tracking-wider text-ink/75">
                  Cash on Delivery Available Pakistan-Wide
                </span>
              </div>
              <div className="flex items-center gap-3 border-t border-border-light/20 pt-3">
                <span className="text-gold font-bold">✓</span>
                <span className="text-[11px] font-bold uppercase tracking-wider text-ink/75">
                  Secure Checkout & WhatsApp Support
                </span>
              </div>
            </div>

          </div>

        </div>

        {/* Related Products Grid */}
        {relatedProducts.length > 0 && (
          <div>
            <div className="text-center max-w-xl mx-auto mb-10">
              <span className="text-xs font-bold tracking-widest uppercase text-gold mb-1 block">
                Recommended Suitings
              </span>
              <h2 className="text-2xl sm:text-3xl font-display font-semibold text-ink">
                Related Designs
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8">
              {relatedProducts.map((rp) => (
                <ProductCard key={rp.id} product={rp} />
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
