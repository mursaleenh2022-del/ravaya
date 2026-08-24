"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface CategoryHeroProps {
  categoryName: string;
}

export default function CategoryHero({ categoryName }: CategoryHeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={containerRef} className="relative h-screen min-h-[700px] w-full bg-background flex items-center pt-20 border-b border-gold/20 z-20">
      
      <div className="w-full max-w-[1600px] mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between h-full relative">
        
        {/* Left: Massive Typography (Sticks and fades on scroll) */}
        <motion.div 
          className="w-full md:w-3/5 z-30 relative"
          style={{ y: textY, opacity }}
        >
          <div className="flex items-center gap-4 mb-8">
            <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-gold">
              Curated Collection
            </span>
          </div>
          
          <h1 className="font-display text-[4rem] sm:text-[5rem] md:text-[6rem] lg:text-[8rem] text-foreground leading-[0.85] tracking-tighter mix-blend-difference mb-10 capitalize">
            The <br/>
            <span className="italic font-light text-gold mix-blend-normal">{categoryName}</span><br/>
            Archive.
          </h1>

          <p className="font-body text-xs md:text-sm text-ink/50 max-w-sm leading-relaxed tracking-wider">
            Explore our definitive selection of {categoryName.toLowerCase()} luxury wear. Crafted with precision, designed to transcend time.
          </p>
        </motion.div>

        {/* Right: Massive Overlapping Image that breaks the bounds */}
        <motion.div 
          className="absolute right-0 bottom-[-15%] md:bottom-[-25%] w-[80%] md:w-[45%] h-[70vh] md:h-[110vh] z-40 shadow-[0_30px_60px_rgba(0,0,0,0.4)]"
          style={{ y: imageY }}
        >
          {/* Using a dynamic generic placeholder for the aesthetic */}
          <img 
            src={`/ravaya/assets/img/gen_p0${categoryName.length % 3 + 1}_model.jpg`} 
            alt={`${categoryName} Collection`} 
            className="w-full h-full object-cover"
          />
          
          {/* Scroll Indicator anchored to the image */}
          <div className="absolute -left-6 bottom-1/4 -translate-x-full hidden md:flex flex-col items-center gap-4">
            <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-ink rotate-90 origin-bottom whitespace-nowrap mb-12">
              Explore Now
            </span>
            <div className="w-[1px] h-24 bg-ink/20 overflow-hidden relative">
              <motion.div 
                className="absolute top-0 left-0 w-full h-1/2 bg-gold"
                animate={{ y: ["-100%", "200%"] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              />
            </div>
          </div>
        </motion.div>

      </div>

      {/* Massive Background Typography Text (Watermark) */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full overflow-hidden pointer-events-none opacity-5 z-10 select-none">
        <h2 className="text-[20vw] font-display font-bold text-foreground whitespace-nowrap tracking-tighter leading-none uppercase">
          {categoryName} {categoryName}
        </h2>
      </div>

    </section>
  );
}
