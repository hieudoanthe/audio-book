"use client";
import { useState } from "react";
import type { RatingModalProps } from "@/types/interfaces/content";

const StarIcon = ({ filled = false }: { filled?: boolean }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill={filled ? "currentColor" : "none"}
    stroke="currentColor"
    strokeWidth="2"
  >
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

export default function RatingModal({
  isOpen,
  onClose,
  onSkip,
  onSubmit,
}: RatingModalProps) {
  const [contentRating, setContentRating] = useState<number>(0);
  const [voiceRating, setVoiceRating] = useState<number>(0);
  const [hoverContentRating, setHoverContentRating] = useState<number | null>(
    null
  );
  const [hoverVoiceRating, setHoverVoiceRating] = useState<number | null>(null);
  const [feedback, setFeedback] = useState("");

  if (!isOpen) return null;

  const handleSubmit = () => {
    onSubmit({
      contentRating,
      voiceRating,
      feedback,
    });
    // Reset form
    setContentRating(0);
    setVoiceRating(0);
    setFeedback("");
    onClose();
  };

  const handleSkip = () => {
    onSkip?.();
    onClose();
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 overflow-y-auto"
        onClick={onClose}
      >
        {/* Modal */}
        <div
          className="bg-[#1e2128] rounded-lg p-6 sm:p-8 w-full max-w-lg space-y-6 min-h-[530px] max-h-[90vh] overflow-y-auto my-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Title */}
          <div className="text-center">
            <h2 className="text-2xl font-bold text-white mb-2">Audio Book</h2>
            <p className="text-white text-base">
              Bạn muốn chia sẻ cụ thể với Audio Book không?
            </p>
          </div>

          {/* Rating Sections */}
          <div className="space-y-4">
            {/* Content Rating */}
            <div>
              <label className="block text-white text-base mb-2">
                Nội dung
              </label>
              <div
                className="flex items-center gap-1"
                onMouseLeave={() => setHoverContentRating(null)}
              >
                {Array.from({ length: 5 }).map((_, i) => {
                  const starIndex = i + 1;
                  const isFilled =
                    hoverContentRating !== null
                      ? starIndex <= hoverContentRating
                      : starIndex <= contentRating;

                  return (
                    <button
                      key={i}
                      type="button"
                      className={`transition-colors cursor-pointer ${
                        isFilled ? "text-orange-500" : "text-gray-500"
                      }`}
                      onMouseEnter={() => setHoverContentRating(starIndex)}
                      onClick={() => setContentRating(starIndex)}
                      aria-label={`Đánh giá nội dung ${starIndex} sao`}
                    >
                      <StarIcon filled={isFilled} />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Voice Rating */}
            <div>
              <label className="block text-white text-base mb-2">
                Giọng đọc
              </label>
              <div
                className="flex items-center gap-1"
                onMouseLeave={() => setHoverVoiceRating(null)}
              >
                {Array.from({ length: 5 }).map((_, i) => {
                  const starIndex = i + 1;
                  const isFilled =
                    hoverVoiceRating !== null
                      ? starIndex <= hoverVoiceRating
                      : starIndex <= voiceRating;

                  return (
                    <button
                      key={i}
                      type="button"
                      className={`transition-colors cursor-pointer ${
                        isFilled ? "text-orange-500" : "text-gray-500"
                      }`}
                      onMouseEnter={() => setHoverVoiceRating(starIndex)}
                      onClick={() => setVoiceRating(starIndex)}
                      aria-label={`Đánh giá giọng đọc ${starIndex} sao`}
                    >
                      <StarIcon filled={isFilled} />
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Text Area */}
          <div>
            <textarea
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              placeholder="Những đóng góp khác, ví dụ: Cảm nhận nội dung, góp ý nhạc nền, thắc mắc về sách,..."
              className="w-full h-32 p-3 rounded bg-[#1e2128] text-white text-base placeholder-gray-500 border border-gray-600 focus:outline-none focus:border-orange-500 resize-none"
            />
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <button
              onClick={handleSkip}
              className="flex-1 px-4 py-2 rounded bg-[#373945] text-white text-base hover:bg-[#2a2d36] transition-colors"
            >
              Bỏ qua
            </button>
            <button
              onClick={handleSubmit}
              className="flex-1 px-4 py-2 rounded bg-[#373945] text-white text-base hover:bg-[#2a2d36] transition-colors"
            >
              Gửi
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
