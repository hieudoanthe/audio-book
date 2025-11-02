"use client";
import { useState, useEffect, useRef } from "react";
import { useAudioPlayer } from "@/contexts/AudioPlayerContext";

const SPEED_OPTIONS = [0.5, 0.75, 1, 1.25, 1.75, 2];

interface SpeedControlProps {
  isMobile?: boolean;
}

export default function SpeedControl({ isMobile = false }: SpeedControlProps) {
  const { playbackRate, setPlaybackRate } = useAudioPlayer();
  const [isSpeedDropdownOpen, setIsSpeedDropdownOpen] = useState(false);
  const speedDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        speedDropdownRef.current &&
        !speedDropdownRef.current.contains(event.target as Node)
      ) {
        setIsSpeedDropdownOpen(false);
      }
    };

    if (isSpeedDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSpeedDropdownOpen]);

  const handleSpeedSelect = (speed: number) => {
    setPlaybackRate(speed);
    setIsSpeedDropdownOpen(false);
  };

  return (
    <div ref={speedDropdownRef} className="relative">
      <button
        className="text-[#abafbb] hover:text-white transition-colors flex flex-col items-center gap-1"
        aria-label="Tốc độ phát"
        onClick={(e) => {
          e.stopPropagation();
          setIsSpeedDropdownOpen(!isSpeedDropdownOpen);
        }}
        {...(isSpeedDropdownOpen && { "aria-expanded": "true" })}
      >
        <div className="relative inline-flex items-center justify-center">
          <div className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 bg-[#abafbb] rounded px-0.5 py-0 min-w-[14px] flex items-center justify-center">
            <span className="text-[#1e2128] text-[8px] font-semibold leading-none">
              X{playbackRate}
            </span>
          </div>
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            className="text-[#abafbb]"
          >
            <path
              d="M4 5h6m3 0h7m-4 4v6M10 2v6m2 8v6m4-10h4M4 12h9m-1 7h8M4 19h5"
              color="currentColor"
            />
          </svg>
        </div>
        <span className="text-xs">Tốc độ</span>
      </button>

      {isSpeedDropdownOpen && (
        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-32 bg-[#1e2128] rounded-lg shadow-xl border border-[#2a2d36] overflow-hidden z-50">
          <div className="p-1">
            {SPEED_OPTIONS.map((speed) => (
              <button
                key={speed}
                onClick={(e) => {
                  e.stopPropagation();
                  handleSpeedSelect(speed);
                }}
                className={`w-full px-3 py-2 text-sm text-left rounded hover:bg-[#2a2d36] transition-colors ${
                  playbackRate === speed
                    ? "bg-[#2a2d36] text-white font-semibold"
                    : "text-[#abafbb]"
                }`}
              >
                X{speed}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

