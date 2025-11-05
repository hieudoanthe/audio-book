"use client";
import { useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import { useHistory } from "@/hooks/useHistory";
import { useAudioPlayer } from "@/contexts/AudioPlayerContext";
import { getBookDetailById } from "@/mocks/bookDetails";

export default function ListeningPage() {
  const { history, removeHistory, clearAllHistory } = useHistory();
  const { currentBook, currentTime, duration } = useAudioPlayer();
  const router = useRouter();

  const [displayCount, setDisplayCount] = useState(10);

  const items = useMemo(
    () => history.slice(0, displayCount),
    [history, displayCount]
  );
  const hasMore = history.length > displayCount;

  const handleLoadMore = () => setDisplayCount((c) => c + 10);

  const handleNavigate = (bookId: string) => {
    const categories: Array<
      "books" | "stories" | "podcast" | "summaries" | "kids"
    > = ["books", "stories", "podcast", "summaries", "kids"];
    for (const category of categories) {
      const book = getBookDetailById(bookId, category);
      if (book) {
        router.push(`/${category}/${bookId}`);
        return;
      }
    }
  };

  const parseMmSsToSeconds = (value: string) => {
    const [mm, ss] = value.split(":");
    const m = parseInt(mm || "0", 10);
    const s = parseInt(ss || "0", 10);
    return m * 60 + s;
  };

  const getTotalDurationSeconds = (bookId: string) => {
    const categories: Array<
      "books" | "stories" | "podcast" | "summaries" | "kids"
    > = ["books", "stories", "podcast", "summaries", "kids"];
    for (const category of categories) {
      const detail = getBookDetailById(bookId, category);
      if (detail?.chapters && detail.chapters.length > 0) {
        return detail.chapters.reduce(
          (sum, ch) => sum + parseMmSsToSeconds(ch.duration),
          0
        );
      }
    }
    return 0;
  };

  const getProgressText = (bookId: string) => {
    if (!currentBook || currentBook.id !== bookId) return null;
    const totalSeconds = getTotalDurationSeconds(bookId);
    if (totalSeconds <= 0) return null;
    const percent = Math.round((currentTime / totalSeconds) * 100);
    return `Đã nghe ${Math.max(0, Math.min(100, percent))}%`;
  };

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white">Nội dung đang nghe</h2>
        {history.length > 0 && (
          <button
            onClick={clearAllHistory}
            className="text-sm text-[#abafbb] hover:text-white flex items-center gap-1"
            aria-label="Xóa tất cả"
          >
            Xóa tất cả
            <span aria-hidden>🗑️</span>
          </button>
        )}
      </div>

      {/* Empty state */}
      {history.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-[#abafbb] text-lg">Chưa có nội dung đang nghe</p>
        </div>
      ) : (
        <div className="bg-[#1e2128] rounded-xl border border-[#2a2d36] overflow-hidden">
          {items.map((item) => {
            const progressText = getProgressText(item.bookId);
            return (
              <div
                key={item.bookId}
                className="flex items-center gap-4 p-4 sm:p-5 md:p-6 border-b border-[#2a2d36] last:border-b-0 cursor-pointer hover:bg-[#23262e]"
                onClick={() => handleNavigate(item.bookId)}
              >
                <img
                  src={item.bookImageUrl}
                  alt={item.bookTitle}
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded object-cover shrink-0"
                />

                <div className="flex-1 min-w-0">
                  <div className="text-white font-semibold truncate">
                    {item.bookTitle}
                  </div>
                  <div className="flex items-center gap-4 mt-1 flex-wrap">
                    <div className="flex items-center gap-1 text-[#abafbb] text-xs shrink-0">
                      <span className="whitespace-nowrap">{item.author}</span>
                    </div>
                    {item.duration && (
                      <div className="flex items-center gap-1 text-[#abafbb] text-xs shrink-0">
                        <span className="whitespace-nowrap">
                          {item.duration}
                        </span>
                      </div>
                    )}
                  </div>

                  {progressText && (
                    <div className="text-xs text-[#f68c2e] mt-1">
                      {progressText}
                    </div>
                  )}
                </div>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    removeHistory(item.bookId);
                  }}
                  className="text-[#abafbb] hover:text-white p-2"
                  aria-label="Xóa khỏi danh sách"
                >
                  🗑️
                </button>
              </div>
            );
          })}

          {hasMore && (
            <div className="p-4 sm:p-6 text-center">
              <button
                onClick={handleLoadMore}
                className="px-5 py-2.5 rounded-md bg-[#6a5acd] hover:bg-[#5b4cc4] text-white font-semibold"
              >
                Tải thêm
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
