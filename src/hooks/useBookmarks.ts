"use client";
import { useCallback } from "react";
import type { BookmarkItem } from "@/types/interfaces/library";
import { useLocalStorage } from "./useLocalStorage";

const BOOKMARKS_STORAGE_KEY = "audio-book-bookmarks";

export function useBookmarks() {
  const [bookmarks, setBookmarks] = useLocalStorage<BookmarkItem[]>(
    BOOKMARKS_STORAGE_KEY,
    []
  );

  const addBookmark = useCallback((item: BookmarkItem) => {
    setBookmarks((prev) => {
      // Check if already exists
      const exists = prev.some((bookmark) => bookmark.bookId === item.bookId);
      if (exists) {
        return prev; // Don't add duplicate
      }
      return [...prev, item];
    });
  }, [setBookmarks]);

  const removeBookmark = useCallback((bookId: string) => {
    setBookmarks((prev) => prev.filter((bookmark) => bookmark.bookId !== bookId));
  }, [setBookmarks]);

  const isBookmarked = useCallback(
    (bookId: string) => {
      return bookmarks.some((bookmark) => bookmark.bookId === bookId);
    },
    [bookmarks]
  );

  const clearAllBookmarks = useCallback(() => {
    setBookmarks([]);
  }, [setBookmarks]);

  return {
    bookmarks,
    addBookmark,
    removeBookmark,
    isBookmarked,
    clearAllBookmarks,
  };
}

