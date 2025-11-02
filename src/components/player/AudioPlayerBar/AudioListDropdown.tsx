"use client";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { useAudioPlayer } from "@/contexts/AudioPlayerContext";
import type { Chapter } from "@/types/interfaces/book";

export default function AudioListDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const { currentBook, currentChapter, playChapter } = useAudioPlayer();

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      // Disable body scroll when dropdown is open
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Handle scroll prevention at boundaries
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container || !isOpen) return;

    const handleWheel = (e: WheelEvent) => {
      const { scrollTop, scrollHeight, clientHeight } = container;
      const isAtTop = scrollTop === 0;
      const isAtBottom = scrollTop + clientHeight >= scrollHeight - 1;

      if ((isAtTop && e.deltaY < 0) || (isAtBottom && e.deltaY > 0)) {
        e.preventDefault();
        e.stopPropagation();
      }
    };

    container.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      container.removeEventListener("wheel", handleWheel);
    };
  }, [isOpen]);

  if (
    !currentBook ||
    !currentBook.chapters ||
    currentBook.chapters.length === 0
  ) {
    return null;
  }

  const handleChapterClick = (chapter: Chapter) => {
    if (currentBook) {
      playChapter(currentBook, chapter);
      setIsOpen(false);
      router.push("/player");
    }
  };

  return (
    <div ref={dropdownRef} className="relative">
      <button
        onClick={(e) => {
          e.stopPropagation();
          setIsOpen(!isOpen);
        }}
        className="px-3 py-1.5 bg-[#2a2d36] hover:bg-[#3a3d46] text-[#abafbb] hover:text-white rounded-md text-sm font-medium transition-colors flex items-center gap-2 whitespace-nowrap w-full md:w-auto"
        aria-label="Danh sách audios"
        {...(isOpen && { "aria-expanded": "true" })}
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
          <line x1="4" y1="7" x2="20" y2="7" />
          <line x1="4" y1="12" x2="14" y2="12" />
          <line x1="4" y1="17" x2="20" y2="17" />
        </svg>
        <span className="hidden md:inline">Danh sách audios</span>
        <span className="md:hidden text-xs">Danh sách audios</span>
      </button>

      {isOpen && (
        <div className="absolute bottom-full right-0 mb-2 w-[calc(100vw-2rem)] md:w-96 max-h-[600px] bg-[#1e2128] rounded-lg shadow-xl border border-[#2a2d36] overflow-hidden z-50">
          <div className="p-4 border-b border-[#2a2d36]">
            <h3 className="text-lg font-bold text-white">Danh sách audios</h3>
          </div>
          <div
            ref={scrollContainerRef}
            className="overflow-y-auto max-h-[500px] audio-list-scrollbar"
          >
            <div className="p-2 space-y-1">
              {currentBook.chapters.map((chapter, index) => {
                const isActive = currentChapter?.id === chapter.id;
                return (
                  <div
                    key={chapter.id}
                    onClick={() => handleChapterClick(chapter)}
                    className={`flex items-start gap-3 p-3 rounded hover:bg-[#282b32] transition-colors cursor-pointer group ${
                      isActive ? "bg-[#282b32]" : ""
                    }`}
                  >
                    <span className="text-[#abafbb] text-sm font-medium shrink-0 min-w-[40px]">
                      {chapter.number || index + 1}.
                    </span>
                    <div className="flex-1 min-w-0">
                      <p
                        className={`text-sm line-clamp-2 transition-colors ${
                          isActive
                            ? "text-orange-500 font-semibold"
                            : "text-white group-hover:text-orange-500"
                        }`}
                      >
                        {chapter.title}
                      </p>
                    </div>
                    {chapter.duration && (
                      <span className="text-[#abafbb] text-sm shrink-0">
                        {chapter.duration}
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
