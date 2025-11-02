"use client";
import { useState, useMemo } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import type { ContentTypeConfig } from "@/config/contentTypes";

export function useContentPageLogic(config: ContentTypeConfig) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const categoryParam = searchParams.get("category");

  const [activeCategory, setActiveCategory] = useState<string>(() => {
    if (categoryParam) {
      const category = config.getCategoryFromTitle(categoryParam);
      return category || config.categories[0];
    }
    return config.categories[0];
  });

  // Get items for selected category
  const categoryItems = useMemo(() => {
    if (activeCategory === "Tất cả") {
      return null;
    }
    return config.getCategoryItems(activeCategory);
  }, [activeCategory, config]);

  // Get section title for selected category
  const categoryTitle = useMemo(() => {
    if (activeCategory === "Tất cả") {
      return null;
    }
    // First try to get from sections
    const section = config.sections.find((s) => s.category === activeCategory);
    if (section) {
      return section.title;
    }
    return activeCategory;
  }, [activeCategory, config]);

  const filteredSections = useMemo(() => {
    if (activeCategory === "Tất cả") {
      return config.sections;
    }
    return config.sections.filter((section) => {
      const categoryMatch = section.title
        .toLowerCase()
        .includes(activeCategory.toLowerCase());
      return categoryMatch;
    });
  }, [activeCategory, config]);

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    const section = config.sections.find((s) => s.category === category);
    const title = section?.title || category;
    const newUrl =
      category === "Tất cả"
        ? config.route
        : `${config.route}?category=${encodeURIComponent(title)}`;
    router.replace(newUrl);
  };

  return {
    activeCategory,
    categoryItems,
    categoryTitle,
    filteredSections,
    handleCategoryChange,
    config,
  };
}
