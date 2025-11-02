"use client";
import Link from "next/link";
import type { ProductBreadcrumbProps } from "@/types/interfaces/content";

export default function ProductBreadcrumb({
  categoryTitle,
  productTitle,
  baseRoute,
}: ProductBreadcrumbProps) {
  return (
    <nav className="text-sm text-[#abafbb]">
      <Link href="/" className="hover:text-white transition-colors">
        Trang chủ
      </Link>
      <span className="mx-2">›</span>
      <Link href={baseRoute} className="hover:text-white transition-colors">
        {categoryTitle}
      </Link>
      <span className="mx-2">›</span>
      <span className="text-white">{productTitle}</span>
    </nav>
  );
}

