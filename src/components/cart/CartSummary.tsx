"use client";
import { useRouter } from "next/navigation";
import { useCart } from "@/contexts/CartContext";
import type { CartItem } from "@/contexts/CartContext";
import type { CartSummaryProps } from "@/types/interfaces/cart";

export default function CartSummary({
  cart,
  selectedItems,
}: CartSummaryProps) {
  const router = useRouter();

  const selectedCartItems = cart.filter((item) =>
    selectedItems.has(item.bookId)
  );

  const promotion = 0; // TODO: Calculate promotion
  const total = selectedCartItems.reduce(
    (sum, item) => sum + item.price,
    0
  );
  const finalTotal = total - promotion;

  const handleCheckout = () => {
    // TODO: Implement checkout logic
    router.push("/checkout");
  };

  return (
    <div className="bg-[#282b32] rounded-lg p-6 space-y-4 sticky top-6">
      <h2 className="text-lg font-bold text-white mb-4">Tóm tắt đơn hàng</h2>

      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <span className="text-[#abafbb] text-sm">Khuyến mãi</span>
          <span className="text-white text-sm font-semibold">
            {promotion.toLocaleString("vi-VN")}₫
          </span>
        </div>

        <div className="flex justify-between items-center pt-3 border-t border-[#373945]">
          <span className="text-white text-base font-semibold">Tổng cộng</span>
          <span className="text-white text-base font-bold">
            {finalTotal.toLocaleString("vi-VN")}₫
          </span>
        </div>

        <p className="text-[#abafbb] text-xs">
          Đã bao gồm VAT(nếu có)
        </p>
      </div>

      <button
        onClick={handleCheckout}
        disabled={selectedCartItems.length === 0}
        className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Tiến hành thanh toán
      </button>
    </div>
  );
}

