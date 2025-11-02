"use client";
import { Suspense } from "react";
import { CategoryView, SectionsView } from "@/components/content";
import { useContentPageLogic } from "@/hooks/useContentPageLogic";
import { storiesConfig } from "@/config/contentTypes";

function StoriesPageContent() {
  const {
    activeCategory,
    categoryItems,
    categoryTitle,
    filteredSections,
    handleCategoryChange,
  } = useContentPageLogic(storiesConfig);

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
        config={storiesConfig}
      />
    );
  }

  return (
    <SectionsView
      activeCategory={activeCategory}
      filteredSections={filteredSections}
      onCategoryChange={handleCategoryChange}
      config={storiesConfig}
    />
  );
}

export default function StoriesPage() {
  return (
    <Suspense fallback={<div className="p-8 text-white">Loading...</div>}>
      <StoriesPageContent />
    </Suspense>
  );
}

