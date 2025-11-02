"use client";
import { useAudioPlayer } from "@/contexts/AudioPlayerContext";

export function SkipPreviousButton() {
  const { currentBook, currentChapter, playChapter } = useAudioPlayer();

  const handleSkipPrevious = (e: React.MouseEvent) => {
    e.stopPropagation();
    
    if (!currentBook || !currentChapter || !currentBook.chapters) return;

    const chapters = currentBook.chapters;
    const currentIndex = chapters.findIndex(
      (ch) => ch.id === currentChapter.id
    );

    if (currentIndex > 0) {
      const previousChapter = chapters[currentIndex - 1];
      playChapter(currentBook, previousChapter);
    }
  };

  if (!currentBook || !currentChapter || !currentBook.chapters) {
    return null;
  }

  const chapters = currentBook.chapters;
  const currentIndex = chapters.findIndex(
    (ch) => ch.id === currentChapter.id
  );
  const isDisabled = currentIndex === 0;

  return (
    <button
      className={`transition-colors ${
        isDisabled
          ? "text-[#5a5d64] cursor-not-allowed"
          : "text-[#abafbb] hover:text-white"
      }`}
      aria-label="Phát trước"
      onClick={handleSkipPrevious}
      disabled={isDisabled}
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M6 6h2v12H6zm3.5 6l8.5-6v12z" />
      </svg>
    </button>
  );
}

export function SkipNextButton() {
  const { currentBook, currentChapter, playChapter } = useAudioPlayer();

  const handleSkipNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    
    if (!currentBook || !currentChapter || !currentBook.chapters) return;

    const chapters = currentBook.chapters;
    const currentIndex = chapters.findIndex(
      (ch) => ch.id === currentChapter.id
    );

    if (currentIndex < chapters.length - 1) {
      const nextChapter = chapters[currentIndex + 1];
      playChapter(currentBook, nextChapter);
    }
  };

  if (!currentBook || !currentChapter || !currentBook.chapters) {
    return null;
  }

  const chapters = currentBook.chapters;
  const currentIndex = chapters.findIndex(
    (ch) => ch.id === currentChapter.id
  );
  const isDisabled = currentIndex === chapters.length - 1;

  return (
    <button
      className={`transition-colors ${
        isDisabled
          ? "text-[#5a5d64] cursor-not-allowed"
          : "text-[#abafbb] hover:text-white"
      }`}
      aria-label="Phát tiếp"
      onClick={handleSkipNext}
      disabled={isDisabled}
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M6 6h2v12H6zm11 6l-8.5 6V6z" />
      </svg>
    </button>
  );
}

