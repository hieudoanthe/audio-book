"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { NavbarIcons } from "@/constants/navbarIcons";
import LoginModal from "@/components/common/auth/LoginModal";
import { useCart } from "@/contexts/CartContext";

export default function ActionButtons() {
  const router = useRouter();
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const { getCartCount } = useCart();
  const cartCount = getCartCount();

  const handleUserClick = () => {
    setIsLoginModalOpen(true);
  };

  const handleCloseLoginModal = () => {
    setIsLoginModalOpen(false);
  };

  const handleBookmarkClick = () => {
    router.push("/library?tab=danh-dau");
  };

  const handleCartClick = () => {
    router.push("/cart");
  };

  return (
    <div className="flex items-center gap-1 sm:gap-2 md:gap-3 shrink-0 ml-auto">
      {/* Bookmark button */}
      <button
        className="rounded px-2 sm:px-3 py-2 text-xs sm:text-sm hover:bg-[#282b32] hover:text-white whitespace-nowrap shrink-0"
        aria-label="Đánh dấu"
        onClick={handleBookmarkClick}
      >
        <span className="hidden sm:inline">{NavbarIcons.Bookmark.Desktop}</span>
        <span className="sm:hidden text-base">
          {NavbarIcons.Bookmark.Mobile}
        </span>
      </button>

      {/* Notification button */}
      <button
        className="rounded px-2 sm:px-3 py-2 text-xs sm:text-sm hover:bg-[#282b32] hover:text-white whitespace-nowrap shrink-0"
        aria-label="Thông báo"
      >
        <span className="hidden sm:inline">
          {NavbarIcons.Notification.Desktop}
        </span>
        <span className="sm:hidden text-base">
          {NavbarIcons.Notification.Mobile}
        </span>
      </button>

      {/* Cart button */}
      <button
        className="relative rounded px-2 sm:px-3 py-2 text-xs sm:text-sm hover:bg-[#282b32] hover:text-white whitespace-nowrap shrink-0"
        aria-label="Giỏ hàng"
        onClick={handleCartClick}
      >
        <span className="hidden sm:inline">{NavbarIcons.Cart.Desktop}</span>
        <span className="sm:hidden text-base">{NavbarIcons.Cart.Mobile}</span>
        {cartCount > 0 && (
          <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-orange-500 text-white text-xs font-bold flex items-center justify-center">
            {cartCount > 9 ? "9+" : cartCount}
          </span>
        )}
      </button>

      {/* User avatar button */}
      <button
        className="rounded-full h-7 w-7 sm:h-8 sm:w-8 bg-zinc-700 shrink-0 hover:bg-[#282b32] hover:text-white"
        aria-label="User"
        onClick={handleUserClick}
      />

      {/* Login Modal */}
      <LoginModal isOpen={isLoginModalOpen} onClose={handleCloseLoginModal} />
    </div>
  );
}
