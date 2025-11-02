import type { BookDetail, Chapter } from "./book";

export interface AudioPlayerState {
  currentBook: BookDetail | null;
  currentChapter: Chapter | null;
  isPlaying: boolean;
  currentTime: number;
  duration: number;
  volume: number;
  playbackRate: number;
}

export interface AudioPlayerContextType extends AudioPlayerState {
  setCurrentBook: (book: BookDetail | null) => void;
  setCurrentChapter: (chapter: Chapter | null) => void;
  setIsPlaying: (isPlaying: boolean) => void;
  setCurrentTime: (time: number) => void;
  setDuration: (duration: number) => void;
  setVolume: (volume: number) => void;
  setPlaybackRate: (rate: number) => void;
  playChapter: (book: BookDetail, chapter: Chapter) => void;
}

export interface SavedPlayerState {
  bookId: string;
  chapterId: string;
  isPlaying: boolean;
  currentTime: number;
  duration: number;
  volume: number;
  playbackRate: number;
}

export const STORAGE_KEY = "audio_player_state";
