"use client";
import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
  useCallback,
} from "react";
import type { BookDetail } from "@/types/interfaces/book";

const STORAGE_KEY = "audio_book_cart";

export interface CartItem {
  bookId: string;
  bookTitle: string;
  bookImageUrl: string;
  author: string;
  duration?: string;
  price: number;
  addedAt: number;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (book: BookDetail, price?: number) => void;
  removeFromCart: (bookId: string) => void;
  clearCart: () => void;
  removeSelected: (bookIds: string[]) => void;
  getCartCount: () => number;
  getTotalPrice: () => number;
  isInCart: (bookId: string) => boolean;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);

  // Load cart from localStorage on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        try {
          setCart(JSON.parse(stored));
        } catch (error) {
          console.error("Error loading cart from localStorage:", error);
        }
      }
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
    }
  }, [cart]);

  const addToCart = useCallback((book: BookDetail, price: number = 0) => {
    const cartItem: CartItem = {
      bookId: book.id,
      bookTitle: book.title,
      bookImageUrl: book.imageUrl,
      author: book.author || "Đang cập nhật",
      duration: book.duration,
      price,
      addedAt: Date.now(),
    };

    setCart((prev) => {
      // Check if item already exists
      const exists = prev.find((item) => item.bookId === book.id);
      if (exists) {
        return prev; // Don't add duplicate
      }
      const newCart = [...prev, cartItem];

      // Save to localStorage immediately
      if (typeof window !== "undefined") {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(newCart));
      }

      return newCart;
    });
  }, []);

  const removeFromCart = useCallback((bookId: string) => {
    setCart((prev) => {
      const newCart = prev.filter((item) => item.bookId !== bookId);
      // Save to localStorage immediately
      if (typeof window !== "undefined") {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(newCart));
      }
      return newCart;
    });
  }, []);

  const clearCart = useCallback(() => {
    setCart([]);
    if (typeof window !== "undefined") {
      localStorage.removeItem(STORAGE_KEY);
    }
  }, []);

  const removeSelected = useCallback((bookIds: string[]) => {
    setCart((prev) => {
      const newCart = prev.filter((item) => !bookIds.includes(item.bookId));
      // Save to localStorage immediately
      if (typeof window !== "undefined") {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(newCart));
      }
      return newCart;
    });
  }, []);

  const getCartCount = useCallback(() => {
    return cart.length;
  }, [cart]);

  const getTotalPrice = useCallback(() => {
    return cart.reduce((total, item) => total + item.price, 0);
  }, [cart]);

  const isInCart = useCallback(
    (bookId: string) => {
      return cart.some((item) => item.bookId === bookId);
    },
    [cart]
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        removeSelected,
        getCartCount,
        getTotalPrice,
        isInCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
