"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const categories = [
  {
    id: "casual",
    title: "Casual",
    subtitle: "Everyday Elegance",
    image: "/assets/img/gen_p06_model.jpg",
  },
  {
    id: "festive",
    title: "Festive",
    subtitle: "Celebratory Wear",
    image: "/assets/img/gen_p07_model.jpg",
  },
  {
    id: "bridal",
    title: "Bridal",
    subtitle: "The Ultimate Heritage",
    image: "/assets/img/gen_p01_model.jpg",
  }
];

export default function CategoryAccordion() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-24 md:py-32 bg-background relative z-10">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-24">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gold mb-4 block">
              Curated Selection
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-display text-foreground leading-[1.1]">
              Shop by Occasion
            </h2>
          </div>
        </div>

        <div className="flex flex-col md:flex-row w-full h-[600px] gap-2 md:gap-4 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]">
          {categories.map((cat, index) => {
            const isHovered = hoveredIndex === index;
            const isAnyHovered = hoveredIndex !== null;

            return (
              <motion.div
                key={cat.id}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="relative overflow-hidden cursor-pointer rounded-2xl bg-cream-dark/20 flex-1 group"
                animate={{
                  flex: isHovered ? 2.5 : isAnyHovered ? 0.8 : 1,
                }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              >
                <Link href={`/?category=${cat.title}`} className="absolute inset-0 block">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                    loading="lazy"
                  />
                  
                  {/* Dimmer for non-hovered items */}
                  <motion.div 
                    className="absolute inset-0 bg-ink"
                    animate={{ opacity: isAnyHovered && !isHovered ? 0.4 : 0.1 }}
                    transition={{ duration: 0.5 }}
                  />

                  {/* Text Overlay */}
                  <div className="absolute inset-x-0 bottom-0 p-8 md:p-12 flex flex-col justify-end bg-gradient-to-t from-ink/90 via-ink/40 to-transparent">
                    <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gold mb-2 block opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out">
                      {cat.subtitle}
                    </span>
                    <h3 className="font-display text-3xl md:text-4xl lg:text-5xl text-cream tracking-wide">
                      {cat.title}
                    </h3>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
