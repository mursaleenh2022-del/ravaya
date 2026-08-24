"use client";
import React, { useState } from "react";

interface LeadFormProps {
  businessName?: string;
  whatsappNumber?: string;
}

export default function LeadForm({ 
  businessName = "Ravaya", 
  whatsappNumber = "923160069164" 
}: LeadFormProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;

    const message = encodeURIComponent(
      `Hi ${businessName}, I am ${name.trim()}. Please call me back for a styling consultation at ${phone.trim()}.`
    );
    try {
      window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
    } catch (err) {
      console.error("WhatsApp redirect failed", err);
    }
    setSubmitted(true);
  };

  return (
    <div className="lead-form_card w-full max-w-[430px] bg-white border border-border-light rounded-[20px] p-6 md:p-8 shadow-medium transition-all hover:shadow-premium">
      {!submitted ? (
        <>
          <div className="lead-form_head mb-5">
            <h3 className="text-xl md:text-2xl font-display font-semibold text-ink tracking-tight">
              Book a Consultation
            </h3>
            <p className="text-xs md:text-sm text-ink/60 mt-1">
              Get a callback or message from a personal stylist
            </p>
          </div>
          <form className="lead-form flex flex-col gap-3" onSubmit={handleSubmit}>
            <input
              className="lead-form_input h-[50px] w-full border border-border-light rounded-xl px-4 text-[15px] text-ink bg-cream/30 outline-none transition-all focus:border-gold focus:bg-white"
              type="text"
              name="name"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              className="lead-form_input h-[50px] w-full border border-border-light rounded-xl px-4 text-[15px] text-ink bg-cream/30 outline-none transition-all focus:border-gold focus:bg-white"
              type="tel"
              name="phone"
              placeholder="Phone Number (e.g. +92...)"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
            <button
              className="lead-form_btn h-13 w-full border-none rounded-full bg-ink text-white font-semibold text-[15px] cursor-pointer transition-all hover:bg-gold active:scale-95 shadow-soft"
              type="submit"
            >
              Request a Callback
            </button>
            <p className="lead-form_note text-[11px] text-ink/40 text-center mt-1">
              No spam. A real person calls you back, fast.
            </p>
          </form>
        </>
      ) : (
        <div className="lead-form_success text-center py-8">
          <div className="text-gold text-4xl mb-3">✦</div>
          <h3 className="text-xl font-display font-semibold text-ink">
            Thanks! You are all set.
          </h3>
          <p className="text-sm text-ink/60 mt-2 leading-relaxed">
            Our styling team will reach out to you within 10 minutes.
          </p>
        </div>
      )}
    </div>
  );
}
