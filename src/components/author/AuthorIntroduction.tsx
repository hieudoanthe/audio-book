"use client";
import type { AuthorIntroductionProps } from "@/types/interfaces/author";

export default function AuthorIntroduction({
  author,
}: AuthorIntroductionProps) {
  return (
    <section className="bg-[#1e2128] rounded-lg p-4 sm:p-6">
      <h2 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">
        Giới thiệu
      </h2>
      <div className="text-[#abafbb] leading-relaxed text-sm sm:text-base text-justify">
        {author.description}
      </div>
    </section>
  );
}
