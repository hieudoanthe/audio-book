"use client";
import { useAudioPlayer } from "@/contexts/AudioPlayerContext";
import { useRouter } from "next/navigation";
import DesktopLayout from "./DesktopLayout";
import MobileLayout from "./MobileLayout";

export default function AudioPlayerBar() {
  const router = useRouter();
  const {
    currentBook,
    currentChapter,
    isPlaying,
    currentTime,
    duration,
    volume,
    setIsPlaying,
    setCurrentTime,
    setVolume,
  } = useAudioPlayer();

  // Don't render if no audio is playing
  if (!currentBook || !currentChapter) return null;

  const handleBarClick = (e: React.MouseEvent) => {
    // Chỉ điều hướng nếu không click vào các button hoặc input
    const target = e.target as HTMLElement;
    if (
      target.tagName === "BUTTON" ||
      target.tagName === "INPUT" ||
      target.closest("button") ||
      target.closest("input")
    ) {
      return;
    }
    router.push("/player");
  };

  return (
    <div
      className="fixed bottom-0 left-0 right-0 bg-[#1e2128] border-t border-gray-800 z-50 cursor-pointer"
      onClick={handleBarClick}
    >
      <DesktopLayout
        book={currentBook}
        chapter={currentChapter}
        isPlaying={isPlaying}
        currentTime={currentTime}
        duration={duration}
        volume={volume}
        setIsPlaying={setIsPlaying}
        setCurrentTime={setCurrentTime}
        setVolume={setVolume}
      />

      <MobileLayout
        book={currentBook}
        chapter={currentChapter}
        isPlaying={isPlaying}
        currentTime={currentTime}
        duration={duration}
        volume={volume}
        setIsPlaying={setIsPlaying}
        setCurrentTime={setCurrentTime}
        setVolume={setVolume}
      />
    </div>
  );
}
