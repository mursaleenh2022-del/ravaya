import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="flex-grow bg-cream/20 py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 bg-white border border-border-light rounded-[32px] p-8 sm:p-12 shadow-soft">
          <h1 className="text-3xl font-display font-semibold text-ink mb-6 border-b border-border-light pb-4">
            Our Heritage
          </h1>
          
          <div className="space-y-6 text-sm text-ink/75 leading-relaxed">
            <p>
              Ravaya was established with a singular devotion: bringing premium South Asian fabrics and handcraft details to modern lifestyle wardrobes. We believe that everyday clothing should feel elegant and carry the heritage of local weavers.
            </p>
            <p>
              Our design laboratory works closely with local hand-embroidery and block-printing artisans across textile hubs to select summer lawns, raw silks, crinkled chiffons, and winter khaddars.
            </p>
            <p>
              With our in-house stitching standard, we guarantee custom tailored fittings, ensuring each Peshwas, Lehenga, or Kurta is adjusted precisely to your dimensions.
            </p>
          </div>
        </div>
      </main>
      <Footer />
      <CartDrawer />
    </>
  );
}
