"use client";
import type { CartHeaderProps } from "@/types/interfaces/cart";

export default function CartHeader({
  cartCount,
  isAllSelected,
  onSelectAll,
  onDeleteSelected,
  hasSelectedItems,
}: CartHeaderProps) {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl sm:text-3xl font-bold text-white">Giỏ hàng</h1>

      {cartCount > 0 && (
        <div className="flex items-center gap-4 p-4 rounded-lg bg-[#282b32] min-h-[52px]">
          <label className="flex items-center gap-3 cursor-pointer flex-1 min-w-0">
            <input
              type="checkbox"
              checked={isAllSelected}
              onChange={(e) => onSelectAll(e.target.checked)}
              className="w-5 h-5 rounded border-[#373945] bg-[#1e2128] text-orange-500 focus:ring-orange-500 focus:ring-2 flex-shrink-0"
            />
            <span className="text-white text-sm sm:text-base truncate">
              Chọn Tất Cả ({cartCount} Sản Phẩm)
            </span>
          </label>

          <div
            className={`flex-shrink-0 transition-all duration-200 overflow-hidden ${
              hasSelectedItems
                ? "max-w-[200px] opacity-100"
                : "max-w-0 opacity-0"
            }`}
          >
            <button
              onClick={onDeleteSelected}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-red-600 hover:bg-red-700 text-white text-sm sm:text-base whitespace-nowrap"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="flex-shrink-0"
              >
                <polyline points="3 6 5 6 21 6"></polyline>
                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
              </svg>
              <span>Xóa</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
