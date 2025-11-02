"use client";
import { useEffect, useRef } from "react";
import { mockFeaturedBooks, mockPopularKeywords } from "@/mocks/books";
import type { SearchModalProps } from "@/types/interfaces/modal";
import MobileSearchInput from "./MobileSearchInput";
import PopularKeywordsSection from "./PopularKeywordsSection";
import SuggestedBooksSection from "./SuggestedBooksSection";

const popularKeywords = mockPopularKeywords;
const suggestedBooks = mockFeaturedBooks.slice(0, 12);

export default function SearchModal({
  isOpen,
  onClose,
  onWidthChange,
}: SearchModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    const updateWidth = () => {
      if (modalRef.current && isOpen && onWidthChange) {
        const width = modalRef.current.offsetWidth;
        onWidthChange(width);
      }
    };

    if (isOpen) {
      const timeoutId = setTimeout(() => {
        updateWidth();
      }, 0);
      window.addEventListener("resize", updateWidth);

      return () => {
        clearTimeout(timeoutId);
        window.removeEventListener("resize", updateWidth);
      };
    } else if (onWidthChange) {
      onWidthChange(null);
    }
  }, [isOpen, onWidthChange]);

  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed top-14 left-0 md:left-64 right-0 bottom-0 z-40 bg-black/30 backdrop-blur-sm"
        onClick={onClose}
      />

      <div
        ref={modalRef}
        className="fixed top-14 left-0 md:left-[calc(16rem+1rem)] w-full md:w-[60%] lg:w-[55%] max-h-[70vh] z-50 bg-[#1e2128] border-r border-zinc-700 shadow-2xl overflow-y-auto rounded-bl-lg rounded-br-lg thin-scrollbar"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="px-4 sm:px-6 py-4">
          <MobileSearchInput onClose={onClose} />
          <PopularKeywordsSection
            keywords={popularKeywords}
            onKeywordClick={onClose}
          />
          <SuggestedBooksSection books={suggestedBooks} />
        </div>
      </div>
    </>
  );
}
