"use client";
import React, { useState, useMemo, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Product } from "@/context/CartContext";
import ProductCard from "./ProductCard";

interface ProductGridProps {
  initialProducts: Product[];
  initialCategory?: string;
}

export default function ProductGrid({ initialProducts, initialCategory = "" }: ProductGridProps) {
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [selectedFabric, setSelectedFabric] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [sortBy, setSortBy] = useState("");

  // Update category filter when prop changes (from router query etc.)
  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    setSelectedCategory(initialCategory);
  }, [initialCategory]);

  const categories = ["Casual", "Festive", "Bridal", "Formal"];
  const fabrics = ["Lawn", "Chiffon", "Khaddar", "Cotton", "Silk", "Organza"];
  const stitchingTypes = [
    { label: "Stitched", value: "stitched" },
    { label: "Unstitched", value: "unstitched" }
  ];

  // Reset all filters
  const handleClearFilters = () => {
    setSelectedCategory("");
    setSelectedFabric("");
    setSelectedType("");
    setSortBy("");
  };

  // Filtered products list
  const filteredProducts = useMemo(() => {
    let result = [...initialProducts];

    // Category Filter
    if (selectedCategory) {
      result = result.filter(
        (p) => p.category.toLowerCase() === selectedCategory.toLowerCase()
      );
    }

    // Fabric Filter
    if (selectedFabric) {
      result = result.filter(
        (p) => p.fabric.toLowerCase() === selectedFabric.toLowerCase()
      );
    }

    // Stitching Type Filter
    if (selectedType) {
      result = result.filter((p) => {
        if (p.type === "both") return true;
        return p.type === selectedType;
      });
    }

    // Sorting
    if (sortBy === "price-low") {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-high") {
      result.sort((a, b) => b.price - a.price);
    }

    return result;
  }, [initialProducts, selectedCategory, selectedFabric, selectedType, sortBy]);

  return (
    <div className="w-full">
      
      {/* Filters & Sorting Bar */}
      <div className="bg-white border border-border-light rounded-[20px] p-5 sm:p-6 mb-8 md:mb-12 shadow-soft">
        <div className="flex flex-col gap-6">
          
          {/* Categories Horizontal Tabs */}
          <div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-gold block mb-3.5">
              Occasions
            </span>
            <div className="flex flex-wrap gap-2.5">
              <button
                onClick={() => setSelectedCategory("")}
                className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                  selectedCategory === ""
                    ? "bg-ink text-white shadow-soft"
                    : "bg-cream text-ink/75 hover:bg-cream-dark"
                }`}
              >
                All Collections
              </button>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                    selectedCategory.toLowerCase() === cat.toLowerCase()
                      ? "bg-ink text-white shadow-soft"
                      : "bg-cream text-ink/75 hover:bg-cream-dark"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="h-px bg-border-light/40 w-full" />

          {/* Sub-Filters Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3.5 gap-4.5">
            
            {/* Fabric Selector */}
            <div className="flex flex-col">
              <label htmlFor="fabric-select" className="text-[10px] font-bold uppercase tracking-widest text-gold mb-2 block">
                Fabric Type
              </label>
              <select
                id="fabric-select"
                value={selectedFabric}
                onChange={(e) => setSelectedFabric(e.target.value)}
                className="h-11 border border-border-light rounded-xl px-3 bg-cream/30 text-xs font-semibold text-ink/80 outline-none transition-colors focus:border-gold cursor-pointer"
              >
                <option value="">All Fabrics</option>
                {fabrics.map((f) => (
                  <option key={f} value={f.toLowerCase()}>
                    {f}
                  </option>
                ))}
              </select>
            </div>

            {/* Stitching Type Selector */}
            <div className="flex flex-col">
              <label htmlFor="stitching-select" className="text-[10px] font-bold uppercase tracking-widest text-gold mb-2 block">
                Stitching Type
              </label>
              <select
                id="stitching-select"
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="h-11 border border-border-light rounded-xl px-3 bg-cream/30 text-xs font-semibold text-ink/80 outline-none transition-colors focus:border-gold cursor-pointer"
              >
                <option value="">Stitched & Unstitched</option>
                {stitchingTypes.map((t) => (
                  <option key={t.value} value={t.value}>
                    {t.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Sorting Selector */}
            <div className="flex flex-col">
              <label htmlFor="sort-select" className="text-[10px] font-bold uppercase tracking-widest text-gold mb-2 block">
                Sort By
              </label>
              <select
                id="sort-select"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="h-11 border border-border-light rounded-xl px-3 bg-cream/30 text-xs font-semibold text-ink/80 outline-none transition-colors focus:border-gold cursor-pointer"
              >
                <option value="">New Arrivals</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>

            {/* Clear Button */}
            {(selectedCategory || selectedFabric || selectedType || sortBy) && (
              <div className="flex items-end">
                <button
                  onClick={handleClearFilters}
                  className="h-11 px-6 rounded-xl border border-gold/45 text-gold hover:border-gold-hover hover:text-gold-hover text-xs font-bold uppercase tracking-wider cursor-pointer w-full text-center flex items-center justify-center transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            )}

          </div>

        </div>
      </div>

      {/* Avant-Garde Canvas Render */}
      {filteredProducts.length > 0 ? (
        <div className="relative w-full overflow-hidden py-16 group/canvas">
          
          {/* Infinite Background Marquee (Framer Motion) */}
          <div className="absolute top-1/3 left-0 w-full overflow-hidden pointer-events-none -z-10 mix-blend-difference opacity-5">
            <motion.div 
              className="flex whitespace-nowrap"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
            >
              <span className="font-display text-[15vw] leading-none uppercase tracking-tighter text-white">
                RAVAYA ARCHIVES // THE COLLECTION // RAVAYA ARCHIVES // THE COLLECTION // 
              </span>
            </motion.div>
          </div>
          
          <div className="absolute top-2/3 left-0 w-full overflow-hidden pointer-events-none -z-10 mix-blend-difference opacity-5">
            <motion.div 
              className="flex whitespace-nowrap"
              animate={{ x: ["-50%", "0%"] }}
              transition={{ repeat: Infinity, duration: 75, ease: "linear" }}
            >
              <span className="font-display text-[15vw] leading-none uppercase tracking-tighter text-white">
                LUXURY UNBOUND // EST 2026 // LUXURY UNBOUND // EST 2026 // 
              </span>
            </motion.div>
          </div>

          {/* Masonry Scatter Layout using CSS Columns */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 lg:gap-16 space-y-16 lg:space-y-32">
            {filteredProducts.map((prod) => (
              <div key={prod.id} className="break-inside-avoid w-full">
                <ProductCard product={prod} />
              </div>
            ))}
          </div>

        </div>
      ) : (
        <div className="text-center py-16 bg-white border border-border-light rounded-[24px] p-8 shadow-soft">
          <div className="text-gold text-4xl mb-3.5">✧</div>
          <p className="text-ink/80 font-body text-sm uppercase tracking-widest font-semibold">
            No archives match your current filters.
          </p>
        </div>
      )}
    </div>
  );
}
