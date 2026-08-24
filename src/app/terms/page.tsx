import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";

export default function TermsPage() {
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
            Legal & Policies
          </span>
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-display font-semibold tracking-tight">
            Terms of Service.
          </h1>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="bg-background text-foreground py-24 px-6 md:px-10">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-16">
          
          {/* Sticky Sidebar Navigation (Optional/Decorative) */}
          <aside className="hidden md:block w-64 shrink-0">
            <div className="sticky top-32 space-y-4">
              <span className="text-[9px] font-bold tracking-[0.2em] uppercase text-gold block mb-6">
                Contents
              </span>
              <ul className="space-y-4 text-xs tracking-wider uppercase text-foreground/50 font-semibold">
                <li className="text-ink hover:text-gold cursor-pointer transition-colors">1. General Overview</li>
                <li className="hover:text-gold cursor-pointer transition-colors">2. Product Info & Sizing</li>
                <li className="hover:text-gold cursor-pointer transition-colors">3. Order Verification</li>
              </ul>
            </div>
          </aside>

          {/* Body Content */}
          <div className="flex-1 space-y-16">
            <section>
              <h2 className="text-xl font-display font-semibold text-ink mb-6 flex items-center gap-4">
                <span className="text-gold font-body text-sm">01</span>
                General Overview
              </h2>
              <div className="text-base text-ink/75 leading-loose font-body space-y-6">
                <p>
                  This website is operated by Ravaya. Throughout the site, the terms "we", "us", and "our" refer to Ravaya. By visiting our site and/or purchasing from us, you engage in our service and agree to be bound by the following terms and conditions.
                </p>
                <p>
                  We reserve the right to update, change or replace any part of these Terms of Service by posting updates and/or changes to our website. It is your responsibility to check this page periodically for changes.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-display font-semibold text-ink mb-6 flex items-center gap-4">
                <span className="text-gold font-body text-sm">02</span>
                Product Information and Sizing
              </h2>
              <div className="text-base text-ink/75 leading-loose font-body space-y-6">
                <p>
                  We make every effort to display as accurately as possible the colors, textures, and details of our stitched and unstitched fabrics. However, actual colors may vary slightly depending on your device screens.
                </p>
                <p>
                  All descriptions of products or product pricing are subject to change at anytime without notice, at the sole discretion of us. We reserve the right to discontinue any product at any time. Sizing guides are provided to ensure correct fits, and bespoke tailoring is available upon request.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-display font-semibold text-ink mb-6 flex items-center gap-4">
                <span className="text-gold font-body text-sm">03</span>
                Order Verification & Cash on Delivery
              </h2>
              <div className="text-base text-ink/75 leading-loose font-body space-y-6">
                <p>
                  For Cash on Delivery orders, we reserve the right to call or message customers on the provided telephone lines to verify address details and purchase intent prior to package shipment. 
                </p>
                <p>
                  Unverified orders will be cancelled. We also reserve the right to refuse any order you place with us. We may, in our sole discretion, limit or cancel quantities purchased per person, per household or per order.
                </p>
              </div>
            </section>
          </div>

        </div>
      </main>
      
      <Footer />
      <CartDrawer />
    </>
  );
}
