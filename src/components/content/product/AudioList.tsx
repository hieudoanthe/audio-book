"use client";
import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { useAudioPlayer } from "@/contexts/AudioPlayerContext";
import type { AudioListProps } from "@/types/interfaces/content";
import type { BookDetail } from "@/types/interfaces/book";

export default function AudioList({ chapters, book }: AudioListProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const router = useRouter();
  const { playChapter } = useAudioPlayer();

  useEffect(() => {
    const section = sectionRef.current;
    const container = scrollContainerRef.current;
    if (!section || !container) return;

    const handleMouseEnter = () => {
      // Disable body scroll when hovering over AudioList
      document.body.style.overflow = "hidden";
    };

    const handleMouseLeave = () => {
      // Enable body scroll when leaving AudioList
      document.body.style.overflow = "";
    };

    const handleWheel = (e: WheelEvent) => {
      const { scrollTop, scrollHeight, clientHeight } = container;
      const isAtTop = scrollTop === 0;
      const isAtBottom = scrollTop + clientHeight >= scrollHeight - 1; // -1 for rounding

      // Prevent body scroll if scrolling at boundaries
      if ((isAtTop && e.deltaY < 0) || (isAtBottom && e.deltaY > 0)) {
        e.preventDefault();
        e.stopPropagation();
      }
    };

    section.addEventListener("mouseenter", handleMouseEnter);
    section.addEventListener("mouseleave", handleMouseLeave);
    container.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      section.removeEventListener("mouseenter", handleMouseEnter);
      section.removeEventListener("mouseleave", handleMouseLeave);
      container.removeEventListener("wheel", handleWheel);
      // Ensure overflow is restored on unmount
      document.body.style.overflow = "";
    };
  }, []);

  if (!chapters || chapters.length === 0) return null;

  return (
    <section ref={sectionRef} className="bg-[#1e2128] rounded-lg p-6">
      <h3 className="text-lg font-bold text-white mb-4">Danh sách audios</h3>
      <div
        ref={scrollContainerRef}
        className="space-y-2 max-h-[600px] overflow-y-auto audio-list-scrollbar pb-4"
      >
        {chapters.map((chapter, index) => (
          <div
            key={chapter.id}
            onClick={() => {
              if (book) {
                playChapter(book, chapter);
                router.push("/player");
              }
            }}
            className="flex items-start gap-3 p-3 rounded hover:bg-[#282b32] transition-colors cursor-pointer group"
          >
            <span className="text-[#abafbb] text-sm font-medium shrink-0 min-w-[40px]">
              {chapter.number || index + 1}.
            </span>
            <div className="flex-1 min-w-0">
              <p className="text-white text-sm group-hover:text-orange-500 transition-colors line-clamp-2">
                {chapter.title}
              </p>
            </div>
            <span className="text-[#abafbb] text-sm shrink-0">
              {chapter.duration}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
