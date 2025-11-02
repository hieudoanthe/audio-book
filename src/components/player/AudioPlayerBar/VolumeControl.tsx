"use client";

interface VolumeControlProps {
  volume: number;
  onVolumeChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isMobile?: boolean;
}

export default function VolumeControl({
  volume,
  onVolumeChange,
  isMobile = false,
}: VolumeControlProps) {
  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  if (isMobile) {
    return (
      <div className="flex items-center gap-2 flex-1">
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="text-[#abafbb]"
        >
          <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
        </svg>
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={onVolumeChange}
          onClick={handleClick}
          className="flex-1 h-1 bg-[#2a2d36] rounded-lg appearance-none cursor-pointer accent-white"
          aria-label="Âm lượng"
        />
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2">
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="text-[#abafbb]"
      >
        <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
      </svg>
      <input
        type="range"
        min="0"
        max="1"
        step="0.01"
        value={volume}
        onChange={onVolumeChange}
        onClick={handleClick}
        className="w-20 h-1 bg-[#2a2d36] rounded-lg appearance-none cursor-pointer accent-white"
        aria-label="Âm lượng"
      />
    </div>
  );
}
