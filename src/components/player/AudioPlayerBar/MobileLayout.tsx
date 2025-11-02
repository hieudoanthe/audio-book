"use client";
import AlbumInfo from "./AlbumInfo";
import PlaybackControls from "./PlaybackControls";
import ProgressBar from "./ProgressBar";
import VolumeControl from "./VolumeControl";
import AudioListDropdown from "./AudioListDropdown";
import type { BookDetail, Chapter } from "@/types/interfaces/book";

interface MobileLayoutProps {
  book: BookDetail;
  chapter: Chapter;
  isPlaying: boolean;
  currentTime: number;
  duration: number;
  volume: number;
  setIsPlaying: (playing: boolean) => void;
  setCurrentTime: (time: number) => void;
  setVolume: (volume: number) => void;
}

export default function MobileLayout({
  book,
  chapter,
  isPlaying,
  currentTime,
  duration,
  volume,
  setIsPlaying,
  setCurrentTime,
  setVolume,
}: MobileLayoutProps) {
  const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = parseFloat(e.target.value);
    setCurrentTime(newTime);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
  };

  return (
    <div className="md:hidden flex flex-col py-2 px-4 space-y-3">
      <PlaybackControls
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        isMobile={true}
      />

      <ProgressBar
        currentTime={currentTime}
        duration={duration}
        onProgressChange={handleProgressChange}
        isMobile={true}
      />

      <AlbumInfo book={book} chapter={chapter} />

      <div className="flex items-center justify-between gap-4">
        <VolumeControl
          volume={volume}
          onVolumeChange={handleVolumeChange}
          isMobile={true}
        />
        <div className="shrink-0">
          <AudioListDropdown />
        </div>
      </div>
    </div>
  );
}
