"use client";
import Link from "next/link";
import { BookCard } from "@/components/book";
import Carousel from "@/components/common/Carousel";
import type { ContentSectionProps } from "@/types/interfaces/content";

export default function ContentSection({
  title,
  items,
  category,
  onCategoryChange,
  baseRoute = "/books",
}: ContentSectionProps) {
  const handleTitleClick = () => {
    if (category && onCategoryChange) {
      onCategoryChange(category);
    }
  };

  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between">
        <Link
          href={`${baseRoute}?category=${encodeURIComponent(title)}`}
          onClick={handleTitleClick}
          className="text-xl sm:text-2xl font-bold text-white hover:text-orange-500 transition-colors flex items-center gap-2"
        >
          {title}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="relative top-[2px] shrink-0"
            style={{ width: "1em", height: "1em" }}
          >
            <path d="M9 6l6 6-6 6" />
          </svg>
        </Link>
      </div>

      <Carousel
        className="select-none"
        trackClassName="gap-1.5 md:gap-3"
        slideClassName="flex-none w-[120px] sm:w-[140px] md:w-[160px] lg:basis-[19.9%] xl:basis-[19.9%]"
        options={{
          align: "start",
          containScroll: false,
          dragFree: true,
          loop: false,
          watchResize: true,
          watchSlides: true,
        }}
      >
        {items.map((item) => (
          <BookCard
            key={item.id}
            id={item.id}
            title={item.title}
            author={item.author}
            imageUrl={item.imageUrl}
            onClick={() => {
              window.location.href = `${baseRoute}/${item.id}`;
            }}
          />
        ))}
      </Carousel>
    </section>
  );
}

