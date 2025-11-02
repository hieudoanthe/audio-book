"use client";
import {
  PageHeader,
  ContentListGrid,
  CopyrightPartners,
} from "@/components/content";
import { mockBooksWithDescriptions } from "@/mocks/booksWithDescriptions";

export default function SummariesPage() {
  return (
    <>
      <div className="p-6 lg:p-10 space-y-8 pb-0">
        <PageHeader
          title="Sách tóm tắt"
          breadcrumbs={[
            { label: "Trang chủ", href: "/" },
            { label: "Sách tóm tắt" },
          ]}
        />
        <ContentListGrid
          items={mockBooksWithDescriptions}
          baseRoute="/summaries"
        />
      </div>
      <div className="pb-12">
        <CopyrightPartners />
      </div>
    </>
  );
}
