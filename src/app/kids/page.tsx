"use client";
import {
  PageHeader,
  ContentListGrid,
  CopyrightPartners,
} from "@/components/content";
import { mockBooksWithDescriptions } from "@/mocks/booksWithDescriptions";

export default function KidsPage() {
  return (
    <>
      <div className="p-6 lg:p-10 space-y-8 pb-0">
        <PageHeader
          title="Thiếu nhi"
          breadcrumbs={[
            { label: "Trang chủ", href: "/" },
            { label: "Thiếu nhi" },
          ]}
        />
        <ContentListGrid items={mockBooksWithDescriptions} baseRoute="/kids" />
      </div>
      <div className="pb-12">
        <CopyrightPartners />
      </div>
    </>
  );
}
