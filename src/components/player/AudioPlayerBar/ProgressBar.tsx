"use client";
import { formatTime } from "./utils";

interface ProgressBarProps {
  currentTime: number;
  duration: number;
  onProgressChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isMobile?: boolean;
}

export default function ProgressBar({
  currentTime,
  duration,
  onProgressChange,
  isMobile = false,
}: ProgressBarProps) {
  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  if (isMobile) {
    return (
      <div className="w-full flex items-center gap-2">
        <span className="text-[#abafbb] text-xs w-12 text-right">
          {formatTime(currentTime)}
        </span>
        <input
          type="range"
          min="0"
          max={duration || 100}
          value={currentTime}
          onChange={onProgressChange}
          onClick={handleClick}
          className="flex-1 h-1 bg-[#2a2d36] rounded-lg appearance-none cursor-pointer accent-white"
          aria-label="Tiến độ phát"
        />
        <span className="text-[#abafbb] text-xs w-12">
          {formatTime(duration)}
        </span>
      </div>
    );
  }

  return (
    <div className="w-full flex items-center gap-2">
      <span className="text-[#abafbb] text-xs w-10 text-right">
        {formatTime(currentTime)}
      </span>
      <input
        type="range"
        min="0"
        max={duration || 100}
        value={currentTime}
        onChange={onProgressChange}
        onClick={handleClick}
        className="flex-1 h-1 bg-[#2a2d36] rounded-lg appearance-none cursor-pointer accent-white"
        aria-label="Tiến độ phát"
      />
      <span className="text-[#abafbb] text-xs w-10">
        {formatTime(duration)}
      </span>
    </div>
  );
}
