import type { NarratorDetail } from "@/types/interfaces/narrator";
import { getBookDetailById } from "./bookDetails";
import {
  mockAllQualityBooks,
  mockFeaturedBooks,
  mockNewContents,
  mockSingleQualityBooksCategory,
} from "./books";

// Helper function to convert name to slug
function nameToSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");
}

// Helper function to get all books by narrator name
function getBooksByNarratorName(narratorName: string) {
  const allBooks: Array<{ id: string; category: string }> = [];
  const seenIds = new Set<string>();

  // Search in books category - include all sources
  const booksInCategory = [
    ...mockAllQualityBooks,
    ...(mockFeaturedBooks || []),
    ...(mockNewContents || []),
    // Also include books from categories (e.g., mockSingleQualityBooksCategory)
    ...Object.values(mockSingleQualityBooksCategory || {}).flat(),
  ];

  // We need to get book details to check narrator
  booksInCategory.forEach((book) => {
    if (!seenIds.has(book.id)) {
      const bookDetail = getBookDetailById(book.id, "books");
      if (bookDetail && bookDetail.narrator === narratorName) {
        allBooks.push({ id: book.id, category: "books" });
        seenIds.add(book.id);
      }
    }
  });

  return allBooks
    .map(({ id, category }) =>
      getBookDetailById(
        id,
        category as "books" | "stories" | "podcast" | "summaries" | "kids"
      )
    )
    .filter((book): book is NonNullable<typeof book> => book !== null);
}

// Mock narrator details
export const mockNarratorDetails: Record<string, NarratorDetail> = {
  "thien-long": {
    id: "thien-long",
    name: "Thiên Long",
    albums: getBooksByNarratorName("Thiên Long"),
  },
  "ka-nguyen": {
    id: "ka-nguyen",
    name: "Ka Nguyễn",
    albums: getBooksByNarratorName("Ka Nguyễn"),
  },
  "ngoc-thuy": {
    id: "ngoc-thuy",
    name: "Ngọc Thúy",
    albums: getBooksByNarratorName("Ngọc Thúy"),
  },
  "minh-tuan": {
    id: "minh-tuan",
    name: "Minh Tuấn",
    albums: getBooksByNarratorName("Minh Tuấn"),
  },
  "hong-nhung": {
    id: "hong-nhung",
    name: "Hồng Nhung",
    albums: getBooksByNarratorName("Hồng Nhung"),
  },
  "thanh-hoa": {
    id: "thanh-hoa",
    name: "Thanh Hoa",
    albums: getBooksByNarratorName("Thanh Hoa"),
  },
  "van-anh": {
    id: "van-anh",
    name: "Vân Anh",
    albums: getBooksByNarratorName("Vân Anh"),
  },
  "quang-huy": {
    id: "quang-huy",
    name: "Quang Huy",
    albums: getBooksByNarratorName("Quang Huy"),
  },
  "thu-huong": {
    id: "thu-huong",
    name: "Thu Hương",
    albums: getBooksByNarratorName("Thu Hương"),
  },
  "thanh-van": {
    id: "thanh-van",
    name: "Thanh Vân",
    albums: getBooksByNarratorName("Thanh Vân"),
  },
};

// Helper function to get narrator by name
export function getNarratorByName(name: string): NarratorDetail | null {
  const slug = nameToSlug(name);

  // Try to find in mockNarratorDetails
  const narrator = mockNarratorDetails[slug];
  if (narrator) {
    const updatedNarrator = { ...narrator };
    updatedNarrator.albums = getBooksByNarratorName(name);
    return updatedNarrator;
  }

  // Try to find by name match
  for (const n of Object.values(mockNarratorDetails)) {
    if (n.name === name) {
      const updatedNarrator = { ...n };
      updatedNarrator.albums = getBooksByNarratorName(name);
      return updatedNarrator;
    }
  }

  // Create a default narrator if not found
  const defaultNarrator: NarratorDetail = {
    id: slug,
    name: name,
    albums: getBooksByNarratorName(name),
  };

  return defaultNarrator;
}

// Helper function to get narrator by id
export function getNarratorById(id: string): NarratorDetail | null {
  const narrator = mockNarratorDetails[id];
  if (narrator) {
    const updatedNarrator = { ...narrator };
    updatedNarrator.albums = getBooksByNarratorName(narrator.name);
    return updatedNarrator;
  }

  // If not found, try to find narrator name by matching id with slug of narrator names
  // Search in all books to find matching narrator name
  const allBooks = [
    ...mockAllQualityBooks,
    ...(mockFeaturedBooks || []),
    ...(mockNewContents || []),
  ];

  // Get all unique narrators from book details
  const uniqueNarrators = new Set<string>();
  allBooks.forEach((book) => {
    const bookDetail = getBookDetailById(book.id, "books");
    if (bookDetail?.narrator) {
      uniqueNarrators.add(bookDetail.narrator);
    }
  });

  for (const narratorName of uniqueNarrators) {
    const slug = nameToSlug(narratorName);
    if (slug === id) {
      // Found matching narrator, create default narrator
      const defaultNarrator: NarratorDetail = {
        id: id,
        name: narratorName,
        albums: getBooksByNarratorName(narratorName),
      };

      return defaultNarrator;
    }
  }

  // If still not found, return null
  return null;
}
