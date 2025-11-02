import type { Book, BookWithDescription, BookDetail, Chapter } from "./book";

export interface CategoryContentGridProps {
  title: string;
  items: Book[];
  baseRoute?: string;
}

export interface CategoryViewProps {
  activeCategory: string;
  categoryTitle: string;
  categoryItems: Book[];
  onCategoryChange: (category: string) => void;
}

export interface SectionsViewProps {
  activeCategory: string;
  filteredSections: Array<{
    title: string;
    items: Book[];
    category: string;
  }>;
  onCategoryChange: (category: string) => void;
}

export interface PageHeaderProps {
  title: string;
  breadcrumbs?: Array<{ label: string; href?: string }>;
}

export interface ContentSectionProps {
  title: string;
  items: Book[];
  category?: string;
  onCategoryChange?: (category: string) => void;
  baseRoute?: string;
}

export interface CategoryFilterProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export interface ContentListGridProps {
  items: BookWithDescription[];
  baseRoute?: string;
}

export interface ProductDetailPageProps {
  book: BookDetail;
  baseRoute: string;
  categoryTitle: string;
}

export interface ProductHeaderProps {
  title: string;
  imageUrl: string;
  bookId: string;
  baseRoute: string;
  author?: string;
  duration?: string;
}

export interface IntroductionSectionProps {
  book: BookDetail;
}

export interface RelatedBooksSectionProps {
  books: Book[];
  baseRoute: string;
}

export interface AudioListProps {
  chapters: Chapter[];
  book?: BookDetail;
}

export interface ProductBreadcrumbProps {
  categoryTitle: string;
  productTitle: string;
  baseRoute: string;
}

export interface RatingModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSkip?: () => void;
  onSubmit: (data: {
    contentRating: number;
    voiceRating: number;
    feedback: string;
  }) => void;
}

export interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  url: string;
  title: string;
  layout?: "single-row" | "grid";
}
