"use client";
import { AudioPlayerPage } from "@/components/player";
import { Suspense } from "react";

export default function PlayerPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AudioPlayerPage />
    </Suspense>
  );
}

