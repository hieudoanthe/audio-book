"use client";
import { SidebarIcons } from "@/constants/sidebarIcons";
import type { CategoryFiltersProps } from "@/types/interfaces/ranking";

const categories: Array<{
  value: "books" | "stories" | "podcast" | "summaries" | "kids";
  label: string;
  icon: React.ReactNode;
}> = [
  { value: "books", label: "Sách nói", icon: SidebarIcons.Book },
  { value: "stories", label: "Truyện nói", icon: SidebarIcons.Story },
  { value: "podcast", label: "Podcast", icon: SidebarIcons.Podcast },
  { value: "summaries", label: "Sách tóm tắt", icon: SidebarIcons.Summary },
  { value: "kids", label: "Thiếu nhi", icon: SidebarIcons.Kids },
];

export default function CategoryFilters({
  activeCategory,
  onCategoryChange,
}: CategoryFiltersProps) {
  return (
    <div className="flex items-center gap-3 mb-6 overflow-x-auto pb-2">
      {categories.map((category) => (
        <button
          key={category.value}
          onClick={() => onCategoryChange(category.value)}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors whitespace-nowrap shrink-0 ${
            activeCategory === category.value
              ? "bg-blue-500 text-white"
              : "bg-[#282b32] text-[#abafbb] hover:bg-[#2a2d36] hover:text-white"
          }`}
        >
          <span className="shrink-0">{category.icon}</span>
          <span className="text-sm sm:text-base">{category.label}</span>
        </button>
      ))}
    </div>
  );
}
