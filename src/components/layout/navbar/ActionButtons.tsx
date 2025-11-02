"use client";
import { NavbarIcons } from "@/constants/navbarIcons";

export default function ActionButtons() {
  return (
    <div className="flex items-center gap-1 sm:gap-2 md:gap-3 shrink-0 ml-auto">
      {/* Bookmark button */}
      <button
        className="rounded px-2 sm:px-3 py-2 text-xs sm:text-sm hover:bg-[#282b32] hover:text-white whitespace-nowrap shrink-0"
        aria-label="Đánh dấu"
      >
        <span className="hidden sm:inline">{NavbarIcons.Bookmark.Desktop}</span>
        <span className="sm:hidden text-base">{NavbarIcons.Bookmark.Mobile}</span>
      </button>

      {/* Notification button */}
      <button
        className="rounded px-2 sm:px-3 py-2 text-xs sm:text-sm hover:bg-[#282b32] hover:text-white whitespace-nowrap shrink-0"
        aria-label="Thông báo"
      >
        <span className="hidden sm:inline">{NavbarIcons.Notification.Desktop}</span>
        <span className="sm:hidden text-base">{NavbarIcons.Notification.Mobile}</span>
      </button>

      {/* Cart button */}
      <button
        className="rounded px-2 sm:px-3 py-2 text-xs sm:text-sm hover:bg-[#282b32] hover:text-white whitespace-nowrap shrink-0"
        aria-label="Giỏ hàng"
      >
        <span className="hidden sm:inline">{NavbarIcons.Cart.Desktop}</span>
        <span className="sm:hidden text-base">{NavbarIcons.Cart.Mobile}</span>
      </button>

      {/* User avatar button */}
      <button
        className="rounded-full h-7 w-7 sm:h-8 sm:w-8 bg-zinc-700 shrink-0"
        aria-label="User"
      />
    </div>
  );
}

