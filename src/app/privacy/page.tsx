import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";

export default function PrivacyPage() {
  return (
    <>
      <Header theme="dark" />
      
      {/* Luxury Page Header */}
      <section className="bg-ink text-cream pt-40 pb-24 px-6 md:px-10 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          {/* Subtle noise/texture overlay could go here */}
        </div>
        <div className="max-w-[1400px] mx-auto text-center relative z-10">
          <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-gold mb-6 block">
            Legal
          </span>
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-display font-semibold tracking-tight">
            Privacy Policy.
          </h1>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="bg-background text-foreground py-24 px-6 md:px-10">
        <div className="max-w-3xl mx-auto space-y-20">
          
          <div className="space-y-6">
            <h2 className="text-xl md:text-2xl font-display font-semibold text-ink">
              1. Data Collection
            </h2>
            <p className="text-ink/75 leading-relaxed tracking-wide font-body">
              When you make a purchase or submit a callback request on our storefront, we collect personal information such as your name, telephone number, email address, and shipping destination. This data is required solely for shipping fulfillment and customer support.
            </p>
          </div>

          <div className="space-y-6">
            <h2 className="text-xl md:text-2xl font-display font-semibold text-ink">
              2. Data Sharing and Protection
            </h2>
            <p className="text-ink/75 leading-relaxed tracking-wide font-body">
              We do not sell, rent, or lease your personal information to third parties. We share basic delivery address metrics only with verified local logistics providers (TCS, Leopards) to facilitate shipment deliveries.
            </p>
          </div>

        </div>
      </main>
      <Footer />
      <CartDrawer />
    </>
  );
}
