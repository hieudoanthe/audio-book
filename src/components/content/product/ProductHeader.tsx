"use client";
import { useState, useEffect } from "react";
import StarRating from "./StarRating";
import { ShareModal } from "@/components/common/share";
import { ProductIcons } from "@/constants/productIcons";
import { useBookmarks } from "@/hooks/useBookmarks";
import type { ProductHeaderProps } from "@/types/interfaces/content";

export default function ProductHeader({
  title,
  imageUrl,
  bookId,
  baseRoute,
  author,
  duration,
}: ProductHeaderProps) {
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [shareUrl, setShareUrl] = useState("");
  const { isBookmarked, addBookmark, removeBookmark } = useBookmarks();
  const bookmarked = isBookmarked(bookId);

  useEffect(() => {
    // Only access window on client-side
    if (typeof window !== "undefined") {
      setShareUrl(`${window.location.origin}${baseRoute}/${bookId}`);
    }
  }, [baseRoute, bookId]);

  const handleShareClick = () => {
    setIsShareModalOpen(true);
  };

  const handleBookmarkClick = () => {
    const bookmarkItem = {
      bookId,
      bookTitle: title,
      bookImageUrl: imageUrl,
      author: author || "Đang cập nhật",
      duration,
      addedAt: Date.now(),
    };

    if (bookmarked) {
      removeBookmark(bookId);
    } else {
      addBookmark(bookmarkItem);
    }
  };

  return (
    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 p-4 sm:p-6">
      <div className="shrink-0 w-full sm:w-64 mx-auto sm:mx-0">
        <div className="aspect-square w-full max-w-[256px] sm:max-w-none overflow-hidden rounded-lg bg-[#2a2d36]">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="flex-1 min-w-0">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-4 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
          {title}
        </h1>
        <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-4">
          <StarRating />
          <button
            onClick={handleBookmarkClick}
            className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded bg-[#2a2d36] text-white hover:bg-[#3a3d46] transition-colors text-xs sm:text-sm group ${
              bookmarked ? "text-orange-500" : ""
            }`}
            aria-label={bookmarked ? "Bỏ đánh dấu" : "Đánh dấu"}
          >
            <span
              className={`transition-colors ${
                bookmarked ? "text-orange-500" : "group-hover:text-brand"
              }`}
            >
              {ProductIcons.Bookmark}
            </span>
            <span
              className={`transition-colors ${
                bookmarked ? "text-orange-500" : "group-hover:text-brand"
              }`}
            >
              Đánh dấu
            </span>
          </button>
          <button
            onClick={handleShareClick}
            className="flex items-center gap-2 px-3 sm:px-4 py-2 rounded bg-[#2a2d36] text-white hover:bg-[#3a3d46] transition-colors text-xs sm:text-sm group"
            aria-label="Chia sẻ"
          >
            <span className="group-hover:text-brand transition-colors">
              {ProductIcons.Share}
            </span>
            <span className="group-hover:text-brand transition-colors">
              Chia sẻ
            </span>
          </button>
        </div>
      </div>

      {/* Backdrop and Modal */}
      {isShareModalOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          onClick={() => setIsShareModalOpen(false)}
        >
          <div className="w-full max-w-md" onClick={(e) => e.stopPropagation()}>
            <ShareModal
              isOpen={isShareModalOpen}
              onClose={() => setIsShareModalOpen(false)}
              url={shareUrl}
              title={title}
              layout="single-row"
            />
          </div>
        </div>
      )}
    </div>
  );
}
