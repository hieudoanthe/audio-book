"use client";
import type { BookDetail, Chapter } from "@/types/interfaces/book";

interface AudioPlayerInfoProps {
  book: BookDetail;
  chapter: Chapter;
}

export default function AudioPlayerInfo({
  book,
  chapter,
}: AudioPlayerInfoProps) {
  return (
    <div>
      <h1 className="text-white text-2xl lg:text-3xl font-bold mb-4">
        {chapter.title}
      </h1>
      <div className="space-y-4 text-base text-[#abafbb]">
        {book.author && (
          <p>
            <span className="text-[#abafbb]">Tác giả:</span>{" "}
            <span className="text-white">{book.author}</span>
          </p>
        )}
        {book.duration && (
          <p>
            <span className="text-[#abafbb]">Thời lượng:</span>{" "}
            <span className="text-white">{book.duration}</span>
          </p>
        )}
        {book.channel && (
          <p>
            <span className="text-[#abafbb]">Kênh:</span>{" "}
            <span className="text-white">{book.channel}</span>
          </p>
        )}
        {book.narrator && (
          <p>
            <span className="text-[#abafbb]">Người đọc:</span>{" "}
            <span className="text-white">{book.narrator}</span>
          </p>
        )}
      </div>
    </div>
  );
}
