"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { getAuthorByName } from "@/mocks/authors";
import { getNarratorByName } from "@/mocks/narrators";
import type { IntroductionSectionProps } from "@/types/interfaces/content";

export default function IntroductionSection({
  book,
}: IntroductionSectionProps) {
  const [showFullSynopsis, setShowFullSynopsis] = useState(false);
  const router = useRouter();
  const synopsisPreview = book.synopsis?.substring(0, 200) || "";
  const shouldTruncate = book.synopsis && book.synopsis.length > 200;

  const handleAuthorClick = () => {
    const author = getAuthorByName(book.author);
    if (author) {
      router.push(`/authors/${author.id}`);
    }
  };

  const handleNarratorClick = () => {
    if (book.narrator) {
      const narrator = getNarratorByName(book.narrator);
      if (narrator) {
        router.push(`/narrators/${narrator.id}`);
      }
    }
  };

  return (
    <section className="bg-[#1e2128] rounded-lg p-4 sm:p-6">
      <h2 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">
        Giới thiệu
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-sm mb-4 sm:mb-6">
        <div className="flex items-center gap-2">
          <span className="text-[#abafbb]">Tác giả: </span>
          <button
            onClick={handleAuthorClick}
            className="bg-[#393944] text-white px-3 py-1 rounded-full text-sm hover:bg-[#4a4d54] transition-colors cursor-pointer"
          >
            {book.author}
          </button>
        </div>
        {book.duration && (
          <div className="flex items-center gap-2">
            <span className="text-[#abafbb]">Thời lượng: </span>
            <span className="text-white">{book.duration}</span>
          </div>
        )}
        {book.channel && (
          <div className="flex items-center gap-2">
            <span className="text-[#abafbb]">Kênh: </span>
            <span className="bg-[#393944] text-white px-3 py-1 rounded-full text-sm">
              {book.channel}
            </span>
          </div>
        )}
        {book.narrator && (
          <div className="flex items-center gap-2">
            <span className="text-[#abafbb]">Người đọc: </span>
            <button
              onClick={handleNarratorClick}
              className="bg-[#393944] text-white px-3 py-1 rounded-full text-sm hover:bg-[#4a4d54] transition-colors cursor-pointer"
            >
              {book.narrator}
            </button>
          </div>
        )}
        {book.price && (
          <div className="flex items-center gap-2">
            <span className="text-[#abafbb]">Giá bán lẻ: </span>
            <span className="text-white">
              {book.price.toLocaleString("vi-VN")}₫
            </span>
          </div>
        )}
        {book.rating && (
          <div className="flex items-center gap-2">
            <span className="text-[#abafbb]">Đánh giá: </span>
            <span className="text-white">
              {book.rating} ({book.ratingCount || 0})
            </span>
          </div>
        )}
      </div>

      {book.synopsis && (
        <div>
          <h3 className="text-lg font-semibold text-white mb-2">Lời tựa</h3>
          <p className="text-[#abafbb] leading-relaxed">
            {showFullSynopsis || !shouldTruncate
              ? book.synopsis
              : `${synopsisPreview}...`}
          </p>
          {shouldTruncate && (
            <button
              onClick={() => setShowFullSynopsis(!showFullSynopsis)}
              className="text-orange-500 hover:text-orange-400 mt-2 text-sm font-medium"
            >
              {showFullSynopsis ? "Thu gọn" : "Xem thêm"}
            </button>
          )}
        </div>
      )}
    </section>
  );
}
