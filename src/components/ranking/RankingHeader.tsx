"use client";
import type { RankingHeaderProps } from "@/types/interfaces/ranking";

export default function RankingHeader({
  backgroundImages,
}: RankingHeaderProps) {
  return (
    <div className="relative mb-8">
      {/* Blurred Background */}
      <div className="absolute top-0 left-0 right-0 h-[200px] overflow-hidden pointer-events-none">
        <div className="grid grid-cols-5 gap-2 h-full opacity-30">
          {backgroundImages.slice(0, 10).map((imageUrl, index) => (
            <div
              key={index}
              className="relative overflow-hidden"
              style={{
                filter: "blur(30px) brightness(0.6)",
                transform: "scale(1.2)",
              }}
            >
              <img
                src={imageUrl}
                alt={`Background ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center py-12">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white">
          Bảng xếp hạng
        </h1>
      </div>
    </div>
  );
}
