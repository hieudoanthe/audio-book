"use client";
import { use } from "react";
import { notFound } from "next/navigation";
import { ProductDetailPage } from "@/components/content";
import { getBookDetailById } from "@/mocks/bookDetails";

interface KidsDetailPageProps {
  params: Promise<{ id: string }>;
}

export default function KidsDetailPage({ params }: KidsDetailPageProps) {
  const { id } = use(params);

  if (!id) return notFound();

  const book = getBookDetailById(id, "kids");

  if (!book) return notFound();

  return (
    <ProductDetailPage
      book={book}
      baseRoute="/kids"
      categoryTitle="Thiếu nhi"
    />
  );
}

