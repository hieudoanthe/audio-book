"use client";
import Carousel from "../common/Carousel";
import { BookCard } from "../book";
import { mockNewContents as items } from "../../mocks/books";

export default function NewContents() {
  return (
    <section className="mb-10 bg-[#282b32] py-6 -mx-6 lg:-mx-10 -mr-4 lg:-mr-6">
      <div className="px-6 lg:px-10 pr-4 lg:pr-6">
        <h2 className="text-xl sm:text-2xl md:text-2xl font-bold mb-2 text-white">
          Nội dung mới cho bạn
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
              window.location.href = `/books/${b.id}?source=new`;
            }}
            />
          ))}
        </Carousel>
      </div>
    </section>
  );
}
