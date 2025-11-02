"use client";
import { LibraryIcons } from "@/constants/libraryIcons";
import type { LibraryTabsProps } from "@/types/interfaces/library";

const tabs = [
  {
    id: "lich-su",
    label: "Lịch sử nghe",
    icon: LibraryIcons.History,
  },
  {
    id: "da-mua",
    label: "Đã mua",
    icon: LibraryIcons.Purchased,
  },
  {
    id: "danh-dau",
    label: "Đánh dấu",
    icon: LibraryIcons.Bookmark,
  },
  {
    id: "thich",
    label: "Thích",
    icon: LibraryIcons.Favorite,
  },
];

export default function LibraryTabs({
  activeTab,
  onTabChange,
}: LibraryTabsProps) {
  return (
    <div className="flex items-center gap-2 border-b border-[#2a2d36] overflow-x-auto no-scrollbar">
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id;
        const isThich = tab.id === "thich";

        // Determine colors based on active state - all tabs use orange when active
        const iconColorClass = isActive ? "text-orange-500" : "text-[#abafbb]";

        const textColorClass = isActive ? "text-orange-500" : "text-[#abafbb]";

        const borderColorClass = isActive
          ? "border-orange-500"
          : "border-transparent";

        return (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`flex items-center gap-2 px-4 py-3 transition-colors whitespace-nowrap border-b-2 ${borderColorClass}`}
          >
            <span
              className={`transition-colors ${
                isActive && isThich ? "bg-orange-500/20 rounded-full p-1" : ""
              } ${iconColorClass}`}
            >
              {tab.icon}
            </span>
            <span
              className={`text-sm font-medium transition-colors ${textColorClass}`}
            >
              {tab.label}
            </span>
          </button>
        );
      })}
    </div>
  );
}
