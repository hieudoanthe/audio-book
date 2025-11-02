"use client";
import Carousel from "../common/Carousel";
import { mockNewContents as items } from "@/mocks/books";

export default function CopyrightPartners() {
  return (
    <section className="mt-8 bg-[#282b32] py-6 -ml-6 lg:-ml-10 -mr-4 lg:-mr-6">
      <div className="px-6 lg:px-10 pr-4 lg:pr-6">
        <h2 className="text-xl sm:text-2xl md:text-2xl font-bold mb-2 text-white">
          Đối tác bản quyền
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
          {items.map((item) => (
            <div
              key={item.id}
              className="group cursor-pointer"
              role="button"
              aria-label={`Đối tác ${item.id}`}
            >
              <div className="aspect-square w-full overflow-hidden rounded-lg bg-[#2a2d36] flex items-center justify-center">
                <img
                  src={item.imageUrl}
                  alt={`Đối tác ${item.id}`}
                  draggable={false}
                  onDragStart={(e) => e.preventDefault()}
                  className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105 select-none p-4"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
}
