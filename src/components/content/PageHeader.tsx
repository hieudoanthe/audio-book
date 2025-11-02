"use client";
import Link from "next/link";
import type { PageHeaderProps } from "@/types/interfaces/content";

export default function PageHeader({ title, breadcrumbs }: PageHeaderProps) {
  return (
    <div className="space-y-2">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
        {title}
      </h1>
      {breadcrumbs && breadcrumbs.length > 0 && (
        <div className="flex items-center gap-2 text-sm text-zinc-400">
          {breadcrumbs.map((crumb, index) => (
            <div key={index} className="flex items-center gap-2">
              {crumb.href ? (
                <Link
                  href={crumb.href}
                  className="hover:text-white transition-colors"
                >
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-white">{crumb.label}</span>
              )}
              {index < breadcrumbs.length - 1 && <span>›</span>}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

