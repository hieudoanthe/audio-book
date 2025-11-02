import type { Book } from "./book";

export interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onWidthChange?: (width: number | null) => void;
}

export interface MobileSearchInputProps {
  onClose: () => void;
}

export interface PopularKeywordsSectionProps {
  keywords: string[];
  onKeywordClick: () => void;
}

export interface SuggestedBooksSectionProps {
  books: Book[];
}
