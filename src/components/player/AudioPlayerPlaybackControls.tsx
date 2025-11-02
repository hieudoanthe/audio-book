"use client";
import {
  SkipPreviousIcon,
  SkipNextIcon,
  PlayIcon,
  PauseIcon,
} from "../../constants/playerIcons";

interface AudioPlayerPlaybackControlsProps {
  isPlaying: boolean;
  onPlayPause: () => void;
}

export default function AudioPlayerPlaybackControls({
  isPlaying,
  onPlayPause,
}: AudioPlayerPlaybackControlsProps) {
  return (
    <div className="flex items-center justify-center gap-6">
      <button
        className="text-[#abafbb] hover:text-white transition-colors"
        aria-label="Phát trước"
      >
        <SkipPreviousIcon />
      </button>
      <button
        onClick={onPlayPause}
        className="w-16 h-16 rounded-full bg-orange-500 hover:bg-orange-600 flex items-center justify-center text-white transition-colors"
        aria-label={isPlaying ? "Tạm dừng" : "Phát"}
      >
        {isPlaying ? <PauseIcon /> : <PlayIcon />}
      </button>
      <button
        className="text-[#abafbb] hover:text-white transition-colors"
        aria-label="Phát tiếp"
      >
        <SkipNextIcon />
      </button>
    </div>
  );
}
