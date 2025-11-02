"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import type { NarratorAlbumsListProps } from "@/types/interfaces/narrator";
import type { BookDetail } from "@/types/interfaces/book";

const INITIAL_DISPLAY_COUNT = 8;
const LOAD_MORE_COUNT = 8;

export default function NarratorAlbumsList({
  narrator,
}: NarratorAlbumsListProps) {
  const router = useRouter();
  const allAlbums = narrator.albums || [];
  const [displayCount, setDisplayCount] = useState(INITIAL_DISPLAY_COUNT);

  const displayedAlbums = allAlbums.slice(0, displayCount);
  const hasMore = allAlbums.length > displayCount;

  const handleAlbumClick = (album: BookDetail) => {
    // Try to find which category the book belongs to
    const categories: Array<
      "books" | "stories" | "podcast" | "summaries" | "kids"
    > = ["books", "stories", "podcast", "summaries", "kids"];

    for (const category of categories) {
      // Navigate to the book detail page
      router.push(`/${category}/${album.id}`);
      return;
    }
  };

  const handleLoadMore = () => {
    setDisplayCount((prev) => prev + LOAD_MORE_COUNT);
  };

  return (
    <div className="space-y-6">
      {/* Albums Grid - 2 columns, 5 items per column */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {displayedAlbums.map((album, index) => (
          <div
            key={`${album.id}-${index}`}
            className="flex gap-3 sm:gap-4 p-3 rounded-lg bg-[#282b32] hover:bg-[#2a2d36] transition-colors cursor-pointer group"
            onClick={() => handleAlbumClick(album)}
          >
            {/* Album Cover */}
            <div className="shrink-0 w-20 h-20 sm:w-24 sm:h-24 rounded-lg overflow-hidden bg-[#2a2d36]">
              <img
                src={album.imageUrl}
                alt={album.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
            </div>

            {/* Album Info */}
            <div className="flex-1 min-w-0">
              <h3 className="text-sm sm:text-base font-semibold text-white mb-1 sm:mb-2 line-clamp-2 group-hover:text-orange-500 transition-colors">
                {album.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#abafbb] mb-1 sm:mb-2">
                {album.author} (Tác giả)
              </p>
              {album.chapters && (
                <div className="flex items-center gap-2 text-xs sm:text-sm text-[#abafbb]">
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
                  >
                    <polygon points="5 3 19 12 5 21 5 3" />
                  </svg>
                  <span>{album.chapters.length} audios</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Load More Button */}
      {hasMore ? (
        <div className="flex justify-center mt-4">
          <button
            onClick={handleLoadMore}
            className="px-6 py-3 rounded-lg bg-[#282b32] hover:bg-[#2a2d36] text-white font-medium transition-colors"
          >
            Xem thêm ({allAlbums.length - displayCount} cuốn)
          </button>
        </div>
      ) : null}
    </div>
  );
}
