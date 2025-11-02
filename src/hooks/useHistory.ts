"use client";
import { useCallback } from "react";
import type { HistoryItem } from "@/types/interfaces/library";
import { useLocalStorage } from "./useLocalStorage";

const HISTORY_STORAGE_KEY = "audio-book-history";
const MAX_HISTORY_ITEMS = 100; // Limit history to last 100 items

export function useHistory() {
  const [history, setHistory] = useLocalStorage<HistoryItem[]>(
    HISTORY_STORAGE_KEY,
    []
  );

  const addHistory = useCallback((item: HistoryItem) => {
    setHistory((prev) => {
      // Remove existing item with same bookId if exists (to update position)
      const filtered = prev.filter((hist) => hist.bookId !== item.bookId);
      // Add new item at the beginning (most recent first)
      // Limit to MAX_HISTORY_ITEMS
      return [item, ...filtered].slice(0, MAX_HISTORY_ITEMS);
    });
  }, [setHistory]);

  const removeHistory = useCallback((bookId: string) => {
    setHistory((prev) => prev.filter((hist) => hist.bookId !== bookId));
  }, [setHistory]);

  const clearAllHistory = useCallback(() => {
    setHistory([]);
  }, [setHistory]);

  return {
    history,
    addHistory,
    removeHistory,
    clearAllHistory,
  };
}

