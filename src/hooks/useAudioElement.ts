"use client";
import { useEffect, useRef } from "react";
import type {
  UseAudioElementProps,
  UseAudioElementReturn,
} from "@/types/interfaces/hooks";

/**
 * Custom hook để quản lý HTMLAudioElement
 */
export function useAudioElement({
  isPlaying,
  currentTime,
  volume,
  playbackRate,
  onTimeUpdate,
  onDurationChange,
  onPlay,
  onPause,
  onEnded,
  onError,
}: UseAudioElementProps): UseAudioElementReturn {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const isSeekingRef = useRef(false);
  const audioUrl = "/test-audio.mp3";

  // Initialize audio element
  useEffect(() => {
    if (typeof window === "undefined") return;

    const audio = new Audio(audioUrl);
    audioRef.current = audio;

    // Event handlers
    const handleLoadedMetadata = () => {
      if (audio.duration) {
        onDurationChange(audio.duration);
      }
    };

    const handleTimeUpdate = () => {
      // Only update if not seeking programmatically
      if (!isSeekingRef.current && audio.currentTime !== currentTime) {
        onTimeUpdate(audio.currentTime);
      }
    };

    const handlePlay = () => {
      onPlay();
    };

    const handlePause = () => {
      onPause();
    };

    const handleEnded = () => {
      onEnded();
    };

    const handleError = () => {
      onError(new Error("Failed to load audio"));
    };

    audio.addEventListener("loadedmetadata", handleLoadedMetadata);
    audio.addEventListener("timeupdate", handleTimeUpdate);
    audio.addEventListener("play", handlePlay);
    audio.addEventListener("pause", handlePause);
    audio.addEventListener("ended", handleEnded);
    audio.addEventListener("error", handleError);

    // Set initial values
    audio.volume = volume;
    audio.playbackRate = playbackRate;

    return () => {
      audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
      audio.removeEventListener("timeupdate", handleTimeUpdate);
      audio.removeEventListener("play", handlePlay);
      audio.removeEventListener("pause", handlePause);
      audio.removeEventListener("ended", handleEnded);
      audio.removeEventListener("error", handleError);
      audio.pause();
      audio.src = "";
      audioRef.current = null;
    };
  }, []);

  // Sync isPlaying state with audio element
  useEffect(() => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.play().catch((error) => {
        if (
          error.name === "NotAllowedError" ||
          error.name === "NotSupportedError"
        ) {
          console.warn("Audio play failed - user interaction required:", error);
          onPause(); // Set isPlaying = false
        } else {
          console.error("Error playing audio:", error);
          onError(new Error("Failed to play audio"));
        }
      });
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying, onError, onPause]);

  // Sync volume with audio element
  useEffect(() => {
    if (audioRef.current && audioRef.current.volume !== volume) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  // Sync playbackRate with audio element
  useEffect(() => {
    if (audioRef.current && audioRef.current.playbackRate !== playbackRate) {
      audioRef.current.playbackRate = playbackRate;
    }
  }, [playbackRate]);

  // Seek function
  const seek = (time: number) => {
    if (audioRef.current) {
      isSeekingRef.current = true;
      audioRef.current.currentTime = time;
      setTimeout(() => {
        isSeekingRef.current = false;
      }, 100);
    }
  };

  // Set volume function
  const setVolume = (vol: number) => {
    if (audioRef.current) {
      audioRef.current.volume = vol;
    }
  };

  // Set playback rate function
  const setPlaybackRate = (rate: number) => {
    if (audioRef.current) {
      audioRef.current.playbackRate = rate;
    }
  };

  return {
    audioRef,
    seek,
    setVolume,
    setPlaybackRate,
  };
}
