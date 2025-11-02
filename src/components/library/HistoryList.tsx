"use client";
import { useHistory } from "@/hooks/useHistory";
import { useRouter } from "next/navigation";
import { getBookDetailById } from "@/mocks/bookDetails";

export default function HistoryList() {
  const { history, removeHistory, clearAllHistory } = useHistory();
  const router = useRouter();

  const handleItemClick = (item: (typeof history)[0]) => {
    // Navigate to book detail page
    // Try to find which category the book belongs to
    const categories: Array<
      "books" | "stories" | "podcast" | "summaries" | "kids"
    > = ["books", "stories", "podcast", "summaries", "kids"];

    for (const category of categories) {
      const book = getBookDetailById(item.bookId, category);
      if (book) {
        router.push(`/${category}/${item.bookId}`);
        return;
      }
    }
  };

  const handleDelete = (e: React.MouseEvent, bookId: string) => {
    e.stopPropagation();
    removeHistory(bookId);
  };

  if (history.length === 0) {
    return (
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-white">Lịch sử nghe</h2>
        </div>
        <div className="text-center py-12">
          <p className="text-[#abafbb] text-lg">Chưa có lịch sử nghe nào</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white">Lịch sử nghe</h2>
        <button
          onClick={clearAllHistory}
          className="flex items-center gap-2 px-4 py-2 text-[#abafbb] hover:text-white transition-colors rounded-lg hover:bg-[#282b32]"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="3 6 5 6 21 6"></polyline>
            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
          </svg>
          <span className="text-sm">Xóa tất cả</span>
        </button>
      </div>

      {/* List */}
      <div className="space-y-3">
        {history.map((item) => (
          <div
            key={item.bookId}
            onClick={() => handleItemClick(item)}
            className="flex items-center gap-4 p-3 rounded-lg bg-[#282b32] hover:bg-[#2a2d36] transition-colors cursor-pointer group"
          >
            {/* Thumbnail */}
            <div className="w-16 h-16 rounded-full overflow-hidden bg-[#2a2d36] shrink-0">
              <img
                src={item.bookImageUrl}
                alt={item.bookTitle}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <p className="text-white text-sm font-semibold line-clamp-2 group-hover:text-orange-500 transition-colors">
                {item.bookTitle}
              </p>
              <div className="flex items-center gap-4 mt-1">
                <div className="flex items-center gap-1 text-[#abafbb] text-xs">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                  <span>{item.author}</span>
                </div>
                {item.duration && (
                  <div className="flex items-center gap-1 text-[#abafbb] text-xs">
                    <svg
                      width="14"
                      height="14"
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
                    <span>{item.duration}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Delete button */}
            <button
              onClick={(e) => handleDelete(e, item.bookId)}
              className="text-[#abafbb] hover:text-white transition-colors shrink-0 opacity-0 group-hover:opacity-100"
              aria-label="Xóa"
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
                <polyline points="3 6 5 6 21 6"></polyline>
                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
              </svg>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

