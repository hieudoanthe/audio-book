"use client";
import { useCallback } from "react";
import type { FavoriteItem } from "@/types/interfaces/library";
import { useLocalStorage } from "./useLocalStorage";

const FAVORITES_STORAGE_KEY = "audio-book-favorites";

export function useFavorites() {
  const [favorites, setFavorites] = useLocalStorage<FavoriteItem[]>(
    FAVORITES_STORAGE_KEY,
    []
  );

  const addFavorite = useCallback((item: FavoriteItem) => {
    setFavorites((prev) => {
      // Check if already exists
      const exists = prev.some((fav) => fav.bookId === item.bookId);
      if (exists) {
        return prev; // Don't add duplicate
      }
      return [...prev, item];
    });
  }, [setFavorites]);

  const removeFavorite = useCallback((bookId: string) => {
    setFavorites((prev) => prev.filter((fav) => fav.bookId !== bookId));
  }, [setFavorites]);

  const isFavorite = useCallback(
    (bookId: string) => {
      return favorites.some((fav) => fav.bookId === bookId);
    },
    [favorites]
  );

  const clearAllFavorites = useCallback(() => {
    setFavorites([]);
  }, [setFavorites]);

  return {
    favorites,
    addFavorite,
    removeFavorite,
    isFavorite,
    clearAllFavorites,
  };
}

