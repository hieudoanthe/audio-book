"use client";
import AuthorHeader from "./AuthorHeader";
import AuthorIntroduction from "./AuthorIntroduction";
import NotableAuthors from "./NotableAuthors";
import AuthorAlbumsList from "./AuthorAlbumsList";
import type { AuthorDetailPageProps } from "@/types/interfaces/author";

export default function AuthorDetailPage({ author }: AuthorDetailPageProps) {
  return (
    <div className="space-y-6 pb-12">
      {/* Author Header */}
      <AuthorHeader author={author} />

      {/* Main Content - Two Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
        {/* Left Column */}
        <div className="lg:col-span-1 space-y-4 sm:space-y-6">
          <AuthorIntroduction author={author} />
          {author.notableAuthors && author.notableAuthors.length > 0 && (
            <NotableAuthors authors={author.notableAuthors} />
          )}
        </div>

        {/* Right Column */}
        <div className="lg:col-span-2 space-y-6">
          <AuthorAlbumsList author={author} />
        </div>
      </div>
    </div>
  );
}
