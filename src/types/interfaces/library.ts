import type { BookDetail, Chapter } from "./book";

export interface FavoriteItem {
  bookId: string;
  bookTitle: string;
  bookImageUrl: string;
  author: string;
  duration?: string;
  addedAt: number; // timestamp
}

export interface BookmarkItem {
  bookId: string;
  bookTitle: string;
  bookImageUrl: string;
  author: string;
  duration?: string;
  addedAt: number; // timestamp
}

export interface HistoryItem {
  bookId: string;
  bookTitle: string;
  bookImageUrl: string;
  author: string;
  duration?: string;
  listenedAt: number; // timestamp - when user listened
}

export interface LibraryTab {
  id: string;
  label: string;
  icon: React.ReactNode;
}

export interface LibraryTabsProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}
