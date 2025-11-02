"use client";
import { useState } from "react";
import Carousel from "@/components/common/Carousel";
import type { CategoryFilterProps } from "@/types/interfaces/content";

const INITIAL_CATEGORIES_COUNT = 8;

export default function CategoryFilter({
  categories,
  activeCategory,
  onCategoryChange,
}: CategoryFilterProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const displayedCategories = isExpanded
    ? categories
    : categories.slice(0, INITIAL_CATEGORIES_COUNT);
  const hasMoreCategories = categories.length > INITIAL_CATEGORIES_COUNT;

  if (isExpanded) {
    return (
      <div className="space-y-2">
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => {
            const isActive = category === activeCategory;
            return (
              <button
                key={category}
                onClick={() => onCategoryChange(category)}
                className={`inline-flex items-center rounded-full px-4 py-2 text-sm font-medium transition-all hover:scale-105 ${
                  isActive
                    ? "bg-white text-black"
                    : "bg-[#2a2d36] text-[#abafbb] hover:text-brand"
                }`}
              >
                {category}
              </button>
            );
          })}
          {hasMoreCategories && (
            <button
              onClick={() => setIsExpanded(false)}
              className="inline-flex items-center rounded-full px-4 py-2 text-sm font-medium bg-[#2a2d36] text-[#abafbb] hover:text-white hover:bg-[#3a3d46] transition-all"
            >
              Thu gọn
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="ml-1"
              >
                <path d="M18 15l-6-6-6 6" />
              </svg>
            </button>
          )}
        </div>
      </div>
    );
  }

  return (
    <div>
      <Carousel
        className="select-none"
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
        {displayedCategories.map((category) => {
          const isActive = category === activeCategory;
          return (
            <button
              key={category}
              onClick={() => onCategoryChange(category)}
              className={`flex-none inline-flex items-center rounded-full px-4 py-2 text-sm font-medium transition-all hover:scale-105 ${
                isActive
                  ? "bg-white text-black"
                  : "bg-[#2a2d36] text-[#abafbb] hover:text-brand"
              }`}
            >
              {category}
            </button>
          );
        })}
        {hasMoreCategories && (
          <button
            onClick={() => setIsExpanded(true)}
            className="flex-none inline-flex items-center rounded-full px-4 py-2 text-sm font-medium bg-[#2a2d36] text-[#abafbb] hover:text-white hover:bg-[#3a3d46] transition-all"
          >
            Xem thêm
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="ml-1"
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
          </button>
        )}
      </Carousel>
    </div>
  );
}

