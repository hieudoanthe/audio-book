"use client";
import React, { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import type { CarouselProps } from "../../types/interfaces/slider";

export default function Carousel({
  children,
  className,
  trackClassName,
  slideClassName,
  options,
}: CarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      align: "start",
      containScroll: "trimSnaps",
      dragFree: false,
      skipSnaps: false,
      loop: false,
      watchResize: true,
      watchSlides: true,
      ...(options || {}),
    },
    []
  );

  useEffect(() => {
    if (emblaApi) {
      emblaApi.reInit();
    }
  }, [emblaApi, children]);

  useEffect(() => {
    if (!emblaApi) return;

    const preventSingleCardScroll = () => {
      const slides = emblaApi.slideNodes();

      if (slides.length === 0) return;

      const isLargeScreen = window.innerWidth >= 1024;
      if (!isLargeScreen) return;

      const scrollProgress = emblaApi.scrollProgress();
      const slidesInView = emblaApi.slidesInView();
      const totalSlides = emblaApi.slideNodes().length;
      const minCardsToShow = 5;

      if (slidesInView.length < minCardsToShow && scrollProgress > 0.7) {
        const targetIndex = Math.max(0, totalSlides - minCardsToShow);
        emblaApi.scrollTo(targetIndex, false);
      }
    };

    emblaApi.on("select", preventSingleCardScroll);
    emblaApi.on("scroll", preventSingleCardScroll);

    return () => {
      emblaApi.off("select", preventSingleCardScroll);
      emblaApi.off("scroll", preventSingleCardScroll);
    };
  }, [emblaApi]);

  return (
    <div ref={emblaRef} className={`overflow-hidden ${className ?? ""}`}>
      <div
        className={`flex gap-2 md:gap-3 lg:pr-12 xl:pr-12 ${
          trackClassName ?? ""
        }`}
      >
        {React.Children.toArray(children).map((child, idx) => (
          <div
            key={(child as any)?.key ?? idx}
            className={`flex-none ${slideClassName ?? ""}`}
          >
            {child}
          </div>
        ))}
      </div>
    </div>
  );
}

