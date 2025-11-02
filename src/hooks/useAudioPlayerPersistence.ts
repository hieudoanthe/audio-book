"use client";
import { useEffect, useState } from "react";
import type { BookDetail, Chapter } from "@/types/interfaces/book";
import type {
  AudioPlayerState,
  SavedPlayerState,
} from "@/types/interfaces/audioPlayer";
import type {
  UseAudioPlayerPersistenceProps,
  UseAudioPlayerPersistenceReturn,
} from "@/types/interfaces/hooks";
import { STORAGE_KEY } from "@/types/interfaces/audioPlayer";
import { getBookDetailById } from "@/mocks/bookDetails";
import { useLocalStorageValue } from "@/hooks/useLocalStorage";

/**
 * Helper function để serialize state thành SavedPlayerState
 */
function serializeState(state: AudioPlayerState): SavedPlayerState | null {
  if (!state.currentBook || !state.currentChapter) return null;

  return {
    bookId: state.currentBook.id,
    chapterId: state.currentChapter.id,
    isPlaying: state.isPlaying,
    currentTime: state.currentTime,
    duration: state.duration,
    volume: state.volume,
    playbackRate: state.playbackRate,
  };
}

/**
 * Custom hook
 */
export function useAudioPlayerPersistence({
  state,
  onRestore,
}: UseAudioPlayerPersistenceProps): UseAudioPlayerPersistenceReturn {
  // Load saved state từ localStorage
  const savedState = useLocalStorageValue<SavedPlayerState | null>(
    STORAGE_KEY,
    null
  );

  const [isHydrated, setIsHydrated] = useState(false);

  // Restore state từ savedState sau khi load xong
  useEffect(() => {
    if (!savedState || !savedState.bookId || !savedState.chapterId) {
      setIsHydrated(true);
      return;
    }

    // Try to restore book and chapter from all categories
    const categories: Array<
      "books" | "stories" | "podcast" | "summaries" | "kids"
    > = ["books", "stories", "podcast", "summaries", "kids"];

    let restoredBook: BookDetail | null = null;
    let restoredChapter: Chapter | null = null;

    for (const category of categories) {
      const book = getBookDetailById(savedState.bookId, category);
      if (book && book.chapters) {
        const chapter = book.chapters.find(
          (ch) => ch.id === savedState.chapterId
        );
        if (chapter) {
          restoredBook = book;
          restoredChapter = chapter;
          break;
        }
      }
    }

    if (restoredBook && restoredChapter) {
      onRestore({
        currentBook: restoredBook,
        currentChapter: restoredChapter,
        isPlaying: false,
        currentTime: savedState.currentTime ?? 0,
        duration: savedState.duration ?? 0,
        volume: savedState.volume ?? 1,
        playbackRate: savedState.playbackRate ?? 1,
      });
    }
    setIsHydrated(true);
  }, [savedState, onRestore]);

  // Serialize và sync state vào localStorage
  useEffect(() => {
    if (!isHydrated || typeof window === "undefined") return;

    const serialized = serializeState(state);

    try {
      if (serialized === null) {
        window.localStorage.removeItem(STORAGE_KEY);
      } else {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(serialized));
      }
    } catch (error) {
      console.error(
        "Failed to save audio player state to localStorage:",
        error
      );
    }
  }, [
    isHydrated,
    state.currentBook?.id,
    state.currentChapter?.id,
    state.isPlaying,
    state.currentTime,
    state.duration,
    state.volume,
    state.playbackRate,
  ]);

  return { isHydrated };
}
