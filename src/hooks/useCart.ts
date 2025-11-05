"use client";
import { useState, useEffect } from "react";
import type { BookDetail } from "@/types/interfaces/book";

export interface CartItem {
  bookId: string;
  bookTitle: string;
  bookImageUrl: string;
  author: string;
  duration?: string;
  price: number;
  addedAt: number;
}

const STORAGE_KEY = "audio_book_cart";

export function useCart() {
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

  const addToCart = (book: BookDetail, price: number = 0) => {
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
  };

  const removeFromCart = (bookId: string) => {
    setCart((prev) => {
      const newCart = prev.filter((item) => item.bookId !== bookId);
      // Save to localStorage immediately
      if (typeof window !== "undefined") {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(newCart));
      }
      return newCart;
    });
  };

  const clearCart = () => {
    setCart([]);
    if (typeof window !== "undefined") {
      localStorage.removeItem(STORAGE_KEY);
    }
  };

  const removeSelected = (bookIds: string[]) => {
    setCart((prev) => {
      const newCart = prev.filter((item) => !bookIds.includes(item.bookId));
      // Save to localStorage immediately
      if (typeof window !== "undefined") {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(newCart));
      }
      return newCart;
    });
  };

  const getCartCount = () => {
    return cart.length;
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price, 0);
  };

  const isInCart = (bookId: string) => {
    return cart.some((item) => item.bookId === bookId);
  };

  return {
    cart,
    addToCart,
    removeFromCart,
    clearCart,
    removeSelected,
    getCartCount,
    getTotalPrice,
    isInCart,
  };
}
