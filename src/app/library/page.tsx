"use client";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import LibraryTabs from "@/components/library/LibraryTabs";
import FavoriteList from "@/components/library/FavoriteList";
import HistoryList from "@/components/library/HistoryList";
import PurchasedList from "@/components/library/PurchasedList";
import BookmarkList from "@/components/library/BookmarkList";

export default function LibraryPage() {
  const searchParams = useSearchParams();
  const tabParam = searchParams.get("tab");
  const [activeTab, setActiveTab] = useState(tabParam || "thich");

  useEffect(() => {
    if (tabParam) {
      setActiveTab(tabParam);
    }
  }, [tabParam]);

  return (
    <div className="space-y-6 pb-12">
      <LibraryTabs activeTab={activeTab} onTabChange={setActiveTab} />

      {activeTab === "thich" && <FavoriteList />}
      {activeTab === "lich-su" && <HistoryList />}
      {activeTab === "da-mua" && <PurchasedList />}
      {activeTab === "danh-dau" && <BookmarkList />}
    </div>
  );
}
