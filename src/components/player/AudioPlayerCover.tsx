"use client";
import type { BookDetail } from "@/types/interfaces/book";

interface AudioPlayerCoverProps {
  book: BookDetail;
}

export default function AudioPlayerCover({ book }: AudioPlayerCoverProps) {
  return (
    <div className="shrink-0 w-full lg:w-auto lg:max-w-md">
      <div className="relative aspect-square w-full max-w-md mx-auto rounded-lg overflow-hidden bg-[#2a2d36]">
        <img
          src={book.imageUrl}
          alt={book.title}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
