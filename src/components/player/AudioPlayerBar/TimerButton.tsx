"use client";
import { useState, useEffect, useRef } from "react";

interface TimerButtonProps {
  isMobile?: boolean;
}

const TIMER_OPTIONS = [
  { label: "Không hẹn giờ", value: 0 },
  { label: "5 phút", value: 5 },
  { label: "10 phút", value: 10 },
  { label: "20 phút", value: 20 },
  { label: "30 phút", value: 30 },
  { label: "60 phút", value: 60 },
];

export default function TimerButton({ isMobile = false }: TimerButtonProps) {
  const [isTimerDropdownOpen, setIsTimerDropdownOpen] = useState(false);
  const [selectedTimer, setSelectedTimer] = useState(0);
  const timerDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        timerDropdownRef.current &&
        !timerDropdownRef.current.contains(event.target as Node)
      ) {
        setIsTimerDropdownOpen(false);
      }
    };

    if (isTimerDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isTimerDropdownOpen]);

  const handleTimerSelect = (value: number) => {
    setSelectedTimer(value);
    setIsTimerDropdownOpen(false);
    // TODO: Implement timer logic
    if (value === 0) {
      console.log("Timer cancelled");
    } else {
      console.log(`Timer set to ${value} minutes`);
    }
  };

  return (
    <div ref={timerDropdownRef} className="relative">
      <button
        className="text-[#abafbb] hover:text-white transition-colors flex flex-col items-center gap-1"
        aria-label="Hẹn giờ"
        onClick={(e) => {
          e.stopPropagation();
          setIsTimerDropdownOpen(!isTimerDropdownOpen);
        }}
        {...(isTimerDropdownOpen && { "aria-expanded": "true" })}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10"></circle>
          <polyline points="12 6 12 12 16 14"></polyline>
        </svg>
        <span className="text-xs">{isMobile ? "Hẹn" : "Hẹn giờ"}</span>
      </button>

      {isTimerDropdownOpen && (
        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-36 bg-[#1e2128] rounded-lg shadow-xl border border-[#2a2d36] overflow-hidden z-50">
          <div className="p-1">
            {TIMER_OPTIONS.map((option) => (
              <button
                key={option.value}
                onClick={(e) => {
                  e.stopPropagation();
                  handleTimerSelect(option.value);
                }}
                className={`w-full px-3 py-2 text-sm text-left rounded hover:bg-[#2a2d36] transition-colors ${
                  selectedTimer === option.value
                    ? "bg-[#2a2d36] text-white font-semibold"
                    : "text-[#abafbb]"
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
