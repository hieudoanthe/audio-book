"use client";
import { useState, useEffect, useRef } from "react";
import type { BookDetail, Chapter } from "@/types/interfaces/book";

interface PreviewPlayerProps {
  book: BookDetail;
  chapter: Chapter;
  onClose: () => void;
}

export default function PreviewPlayer({
  book,
  chapter,
  onClose,
}: PreviewPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
    };

    const handleDurationChange = () => {
      setDuration(audio.duration);
    };

    const handleEnded = () => {
      setIsPlaying(false);
      setCurrentTime(0);
    };

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    audio.addEventListener("timeupdate", handleTimeUpdate);
    audio.addEventListener("loadedmetadata", handleDurationChange);
    audio.addEventListener("ended", handleEnded);
    audio.addEventListener("play", handlePlay);
    audio.addEventListener("pause", handlePause);

    return () => {
      audio.removeEventListener("timeupdate", handleTimeUpdate);
      audio.removeEventListener("loadedmetadata", handleDurationChange);
      audio.removeEventListener("ended", handleEnded);
      audio.removeEventListener("play", handlePlay);
      audio.removeEventListener("pause", handlePause);
    };
  }, []);

  useEffect(() => {
    if (isPlaying && audioRef.current) {
      audioRef.current.play();
    } else if (!isPlaying && audioRef.current) {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const formatTime = (seconds: number) => {
    if (isNaN(seconds)) return "0:00";
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = parseFloat(e.target.value);
    setCurrentTime(time);
    if (audioRef.current) {
      audioRef.current.currentTime = time;
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#1e2128] border-t border-gray-800 z-50 p-4 sm:p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4">
          {/* Close button */}
          <button
            onClick={onClose}
            className="shrink-0 w-8 h-8 rounded-full bg-[#282b32] hover:bg-[#373945] flex items-center justify-center text-white transition-colors"
            aria-label="Đóng"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>

          {/* Album cover */}
          <div className="shrink-0 w-12 h-12 sm:w-16 sm:h-16 rounded-lg overflow-hidden bg-[#2a2d36]">
            <img
              src={book.imageUrl}
              alt={book.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Track info */}
          <div className="flex-1 min-w-0">
            <p className="text-white text-sm sm:text-base font-semibold truncate">
              {chapter.title}
            </p>
            <p className="text-[#abafbb] text-xs sm:text-sm truncate">
              {book.title}
            </p>
          </div>

          {/* Play/Pause button */}
          <button
            onClick={togglePlay}
            className="shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-orange-500 hover:bg-orange-600 flex items-center justify-center text-white transition-colors"
            aria-label={isPlaying ? "Tạm dừng" : "Phát"}
          >
            {isPlaying ? (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <rect x="6" y="4" width="4" height="16" />
                <rect x="14" y="4" width="4" height="16" />
              </svg>
            ) : (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <polygon points="5 3 19 12 5 21 5 3" />
              </svg>
            )}
          </button>
        </div>

        {/* Progress bar */}
        <div className="mt-4">
          <label htmlFor="preview-progress" className="sr-only">
            Tiến độ phát
          </label>
          <input
            id="preview-progress"
            type="range"
            min="0"
            max={duration || 0}
            value={currentTime}
            onChange={handleProgressChange}
            className="w-full h-1 bg-[#282b32] rounded-lg appearance-none cursor-pointer slider"
            style={{
              background: `linear-gradient(to right, #f68c2e 0%, #f68c2e ${
                duration ? (currentTime / duration) * 100 : 0
              }%, #282b32 ${
                duration ? (currentTime / duration) * 100 : 0
              }%, #282b32 100%)`,
            }}
            aria-label="Tiến độ phát"
          />
          <div className="flex justify-between items-center mt-2 text-xs sm:text-sm text-[#abafbb]">
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(duration)}</span>
          </div>
        </div>
      </div>

      {/* Audio element */}
      <audio
        ref={audioRef}
        src={chapter.audioUrl || "/test-audio.mp3"}
        preload="metadata"
      />
    </div>
  );
}
