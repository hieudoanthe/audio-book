"use client";
import { use, Suspense } from "react";
import { notFound } from "next/navigation";
import { NarratorDetailPage } from "@/components/narrator";
import { getNarratorById } from "@/mocks/narrators";

interface NarratorDetailPageProps {
  params: Promise<{ id: string }>;
}

function NarratorDetailPageContent({ params }: NarratorDetailPageProps) {
  const { id } = use(params);

  if (!id) return notFound();

  const narrator = getNarratorById(id);

  if (!narrator) return notFound();

  return <NarratorDetailPage narrator={narrator} />;
}

export default function NarratorPage({ params }: NarratorDetailPageProps) {
  return (
    <Suspense fallback={<div className="p-8 text-white">Loading...</div>}>
      <NarratorDetailPageContent params={params} />
    </Suspense>
  );
}

