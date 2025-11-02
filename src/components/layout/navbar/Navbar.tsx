"use client";
import { useState } from "react";
import { SearchModal } from "../../common/search";
import { NavbarIcons } from "@/constants/navbarIcons";
import SearchSection from "./SearchSection";
import ActionButtons from "./ActionButtons";

interface NavbarProps {
  onMenuClick: () => void;
}

export default function Navbar({ onMenuClick }: NavbarProps) {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [modalWidth, setModalWidth] = useState<number | null>(null);

  return (
    <>
      <header className="sticky top-0 z-10 h-14 border-b bg-[#1e2128] text-[#abafbb] flex items-center px-2 sm:px-4 gap-2 sm:gap-4 min-w-0 overflow-hidden">
        {/* Hamburger menu button (mobile and tablet) */}
        <button
          onClick={onMenuClick}
          className="lg:hidden rounded p-2 hover:bg-[#282b32] hover:text-white shrink-0"
          aria-label="Mở menu"
        >
          {NavbarIcons.Menu}
        </button>
        <SearchSection
          onSearchOpen={() => setIsSearchOpen(true)}
          modalWidth={modalWidth}
        />
        <ActionButtons />
      </header>
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onWidthChange={setModalWidth}
      />
    </>
  );
}
