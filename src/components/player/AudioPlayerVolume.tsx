"use client";
import { VolumeIcon } from "../../constants/playerIcons";

interface AudioPlayerVolumeProps {
  volume: number;
  onVolumeChange: (volume: number) => void;
}

export default function AudioPlayerVolume({
  volume,
  onVolumeChange,
}: AudioPlayerVolumeProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    onVolumeChange(newVolume);
  };

  return (
    <div className="flex items-center justify-center gap-4">
      <VolumeIcon className="text-[#abafbb]" />
      <input
        type="range"
        min="0"
        max="1"
        step="0.01"
        value={volume}
        onChange={handleChange}
        className="flex-1 max-w-xs h-2 bg-[#2a2d36] rounded-lg appearance-none cursor-pointer accent-orange-500"
        aria-label="Âm lượng"
      />
    </div>
  );
}
