import type { BookDetail } from "./book";

export type RankingCategory =
  | "books"
  | "stories"
  | "podcast"
  | "summaries"
  | "kids";
export type RankingPeriod = "week" | "month" | "year";

export interface RankingItem {
  rank: number;
  book: BookDetail;
  category: RankingCategory;
}

export interface RankingPageProps {}

export interface RankingHeaderProps {
  backgroundImages: string[];
}

export interface CategoryFiltersProps {
  activeCategory: RankingCategory;
  onCategoryChange: (category: RankingCategory) => void;
}

export interface PeriodFiltersProps {
  activePeriod: RankingPeriod;
  onPeriodChange: (period: RankingPeriod) => void;
}

export interface RankingListProps {
  rankings: RankingItem[];
  category: RankingCategory;
}
