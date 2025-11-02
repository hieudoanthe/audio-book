"use client";
import type { AuthorCardProps } from "../../types/interfaces/book";

export default function AuthorCard({
  id,
  name,
  description,
  imageUrl,
  onClick,
}: AuthorCardProps) {
  return (
    <div
      className="group cursor-pointer"
      onClick={onClick}
      role="button"
      aria-label={name}
    >
      {/* Circular Image Container Border */}
      <div className="w-full aspect-square max-w-[140px] mx-auto mb-3">
        <div className="w-full h-full rounded-full overflow-hidden border-2 border-orange-500 bg-[#2a2d36]">
          <img
            src={imageUrl}
            alt={name}
            draggable={false}
            onDragStart={(e) => e.preventDefault()}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110 select-none"
            loading="lazy"
          />
        </div>
      </div>

      {/* Content */}
      <div className="text-center">
        <p className="text-sm sm:text-base font-bold text-white mb-2 line-clamp-1">
          {name}
        </p>
        <p className="text-xs sm:text-[13px] text-[#8b9099] line-clamp-2 px-1">
          {description}
        </p>
      </div>
    </div>
  );
}
