"use client";
import AlbumInfo from "./AlbumInfo";
import PlaybackControls from "./PlaybackControls";
import ProgressBar from "./ProgressBar";
import VolumeControl from "./VolumeControl";
import AudioListDropdown from "./AudioListDropdown";
import type { BookDetail, Chapter } from "@/types/interfaces/book";

interface DesktopLayoutProps {
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

export default function DesktopLayout({
  book,
  chapter,
  isPlaying,
  currentTime,
  duration,
  volume,
  setIsPlaying,
  setCurrentTime,
  setVolume,
}: DesktopLayoutProps) {
  const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = parseFloat(e.target.value);
    setCurrentTime(newTime);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
  };

  return (
    <div className="hidden md:block max-w-[1650px] mx-auto px-4 py-3">
      <div className="flex items-center gap-4">
        <AlbumInfo book={book} chapter={chapter} />

        <div className="flex-1 flex flex-col items-center gap-2 min-w-0">
          <PlaybackControls
            isPlaying={isPlaying}
            setIsPlaying={setIsPlaying}
            isMobile={false}
          />
          <ProgressBar
            currentTime={currentTime}
            duration={duration}
            onProgressChange={handleProgressChange}
            isMobile={false}
          />
        </div>

        <div className="flex items-center gap-4 min-w-0 shrink-0">
          <AudioListDropdown />
          <VolumeControl
            volume={volume}
            onVolumeChange={handleVolumeChange}
            isMobile={false}
          />
        </div>
      </div>
    </div>
  );
}
