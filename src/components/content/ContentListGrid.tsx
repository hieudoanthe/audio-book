"use client";
import Link from "next/link";
import type { ContentListGridProps } from "@/types/interfaces/content";

// Person icon
const PersonIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-white"
  >
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

export default function ContentListGrid({
  items,
  baseRoute = "/books",
}: ContentListGridProps) {
  return (
    <section className="mt-8 py-8 -mx-6 lg:-mx-10 -mr-4 lg:-mr-6">
      <div className="px-6 lg:px-10 pr-4 lg:pr-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((item) => (
            <Link
              key={item.id}
              href={`${baseRoute}/${item.id}`}
              className="group flex gap-4 p-2 rounded-lg bg-[#282b32] hover:bg-[#2a2d36] transition-colors cursor-pointer items-center"
            >
              {/* Image */}
              <div className="shrink-0 w-40 h-40 sm:w-44 sm:h-44 md:w-48 md:h-48 rounded-lg overflow-hidden bg-[#2a2d36]">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0 flex flex-col gap-3">
                <h3 className="text-xl sm:text-xl font-semibold text-white line-clamp-2 group-hover:text-orange-500 transition-colors">
                  {item.title}
                </h3>
                <div className="flex items-center gap-2 text-base sm:text-lg text-white">
                  <div className="shrink-0">
                    <PersonIcon />
                  </div>
                  <span className="line-clamp-1">{item.author}</span>
                </div>
                {item.description && (
                  <p className="text-base text-gray-400 line-clamp-3 leading-relaxed">
                    {item.description}
                  </p>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

