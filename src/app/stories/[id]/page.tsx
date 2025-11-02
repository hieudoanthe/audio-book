"use client";
import { use } from "react";
import { notFound } from "next/navigation";
import { ProductDetailPage } from "@/components/content";
import { getBookDetailById } from "@/mocks/bookDetails";

interface StoryDetailPageProps {
  params: Promise<{ id: string }>;
}

export default function StoryDetailPage({ params }: StoryDetailPageProps) {
  const { id } = use(params);

  if (!id) return notFound();

  const book = getBookDetailById(id, "stories");

  if (!book) return notFound();

  return (
    <ProductDetailPage
      book={book}
      baseRoute="/stories"
      categoryTitle="Truyện nói"
    />
  );
}

