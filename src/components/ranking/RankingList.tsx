"use client";
import { useRouter } from "next/navigation";
import type { RankingListProps } from "@/types/interfaces/ranking";

const StarIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="currentColor"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

export default function RankingList({
  rankings,
  category,
}: RankingListProps) {
  const router = useRouter();

  const handleItemClick = (bookId: string, category: string) => {
    router.push(`/${category}/${bookId}`);
  };

  return (
    <div className="space-y-4">
      {rankings.map((item, index) => {
        return (
          <div
            key={`${item.category}-${item.rank}-${item.book.id}-${index}`}
            className="flex items-center gap-4 p-4 rounded-lg bg-[#282b32] hover:bg-[#2a2d36] transition-colors cursor-pointer group"
            onClick={() => handleItemClick(item.book.id, item.category)}
          >
            {/* Rank Number */}
            <div className="flex-shrink-0 w-16 sm:w-20 text-center">
              <span className="text-4xl sm:text-5xl font-bold text-[#abafbb]">
                {String(item.rank).padStart(2, "0")}
              </span>
            </div>

            {/* Book Cover */}
            <div className="flex-shrink-0 w-20 h-20 sm:w-24 sm:h-24 rounded-lg overflow-hidden bg-[#2a2d36]">
              <img
                src={item.book.imageUrl}
                alt={item.book.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Book Info */}
            <div className="flex-1 min-w-0">
              <h3 className="text-white text-sm sm:text-base font-semibold mb-1 line-clamp-2 group-hover:text-orange-500 transition-colors">
                {item.book.title}
              </h3>
              <p className="text-[#abafbb] text-xs sm:text-sm mb-1">
                @{item.book.author}
              </p>
              {item.book.rating && (
                <div className="flex items-center gap-1 text-[#abafbb] text-xs sm:text-sm">
                  <span className="text-yellow-400">{StarIcon}</span>
                  <span>
                    {item.book.rating} ({item.book.ratingCount || 0})
                  </span>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

