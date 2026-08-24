import React from "react";

interface ContactPillProps {
  href: string;
  icon: React.ReactNode;
  label: string;
  variant?: "gold" | "ink" | "outline";
}

export default function ContactPill({ href, icon, label, variant = "outline" }: ContactPillProps) {
  const baseStyle = "inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-wider transition-all duration-200 select-none cursor-pointer";
  const variants = {
    gold: "bg-gold text-white hover:bg-gold-hover hover:-translate-y-0.5 active:translate-y-0 shadow-soft",
    ink: "bg-ink text-white hover:bg-gold hover:-translate-y-0.5 active:translate-y-0 shadow-soft",
    outline: "border border-border-light text-ink bg-white/80 backdrop-blur-sm hover:border-gold hover:text-gold hover:-translate-y-0.5 active:translate-y-0"
  };

  return (
    <a 
      href={href} 
      className={`${baseStyle} ${variants[variant]}`} 
      target={href.startsWith("http") ? "_blank" : undefined} 
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
    >
      <span className="flex-shrink-0 flex items-center justify-center w-3.5 h-3.5">{icon}</span>
      <span className="leading-none">{label}</span>
    </a>
  );
}
