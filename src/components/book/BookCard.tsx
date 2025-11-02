"use client";
import type { BookCardProps } from "../../types/interfaces/book";

export default function BookCard({
  id,
  title,
  author,
  imageUrl,
  onClick,
}: BookCardProps) {
  return (
    <div
      className="group cursor-pointer"
      onClick={onClick}
      role="button"
      aria-label={title}
    >
      {/* Image Container */}
      <div className="aspect-square w-full overflow-hidden rounded-lg bg-[#2a2d36]">
        <img
          src={imageUrl}
          alt={title}
          draggable={false}
          onDragStart={(e) => e.preventDefault()}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03] select-none"
          loading="lazy"
        />
      </div>

      {/* Content */}
      <div className="mt-2 pr-2">
        <p className="text-[14px] sm:text-[15px] md:text-[16px] font-semibold text-[#e6e6e6] line-clamp-2">
          {title}
        </p>
        <p className="text-xs sm:text-[13px] text-[#8b9099] mt-1 line-clamp-1">
          {author}
        </p>
      </div>
    </div>
  );
}
