import type { AuthorDetail, AuthorBasic } from "@/types/interfaces/author";
import { getBookDetailById } from "./bookDetails";
import {
  mockAllQualityBooks,
  mockFeaturedBooks,
  mockNewContents,
} from "./books";

// Mock notable authors
export const mockNotableAuthors: AuthorBasic[] = [
  {
    id: "author-nguyen-nhat-anh",
    name: "Nguyễn Nhật Ánh",
    imageUrl:
      "https://voiz-prod.s3-wewe.cloud.cmctelecom.vn/uploads/avatar/filename/417865/webp_4eef1b1bdec8bbd1.webp",
  },
  {
    id: "author-nguyen-phong",
    name: "Nguyên Phong",
    imageUrl:
      "https://voiz-prod.s3-wewe.cloud.cmctelecom.vn/uploads/avatar/filename/417865/webp_4eef1b1bdec8bbd1.webp",
  },
  {
    id: "author-adam-grant",
    name: "Adam Grant",
    imageUrl:
      "https://voiz-prod.s3-wewe.cloud.cmctelecom.vn/uploads/avatar/filename/417865/webp_4eef1b1bdec8bbd1.webp",
  },
  {
    id: "author-ho-chi-minh",
    name: "Hồ Chí Minh",
    imageUrl:
      "https://voiz-prod.s3-wewe.cloud.cmctelecom.vn/uploads/avatar/filename/417865/webp_4eef1b1bdec8bbd1.webp",
  },
  {
    id: "author-zig-zigler",
    name: "Zig Zigler",
    imageUrl:
      "https://voiz-prod.s3-wewe.cloud.cmctelecom.vn/uploads/avatar/filename/417865/webp_4eef1b1bdec8bbd1.webp",
  },
  {
    id: "author-bui-van-nam-son",
    name: "Bùi Văn Nam Sơn",
    imageUrl:
      "https://voiz-prod.s3-wewe.cloud.cmctelecom.vn/uploads/avatar/filename/417865/webp_4eef1b1bdec8bbd1.webp",
  },
];

// Helper function to get all books by author name
function getBooksByAuthorName(authorName: string) {
  const categories: Array<"books" | "stories" | "podcast" | "summaries" | "kids"> = [
    "books",
    "stories",
    "podcast",
    "summaries",
    "kids",
  ];

  const allBooks: Array<{ id: string; category: string }> = [];
  const seenIds = new Set<string>();

  // Search in books category
  const booksInCategory = [
    ...mockAllQualityBooks,
    ...(mockFeaturedBooks || []),
    ...(mockNewContents || []),
  ].filter((book) => book.author === authorName);

  booksInCategory.forEach((book) => {
    // Only add if we haven't seen this id before
    if (!seenIds.has(book.id)) {
      const bookDetail = getBookDetailById(book.id, "books");
      if (bookDetail) {
        allBooks.push({ id: book.id, category: "books" });
        seenIds.add(book.id);
      }
    }
  });

  // For now, we'll return books that match the author name
  // In a real app, this would search all categories
  return allBooks.map(({ id, category }) =>
    getBookDetailById(id, category as "books" | "stories" | "podcast" | "summaries" | "kids")
  ).filter((book): book is NonNullable<typeof book> => book !== null);
}

// Mock author details - Stuart Avery Gold
export const mockAuthorDetails: Record<string, AuthorDetail> = {
  "stuart-avery-gold": {
    id: "stuart-avery-gold",
    name: "Stuart Avery Gold",
    imageUrl:
      "https://voiz-prod.s3-wewe.cloud.cmctelecom.vn/uploads/avatar/filename/417865/webp_4eef1b1bdec8bbd1.webp",
    description:
      "Stuart Avery Gold là một doanh nhân và nhà tư tưởng người Mỹ, được biết đến với công việc của ông với The Republic of Tea và tại Novato, California. Ông đã từng giảng dạy tại các trường đại học như Wharton và New School, và là một triết gia, nhà văn và nhà tâm lý học.",
    albums: getBooksByAuthorName("Stuart Avery Gold"),
    notableAuthors: mockNotableAuthors,
  },
};

// Helper function to get author by name
export function getAuthorByName(name: string): AuthorDetail | null {
  // Convert name to slug for lookup
  const slug = name
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");

  // Try to find by slug
  if (mockAuthorDetails[slug]) {
    // Update albums dynamically
    const author = { ...mockAuthorDetails[slug] };
    author.albums = getBooksByAuthorName(name);
    return author;
  }

  // Try to find by name match
  for (const author of Object.values(mockAuthorDetails)) {
    if (author.name === name) {
      // Update albums dynamically
      const updatedAuthor = { ...author };
      updatedAuthor.albums = getBooksByAuthorName(name);
      return updatedAuthor;
    }
  }

  // Create a default author if not found
  const defaultAuthor: AuthorDetail = {
    id: slug,
    name: name,
    imageUrl:
      "https://voiz-prod.s3-wewe.cloud.cmctelecom.vn/uploads/avatar/filename/417865/webp_4eef1b1bdec8bbd1.webp",
    description: `Tác giả ${name} là một nhà văn tài năng với nhiều tác phẩm nổi tiếng.`,
    albums: getBooksByAuthorName(name),
    notableAuthors: mockNotableAuthors,
  };

  return defaultAuthor;
}

// Helper function to convert name to slug (same logic as getAuthorByName)
function nameToSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");
}

// Helper function to get author by id
export function getAuthorById(id: string): AuthorDetail | null {
  // Try to find in mockAuthorDetails first
  const author = mockAuthorDetails[id];
  if (author) {
    // Update albums dynamically
    const updatedAuthor = { ...author };
    updatedAuthor.albums = getBooksByAuthorName(author.name);
    return updatedAuthor;
  }
  
  // If not found, try to find author name by matching id with slug of author names
  // Search in all books to find matching author name
  const allBooks = [
    ...mockAllQualityBooks,
    ...(mockFeaturedBooks || []),
    ...(mockNewContents || []),
  ];
  
  // Find unique author names and match their slug with the id
  const uniqueAuthors = new Set(allBooks.map((book) => book.author));
  
  for (const authorName of uniqueAuthors) {
    const slug = nameToSlug(authorName);
    if (slug === id) {
      // Found matching author, create default author
      const defaultAuthor: AuthorDetail = {
        id: id,
        name: authorName,
        imageUrl:
          "https://voiz-prod.s3-wewe.cloud.cmctelecom.vn/uploads/avatar/filename/417865/webp_4eef1b1bdec8bbd1.webp",
        description: `Tác giả ${authorName} là một nhà văn tài năng với nhiều tác phẩm nổi tiếng.`,
        albums: getBooksByAuthorName(authorName),
        notableAuthors: mockNotableAuthors,
      };
      
      return defaultAuthor;
    }
  }
  
  // If still not found, decode id as fallback (may lose Vietnamese characters)
  const name = id
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
  
  // Create a default author as last resort
  const defaultAuthor: AuthorDetail = {
    id: id,
    name: name,
    imageUrl:
      "https://voiz-prod.s3-wewe.cloud.cmctelecom.vn/uploads/avatar/filename/417865/webp_4eef1b1bdec8bbd1.webp",
    description: `Tác giả ${name} là một nhà văn tài năng với nhiều tác phẩm nổi tiếng.`,
    albums: getBooksByAuthorName(name),
    notableAuthors: mockNotableAuthors,
  };
  
  return defaultAuthor;
}
