import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";

export default function SizeGuidePage() {
  return (
    <>
      <Header theme="dark" />
      
      {/* Luxury Page Header */}
      <section className="bg-ink text-cream pt-40 pb-24 px-6 md:px-10 relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto text-center relative z-10">
          <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-gold mb-6 block">
            Bespoke Fit
          </span>
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-display font-semibold tracking-tight">
            Size & Fit Guide.
          </h1>
          <p className="mt-6 text-cream/70 text-sm md:text-base max-w-xl mx-auto font-body tracking-wider">
            Please consult our measurements in inches below to select your perfect stitched size.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="bg-background text-foreground py-24 px-6 md:px-10">
        <div className="max-w-5xl mx-auto">
          
          <div className="space-y-20">
            
            {/* Standard Suit Chart */}
            <section>
              <div className="flex items-center gap-4 mb-10">
                <h2 className="text-2xl md:text-3xl font-display font-semibold text-ink">
                  Standard Stitched Suit Measurements
                </h2>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm text-ink border-collapse font-body">
                  <thead>
                    <tr className="border-b border-ink/20">
                      <th className="py-4 px-4 font-bold uppercase tracking-widest text-gold text-xs">Size</th>
                      <th className="py-4 px-4 font-bold uppercase tracking-widest text-gold text-xs">Chest</th>
                      <th className="py-4 px-4 font-bold uppercase tracking-widest text-gold text-xs">Waist</th>
                      <th className="py-4 px-4 font-bold uppercase tracking-widest text-gold text-xs">Shoulder</th>
                      <th className="py-4 px-4 font-bold uppercase tracking-widest text-gold text-xs">Shirt Length</th>
                      <th className="py-4 px-4 font-bold uppercase tracking-widest text-gold text-xs">Trouser Length</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-ink/10">
                    <tr className="hover:bg-cream/50 transition-colors">
                      <td className="py-6 px-4 font-semibold text-ink tracking-widest">SMALL (S)</td>
                      <td className="py-6 px-4">36"</td>
                      <td className="py-6 px-4">30"</td>
                      <td className="py-6 px-4">14.0"</td>
                      <td className="py-6 px-4">38"</td>
                      <td className="py-6 px-4">38"</td>
                    </tr>
                    <tr className="hover:bg-cream/50 transition-colors">
                      <td className="py-6 px-4 font-semibold text-ink tracking-widest">MEDIUM (M)</td>
                      <td className="py-6 px-4">40"</td>
                      <td className="py-6 px-4">34"</td>
                      <td className="py-6 px-4">15.0"</td>
                      <td className="py-6 px-4">40"</td>
                      <td className="py-6 px-4">39"</td>
                    </tr>
                    <tr className="hover:bg-cream/50 transition-colors">
                      <td className="py-6 px-4 font-semibold text-ink tracking-widest">LARGE (L)</td>
                      <td className="py-6 px-4">44"</td>
                      <td className="py-6 px-4">38"</td>
                      <td className="py-6 px-4">16.0"</td>
                      <td className="py-6 px-4">42"</td>
                      <td className="py-6 px-4">40"</td>
                    </tr>
                    <tr className="hover:bg-cream/50 transition-colors">
                      <td className="py-6 px-4 font-semibold text-ink tracking-widest">EXTRA LARGE (XL)</td>
                      <td className="py-6 px-4">48"</td>
                      <td className="py-6 px-4">42"</td>
                      <td className="py-6 px-4">17.0"</td>
                      <td className="py-6 px-4">43"</td>
                      <td className="py-6 px-4">40"</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Custom Stitching Notes */}
            <section className="border border-border-light/50 bg-white shadow-soft rounded-[24px] p-10 md:p-16 flex flex-col items-center text-center mx-auto max-w-4xl">
              <div className="w-10 h-0.5 bg-gold mb-8" />
              <h3 className="font-display font-semibold text-3xl md:text-4xl text-ink mb-6">
                Bespoke Tailoring Support
              </h3>
              <p className="text-sm text-ink/75 leading-relaxed font-body max-w-2xl">
                We provide an exclusive bespoke tailoring service for clients with unique measurement requirements or those seeking personalized adjustments like custom sleeve lengths, varied trouser silhouettes, or tailored necklines. To request this service, simply choose the "Custom Tailored" variant when adding an item to your collection. One of our specialized design consultants will then contact you directly on WhatsApp to finalize your exact specifications and guarantee a flawless fit.
              </p>
            </section>

          </div>
        </div>
      </main>
      
      <Footer />
      <CartDrawer />
    </>
  );
}
