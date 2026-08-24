"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import ContactPill from "./ContactPill";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

interface HeaderProps {
  theme?: "light" | "dark";
}

export default function Header({ theme = "light" }: HeaderProps) {
  const { cartCount, setCartOpen } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  });

  const whatsappIcon = (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
      <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.96 9.96 0 001.335 4.978L2 22l5.19-1.361a9.94 9.94 0 004.82 1.244h.005c5.507 0 9.99-4.478 9.99-9.985A9.97 9.97 0 0012.012 2zm5.72 14.262c-.243.682-1.42 1.28-1.95 1.348-.48.062-.976.28-3.13-.58-2.73-1.095-4.47-3.844-4.606-4.025-.137-.18-1.12-1.48-1.12-2.825 0-1.344.706-2.006.955-2.27.243-.264.53-.33.706-.33.176 0 .353.003.502.01.162.007.38-.063.595.452.22.53.75 1.83.815 1.964.064.13.107.287.02.458-.087.173-.13.28-.26.43-.13.153-.274.342-.39.46-.13.13-.268.272-.116.53.153.258.678 1.117 1.458 1.81.998.887 1.84 1.166 2.1.13.26-.137.53-.452.795-.615.264-.162.53-.135.795.03.265.162 1.68.79 1.97.935.29.145.48.215.55.335.07.12.07.7-.17 1.38z" />
    </svg>
  );

  const isDarkText = scrolled || theme === "light";

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 z-50 w-full transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        scrolled 
          ? "bg-background/90 backdrop-blur-xl border-b border-border-light py-2 text-foreground" 
          : `bg-transparent border-b border-transparent py-6 ${theme === "dark" ? "text-cream" : "text-foreground"}`
      }`}
    >
      <div className="w-full px-6 md:px-12 flex items-center justify-between">
        
        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 hover:text-gold transition-colors focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Brand Logo Wordmark */}
        <div className="flex-1 md:flex-initial text-center md:text-left">
          <Link href="/" className="inline-block">
            <span className="font-display text-2xl sm:text-3xl lg:text-4xl tracking-tight transition-colors hover:text-gold">
              RAVAYA
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10">
          {['Casual', 'Festive', 'Bridal', 'Formal'].map((item) => (
            <Link 
              key={item} 
              href={`/collections/${item.toLowerCase()}`} 
              className="group relative text-xs font-semibold tracking-[0.2em] uppercase transition-colors py-2 opacity-80 hover:opacity-100"
            >
              {item}
              <span className="absolute bottom-0 left-0 w-0 h-px bg-gold transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:w-full"></span>
            </Link>
          ))}
        </nav>

        {/* Styled Utilities (Contact Pill + Cart) */}
        <div className="flex items-center gap-5 sm:gap-6">
          <div className="hidden sm:block">
            <ContactPill
              href="https://wa.me/923160069164"
              icon={whatsappIcon}
              label="Bespoke Service"
              variant={scrolled ? "outline" : "outline"}
            />
          </div>

          {/* Cart Trigger */}
          <button
            onClick={() => setCartOpen(true)}
            className="group relative flex items-center justify-center hover:text-gold transition-all cursor-pointer"
            aria-label="Open shopping cart"
          >
            <span className="text-xs font-semibold tracking-[0.15em] uppercase mr-2 hidden lg:block group-hover:-translate-x-1 transition-transform duration-300">Cart</span>
            <svg className="w-5 h-5 lg:w-4 lg:h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-3 lg:-top-3 lg:-right-4 w-5 h-5 rounded-full bg-gold text-cream text-[10px] font-bold flex items-center justify-center shadow-soft">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 w-full md:hidden border-b border-border-light bg-background/95 backdrop-blur-xl py-6 px-6 flex flex-col gap-6 text-foreground"
        >
          {['Casual', 'Festive', 'Bridal', 'Formal'].map((item) => (
            <Link 
              key={item}
              href={`/collections/${item.toLowerCase()}`} 
              className="text-lg font-display tracking-widest uppercase border-b border-border-light/30 pb-4"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item}
            </Link>
          ))}
          <div className="pt-4 flex flex-col gap-3">
            <ContactPill
              href="https://wa.me/923160069164"
              icon={whatsappIcon}
              label="Style Consultation"
              variant="gold"
            />
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
