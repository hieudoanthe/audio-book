"use client";
import { useState, useEffect } from "react";
import { useCart } from "@/contexts/CartContext";
import CartHeader from "./CartHeader";
import CartItemList from "./CartItemList";
import CartSummary from "./CartSummary";
import type { CartItem } from "@/contexts/CartContext";

const STORAGE_KEY = "audio_book_cart";

export default function CartPage() {
  const { cart, removeSelected } = useCart();
  const [selectedItems, setSelectedItems] = useState<Set<string>>(
    new Set(cart.map((item) => item.bookId))
  );

  // Force reload from localStorage on mount to ensure we have latest data
  useEffect(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        try {
          const parsedCart: CartItem[] = JSON.parse(stored);
        } catch (error) {
          console.error("Error loading cart from localStorage:", error);
        }
      }
    }
  }, []);

  // Sync selectedItems with cart changes
  useEffect(() => {
    const cartIds = new Set(cart.map((item) => item.bookId));
    setSelectedItems((prev) => {
      const newSelected = new Set<string>();
      prev.forEach((id) => {
        if (cartIds.has(id)) {
          newSelected.add(id);
        }
      });
      return newSelected;
    });
  }, [cart]);

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelectedItems(new Set(cart.map((item) => item.bookId)));
    } else {
      setSelectedItems(new Set());
    }
  };

  const handleItemSelect = (bookId: string, checked: boolean) => {
    const newSelected = new Set(selectedItems);
    if (checked) {
      newSelected.add(bookId);
    } else {
      newSelected.delete(bookId);
    }
    setSelectedItems(newSelected);
  };

  const handleDeleteSelected = () => {
    const selectedIds = Array.from(selectedItems);
    removeSelected(selectedIds);
    setSelectedItems(new Set());
  };

  const isAllSelected = cart.length > 0 && selectedItems.size === cart.length;

  return (
    <div className="space-y-6 pb-12">
      <CartHeader
        cartCount={cart.length}
        isAllSelected={isAllSelected}
        onSelectAll={handleSelectAll}
        onDeleteSelected={handleDeleteSelected}
        hasSelectedItems={selectedItems.size > 0}
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Cart Items */}
        <div className="lg:col-span-2">
          <CartItemList
            cart={cart}
            selectedItems={selectedItems}
            onItemSelect={handleItemSelect}
          />
        </div>

        {/* Right Column - Summary */}
        <div className="lg:col-span-1">
          <CartSummary
            cart={cart}
            selectedItems={selectedItems}
          />
        </div>
      </div>
    </div>
  );
}

