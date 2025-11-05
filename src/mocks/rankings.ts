import type { RankingItem, RankingCategory, RankingPeriod } from "@/types/interfaces/ranking";
import { getBookDetailById } from "./bookDetails";
import {
  mockAllQualityBooks,
  mockAllEngagingStories,
  mockAllPostcardShowcase,
  mockFeaturedBooks,
  mockNewContents,
} from "./books";

// Generate deterministic rankings based on category and period
function generateRankings(
  category: RankingCategory,
  period: RankingPeriod
): RankingItem[] {
  const rankings: RankingItem[] = [];
  
  // Get books from different sources based on category
  let books: Array<{ id: string; title: string; author: string; imageUrl: string }> = [];
  
  switch (category) {
    case "books":
      books = [...mockAllQualityBooks, ...mockFeaturedBooks];
      break;
    case "stories":
      books = [...mockAllEngagingStories];
      break;
    case "podcast":
      books = [...mockAllPostcardShowcase];
      break;
    case "summaries":
      books = [...mockNewContents];
      break;
    case "kids":
      books = [...mockFeaturedBooks];
      break;
  }

  // Generate rankings based on period (deterministic)
  const periodMultiplier = period === "week" ? 1 : period === "month" ? 2 : 3;
  
  // Sort by a deterministic hash based on book ID and period
  const sortedBooks = [...books].sort((a, b) => {
    const hashA = hashString(a.id + period) * periodMultiplier;
    const hashB = hashString(b.id + period) * periodMultiplier;
    return hashB - hashA; // Sort descending
  });

  // Take top 20 books
  const topBooks = sortedBooks.slice(0, 20);

  topBooks.forEach((book, index) => {
    const bookDetail = getBookDetailById(book.id, category);
    if (bookDetail) {
      // Adjust rating based on period and rank
      const rank = index + 1;
      const periodRatingAdjustment = period === "week" ? 0 : period === "month" ? 0.1 : 0.2;
      const rankRatingAdjustment = rank <= 3 ? 0.3 : rank <= 10 ? 0.1 : -0.1;
      
      const adjustedRating = Math.min(
        5.0,
        Math.max(3.5, (bookDetail.rating || 4.0) + periodRatingAdjustment + rankRatingAdjustment)
      );
      
      const adjustedRatingCount = Math.max(
        10,
        (bookDetail.ratingCount || 50) + (rank <= 3 ? 100 : rank <= 10 ? 50 : 0)
      );

      rankings.push({
        rank,
        book: {
          ...bookDetail,
          rating: Number(adjustedRating.toFixed(1)),
          ratingCount: adjustedRatingCount,
        },
        category,
      });
    }
  });

  return rankings;
}

// Simple hash function for deterministic sorting
function hashString(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash; // Convert to 32bit integer
  }
  return Math.abs(hash);
}

// Cache for rankings
const rankingsCache: Record<string, RankingItem[]> = {};

export function getRankings(
  category: RankingCategory,
  period: RankingPeriod
): RankingItem[] {
  const cacheKey = `${category}-${period}`;
  
  if (!rankingsCache[cacheKey]) {
    rankingsCache[cacheKey] = generateRankings(category, period);
  }
  
  return rankingsCache[cacheKey];
}

// Get background images for header (top 10 book covers)
export function getRankingBackgroundImages(
  category: RankingCategory,
  period: RankingPeriod
): string[] {
  const rankings = getRankings(category, period);
  return rankings.slice(0, 10).map((item) => item.book.imageUrl);
}

