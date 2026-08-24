"use client";
import React, { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";

interface EditorialSectionProps {
  title: string;
  tagline: string;
  description: string;
  imageSrc: string;
  ctaText: string;
  ctaLink: string;
  reverse?: boolean;
}

export default function EditorialSection({
  title,
  tagline,
  description,
  imageSrc,
  ctaText,
  ctaLink,
  reverse = false,
}: EditorialSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  return (
    <section ref={containerRef} className="py-24 md:py-32 bg-background overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className={`grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24 items-center ${reverse ? "lg:flex-row-reverse" : ""}`}>
          
          {/* Text Content Block */}
          <div className={`lg:col-span-5 flex flex-col justify-center ${reverse ? "lg:order-last lg:col-start-8" : "lg:col-start-2"}`}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gold mb-4 block">
                {tagline}
              </span>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-medium text-foreground leading-[1.1] mb-8">
                {title}
              </h2>
              <p className="text-base sm:text-lg text-foreground/70 leading-relaxed mb-10 font-body">
                {description}
              </p>
              <div className="flex">
                <Link 
                  href={ctaLink}
                  className="group relative inline-flex items-center justify-center px-10 py-4 overflow-hidden border border-foreground/30 text-foreground uppercase tracking-[0.2em] text-xs transition-colors hover:border-gold"
                >
                  <span className="relative z-10 transition-colors group-hover:text-cream">{ctaText}</span>
                  <div className="absolute inset-0 h-full w-full bg-gold -translate-y-full transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0" />
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Editorial Image Block */}
          <div className={`lg:col-span-6 ${reverse ? "lg:col-start-1" : ""}`}>
            <motion.div 
              initial={{ clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)" }}
              whileInView={{ clipPath: "polygon(0 0%, 100% 0%, 100% 100%, 0% 100%)" }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full aspect-[3/4] overflow-hidden bg-cream-dark/20"
            >
              <motion.img
                style={{ y: imageY, scale: 1.15 }}
                src={imageSrc}
                alt={title}
                className="absolute top-0 left-0 w-full h-full object-cover"
                loading="lazy"
              />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
