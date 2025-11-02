"use client";
import Carousel from "../common/Carousel";
import { BookCard } from "../book";
import {
  mockAllQualityBooks as allQualityBooks,
  mockQualityBooksCategories as categories,
  mockSingleQualityBooksCategory as singleQualityBooksCategory,
} from "@/mocks/books";
import { useMemo, useState } from "react";
import Link from "next/link";

const CATEGORIES = categories;

export default function QualityBooksSection() {
  const [activeCat, setActiveCat] = useState<string>(CATEGORIES[0]);
  const data = useMemo(() => {
    if (activeCat === "Tất cả") return allQualityBooks;
    return singleQualityBooksCategory[activeCat] ?? allQualityBooks;
  }, [activeCat]);

  return (
    <section className="mb-10">
      <div className="mb-4 flex items-center gap-2">
        <Link
          href="/books"
          className="text-xl sm:text-2xl md:text-2xl font-bold mb-2 text-white flex items-center gap-2 transition-colors hover:text-brand "
        >
          Sách nói chất lượng
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="relative top-[4px] shrink-0"
            style={{ width: "1em", height: "1em" }}
          >
            <path d="M9 6l6 6-6 6" />
          </svg>
        </Link>
      </div>

      {/* Category pills */}
      <Carousel
        className="mb-4 select-none"
        trackClassName="gap-2"
        options={{
          align: "start",
          containScroll: false,
          dragFree: true,
          loop: false,
          watchResize: true,
          watchSlides: true,
        }}
      >
        {CATEGORIES.map((c) => {
          const active = c === activeCat;
          return (
            <button
              key={c}
              onClick={() => setActiveCat(c)}
              className={`flex-none mr-2 mb-2 inline-flex items-center rounded-full px-3 py-1.5 text-sm transition-all hover:scale-105 ${
                active
                  ? "bg-white text-black"
                  : "bg-[#2a2d36] text-[#abafbb] hover:text-brand"
              }`}
            >
              {c}
            </button>
          );
        })}
      </Carousel>

      {/* Slider */}
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
        {data.map((b) => (
          <BookCard
            key={b.id}
            id={b.id}
            title={b.title}
            author={b.author}
            imageUrl={b.imageUrl}
            onClick={() => {
              window.location.href = `/books/${b.id}`;
            }}
          />
        ))}
      </Carousel>
    </section>
  );
}
