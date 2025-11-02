import type { EmblaOptionsType } from "embla-carousel";

export interface EmblaCarouselProps {
  children: React.ReactNode;
  className?: string;
  trackClassName?: string;
  slideClassName?: string;
  options?: EmblaOptionsType;
}

export interface CarouselProps {
  children: React.ReactNode;
  className?: string;
  trackClassName?: string;
  slideClassName?: string;
  options?: EmblaOptionsType;
}