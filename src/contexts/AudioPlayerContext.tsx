"use client";
import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
  useCallback,
} from "react";
import type { BookDetail, Chapter } from "@/types/interfaces/book";
import type {
  AudioPlayerState,
  AudioPlayerContextType,
} from "@/types/interfaces/audioPlayer";
import { useAudioElement } from "@/hooks/useAudioElement";
import { useAudioPlayerPersistence } from "@/hooks/useAudioPlayerPersistence";
import { useHistory } from "@/hooks/useHistory";

const AudioPlayerContext = createContext<AudioPlayerContextType | undefined>(
  undefined
);

export function AudioPlayerProvider({ children }: { children: ReactNode }) {
  // Initialize with default state to avoid hydration mismatch
  const [state, setState] = useState<AudioPlayerState>({
    currentBook: null,
    currentChapter: null,
    isPlaying: false,
    currentTime: 0,
    duration: 0,
    volume: 1,
    playbackRate: 1,
  });

  // History hook for tracking listening history
  const { addHistory } = useHistory();

  // Restore state from persistence
  const { isHydrated } = useAudioPlayerPersistence({
    state,
    onRestore: useCallback((restoredState: AudioPlayerState) => {
      setState(restoredState);
    }, []),
  });

  // Audio element handlers
  const handleTimeUpdate = useCallback((time: number) => {
    setState((prev) => ({ ...prev, currentTime: time }));
  }, []);

  const handleDurationChange = useCallback((duration: number) => {
    setState((prev) => ({ ...prev, duration }));
  }, []);

  const handlePlay = useCallback(() => {
    setState((prev) => ({ ...prev, isPlaying: true }));
  }, []);

  const handlePause = useCallback(() => {
    setState((prev) => ({ ...prev, isPlaying: false }));
  }, []);

  const handleEnded = useCallback(() => {
    setState((prev) => ({ ...prev, isPlaying: false, currentTime: 0 }));
  }, []);

  const handleError = useCallback((error: Error) => {
    console.error("Audio error:", error);
    setState((prev) => ({ ...prev, isPlaying: false }));
  }, []);

  // Use audio element hook
  const { audioRef, seek } = useAudioElement({
    isPlaying: state.isPlaying,
    currentTime: state.currentTime,
    duration: state.duration,
    volume: state.volume,
    playbackRate: state.playbackRate,
    onTimeUpdate: handleTimeUpdate,
    onDurationChange: handleDurationChange,
    onPlay: handlePlay,
    onPause: handlePause,
    onEnded: handleEnded,
    onError: handleError,
  });

  // Restore currentTime when restoring from saved state
  useEffect(() => {
    if (!audioRef.current || !isHydrated || !state.currentChapter) return;

    // Only seek if currentTime is significantly different (e.g., when restoring from localStorage)
    if (Math.abs(audioRef.current.currentTime - state.currentTime) > 1) {
      seek(state.currentTime);
    }
  }, [isHydrated, audioRef, state.currentChapter, state.currentTime, seek]);

  // Setter functions
  const setCurrentBook = useCallback((book: BookDetail | null) => {
    setState((prev) => ({ ...prev, currentBook: book }));
  }, []);

  const setCurrentChapter = useCallback((chapter: Chapter | null) => {
    setState((prev) => ({ ...prev, currentChapter: chapter }));
  }, []);

  const setIsPlaying = useCallback((isPlaying: boolean) => {
    setState((prev) => ({ ...prev, isPlaying }));
  }, []);

  const setCurrentTime = useCallback(
    (time: number) => {
      seek(time);
      setState((prev) => ({ ...prev, currentTime: time }));
    },
    [seek]
  );

  const setDuration = useCallback((duration: number) => {
    setState((prev) => ({ ...prev, duration }));
  }, []);

  const setVolume = useCallback((volume: number) => {
    setState((prev) => ({ ...prev, volume }));
  }, []);

  const setPlaybackRate = useCallback((rate: number) => {
    setState((prev) => ({ ...prev, playbackRate: rate }));
  }, []);

  const playChapter = useCallback(
    (book: BookDetail, chapter: Chapter) => {
      seek(0);
      setState((prev) => ({
        ...prev,
        currentBook: book,
        currentChapter: chapter,
        isPlaying: true,
        currentTime: 0,
      }));

      // Add to listening history
      addHistory({
        bookId: book.id,
        bookTitle: book.title,
        bookImageUrl: book.imageUrl,
        author: book.author || "Đang cập nhật",
        duration: book.duration,
        listenedAt: Date.now(),
      });
    },
    [seek, addHistory]
  );

  return (
    <AudioPlayerContext.Provider
      value={{
        ...state,
        setCurrentBook,
        setCurrentChapter,
        setIsPlaying,
        setCurrentTime,
        setDuration,
        setVolume,
        setPlaybackRate,
        playChapter,
      }}
    >
      {children}
    </AudioPlayerContext.Provider>
  );
}

export function useAudioPlayer() {
  const context = useContext(AudioPlayerContext);
  if (context === undefined) {
    throw new Error("useAudioPlayer must be used within AudioPlayerProvider");
  }
  return context;
}
