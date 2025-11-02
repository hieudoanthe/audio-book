"use client";
import { useState, useEffect } from "react";
import { BookCard } from "@/components/book";
import type { CategoryContentGridProps } from "@/types/interfaces/content";
import type { Book } from "@/types/interfaces/book";

const SORT_OPTIONS = [
  "Tất cả",
  "Nghe nhiều nhất",
  "Mới nhất",
  "Miễn phí",
  "Ngắn nhất",
];

export default function CategoryContentGrid({
  title,
  items,
  baseRoute = "/books",
}: CategoryContentGridProps) {
  const [sortBy, setSortBy] = useState<string>(SORT_OPTIONS[2]); // Default to "Mới nhất"
  const [displayedItems, setDisplayedItems] = useState<Book[]>(
    items.slice(0, 10)
  );

  // Update displayedItems when items prop changes
  useEffect(() => {
    setDisplayedItems(items.slice(0, 10));
  }, [items]);

  const hasMore = items.length > displayedItems.length;

  return (
    <div className="space-y-6">
      {/* Title and Sorting */}
      <div className="flex items-center justify-between">
        <h2 className="text-xl sm:text-2xl font-bold text-white">{title}</h2>
        <div className="relative inline-block">
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            aria-label="Sắp xếp sách"
            className="appearance-none bg-[#1e2128] text-white border-none px-4 py-2 pr-10 text-sm font-semibold cursor-pointer hover:bg-[#2a2d36] transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 rounded-none"
          >
            {SORT_OPTIONS.map((option) => (
              <option
                key={option}
                value={option}
                className="bg-[#1e2128] text-white py-2"
              >
                {option}
              </option>
            ))}
          </select>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-white"
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </div>
      </div>

      {/* Items Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
        {displayedItems.map((item) => (
          <BookCard
            key={item.id}
            id={item.id}
            title={item.title}
            author={item.author}
            imageUrl={item.imageUrl}
            onClick={() => {
              window.location.href = `${baseRoute}/${item.id}`;
            }}
          />
        ))}
      </div>

      {hasMore && (
        <div className="flex justify-center pt-4">
          <button
            onClick={() => {
              const nextBatch = items.slice(0, displayedItems.length + 10);
              setDisplayedItems(nextBatch);
            }}
            className="px-6 py-3 bg-[#2a2d36] text-[#abafbb] rounded-lg font-medium hover:bg-[#3a3d46] hover:text-white transition-colors"
          >
            Xem thêm
          </button>
        </div>
      )}
    </div>
  );
}

