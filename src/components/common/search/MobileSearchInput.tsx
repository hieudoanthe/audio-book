"use client";
import { useEffect, useRef } from "react";
import type { MobileSearchInputProps } from "@/types/interfaces/modal";

export default function MobileSearchInput({ onClose }: MobileSearchInputProps) {
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (searchInputRef.current && window.innerWidth < 640) {
      setTimeout(() => {
        searchInputRef.current?.focus();
      }, 100);
    }
  }, []);

  return (
    <div className="mb-4 sm:hidden">
      <div className="relative flex items-center gap-2">
        <input
          ref={searchInputRef}
          type="text"
          placeholder="Tìm kiếm"
          className="w-full rounded border border-zinc-700 bg-[#232634] px-3 py-2 text-sm text-[#abafbb] placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
        <button
          onClick={onClose}
          className="p-2 rounded-lg hover:bg-[#282b32] text-[#abafbb] hover:text-white transition-colors shrink-0"
          aria-label="Đóng"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      </div>
    </div>
  );
}

