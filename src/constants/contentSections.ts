import type { ContentSection } from "@/config/contentTypes";
import {
  mockSingleQualityBooksCategory,
  mockFeaturedBooks,
  mockSingleEngagingStoriesCategory,
  mockAllEngagingStories,
  mockSinglePostcardShowcaseCategory,
  mockAllPostcardShowcase,
} from "@/mocks/books";

// Books sections
export const booksSections: ContentSection[] = [
  {
    title: "Tâm linh - Tinh thần",
    items: mockSingleQualityBooksCategory["Tâm linh"] || [],
    category: "Tâm linh",
  },
  {
    title: "Kinh tế",
    items: mockFeaturedBooks.slice(5, 10),
    category: "Kinh tế",
  },
];

// Stories sections
export const storiesSections: ContentSection[] = [
  {
    title: "Việt Nam danh tác",
    items: mockSingleEngagingStoriesCategory["Việt Nam danh tác"] || [],
    category: "Việt Nam danh tác",
  },
  {
    title: "Kinh điển quốc tế",
    items: mockSingleEngagingStoriesCategory["Kinh điển quốc tế"] || [],
    category: "Kinh điển quốc tế",
  },
];

// Podcast sections
export const podcastSections: ContentSection[] = [
  {
    title: "Văn hóa",
    items: mockSinglePostcardShowcaseCategory["Văn hóa"] || [],
    category: "Văn hóa",
  },
  {
    title: "Giải trí",
    items: mockSinglePostcardShowcaseCategory["Giải trí"] || [],
    category: "Giải trí",
  },
];
