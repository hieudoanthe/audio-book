"use client";
import type { PopularKeywordsSectionProps } from "@/types/interfaces/modal";

export default function PopularKeywordsSection({
  keywords,
  onKeywordClick,
}: PopularKeywordsSectionProps) {
  return (
    <div className="mb-8">
      <h2 className="text-lg sm:text-xl font-bold text-white mb-3">
        Từ khóa phổ biến
      </h2>
      <div className="flex flex-wrap gap-2">
        {keywords.map((keyword, index) => (
          <button
            key={index}
            onClick={onKeywordClick}
            className="px-3 py-1.5 rounded-full bg-[#2a2d36] text-white text-sm hover:bg-[#3a3d46] transition-colors"
          >
            {keyword}
          </button>
        ))}
      </div>
    </div>
  );
}

