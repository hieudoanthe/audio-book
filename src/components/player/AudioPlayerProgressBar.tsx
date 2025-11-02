"use client";

interface AudioPlayerProgressBarProps {
  currentTime: number;
  duration: number;
  onProgressChange: (time: number) => void;
}

export default function AudioPlayerProgressBar({
  currentTime,
  duration,
  onProgressChange,
}: AudioPlayerProgressBarProps) {
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = parseFloat(e.target.value);
    onProgressChange(newTime);
  };

  return (
    <div className="space-y-2">
      <input
        type="range"
        min="0"
        max={duration || 100}
        value={currentTime}
        onChange={handleChange}
        className="w-full h-2 bg-[#2a2d36] rounded-lg appearance-none cursor-pointer accent-orange-500"
        aria-label="Tiến độ phát"
      />
      <div className="flex justify-between text-sm text-[#abafbb]">
        <span>{formatTime(currentTime)}</span>
        <span>{formatTime(duration)}</span>
      </div>
    </div>
  );
}
