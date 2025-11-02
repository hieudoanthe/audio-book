"use client";
import {
  PageHeader,
  CategoryFilter,
  CategoryContentGrid,
  CopyrightPartners,
} from "@/components/content";
import type { CategoryViewProps } from "@/types/interfaces/content";
import type { ContentTypeConfig } from "@/config/contentTypes";

export default function CategoryView({
  activeCategory,
  categoryTitle,
  categoryItems,
  onCategoryChange,
  config,
}: CategoryViewProps & { config: ContentTypeConfig }) {
  return (
    <div className="space-y-8 pb-12">
      <PageHeader
        title={config.title}
        breadcrumbs={[
          { label: "Trang chủ", href: "/" },
          { label: config.title, href: config.route },
          { label: categoryTitle },
        ]}
      />

      <CategoryFilter
        categories={config.categories}
        activeCategory={activeCategory}
        onCategoryChange={onCategoryChange}
      />

      <CategoryContentGrid
        title={categoryTitle}
        items={categoryItems}
        baseRoute={config.route}
      />

      <CopyrightPartners />
    </div>
  );
}
