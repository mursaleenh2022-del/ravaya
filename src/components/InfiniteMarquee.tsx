"use client";

import { motion } from "framer-motion";

const MARQUEE_TEXT = "AVAILABLE NOW • BESPOKE TAILORING • WORLDWIDE SHIPPING • LUXURY CRAFTSMANSHIP • ";

export default function InfiniteMarquee() {
  return (
    <section className="py-12 bg-foreground text-background border-y border-gold/20 overflow-hidden flex items-center relative z-10">
      <div className="flex whitespace-nowrap overflow-hidden w-full">
        <motion.div
          className="flex whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 40,
          }}
        >
          <span className="text-xs md:text-sm font-body font-light tracking-[0.3em] uppercase px-8 text-cream/70">
            {MARQUEE_TEXT}
          </span>
          <span className="text-xs md:text-sm font-body font-light tracking-[0.3em] uppercase px-8 text-cream/70">
            {MARQUEE_TEXT}
          </span>
          <span className="text-xs md:text-sm font-body font-light tracking-[0.3em] uppercase px-8 text-cream/70">
            {MARQUEE_TEXT}
          </span>
          <span className="text-xs md:text-sm font-body font-light tracking-[0.3em] uppercase px-8 text-cream/70">
            {MARQUEE_TEXT}
          </span>
        </motion.div>
      </div>
    </section>
  );
}
