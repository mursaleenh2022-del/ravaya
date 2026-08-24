"use client";
import React, { useState } from "react";
import { useCart } from "@/context/CartContext";

export default function CartDrawer() {
  const {
    cartItems,
    isCartOpen,
    setCartOpen,
    updateQuantity,
    removeFromCart,
    cartSubtotal,
    clearCart
  } = useCart();

  // Multi-step: "cart" | "checkout" | "success"
  const [step, setStep] = useState<"cart" | "checkout" | "success">("cart");
  const [paymentMethod, setPaymentMethod] = useState<"cod" | "whatsapp">("cod");

  // CoD Form State
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [email, setEmail] = useState("");

  const formatPrice = (amount: number) => {
    return new Intl.NumberFormat("en-PK", {
      style: "currency",
      currency: "PKR",
      maximumFractionDigits: 0
    }).format(amount);
  };

  const handleCheckoutClick = () => {
    setStep("checkout");
  };

  const handleBackToCart = () => {
    setStep("cart");
  };

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim() || !address.trim() || !city.trim()) return;

    if (paymentMethod === "whatsapp") {
      // Form WhatsApp message
      const itemsList = cartItems
        .map(
          (item) =>
            `- ${item.product.name} (${item.selectedVariant}) x${item.quantity}: ${formatPrice(
              item.product.price * item.quantity
            )}`
        )
        .join("\n");

      const totalMsg = formatPrice(cartSubtotal);

      const messageText = `Hi Ravaya, I would like to place an order:\n\n*Customer Details:*\nName: ${name}\nPhone: ${phone}\nAddress: ${address}, ${city}\n\n*Order Items:*\n${itemsList}\n\n*Subtotal:* ${totalMsg}\n*Payment Method:* WhatsApp Confirmation`;

      window.open(`https://wa.me/923160069164?text=${encodeURIComponent(messageText)}`, "_blank");
    }

    // Success transition
    setStep("success");
  };

  const handleSuccessClose = () => {
    clearCart();
    setStep("cart");
    setCartOpen(false);
    // Reset Form
    setName("");
    setPhone("");
    setAddress("");
    setCity("");
    setEmail("");
  };

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden" aria-modal="true" role="dialog">
      
      {/* Semi-transparent backdrop shadow */}
      <div 
        className="absolute inset-0 bg-ink/40 backdrop-blur-xs transition-opacity duration-300"
        onClick={() => setCartOpen(false)}
      />

      <div className="absolute inset-y-0 right-0 max-w-full flex">
        <div className="w-screen max-w-md bg-white shadow-premium flex flex-col h-full transform transition-transform duration-300">
          
          {/* Drawer Header */}
          <div className="px-6 py-5 border-b border-border-light flex items-center justify-between">
            <h2 className="text-lg font-semibold text-ink flex items-center gap-2">
              <svg className="w-5 h-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              {step === "cart" && "Shopping Bag"}
              {step === "checkout" && "Checkout Details"}
              {step === "success" && "Order Completed"}
            </h2>
            
            {/* Close Button */}
            {step !== "success" && (
              <button 
                onClick={() => setCartOpen(false)}
                className="p-1 text-ink/40 hover:text-gold transition-colors cursor-pointer"
                aria-label="Close cart"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>

          {/* Drawer Body content depends on multi-step */}
          {step === "cart" && (
            <div className="flex-1 overflow-y-auto p-6 flex flex-col">
              {cartItems.length > 0 ? (
                <>
                  {/* Items list */}
                  <div className="space-y-6 flex-1">
                    {cartItems.map((item) => (
                      <div 
                        key={`${item.product.id}-${item.selectedVariant}`}
                        className="flex gap-4 pb-6 border-b border-border-light/40"
                      >
                        <div className="w-20 aspect-[3/4] rounded-lg overflow-hidden bg-cream-dark flex-shrink-0">
                          <img 
                            src={item.product.images[0]} 
                            alt={item.product.name} 
                            className="w-full h-full object-cover"
                          />
                        </div>

                        <div className="flex-1 flex flex-col justify-between">
                          <div>
                            <div className="flex justify-between gap-2">
                              <h4 className="font-display font-semibold text-sm sm:text-base text-ink line-clamp-1">
                                {item.product.name}
                              </h4>
                              <button 
                                onClick={() => removeFromCart(item.product.id, item.selectedVariant)}
                                className="text-xs text-ink/30 hover:text-gold transition-colors font-bold uppercase tracking-wider cursor-pointer"
                              >
                                Remove
                              </button>
                            </div>
                            <span className="text-[10px] bg-cream border border-border-light text-ink/65 font-bold uppercase px-2 py-0.5 rounded mt-1.5 inline-block select-none">
                              {item.selectedVariant}
                            </span>
                          </div>

                          <div className="flex items-center justify-between gap-4 mt-2">
                            {/* Quantity Stepper */}
                            <div className="flex items-center border border-border-light rounded-lg overflow-hidden bg-cream/45">
                              <button
                                onClick={() => updateQuantity(item.product.id, item.selectedVariant, item.quantity - 1)}
                                className="px-2.5 py-1 text-ink/50 hover:bg-cream-dark transition-colors cursor-pointer font-bold"
                              >
                                -
                              </button>
                              <span className="px-2 text-xs font-bold text-ink select-none min-w-[20px] text-center">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() => updateQuantity(item.product.id, item.selectedVariant, item.quantity + 1)}
                                className="px-2.5 py-1 text-ink/50 hover:bg-cream-dark transition-colors cursor-pointer font-bold"
                              >
                                +
                              </button>
                            </div>

                            <span className="text-sm font-bold text-ink">
                              {formatPrice(item.product.price * item.quantity)}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Summary & Checkout Button */}
                  <div className="pt-6 border-t border-border-light mt-auto">
                    <div className="flex justify-between items-center mb-6">
                      <span className="text-sm font-semibold text-ink/60">Subtotal</span>
                      <span className="text-xl font-bold text-ink">{formatPrice(cartSubtotal)}</span>
                    </div>
                    <button
                      onClick={handleCheckoutClick}
                      className="w-full h-13 rounded-full bg-ink text-white font-semibold text-sm tracking-wider uppercase hover:bg-gold transition-colors flex items-center justify-center cursor-pointer shadow-soft"
                    >
                      Proceed to Checkout
                    </button>
                  </div>
                </>
              ) : (
                <div className="flex-1 flex flex-col items-center justify-center text-center py-12">
                  <div className="text-ink/20 text-5xl mb-4">✦</div>
                  <h3 className="font-display text-lg font-semibold text-ink">Your bag is empty</h3>
                  <p className="text-xs text-ink/50 mt-1 max-w-[200px]">
                    Explore our unstitched and stitched collections to add items.
                  </p>
                  <button
                    onClick={() => setCartOpen(false)}
                    className="mt-6 px-6 py-2.5 rounded-full bg-ink text-white font-semibold text-xs tracking-wider uppercase hover:bg-gold transition-colors cursor-pointer"
                  >
                    Continue Shopping
                  </button>
                </div>
              )}
            </div>
          )}

          {step === "checkout" && (
            <div className="flex-1 overflow-y-auto p-6 flex flex-col">
              <button
                onClick={handleBackToCart}
                className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-gold hover:text-gold-hover mb-6 transition-colors self-start cursor-pointer"
              >
                ← Back to Bag
              </button>

              <form onSubmit={handlePlaceOrder} className="flex-grow flex flex-col">
                <div className="space-y-4 flex-1">
                  
                  {/* Delivery details form */}
                  <h3 className="text-xs font-bold uppercase tracking-widest text-gold mb-1">
                    Shipping Address
                  </h3>
                  
                  <input
                    className="h-11 w-full border border-border-light rounded-xl px-4 text-xs text-ink bg-cream/30 outline-none transition-all focus:border-gold focus:bg-white"
                    type="text"
                    placeholder="Full Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />

                  <input
                    className="h-11 w-full border border-border-light rounded-xl px-4 text-xs text-ink bg-cream/30 outline-none transition-all focus:border-gold focus:bg-white"
                    type="tel"
                    placeholder="Phone Number (e.g. +92...)"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />

                  <input
                    className="h-11 w-full border border-border-light rounded-xl px-4 text-xs text-ink bg-cream/30 outline-none transition-all focus:border-gold focus:bg-white"
                    type="email"
                    placeholder="Email Address (Optional)"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />

                  <input
                    className="h-11 w-full border border-border-light rounded-xl px-4 text-xs text-ink bg-cream/30 outline-none transition-all focus:border-gold focus:bg-white"
                    type="text"
                    placeholder="Complete Delivery Address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    required
                  />

                  <input
                    className="h-11 w-full border border-border-light rounded-xl px-4 text-xs text-ink bg-cream/30 outline-none transition-all focus:border-gold focus:bg-white"
                    type="text"
                    placeholder="City"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    required
                  />

                  {/* Payment method selector */}
                  <div className="pt-4">
                    <h3 className="text-xs font-bold uppercase tracking-widest text-gold mb-3">
                      Payment Option
                    </h3>
                    
                    <div className="grid grid-cols-2 gap-3">
                      <button
                        type="button"
                        onClick={() => setPaymentMethod("cod")}
                        className={`p-3 rounded-xl border text-left flex flex-col gap-1 cursor-pointer transition-all ${
                          paymentMethod === "cod"
                            ? "border-ink bg-ink/5"
                            : "border-border-light bg-white hover:border-gold"
                        }`}
                      >
                        <span className="text-xs font-bold text-ink">Cash on Delivery</span>
                        <span className="text-[10px] text-ink/50">Pay at your doorstep</span>
                      </button>
                      
                      <button
                        type="button"
                        onClick={() => setPaymentMethod("whatsapp")}
                        className={`p-3 rounded-xl border text-left flex flex-col gap-1 cursor-pointer transition-all ${
                          paymentMethod === "whatsapp"
                            ? "border-ink bg-ink/5"
                            : "border-border-light bg-white hover:border-gold"
                        }`}
                      >
                        <span className="text-xs font-bold text-ink">WhatsApp Quick Order</span>
                        <span className="text-[10px] text-ink/50">Handoff summary chat</span>
                      </button>
                    </div>
                  </div>

                </div>

                {/* Subtotal summary and submit */}
                <div className="pt-6 border-t border-border-light mt-8">
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-sm font-semibold text-ink/60">Grand Total</span>
                    <span className="text-xl font-bold text-ink">{formatPrice(cartSubtotal)}</span>
                  </div>
                  <button
                    type="submit"
                    className="w-full h-13 rounded-full bg-ink text-white font-semibold text-sm tracking-wider uppercase hover:bg-gold transition-colors flex items-center justify-center cursor-pointer shadow-soft"
                  >
                    {paymentMethod === "cod" ? "Place Order (CoD)" : "Order via WhatsApp"}
                  </button>
                </div>

              </form>
            </div>
          )}

          {step === "success" && (
            <div className="flex-1 p-6 flex flex-col items-center justify-center text-center">
              <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center text-gold text-2xl mb-4 font-bold select-none">
                ✓
              </div>
              <h3 className="font-display text-2xl font-semibold text-ink mb-2">
                Order Placed!
              </h3>
              <p className="text-sm text-ink/60 max-w-xs leading-relaxed mb-8">
                Thank you for shopping at Ravaya. We will process your order and send a confirmation shortly.
              </p>
              <button
                onClick={handleSuccessClose}
                className="w-full max-w-[200px] h-11 rounded-full bg-ink text-white font-semibold text-xs tracking-wider uppercase hover:bg-gold transition-colors cursor-pointer"
              >
                Close Drawer
              </button>
            </div>
          )}

        </div>
      </div>

    </div>
  );
}
