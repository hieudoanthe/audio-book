import type { Book } from "@/types/interfaces/book";
import {
  mockSingleQualityBooksCategory,
  mockQualityBooksCategories,
  mockAllQualityBooks,
  mockEngagingStoriesCategories,
  mockAllEngagingStories,
  mockSingleEngagingStoriesCategory,
  mockPostcardShowcaseCategories,
  mockAllPostcardShowcase,
  mockSinglePostcardShowcaseCategory,
} from "@/mocks/books";
import { mockBooksWithDescriptions } from "@/mocks/booksWithDescriptions";
import {
  booksSections,
  storiesSections,
  podcastSections,
} from "@/constants/contentSections";

export interface ContentSection {
  title: string;
  items: Book[];
  category: string;
}

export interface ContentTypeConfig {
  title: string; // "Sách nói", "Truyện nói", "Podcast"
  route: string; // "/books", "/stories", "/podcast"
  categories: string[];
  sections: ContentSection[];
  featuredItemsWithDescriptions: typeof mockBooksWithDescriptions;
  getCategoryFromTitle: (title: string) => string | null;
  getCategoryItems: (category: string) => Book[];
  getAllItems: () => Book[];
}

// Helper function factory to create getCategoryFromTitle for a specific config
function createGetCategoryFromTitle(
  sections: ContentSection[],
  categories: string[]
) {
  return (title: string): string | null => {
    const section = sections.find((s) => s.title === title);
    if (section) {
      return section.category;
    }
    if (categories.includes(title)) {
      return title;
    }
    return null;
  };
}

// Books config
export const booksConfig: ContentTypeConfig = {
  title: "Sách nói",
  route: "/books",
  categories: mockQualityBooksCategories,
  sections: booksSections,
  featuredItemsWithDescriptions: mockBooksWithDescriptions,
  getCategoryFromTitle: createGetCategoryFromTitle(
    booksSections,
    mockQualityBooksCategories
  ),
  getCategoryItems: (category: string) => {
    if (mockSingleQualityBooksCategory[category]) {
      return mockSingleQualityBooksCategory[category];
    }
    const section = booksConfig.sections.find((s) => s.category === category);
    if (section && section.items.length > 0) {
      return section.items;
    }
    return mockAllQualityBooks;
  },
  getAllItems: () => mockAllQualityBooks,
};

// Stories config
export const storiesConfig: ContentTypeConfig = {
  title: "Truyện nói",
  route: "/stories",
  categories: mockEngagingStoriesCategories,
  sections: storiesSections,
  featuredItemsWithDescriptions: mockBooksWithDescriptions, // TODO: Replace with actual stories with descriptions
  getCategoryFromTitle: createGetCategoryFromTitle(
    storiesSections,
    mockEngagingStoriesCategories
  ),
  getCategoryItems: (category: string) => {
    if (mockSingleEngagingStoriesCategory[category]) {
      return mockSingleEngagingStoriesCategory[category];
    }
    const section = storiesConfig.sections.find((s) => s.category === category);
    if (section && section.items.length > 0) {
      return section.items;
    }
    return mockAllEngagingStories;
  },
  getAllItems: () => mockAllEngagingStories,
};

// Podcast config
export const podcastConfig: ContentTypeConfig = {
  title: "Podcast",
  route: "/podcast",
  categories: mockPostcardShowcaseCategories,
  sections: podcastSections,
  featuredItemsWithDescriptions: mockBooksWithDescriptions, // TODO: Replace with actual podcasts with descriptions
  getCategoryFromTitle: createGetCategoryFromTitle(
    podcastSections,
    mockPostcardShowcaseCategories
  ),
  getCategoryItems: (category: string) => {
    if (mockSinglePostcardShowcaseCategory[category]) {
      return mockSinglePostcardShowcaseCategory[category];
    }
    const section = podcastConfig.sections.find((s) => s.category === category);
    if (section && section.items.length > 0) {
      return section.items;
    }
    return mockAllPostcardShowcase;
  },
  getAllItems: () => mockAllPostcardShowcase,
};

// Helper to get config by route
export function getContentTypeConfig(route: string): ContentTypeConfig {
  switch (route) {
    case "/books":
      return booksConfig;
    case "/stories":
      return storiesConfig;
    case "/podcast":
      return podcastConfig;
    default:
      return booksConfig;
  }
}
