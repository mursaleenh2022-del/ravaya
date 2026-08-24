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

            {/* Custom Stitching Notes (Unboxed Editorial Style) */}
            <section className="mt-16 pt-16 border-t border-ink/10 flex flex-col md:flex-row gap-8 items-start md:items-center">
              <div className="md:w-1/3">
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-gold mb-3 block">
                  Personalized Fit
                </span>
                <h3 className="font-display text-2xl sm:text-3xl text-ink">
                  Bespoke Tailoring
                </h3>
              </div>
              <div className="md:w-2/3 md:pl-12 md:border-l border-ink/10">
                <p className="text-sm text-ink/75 leading-loose font-body">
                  If you need adjustments to standard sizes, simply choose the "Custom Tailored" option on any product page. A dedicated design consultant will reach out via WhatsApp to record your exact measurements, ensuring your outfit is crafted flawlessly to your unique silhouette.
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
