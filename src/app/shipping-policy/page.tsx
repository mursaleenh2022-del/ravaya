import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";

export default function ShippingPolicyPage() {
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
            Customer Care
          </span>
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-display font-semibold tracking-tight">
            Shipping & Returns.
          </h1>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="bg-background text-foreground py-24 px-6 md:px-10">
        <div className="max-w-3xl mx-auto space-y-20">
          
          <div className="space-y-6">
            <h2 className="text-xl md:text-2xl font-display font-semibold text-ink">
              Domestic Delivery (Pakistan)
            </h2>
            <p className="text-ink/75 leading-relaxed tracking-wide font-body">
              We offer nationwide Cash on Delivery (COD) across Pakistan. Delivery times generally range from 3 to 7 working days from the date of order verification. For major cities (Karachi, Lahore, Islamabad, Rawalpindi, Faisalabad), deliveries are usually completed within 3 working days.
            </p>
          </div>

          <div className="space-y-6">
            <h2 className="text-xl md:text-2xl font-display font-semibold text-ink">
              Bespoke Stitched Orders
            </h2>
            <p className="text-ink/75 leading-relaxed tracking-wide font-body">
              Stitched suit orders require an additional 7 to 10 working days for tailoring and handcraft checking. Once completed, your order will be dispatched immediately via trackable courier partners (TCS, Leopards, or M&P).
            </p>
          </div>

          <div className="space-y-6">
            <h2 className="text-xl md:text-2xl font-display font-semibold text-ink">
              Returns and Exchanges
            </h2>
            <p className="text-ink/75 leading-relaxed tracking-wide font-body">
              Any unstitched item purchased from Ravaya can be returned or exchanged within 7 days of delivery, provided it is unused, unwashed, and in its original packaging with all tags intact. Stitched orders are customized to size specifications and are therefore non-returnable unless they arrive damaged or contain clear fabrication errors.
            </p>
          </div>

          <div className="space-y-6">
            <h2 className="text-xl md:text-2xl font-display font-semibold text-ink">
              Refunds
            </h2>
            <p className="text-ink/75 leading-relaxed tracking-wide font-body">
              Refunds are processed within 5 working days of receipt and inspection of the returned package. Refund values are credited via bank transfer or digital wallets (JazzCash/Easypaisa).
            </p>
          </div>

        </div>
      </main>
      <Footer />
      <CartDrawer />
    </>
  );
}
