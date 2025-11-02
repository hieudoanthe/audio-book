"use client";
import { BookCard } from "../../book";
import type { RelatedBooksSectionProps } from "@/types/interfaces/content";

export default function RelatedBooksSection({
  books,
  baseRoute,
}: RelatedBooksSectionProps) {
  if (!books || books.length === 0) return null;

  return (
    <section>
      <h2 className="text-xl font-bold text-white mb-4">
        Có thể bạn muốn nghe
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {books.map((relatedBook) => (
          <BookCard
            key={relatedBook.id}
            id={relatedBook.id}
            title={relatedBook.title}
            author={relatedBook.author}
            imageUrl={relatedBook.imageUrl}
            onClick={() => {
              window.location.href = `${baseRoute}/${relatedBook.id}`;
            }}
          />
        ))}
      </div>
    </section>
  );
}

