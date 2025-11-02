"use client";
import {
  PageHeader,
  CategoryFilter,
  ContentSection,
  PromotionBanner,
  ContentListGrid,
  CopyrightPartners,
} from "@/components/content";
import type { SectionsViewProps } from "@/types/interfaces/content";
import type { ContentTypeConfig } from "@/config/contentTypes";

export default function SectionsView({
  activeCategory,
  filteredSections,
  onCategoryChange,
  config,
}: SectionsViewProps & { config: ContentTypeConfig }) {
  return (
    <div className="space-y-8 pb-12">
      <PageHeader
        title={config.title}
        breadcrumbs={[
          { label: "Trang chủ", href: "/" },
          { label: config.title },
        ]}
      />

      <CategoryFilter
        categories={config.categories}
        activeCategory={activeCategory}
        onCategoryChange={onCategoryChange}
      />

      <div className="space-y-8">
        {filteredSections.map((section, index) => (
          <ContentSection
            key={index}
            title={section.title}
            items={section.items}
            category={section.category}
            onCategoryChange={onCategoryChange}
            baseRoute={config.route}
          />
        ))}
      </div>

      {activeCategory === "Tất cả" && (
        <>
          <PromotionBanner />
          <ContentListGrid
            items={config.featuredItemsWithDescriptions}
            baseRoute={config.route}
          />
        </>
      )}

      <CopyrightPartners />
    </div>
  );
}

