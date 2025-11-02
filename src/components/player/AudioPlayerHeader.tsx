"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAudioPlayer } from "@/contexts/AudioPlayerContext";
import { BackArrowIcon, ShareIcon } from "../../constants/playerIcons";
import ShareModal from "@/components/common/share/ShareModal";

interface AudioPlayerHeaderProps {
  chapterTitle: string;
}

export default function AudioPlayerHeader({
  chapterTitle,
}: AudioPlayerHeaderProps) {
  const router = useRouter();
  const { currentBook, currentChapter } = useAudioPlayer();
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [shareUrl, setShareUrl] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined" && currentBook && currentChapter) {
      setShareUrl(
        `${window.location.origin}/books/${currentBook.id}?chapter=${currentChapter.id}`
      );
    }
  }, [currentBook, currentChapter]);

  const handleShareClick = () => {
    setIsShareModalOpen(true);
  };

  return (
    <>
      <div className="flex items-center justify-between p-4 border-b border-[#2a2d36]">
        <button
          onClick={() => router.back()}
          className="text-white hover:text-orange-500 transition-colors"
          aria-label="Quay lại"
        >
          <BackArrowIcon />
        </button>
        <h2 className="text-white text-lg font-semibold">{chapterTitle}</h2>
        <div className="flex items-center gap-4 relative">
          <button
            onClick={handleShareClick}
            className="text-white hover:text-orange-500 transition-colors"
            aria-label="Chia sẻ"
          >
            <ShareIcon />
          </button>

          {currentBook && currentChapter && (
            <>
              {/* Backdrop */}
              {isShareModalOpen && (
                <div
                  className="fixed inset-0 bg-black/50 z-40"
                  onClick={() => setIsShareModalOpen(false)}
                />
              )}
              {/* Modal positioned below button */}
              {isShareModalOpen && (
                <div className="absolute top-full right-0 mt-2 z-50 w-72">
                  <ShareModal
                    isOpen={isShareModalOpen}
                    onClose={() => setIsShareModalOpen(false)}
                    url={shareUrl}
                    title={`${currentBook.title} - ${currentChapter.title}`}
                  />
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
}
