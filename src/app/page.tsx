import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductGrid from "@/components/ProductGrid";
import CartDrawer from "@/components/CartDrawer";
import CinematicHero from "@/components/CinematicHero";
import LookbookSection from "@/components/LookbookSection";
import EditorialSection from "@/components/EditorialSection";
import CampaignBreak from "@/components/CampaignBreak";
import CategoryAccordion from "@/components/CategoryAccordion";
import InfiniteMarquee from "@/components/InfiniteMarquee";
import productsData from "@/data/products.json";
import { Product } from "@/context/CartContext";

export default async function Home() {
  const products = productsData as Product[];

  return (
    <>
      <Header />

      <main className="flex-grow bg-background">
        
        {/* Full Bleed Cinematic Hero */}
        <CinematicHero />

        {/* Sticky Horizontal Lookbook for Featured Items */}
        <LookbookSection products={products.slice(0, 4)} />

        {/* Trust & Heritage Strip */}
        <section className="bg-foreground text-background py-16 px-6 md:px-10 border-t border-gold/20 relative z-10">
          <div className="max-w-[1400px] mx-auto text-center max-w-3xl">
            <h2 className="font-display text-3xl md:text-5xl lg:text-6xl text-cream mb-6 leading-tight">
              A Legacy of <br className="hidden md:block"/> Authentic Craftsmanship
            </h2>
            <p className="text-cream-dark/70 font-body text-base md:text-lg max-w-xl mx-auto tracking-wide leading-relaxed">
              We collaborate with master artisans to weave gold zari, sequins, and fine floral threadwork, ensuring every piece tells a story of heritage and prestige.
            </p>
          </div>
        </section>

        {/* Tactile Category Selector */}
        <CategoryAccordion />

        {/* Heavy Parallax Break */}
        <CampaignBreak />

        {/* Standard Collection Grid (Rest of the catalog) */}
        <section id="collection-grid" className="py-24 md:py-32 bg-background relative z-10">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-24">
              <div className="max-w-2xl">
                <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gold mb-4 block">
                  The Complete Archive
                </span>
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-display text-foreground leading-[1.1]">
                  Explore the Collection
                </h2>
              </div>
            </div>

            {/* Note: the ProductGrid component has its own local client-side category filter. */}
            <ProductGrid initialProducts={products} />
          </div>
        </section>

        {/* Parallax Editorial Section */}
        <EditorialSection
          title="Bespoke Tailoring"
          tagline="The Perfect Fit"
          description="Whether you choose our unstitched fabrics to drape in your own style, or request our premium bespoke stitching service, we ensure precision sizing and unparalleled comfort."
          imageSrc="/ravaya/assets/img/gen_editorial_fitting.jpg"
          ctaText="Discover Our Process"
          ctaLink="/size-guide"
        />

        <InfiniteMarquee />

      </main>

      <Footer />
      
      <CartDrawer />
    </>
  );
}
