"use client";
import { useRouter } from "next/navigation";
import { useCart } from "@/contexts/CartContext";
import type { BottomActionButtonsProps } from "@/types/interfaces/content";

export default function BottomActionButtons({
  book,
}: BottomActionButtonsProps) {
  const router = useRouter();
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    if (!book) return;
    
    // Add to cart with default price (0 or book.price if available)
    addToCart(book, book.price || 0);
    
    // Navigate to cart page
    router.push("/cart");
  };

  return (
    <div className="flex gap-4 pt-6 border-t border-[#2a2d36]">
      <button
        onClick={handleAddToCart}
        className="flex-1 px-3 py-2 sm:px-4 sm:py-2.5 rounded-lg bg-[#2a2d36] hover:bg-[#3a3d46] text-white font-semibold transition-colors text-sm sm:text-base whitespace-nowrap"
      >
        Thêm vào giỏ hàng
      </button>
      <button className="flex-1 px-3 py-2 sm:px-4 sm:py-2.5 rounded-lg bg-purple-600 hover:bg-purple-700 text-white font-semibold transition-colors text-sm sm:text-base whitespace-nowrap">
        Mua gói VIP
      </button>
    </div>
  );
}
