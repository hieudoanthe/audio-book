"use client";
import type { ProductDetailPageProps } from "@/types/interfaces/content";
import {
  ProductBreadcrumb,
  ProductHeader,
  IntroductionSection,
  RelatedBooksSection,
  ProductActionButtons,
  AudioList,
  BottomActionButtons,
} from ".";

export default function ProductDetailPage({
  book,
  baseRoute,
  categoryTitle,
}: ProductDetailPageProps) {
  return (
    <div className="space-y-6 pb-12">
      <ProductBreadcrumb
        categoryTitle={categoryTitle}
        productTitle={book.title}
        baseRoute={baseRoute}
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-4 sm:space-y-6">
          {/* Product Header with blurred background */}
          <div className="relative">
            <div
              className="absolute top-0 left-0 right-0 h-[250px] bg-cover bg-center bg-no-repeat pointer-events-none"
              style={{
                backgroundImage: `url(${book.imageUrl})`,
                filter: "blur(50px) brightness(0.5)",
                transform: "scale(1.03)",
                zIndex: 0,
              }}
            />

            {/* Content with relative z-index */}
            <div className="relative z-10">
              <ProductHeader
                title={book.title}
                imageUrl={book.imageUrl}
                bookId={book.id}
                baseRoute={baseRoute}
                author={book.author}
                duration={book.duration}
              />
            </div>
          </div>

          <IntroductionSection book={book} />
          {book.relatedBooks && book.relatedBooks.length > 0 && (
            <RelatedBooksSection
              books={book.relatedBooks}
              baseRoute={baseRoute}
            />
          )}
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          <ProductActionButtons book={book} />
          {book.chapters && book.chapters.length > 0 && (
            <AudioList chapters={book.chapters} book={book} />
          )}
        </div>
      </div>

      <BottomActionButtons />
    </div>
  );
}

