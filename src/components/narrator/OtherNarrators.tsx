"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import type { BookDetail } from "@/types/interfaces/book";

interface OtherNarratorsProps {
  currentNarratorId: string;
}

const ITEMS_PER_PAGE = 10;

export default function OtherNarrators({
  currentNarratorId,
}: OtherNarratorsProps) {
  const router = useRouter();
  const [displayCount, setDisplayCount] = useState(ITEMS_PER_PAGE);

  // Get all unique narrators from books (excluding current narrator)
  // This is a simplified version - in real app, you'd fetch from API
  const allBooks: BookDetail[] = [];
  const seenNarrators = new Set<string>();
  const narratorAlbums: Record<string, BookDetail[]> = {};

  // Mock: Get books from different sources
  // In real app, this would come from API
  const mockNarrators = ["Ka Nguyễn", "Ngọc Thúy", "Thiên Long"];

  // For now, return empty or mock data
  // You'll need to implement the logic to get other narrators' books

  const handleAlbumClick = (album: BookDetail) => {
    const categories: Array<
      "books" | "stories" | "podcast" | "summaries" | "kids"
    > = ["books", "stories", "podcast", "summaries", "kids"];

    for (const category of categories) {
      router.push(`/${category}/${album.id}`);
      return;
    }
  };

  const handleLoadMore = () => {
    setDisplayCount((prev) => prev + ITEMS_PER_PAGE);
  };

  // For now, return empty section until we have data source
  // You can integrate with your book data source here
  return null;
}

