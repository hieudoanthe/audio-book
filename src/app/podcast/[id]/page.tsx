"use client";
import { use } from "react";
import { notFound } from "next/navigation";
import { ProductDetailPage } from "@/components/content";
import { getBookDetailById } from "@/mocks/bookDetails";

interface PodcastDetailPageProps {
  params: Promise<{ id: string }>;
}

export default function PodcastDetailPage({ params }: PodcastDetailPageProps) {
  const { id } = use(params);

  if (!id) return notFound();

  const book = getBookDetailById(id, "podcast");

  if (!book) return notFound();

  return (
    <ProductDetailPage
      book={book}
      baseRoute="/podcast"
      categoryTitle="Podcast"
    />
  );
}

