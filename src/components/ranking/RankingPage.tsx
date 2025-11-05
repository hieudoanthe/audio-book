"use client";
import { useState } from "react";
import type {
  RankingCategory,
  RankingPeriod,
} from "@/types/interfaces/ranking";
import { getRankings, getRankingBackgroundImages } from "@/mocks/rankings";
import RankingHeader from "./RankingHeader";
import CategoryFilters from "./CategoryFilters";
import PeriodFilters from "./PeriodFilters";
import RankingList from "./RankingList";

export default function RankingPage() {
  const [activeCategory, setActiveCategory] =
    useState<RankingCategory>("books");
  const [activePeriod, setActivePeriod] = useState<RankingPeriod>("week");

  const rankings = getRankings(activeCategory, activePeriod);
  const backgroundImages = getRankingBackgroundImages(
    activeCategory,
    activePeriod
  );

  return (
    <div className="space-y-6 pb-12">
      <RankingHeader backgroundImages={backgroundImages} />

      <div className="max-w-4xl mx-auto space-y-6">
        <CategoryFilters
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />

        <PeriodFilters
          activePeriod={activePeriod}
          onPeriodChange={setActivePeriod}
        />

        <RankingList rankings={rankings} category={activeCategory} />
      </div>
    </div>
  );
}
