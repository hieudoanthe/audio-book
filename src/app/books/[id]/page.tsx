"use client";
import { use, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { notFound } from "next/navigation";
import { ProductDetailPage } from "@/components/content";
import { getBookDetailById } from "@/mocks/bookDetails";

interface BookDetailPageProps {
  params: Promise<{ id: string }>;
}

function BookDetailPageContent({ params }: BookDetailPageProps) {
  const { id } = use(params);
  const searchParams = useSearchParams();
  const source = searchParams.get("source") as "featured" | "new" | "quality" | null;

  if (!id) return notFound();

  const book = getBookDetailById(id, "books", source || undefined);

  if (!book) return notFound();

  return (
    <ProductDetailPage
      book={book}
      baseRoute="/books"
      categoryTitle="Sách nói"
    />
  );
}

export default function BookDetailPage({ params }: BookDetailPageProps) {
  return (
    <Suspense fallback={<div className="p-8 text-white">Loading...</div>}>
      <BookDetailPageContent params={params} />
    </Suspense>
  );
}
