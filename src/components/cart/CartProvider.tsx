"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { bundles, productFamilies } from "@/data/products";

export type CartItem = {
  id: string;
  quantity: number;
};

type CartContextType = {
  items: CartItem[];
  detailedItems: {
    id: string;
    name: string;
    price: number;
    image: string;
    quantity: number;
  }[];
  addItem: (id: string) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
  subtotal: number;
};

const CART_STORAGE_KEY = "flex-cart";

const CartContext = createContext<CartContextType | null>(null);

const catalog = [
  ...productFamilies.flatMap((family) =>
    family.variants.map((variant) => ({
      id: variant.id,
      name: `FLEX ${variant.name}`,
      price: variant.price,
      image: variant.image,
    }))
  ),
  ...bundles.map((bundle) => ({
    id: bundle.id,
    name: bundle.fullName,
    price: bundle.price,
    image: bundle.image,
  })),
];

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [hasLoadedCart, setHasLoadedCart] = useState(false);

  useEffect(() => {
    const savedCart = window.localStorage.getItem(CART_STORAGE_KEY);

    if (savedCart) {
      setItems(JSON.parse(savedCart));
    }

    setHasLoadedCart(true);
  }, []);

  useEffect(() => {
    if (!hasLoadedCart) return;

    window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
  }, [items, hasLoadedCart]);

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

  function clearCart() {
    setItems([]);
    window.localStorage.removeItem(CART_STORAGE_KEY);
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
        .filter(Boolean) as {
        id: string;
        name: string;
        price: number;
        image: string;
        quantity: number;
      }[],
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
        clearCart,
        subtotal,
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
