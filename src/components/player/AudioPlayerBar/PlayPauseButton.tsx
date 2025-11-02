"use client";

interface PlayPauseButtonProps {
  isPlaying: boolean;
  setIsPlaying: (playing: boolean) => void;
}

export default function PlayPauseButton({
  isPlaying,
  setIsPlaying,
}: PlayPauseButtonProps) {
  const handlePlayPause = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsPlaying(!isPlaying);
  };

  return (
    <button
      onClick={handlePlayPause}
      className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center text-white hover:bg-white/10 transition-colors"
      aria-label={isPlaying ? "Tạm dừng" : "Phát"}
    >
      {isPlaying ? (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
        </svg>
      ) : (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M8 5v14l11-7z" />
        </svg>
      )}
    </button>
  );
}

