import type { CartItem } from "@/contexts/CartContext";

export interface CartHeaderProps {
  cartCount: number;
  isAllSelected: boolean;
  onSelectAll: (checked: boolean) => void;
  onDeleteSelected: () => void;
  hasSelectedItems: boolean;
}

export interface CartItemListProps {
  cart: CartItem[];
  selectedItems: Set<string>;
  onItemSelect: (bookId: string, checked: boolean) => void;
}

export interface CartSummaryProps {
  cart: CartItem[];
  selectedItems: Set<string>;
}

