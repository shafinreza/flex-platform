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

type StoreProduct = {
  id: string;
  name: string;
  price: number;
  image: string;
  jarCount: number;
};

type CartContextType = {
  items: CartItem[];
  detailedItems: DetailedCartItem[];
  addItem: (id: string) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  setJarQuantity: (id: string, jarQuantity: number) => void;
  clearCart: () => void;
  subtotal: number;
  checkout: () => Promise<void>;
};

const CART_STORAGE_KEY = "flex-cart";

const JAR_PACKS = [
  { jars: 1, id: "natural-smooth-510g" },
  { jars: 2, id: "natural-smooth-2-pack" },
  { jars: 3, id: "natural-smooth-3-pack" },
  { jars: 6, id: "natural-smooth-6-pack" },
];

const fallbackCatalog: StoreProduct[] = catalog.map((item) => ({
  id: item.id,
  name: item.name,
  price: item.price,
  image: item.image,
  jarCount: item.jarCount,
}));

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

function getPackByJarCount(jarQuantity: number) {
  if (jarQuantity <= 1) return JAR_PACKS[0];
  if (jarQuantity === 2) return JAR_PACKS[1];
  if (jarQuantity === 3) return JAR_PACKS[2];
  return JAR_PACKS[3];
}

function isFlexJarProduct(id: string) {
  return JAR_PACKS.some((pack) => pack.id === id);
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>(getInitialCart);
  const [products, setProducts] = useState<StoreProduct[]>(fallbackCatalog);

  useEffect(() => {
    window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  useEffect(() => {
    let isMounted = true;

    async function loadProducts() {
      try {
        const response = await fetch("/api/products");
        const data = await response.json();

        if (isMounted && Array.isArray(data.products)) {
          setProducts(data.products);
        }
      } catch {
        setProducts(fallbackCatalog);
      }
    }

    loadProducts();

    return () => {
      isMounted = false;
    };
  }, []);

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

  function setJarQuantity(id: string, jarQuantity: number) {
    if (!isFlexJarProduct(id)) {
      updateQuantity(id, jarQuantity);
      return;
    }

    if (jarQuantity <= 0) {
      removeItem(id);
      return;
    }

    const pack = getPackByJarCount(jarQuantity);

    setItems((current) => {
      const withoutCurrentFlexPacks = current.filter(
        (item) => !isFlexJarProduct(item.id)
      );

      return [...withoutCurrentFlexPacks, { id: pack.id, quantity: 1 }];
    });
  }

  function updateQuantity(id: string, quantity: number) {
    if (isFlexJarProduct(id)) {
      setJarQuantity(id, quantity);
      return;
    }

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
          const product = products.find((catalogItem) => catalogItem.id === item.id);
          if (!product) return null;

          return {
            ...product,
            quantity: item.quantity,
          };
        })
        .filter(Boolean) as DetailedCartItem[],
    [items, products]
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
        setJarQuantity,
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
