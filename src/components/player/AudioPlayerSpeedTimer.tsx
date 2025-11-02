"use client";
import { SpeedIcon, TimerIcon } from "../../constants/playerIcons";

export default function AudioPlayerSpeedTimer() {
  return (
    <div className="flex items-center justify-center gap-8">
      <button
        className="flex flex-col items-center gap-2 text-[#abafbb] hover:text-white transition-colors"
        aria-label="Tốc độ phát"
      >
        <SpeedIcon />
        <span className="text-xs">Tốc độ</span>
      </button>
      <button
        className="flex flex-col items-center gap-2 text-[#abafbb] hover:text-white transition-colors"
        aria-label="Hẹn giờ"
      >
        <TimerIcon />
        <span className="text-xs">Hẹn giờ</span>
      </button>
    </div>
  );
}
