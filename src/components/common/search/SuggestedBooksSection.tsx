"use client";
import { BookCard } from "../../book";
import type { SuggestedBooksSectionProps } from "@/types/interfaces/modal";

export default function SuggestedBooksSection({
  books,
}: SuggestedBooksSectionProps) {
  return (
    <div>
      <h2 className="text-lg sm:text-xl font-bold text-white mb-3">
        Có thể bạn muốn nghe
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
        {books.map((book) => (
          <BookCard
            key={book.id}
            id={book.id}
            title={book.title}
            author={book.author}
            imageUrl={book.imageUrl}
            onClick={() => {
              window.location.href = `/books/${book.id}`;
            }}
          />
        ))}
      </div>
    </div>
  );
}

