"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { catalog } from "@/data/products";

export type CartItem = {
  id: string;
  quantity: number;
};

export type DetailedCartItem = {
  id: string;
  name: string;
  price: number;
  image: string;
  jarCount: number;
  quantity: number;
};

type CartContextType = {
  items: CartItem[];
  detailedItems: DetailedCartItem[];
  addItem: (id: string) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  subtotal: number;
  checkout: () => Promise<void>;
};

const CART_STORAGE_KEY = "flex-cart";

const CartContext = createContext<CartContextType | null>(null);

function getInitialCart(): CartItem[] {
  if (typeof window === "undefined") return [];

  try {
    const savedCart = window.localStorage.getItem(CART_STORAGE_KEY);
    return savedCart ? JSON.parse(savedCart) : [];
  } catch {
    window.localStorage.removeItem(CART_STORAGE_KEY);
    return [];
  }
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>(getInitialCart);

  useEffect(() => {
    window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  function addItem(id: string) {
    setItems((current) => {
      const existing = current.find((item) => item.id === id);

      if (existing) {
        return current.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }

      return [...current, { id, quantity: 1 }];
    });
  }

  function removeItem(id: string) {
    setItems((current) => current.filter((item) => item.id !== id));
  }

  function updateQuantity(id: string, quantity: number) {
    if (quantity <= 0) {
      removeItem(id);
      return;
    }

    setItems((current) =>
      current.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  }

  function clearCart() {
    setItems([]);
    window.localStorage.removeItem(CART_STORAGE_KEY);
  }

  async function checkout() {
    const response = await fetch("/api/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ items }),
    });

    const data = await response.json();

    if (!response.ok || !data.url) {
      alert("Checkout failed. Please try again.");
      return;
    }

    window.location.href = data.url;
  }

  const detailedItems = useMemo(
    () =>
      items
        .map((item) => {
          const product = catalog.find((catalogItem) => catalogItem.id === item.id);
          if (!product) return null;

          return {
            ...product,
            quantity: item.quantity,
          };
        })
        .filter(Boolean) as DetailedCartItem[],
    [items]
  );

  const subtotal = useMemo(
    () =>
      detailedItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      ),
    [detailedItems]
  );

  return (
    <CartContext.Provider
      value={{
        items,
        detailedItems,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        subtotal,
        checkout,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used inside CartProvider");
  }

  return context;
}
