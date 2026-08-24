import React from "react";
import Link from "next/link";
import ContactPill from "./ContactPill";

export default function Footer() {
  const whatsappIcon = (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
      <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.96 9.96 0 001.335 4.978L2 22l5.19-1.361a9.94 9.94 0 004.82 1.244h.005c5.507 0 9.99-4.478 9.99-9.985A9.97 9.97 0 0012.012 2zm5.72 14.262c-.243.682-1.42 1.28-1.95 1.348-.48.062-.976.28-3.13-.58-2.73-1.095-4.47-3.844-4.606-4.025-.137-.18-1.12-1.48-1.12-2.825 0-1.344.706-2.006.955-2.27.243-.264.53-.33.706-.33.176 0 .353.003.502.01.162.007.38-.063.595.452.22.53.75 1.83.815 1.964.064.13.107.287.02.458-.087.173-.13.28-.26.43-.13.153-.274.342-.39.46-.13.13-.268.272-.116.53.153.258.678 1.117 1.458 1.81.998.887 1.84 1.166 2.1.13.26-.137.53-.452.795-.615.264-.162.53-.135.795.03.265.162 1.68.79 1.97.935.29.145.48.215.55.335.07.12.07.7-.17 1.38z" />
    </svg>
  );

  const phoneIcon = (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  );

  const emailIcon = (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );

  return (
    <footer className="bg-ink text-cream border-t-2 border-gold pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Col */}
          <div>
            <span className="font-display text-3xl font-bold tracking-widest text-cream block mb-4">
              Ravaya
            </span>
            <p className="text-sm text-cream/70 leading-relaxed max-w-xs mb-4">
              Crafted for Your Everyday Elegance. Experience premium South Asian stitched and unstitched fabrics.
            </p>
          </div>

          {/* Links Col */}
          <div>
            <h4 className="text-sm font-bold tracking-wider uppercase text-gold mb-4">
              Occasions
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link href="/?category=Casual" className="text-sm text-cream/70 hover:text-gold transition-colors">
                  Casual Wear
                </Link>
              </li>
              <li>
                <Link href="/?category=Festive" className="text-sm text-cream/70 hover:text-gold transition-colors">
                  Festive Collection
                </Link>
              </li>
              <li>
                <Link href="/?category=Bridal" className="text-sm text-cream/70 hover:text-gold transition-colors">
                  Bridal Couture
                </Link>
              </li>
              <li>
                <Link href="/?category=Formal" className="text-sm text-cream/70 hover:text-gold transition-colors">
                  Formal Elegance
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Care Col */}
          <div>
            <h4 className="text-sm font-bold tracking-wider uppercase text-gold mb-4">
              Customer Care
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link href="/shipping-policy" className="text-sm text-cream/70 hover:text-gold transition-colors">
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link href="/size-guide" className="text-sm text-cream/70 hover:text-gold transition-colors">
                  Size Guide
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-cream/70 hover:text-gold transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-sm text-cream/70 hover:text-gold transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Col */}
          <div className="flex flex-col items-start gap-4">
            <h4 className="text-sm font-bold tracking-wider uppercase text-gold">
              Get in Touch
            </h4>
            <p className="text-sm text-cream/70 mb-2">
              Need assistance with styling or sizing? Contact us:
            </p>
            <div className="flex flex-col gap-3 w-full sm:w-auto">
              <ContactPill
                href="https://wa.me/923160069164"
                icon={whatsappIcon}
                label="WhatsApp Stylist"
                variant="gold"
              />
              <ContactPill
                href="tel:+923160069164"
                icon={phoneIcon}
                label="+92 316 0069164"
                variant="outline"
              />
              <ContactPill
                href="mailto:hello@ravaya.com"
                icon={emailIcon}
                label="hello@ravaya.com"
                variant="outline"
              />
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-cream/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-cream/50">
            &copy; {new Date().getFullYear()} Ravaya. All rights reserved.
          </p>
          <div className="flex gap-6">
            <span className="text-xs text-cream/40">Premium South Asian Fashion</span>
            <span className="text-xs text-cream/40">Cash on Delivery Available</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
