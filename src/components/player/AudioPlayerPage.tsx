"use client";
import { useEffect, useState } from "react";
import { useAudioPlayer } from "@/contexts/AudioPlayerContext";
import { useRouter } from "next/navigation";
import AudioPlayerHeader from "./AudioPlayerHeader";
import AudioPlayerCover from "./AudioPlayerCover";
import AudioPlayerInfo from "./AudioPlayerInfo";
import AudioPlayerLoading from "./AudioPlayerLoading";

export default function AudioPlayerPage() {
  const { currentBook, currentChapter } = useAudioPlayer();

  const router = useRouter();
  const [isChecking, setIsChecking] = useState(true);

  // Wait a bit for state to load from localStorage before redirecting
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsChecking(false);
      if (!currentBook || !currentChapter) {
        router.replace("/");
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [currentBook, currentChapter, router]);

  // Show loading state while checking
  if (isChecking || !currentBook || !currentChapter) {
    return <AudioPlayerLoading />;
  }

  return (
    <div className="fixed inset-0 bg-linear-to-b from-[#1e2128] via-[#2a2d36] to-[#1e2128] z-50 flex flex-col pb-20">
      <div
        className="fixed inset-0 bg-cover bg-center bg-no-repeat pointer-events-none"
        style={{
          backgroundImage: `url(${currentBook.imageUrl})`,
          filter: "blur(50px) brightness(0.3)",
          transform: "scale(1.1)",
          zIndex: 0,
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col h-full overflow-hidden">
        <AudioPlayerHeader chapterTitle={currentChapter.title} />

        {/* Main Content - Only show Cover and Info on all screens */}
        <div className="flex-1 flex items-center justify-center overflow-y-auto thin-scrollbar p-6 lg:p-12 pb-32 md:pb-20">
          <div className="flex flex-col lg:flex-row items-start gap-8 w-full max-w-7xl">
            <AudioPlayerCover book={currentBook} />
            <AudioPlayerInfo book={currentBook} chapter={currentChapter} />
          </div>
        </div>
      </div>
    </div>
  );
}
