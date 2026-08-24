"use client";
import React, { createContext, useContext, useState, useEffect } from "react";

export interface Product {
  id: string;
  name: string;
  price: number;
  compareAtPrice: number | null;
  category: string;
  type: string;
  fabric: string;
  pieces: string;
  inStock: boolean;
  description: string;
  images: string[];
  variants: {
    name: string;
    options: string[];
  }[];
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedVariant: string;
}

interface CartContextType {
  cartItems: CartItem[];
  isCartOpen: boolean;
  addToCart: (product: Product, quantity: number, variant: string) => void;
  removeFromCart: (productId: string, variant: string) => void;
  updateQuantity: (productId: string, variant: string, quantity: number) => void;
  clearCart: () => void;
  setCartOpen: (open: boolean) => void;
  cartCount: number;
  cartSubtotal: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Load cart from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem("ravaya_cart");
    if (saved) {
      try {
        setCartItems(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to parse cart items", e);
      }
    }
    setMounted(true);
  }, []);

  // Save cart to localStorage on change
  useEffect(() => {
    if (mounted) {
      localStorage.setItem("ravaya_cart", JSON.stringify(cartItems));
    }
  }, [cartItems, mounted]);

  const addToCart = (product: Product, quantity: number, variant: string) => {
    setCartItems((prev) => {
      const existing = prev.find(
        (item) => item.product.id === product.id && item.selectedVariant === variant
      );
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id && item.selectedVariant === variant
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { product, quantity, selectedVariant: variant }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (productId: string, variant: string) => {
    setCartItems((prev) =>
      prev.filter((item) => !(item.product.id === productId && item.selectedVariant === variant))
    );
  };

  const updateQuantity = (productId: string, variant: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId, variant);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) =>
        item.product.id === productId && item.selectedVariant === variant
          ? { ...item, quantity }
          : item
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const setCartOpen = (open: boolean) => {
    setIsCartOpen(open);
  };

  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const cartSubtotal = cartItems.reduce((acc, item) => acc + item.product.price * item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        isCartOpen,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        setCartOpen,
        cartCount,
        cartSubtotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
