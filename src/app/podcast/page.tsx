"use client";
import { Suspense } from "react";
import { CategoryView, SectionsView } from "@/components/content";
import { useContentPageLogic } from "@/hooks/useContentPageLogic";
import { podcastConfig } from "@/config/contentTypes";

function PodcastPageContent() {
  const {
    activeCategory,
    categoryItems,
    categoryTitle,
    filteredSections,
    handleCategoryChange,
  } = useContentPageLogic(podcastConfig);

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
        config={podcastConfig}
      />
    );
  }

  return (
    <SectionsView
      activeCategory={activeCategory}
      filteredSections={filteredSections}
      onCategoryChange={handleCategoryChange}
      config={podcastConfig}
    />
  );
}

export default function PodcastPage() {
  return (
    <Suspense fallback={<div className="p-8 text-white">Loading...</div>}>
      <PodcastPageContent />
    </Suspense>
  );
}
