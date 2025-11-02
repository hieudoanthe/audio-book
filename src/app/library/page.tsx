"use client";
import { useState } from "react";
import LibraryTabs from "@/components/library/LibraryTabs";
import FavoriteList from "@/components/library/FavoriteList";
import HistoryList from "@/components/library/HistoryList";
import PurchasedList from "@/components/library/PurchasedList";
import BookmarkList from "@/components/library/BookmarkList";

export default function LibraryPage() {
  const [activeTab, setActiveTab] = useState("thich");

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

