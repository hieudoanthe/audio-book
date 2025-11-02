"use client";
import Carousel from "../common/Carousel";
import { BookCard } from "../book";
import { mockFeaturedBooks as items } from "@/mocks/books";

export default function SuggestForBeginner() {
  return (
    <section className="mb-8">
      <h2 className="text-xl sm:text-2xl md:text-2xl font-bold mb-2 text-white">
        Gợi ý cho người mới bắt đầu
      </h2>
      <Carousel
        className="select-none"
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
        {items.map((b) => (
          <BookCard
            key={b.id}
            id={b.id}
            title={b.title}
            author={b.author}
            imageUrl={b.imageUrl}
            onClick={() => {
              // Pass source info via query parameter to identify correct book
              window.location.href = `/books/${b.id}?source=featured`;
            }}
          />
        ))}
      </Carousel>
    </section>
  );
}
