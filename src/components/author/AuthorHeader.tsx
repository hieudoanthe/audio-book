"use client";
import type { AuthorHeaderProps } from "@/types/interfaces/author";

export default function AuthorHeader({ author }: AuthorHeaderProps) {
  const albumsCount = author.albums?.length || 0;

  return (
    <div className="relative">
      {/* Blurred Background */}
      <div
        className="absolute top-0 left-0 right-0 h-[300px] bg-cover bg-center bg-no-repeat pointer-events-none"
        style={{
          backgroundImage: `url(${author.imageUrl})`,
          filter: "blur(50px) brightness(0.5)",
          transform: "scale(1.03)",
          zIndex: 0,
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center py-6 sm:py-8">
        {/* Profile Picture - Circular */}
        <div className="w-32 h-32 sm:w-40 sm:h-40 mb-4 sm:mb-6">
          <div className="w-full h-full rounded-full overflow-hidden border-2 border-[#2a2d36] bg-[#2a2d36]">
            <img
              src={author.imageUrl}
              alt={author.name}
              className="w-full h-full object-cover"
              loading="eager"
            />
          </div>
        </div>

        {/* Author Name */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
          {author.name}
        </h1>

        {/* Albums Count */}
        <div className="flex items-center gap-2 text-[#abafbb]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
            <line x1="3" y1="9" x2="21" y2="9" />
            <line x1="9" y1="21" x2="9" y2="9" />
          </svg>
          <span className="text-sm sm:text-base">
            {albumsCount} {albumsCount === 1 ? "album" : "albums"}
          </span>
        </div>
      </div>
    </div>
  );
}
