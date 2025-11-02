"use client";
import { useState } from "react";
import RatingModal from "@/components/common/rate/RatingModal";

const StarIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="currentColor"
    stroke="currentColor"
    strokeWidth="2"
  >
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

export default function StarRating() {
  const [hoverRating, setHoverRating] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleStarClick = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleModalSkip = () => {
    // Handle skip logic if needed
    setIsModalOpen(false);
  };

  const handleModalSubmit = (data: {
    contentRating: number;
    voiceRating: number;
    feedback: string;
  }) => {
    // Handle submit logic
    console.log("Rating submitted:", data);
    setIsModalOpen(false);
  };

  return (
    <>
      <div
        className="flex items-center gap-1"
        onMouseLeave={() => setHoverRating(null)}
      >
        {Array.from({ length: 5 }).map((_, i) => {
          const starIndex = i + 1;
          const isFilled =
            hoverRating !== null ? starIndex <= hoverRating : false;

          return (
            <button
              key={i}
              type="button"
              className={`transition-colors cursor-pointer drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] ${
                isFilled ? "text-yellow-400" : "text-gray-500"
              }`}
              onMouseEnter={() => setHoverRating(starIndex)}
              onClick={handleStarClick}
              aria-label={`Đánh giá ${starIndex} sao`}
            >
              <StarIcon />
            </button>
          );
        })}
      </div>

      <RatingModal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        onSkip={handleModalSkip}
        onSubmit={handleModalSubmit}
      />
    </>
  );
}

