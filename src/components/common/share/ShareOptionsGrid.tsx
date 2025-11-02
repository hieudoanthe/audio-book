"use client";
import { ShareIcons } from "@/constants/shareIcons";

export interface ShareOption {
  id: string;
  label: string;
  icon: React.ReactNode;
  onClick: () => void;
  bgColor: string;
}

interface ShareOptionsGridProps {
  options: ShareOption[];
  layout?: "single-row" | "grid";
}

export default function ShareOptionsGrid({ 
  options, 
  layout = "grid" 
}: ShareOptionsGridProps) {
  return (
    <div className={`grid ${layout === "single-row" ? "grid-cols-4" : "grid-cols-2"} gap-3`}>
      {options.map((option) => (
        <button
          key={option.id}
          onClick={option.onClick}
          className="flex flex-col items-center gap-2 p-3 rounded-lg hover:bg-[#282b32] transition-colors min-w-0"
          aria-label={option.label}
        >
          <div
            className={`w-12 h-12 rounded-full flex items-center justify-center text-white shrink-0 ${option.bgColor}`}
          >
            {option.icon}
          </div>
          <span className="text-white text-xs text-center w-full truncate">{option.label}</span>
        </button>
      ))}
    </div>
  );
}

