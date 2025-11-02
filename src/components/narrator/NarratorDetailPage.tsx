"use client";
import NarratorHeader from "./NarratorHeader";
import NarratorAlbumsList from "./NarratorAlbumsList";
import type { NarratorDetailPageProps } from "@/types/interfaces/narrator";

export default function NarratorDetailPage({
  narrator,
}: NarratorDetailPageProps) {
  return (
    <div className="space-y-6 pb-12">
      {/* Narrator Header */}
      <NarratorHeader narrator={narrator} />

      {/* Albums List */}
      <NarratorAlbumsList narrator={narrator} />
    </div>
  );
}

