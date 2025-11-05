"use client";
import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAudioPlayer } from "@/contexts/AudioPlayerContext";
import type { ProductActionButtonsProps } from "@/types/interfaces/content";

export default function ProductActionButtons({
  book,
}: ProductActionButtonsProps) {
  const router = useRouter();
  const { playChapter } = useAudioPlayer();
  const [isPreviewPlaying, setIsPreviewPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleEnded = () => {
      setIsPreviewPlaying(false);
    };

    const handlePause = () => {
      setIsPreviewPlaying(false);
    };

    const handlePlay = () => {
      setIsPreviewPlaying(true);
    };

    audio.addEventListener("ended", handleEnded);
    audio.addEventListener("pause", handlePause);
    audio.addEventListener("play", handlePlay);

    return () => {
      audio.removeEventListener("ended", handleEnded);
      audio.removeEventListener("pause", handlePause);
      audio.removeEventListener("play", handlePlay);
    };
  }, []);

  const handlePlayFirstChapter = () => {
    if (!book || !book.chapters || book.chapters.length === 0) return;

    const firstChapter = book.chapters[0];
    playChapter(book, firstChapter);
    router.push("/player");
  };

  const handlePreviewClick = () => {
    if (!book || !book.chapters || book.chapters.length === 0) return;

    const audio = audioRef.current;
    if (!audio) return;

    if (isPreviewPlaying) {
      // Đang phát, dừng lại
      audio.pause();
      setIsPreviewPlaying(false);
    } else {
      // Chưa phát, phát luôn
      audio.play().catch((error) => {
        console.error("Error playing preview:", error);
      });
    }
  };

  return (
    <div className="space-y-3">
      <button
        onClick={handlePlayFirstChapter}
        className="w-full px-6 py-3 rounded-lg bg-[#7549da] hover:bg-[#6340b8] text-white font-semibold transition-colors flex items-center justify-center gap-2"
      >
        <span>
          <svg
            width="24"
            height="24"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
          >
            <path
              fill="currentColor"
              d="M2.5 5a.5.5 0 0 0-.5.5v4c-.01.676 1.01.676 1 0V8h.5c.676.01.676-1.01 0-1H3V6h.5c.676.01.676-1.01 0-1zm3 0a.5.5 0 0 0-.5.5v4c-.01.676 1.01.676 1 0V8h.07l.996 1.748c.319.62 1.241.093.868-.496L7.13 7.84c.152-.08.292-.18.41-.299c.267-.266.46-.624.46-1.041s-.193-.775-.459-1.041S6.917 5 6.5 5zm4 0a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 .5.5h1c.676.01.676-1.01 0-1H10V8h.5c.676.01.676-1.01 0-1H10V6h.5c.676.01.676-1.01 0-1zm3 0a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 .5.5h1c.676.01.676-1.01 0-1H13V8h.5c.676.01.676-1.01 0-1H13V6h.5c.676.01.676-1.01 0-1zM6 6h.5c.293 0 .5.215.5.5s-.2.5-.5.5H6z"
            />
          </svg>
        </span>
        <span>Nghe chương đầu miễn phí</span>
      </button>
      <button
        onClick={handlePreviewClick}
        className={`w-full px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2 ${
          isPreviewPlaying
            ? "bg-red-600 hover:bg-red-700 text-white"
            : "bg-[#f68c2e] hover:bg-[#d77a1f] text-white"
        }`}
      >
        <span>
          {isPreviewPlaying ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <rect x="6" y="4" width="4" height="16" />
              <rect x="14" y="4" width="4" height="16" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M23 17.3v3.5c0 .6-.6 1.2-1.3 1.2h-5.5c-.6 0-1.2-.6-1.2-1.3v-3.5c0-.6.6-1.2 1.2-1.2v-2.5c0-1.4 1.4-2.5 2.8-2.5s2.8 1.1 2.8 2.5v.5h-1.3v-.5c0-.8-.7-1.3-1.5-1.3s-1.5.5-1.5 1.3V16h4.3c.6 0 1.2.6 1.2 1.3M9 8v8l5-4l-5-4m4 11v2H4a2 2 0 0 1-2-2V5c0-1.11.89-2 2-2h14a2 2 0 0 1 2 2v4.1L19 9c-2.76 0-5 2.24-5 5v.76c-.61.55-1 1.35-1 2.24v2Z"
              />
            </svg>
          )}
        </span>
        <span>{isPreviewPlaying ? "Dừng phát" : "Nghe thử"}</span>
      </button>

      {/* Hidden audio element */}
      {book && book.chapters && book.chapters.length > 0 && (
        <audio
          ref={audioRef}
          src={book.chapters[0].audioUrl || "/test-audio.mp3"}
          preload="metadata"
          style={{ display: "none" }}
        />
      )}
    </div>
  );
}
