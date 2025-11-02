"use client";
import { useCallback, useEffect, useState, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { AuthorCard } from "../book";
import { mockFeaturedAuthors as items } from "../../mocks/books";

const CARDS_PER_PAGE = 5;

export default function FeaturedAuthors() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    containScroll: false,
    dragFree: true,
    loop: false,
    watchResize: true,
    watchSlides: true,
  });
  const [selectedSlide, setSelectedSlide] = useState(0);
  const firstCardRef = useRef<HTMLDivElement>(null);
  const [buttonTop, setButtonTop] = useState("50%");

  const totalDots = Math.ceil(items.length / CARDS_PER_PAGE);
  const activeDot = Math.floor(selectedSlide / CARDS_PER_PAGE);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedSlide(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect as any);
      emblaApi.off("reInit", onSelect as any);
    };
  }, [emblaApi, onSelect]);

  useEffect(() => {
    const calculateButtonPosition = () => {
      if (!firstCardRef.current) return;
      const cardWrapper = firstCardRef.current;
      const cardElement = cardWrapper.firstElementChild as HTMLElement;
      if (!cardElement) return;

      // Tìm circular image container trong AuthorCard
      const imageContainer = cardElement.querySelector(
        'div[class*="rounded-full"]'
      ) as HTMLElement;
      if (!imageContainer) return;

      const imageHeight =
        imageContainer.clientHeight || imageContainer.offsetHeight;
      const cardHeight = cardElement.clientHeight || cardElement.offsetHeight;

      if (imageHeight > 0 && cardHeight > 0) {
        // Tính vị trí giữa ảnh tròn
        const imageCenter = imageHeight / 2;
        const topPercent = (imageCenter / cardHeight) * 100;
        setButtonTop(`${topPercent}%`);
      }
    };

    const timeoutId = setTimeout(() => {
      calculateButtonPosition();
    }, 200);

    const handleReInit = () => {
      setTimeout(calculateButtonPosition, 100);
    };

    if (emblaApi) {
      emblaApi.on("reInit", handleReInit);
      emblaApi.on("resize", calculateButtonPosition);
    }

    window.addEventListener("resize", calculateButtonPosition);
    return () => {
      clearTimeout(timeoutId);
      if (emblaApi) {
        emblaApi.off("reInit", handleReInit);
        emblaApi.off("resize", calculateButtonPosition);
      }
      window.removeEventListener("resize", calculateButtonPosition);
    };
  }, [items, emblaApi]);

  const scrollToDot = (dotIndex: number) => {
    if (!emblaApi) return;
    const targetSlide = dotIndex * CARDS_PER_PAGE;
    emblaApi.scrollTo(targetSlide, false);
  };

  return (
    <section className="mb-10">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl sm:text-2xl md:text-2xl font-bold text-white">
          Tác giả nổi bật
        </h2>

        {/* Dots */}
        <div className="flex items-center gap-2">
          {Array.from({ length: totalDots }).map((_, i) => (
            <button
              key={i}
              onClick={() => scrollToDot(i)}
              aria-label={`Go to page ${i + 1}`}
              className={`h-2.5 w-2.5 rounded-full transition-colors cursor-pointer ${
                activeDot === i ? "bg-orange-500" : "bg-[#555a66]"
              }`}
            />
          ))}
        </div>
      </div>

      <div className="relative">
        <div ref={emblaRef} className="overflow-hidden">
          <div className="flex gap-2 md:gap-3 lg:pr-12 xl:pr-12">
            {items.map((author, idx) => (
              <div
                key={author.id}
                ref={idx === 0 ? firstCardRef : undefined}
                className="flex-none w-[120px] sm:w-[140px] md:w-[160px] lg:basis-[19.9%] xl:basis-[19.9%]"
              >
                <AuthorCard {...author} />
              </div>
            ))}
          </div>
        </div>

        <button
          aria-label="Prev"
          onClick={() => emblaApi?.scrollPrev()}
          style={{ top: buttonTop, transform: "translateY(-50%)" }}
          className="hidden sm:flex absolute left-1 h-6 w-6 items-center justify-center rounded-full bg-purple-600 text-white hover:text-white hover:bg-purple-700 shadow-md z-10"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-chevron-left"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"
            />
          </svg>
        </button>
        <button
          aria-label="Next"
          onClick={() => emblaApi?.scrollNext()}
          style={{ top: buttonTop, transform: "translateY(-50%)" }}
          className="hidden sm:flex absolute right-1 h-6 w-6 items-center justify-center rounded-full bg-purple-600 text-white hover:text-white hover:bg-purple-700 shadow-md z-10"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-chevron-right"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
            />
          </svg>
        </button>
      </div>
    </section>
  );
}
