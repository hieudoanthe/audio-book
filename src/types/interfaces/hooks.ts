import type { AudioPlayerState } from "./audioPlayer";

/**
 * Props for useAudioElement hook
 */
export interface UseAudioElementProps {
  isPlaying: boolean;
  currentTime: number;
  duration: number;
  volume: number;
  playbackRate: number;
  onTimeUpdate: (time: number) => void;
  onDurationChange: (duration: number) => void;
  onPlay: () => void;
  onPause: () => void;
  onEnded: () => void;
  onError: (error: Error) => void;
}

/**
 * Return type for useAudioElement hook
 */
export interface UseAudioElementReturn {
  audioRef: React.RefObject<HTMLAudioElement | null>;
  seek: (time: number) => void;
  setVolume: (volume: number) => void;
  setPlaybackRate: (rate: number) => void;
}

/**
 * Props for useAudioPlayerPersistence hook
 */
export interface UseAudioPlayerPersistenceProps {
  state: AudioPlayerState;
  onRestore: (state: AudioPlayerState) => void;
}

/**
 * Return type for useAudioPlayerPersistence hook
 */
export interface UseAudioPlayerPersistenceReturn {
  isHydrated: boolean;
}

/**
 * Type for setValue function in useLocalStorage hook
 */
export type SetValue<T> = T | ((val: T) => T);

