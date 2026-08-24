"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { Product } from "@/context/CartContext";

export default function LookbookSection({ products }: { products: Product[] }) {
  const targetRef = useRef<HTMLDivElement>(null);
  
  // The container will be 300vh tall to allow scrolling
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-background">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden pt-20">
        
        {/* Title pinned to the left */}
        <div className="absolute top-32 left-6 md:left-10 z-20">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gold block mb-2">Editor&apos;s Picks</span>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl text-foreground">The New <br/> Arrival</h2>
        </div>

        <motion.div style={{ x }} className="flex gap-10 md:gap-20 px-[20vw] md:px-[40vw] items-center">
          {products.map((product, index) => (
            <div key={product.id} className="relative w-[75vw] sm:w-[50vw] md:w-[35vw] lg:w-[25vw] flex-shrink-0 group">
              <Link href={`/product/${product.id}`} className="block relative aspect-[3/4] overflow-hidden bg-cream-dark/20">
                <img 
                  src={product.images[0]} 
                  alt={product.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110"
                />
                <img 
                  src={product.images[1]} 
                  alt={`${product.name} detail`}
                  className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:opacity-100"
                />
                
                {/* Elegant overlay gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </Link>
              
              <div className="mt-6 flex flex-col items-center text-center">
                <h3 className="font-display text-xl md:text-2xl text-foreground tracking-wide mb-2">{product.name}</h3>
                <p className="font-body text-sm text-foreground/60 tracking-wider">
                  Rs. {product.price.toLocaleString()}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
