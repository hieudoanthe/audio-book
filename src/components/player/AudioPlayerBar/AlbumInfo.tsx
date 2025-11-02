"use client";
import { useAudioPlayer } from "@/contexts/AudioPlayerContext";
import { useFavorites } from "@/hooks/useFavorites";
import type { BookDetail, Chapter } from "@/types/interfaces/book";

interface AlbumInfoProps {
  book: BookDetail;
  chapter: Chapter;
}

export default function AlbumInfo({ book, chapter }: AlbumInfoProps) {
  const { isFavorite, addFavorite, removeFavorite } = useFavorites();
  const favorite = isFavorite(book.id);

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.stopPropagation();

    const favoriteItem = {
      bookId: book.id,
      bookTitle: book.title,
      bookImageUrl: book.imageUrl,
      author: book.author || "Đang cập nhật",
      duration: book.duration,
      addedAt: Date.now(),
    };

    if (favorite) {
      removeFavorite(book.id);
    } else {
      addFavorite(favoriteItem);
    }
  };

  return (
    <div className="flex items-center gap-3 min-w-0 shrink-0">
      <div className="w-14 h-14 rounded-full overflow-hidden bg-[#2a2d36] shrink-0">
        <img
          src={book.imageUrl}
          alt={book.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-white text-sm font-semibold truncate">
          {chapter.title}
        </p>
        <p className="text-[#abafbb] text-xs truncate">
          Tác giả: {book.author}
        </p>
      </div>
      <button
        onClick={handleFavoriteClick}
        className={`shrink-0 transition-colors ${
          favorite
            ? "text-orange-500 hover:text-orange-400"
            : "text-[#abafbb] hover:text-white"
        }`}
        aria-label={favorite ? "Bỏ yêu thích" : "Yêu thích"}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill={favorite ? "currentColor" : "none"}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>
      </button>
    </div>
  );
}
