"use client";
import { use, Suspense } from "react";
import { notFound } from "next/navigation";
import { AuthorDetailPage } from "@/components/author";
import { getAuthorById } from "@/mocks/authors";

interface AuthorDetailPageProps {
  params: Promise<{ id: string }>;
}

function AuthorDetailPageContent({ params }: AuthorDetailPageProps) {
  const { id } = use(params);

  if (!id) return notFound();

  const author = getAuthorById(id);

  if (!author) return notFound();

  return <AuthorDetailPage author={author} />;
}

export default function AuthorPage({ params }: AuthorDetailPageProps) {
  return (
    <Suspense fallback={<div className="p-8 text-white">Loading...</div>}>
      <AuthorDetailPageContent params={params} />
    </Suspense>
  );
}
