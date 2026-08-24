"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function CampaignBreak() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.1, 1]);

  return (
    <section ref={containerRef} className="relative h-[80vh] min-h-[600px] w-full overflow-hidden bg-ink my-24 md:my-32">
      <motion.div 
        className="absolute inset-0 w-full h-full"
        style={{ y, scale }}
      >
        <div className="absolute inset-0 bg-ink/50 z-10" />
        <img 
          src="/ravaya/assets/img/gen_p03_model.jpg" 
          alt="Ravaya Campaign" 
          className="w-full h-full object-cover object-center"
          loading="lazy"
        />
      </motion.div>

      <div className="relative z-20 w-full h-full flex flex-col items-center justify-center text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl"
        >
          <h2 className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-cream leading-[1.1] tracking-tight mb-8">
            Woven with time.<br />
            <span className="italic font-light opacity-90">Crafted for eternity.</span>
          </h2>
          <p className="text-sm md:text-base font-body text-cream/70 tracking-[0.2em] uppercase max-w-xl mx-auto leading-loose">
            The essence of South Asian heritage, reimagined for the modern silhouette.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
