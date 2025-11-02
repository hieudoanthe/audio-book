"use client";
import { NavbarIcons } from "@/constants/navbarIcons";

interface SearchSectionProps {
  onSearchOpen: () => void;
  modalWidth: number | null;
}

export default function SearchSection({
  onSearchOpen,
  modalWidth,
}: SearchSectionProps) {
  return (
    <>
      {/* Mobile search button */}
      <button
        onClick={onSearchOpen}
        className="sm:hidden rounded p-2 hover:bg-[#282b32] hover:text-white shrink-0"
        aria-label="Tìm kiếm"
      >
        {NavbarIcons.Search}
      </button>

      {/* Desktop search input */}
      <div className="hidden sm:flex flex-1 min-w-0 basis-0">
        <input
          placeholder="Tìm kiếm"
          onFocus={onSearchOpen}
          className="w-full min-w-0 rounded border border-zinc-700 bg-[#232634] px-3 py-2 text-sm text-[#abafbb] placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
          style={
            modalWidth !== null && modalWidth !== undefined
              ? ({ maxWidth: `${modalWidth}px` } as React.CSSProperties)
              : undefined
          }
        />
      </div>
    </>
  );
}

