"use client";
import { useRouter } from "next/navigation";
import type {
  NotableAuthorsProps,
  AuthorBasic,
} from "@/types/interfaces/author";

export default function NotableAuthors({ authors }: NotableAuthorsProps) {
  const router = useRouter();

  const handleAuthorClick = (author: AuthorBasic) => {
    router.push(`/authors/${author.id}`);
  };

  return (
    <section className="bg-[#1e2128] rounded-lg p-4 sm:p-6">
      <h2 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">
        Tác giả nổi bật
      </h2>
      <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 gap-4 sm:gap-6">
        {authors.map((author) => (
          <div
            key={author.id}
            className="flex flex-col items-center cursor-pointer group"
            onClick={() => handleAuthorClick(author)}
          >
            {/* Circular Profile Picture */}
            <div className="w-20 h-20 sm:w-24 sm:h-24 mb-2 sm:mb-3">
              <div className="w-full h-full rounded-full overflow-hidden border-2 border-[#2a2d36] bg-[#2a2d36] group-hover:border-orange-500 transition-colors">
                <img
                  src={author.imageUrl}
                  alt={author.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Author Name */}
            <p className="text-xs sm:text-sm text-white text-center line-clamp-2 group-hover:text-orange-500 transition-colors">
              {author.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
