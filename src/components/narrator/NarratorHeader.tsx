"use client";
import type { NarratorHeaderProps } from "@/types/interfaces/narrator";

export default function NarratorHeader({ narrator }: NarratorHeaderProps) {
  // Lấy ảnh từ album đầu tiên trong danh sách để làm background blur
  const backgroundImageUrl = narrator.albums?.[0]?.imageUrl;

  return (
    <div className="relative">
      {/* Blurred Background */}
      {backgroundImageUrl && (
        <div
          className="absolute top-0 left-0 right-0 h-[110px] bg-cover bg-center bg-no-repeat pointer-events-none"
          style={{
            backgroundImage: `url(${backgroundImageUrl})`,
            filter: "blur(50px) brightness(0.5)",
            transform: "scale(1.03)",
            zIndex: 0,
          }}
        />
      )}

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center py-6 sm:py-8">
        {/* Title */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
          Người đọc
        </h2>

        {/* Narrator Name */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
          {narrator.name}
        </h1>
      </div>
    </div>
  );
}
