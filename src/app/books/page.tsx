"use client";
import { Suspense } from "react";
import { CategoryView, SectionsView } from "@/components/content";
import { useContentPageLogic } from "@/hooks/useContentPageLogic";
import { booksConfig } from "@/config/contentTypes";

function BooksPageContent() {
  const {
    activeCategory,
    categoryItems,
    categoryTitle,
    filteredSections,
    handleCategoryChange,
  } = useContentPageLogic(booksConfig);

  if (
    categoryItems &&
    categoryItems.length > 0 &&
    categoryTitle &&
    activeCategory !== "Tất cả"
  ) {
    return (
      <CategoryView
        activeCategory={activeCategory}
        categoryTitle={categoryTitle}
        categoryItems={categoryItems}
        onCategoryChange={handleCategoryChange}
        config={booksConfig}
      />
    );
  }

  return (
    <SectionsView
      activeCategory={activeCategory}
      filteredSections={filteredSections}
      onCategoryChange={handleCategoryChange}
      config={booksConfig}
    />
  );
}

export default function BooksPage() {
  return (
    <Suspense fallback={<div className="p-8 text-white">Loading...</div>}>
      <BooksPageContent />
    </Suspense>
  );
}
