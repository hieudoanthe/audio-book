"use client";
import { useRouter } from "next/navigation";
import { useCart } from "@/contexts/CartContext";
import type { CartItem } from "@/contexts/CartContext";
import type { CartItemListProps } from "@/types/interfaces/cart";

export default function CartItemList({
  cart,
  selectedItems,
  onItemSelect,
}: CartItemListProps) {
  const router = useRouter();
  const { removeFromCart } = useCart();

  const handleItemClick = (bookId: string) => {
    // Try to find which category the book belongs to
    const categories: Array<
      "books" | "stories" | "podcast" | "summaries" | "kids"
    > = ["books", "stories", "podcast", "summaries", "kids"];

    for (const category of categories) {
      router.push(`/${category}/${bookId}`);
      return;
    }
  };

  const handleDelete = (e: React.MouseEvent, bookId: string) => {
    e.stopPropagation();
    removeFromCart(bookId);
  };

  if (cart.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-[#abafbb] text-lg">Giỏ hàng trống</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {cart.map((item) => (
        <div
          key={item.bookId}
          className="flex items-center gap-4 p-4 rounded-lg bg-[#282b32] hover:bg-[#2a2d36] transition-colors cursor-pointer group"
          onClick={() => handleItemClick(item.bookId)}
        >
          {/* Checkbox */}
          <label className="shrink-0 cursor-pointer">
            <input
              type="checkbox"
              checked={selectedItems.has(item.bookId)}
              onChange={(e) => {
                e.stopPropagation();
                onItemSelect(item.bookId, e.target.checked);
              }}
              className="w-5 h-5 rounded border-[#373945] bg-[#1e2128] text-orange-500 focus:ring-orange-500 focus:ring-2"
              onClick={(e) => e.stopPropagation()}
              aria-label={`Chọn ${item.bookTitle}`}
            />
          </label>

          {/* Product Image */}
          <div className="shrink-0 w-20 h-20 sm:w-24 sm:h-24 rounded-lg overflow-hidden bg-[#2a2d36]">
            <img
              src={item.bookImageUrl}
              alt={item.bookTitle}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Product Info */}
          <div className="flex-1 min-w-0">
            <h3 className="text-white text-sm sm:text-base font-semibold mb-1 line-clamp-2 group-hover:text-orange-500 transition-colors">
              {item.bookTitle}
            </h3>
            <p className="text-[#abafbb] text-xs sm:text-sm mb-1">
              Tác giả: {item.author}
            </p>
            {item.duration && (
              <p className="text-[#abafbb] text-xs sm:text-sm">
                Thời lượng: {item.duration}
              </p>
            )}
          </div>

          {/* Price and Delete */}
          <div className="flex items-center gap-4 shrink-0">
            <span className="text-white text-sm sm:text-base font-semibold whitespace-nowrap">
              {item.price.toLocaleString("vi-VN")}₫
            </span>
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleDelete(e, item.bookId);
              }}
              className="text-[#abafbb] hover:text-white transition-colors shrink-0 opacity-0 group-hover:opacity-100"
              aria-label="Xóa"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="3 6 5 6 21 6"></polyline>
                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
              </svg>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
