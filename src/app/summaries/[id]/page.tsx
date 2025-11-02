"use client";
import { use } from "react";
import { notFound } from "next/navigation";
import { ProductDetailPage } from "@/components/content";
import { getBookDetailById } from "@/mocks/bookDetails";

interface SummaryDetailPageProps {
  params: Promise<{ id: string }>;
}

export default function SummaryDetailPage({ params }: SummaryDetailPageProps) {
  const { id } = use(params);

  if (!id) return notFound();

  const book = getBookDetailById(id, "summaries");

  if (!book) return notFound();

  return (
    <ProductDetailPage
      book={book}
      baseRoute="/summaries"
      categoryTitle="Sách tóm tắt"
    />
  );
}

