"use client";
import { useState, useEffect } from "react";
import { ShareIcons } from "@/constants/shareIcons";
import ShareOptionsGrid from "./ShareOptionsGrid";
import QRCodeDisplay from "./QRCodeDisplay";
import { useShareHandlers } from "./useShareHandlers";
import type { ShareModalProps } from "@/types/interfaces/content";

export default function ShareModal({
  isOpen,
  onClose,
  url,
  title,
  layout = "grid",
}: ShareModalProps) {
  const [showQRCode, setShowQRCode] = useState(false);
  const {
    isLinkCopied,
    handleFacebookShare,
    handleMessengerShare,
    handleCopyLink,
  } = useShareHandlers({ url, onClose });

  // Reset QR code view when modal closes
  useEffect(() => {
    if (!isOpen) {
      setShowQRCode(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleQRCode = () => {
    setShowQRCode(true);
  };

  const handleCloseQRCode = () => {
    setShowQRCode(false);
  };

  const handleModalClose = () => {
    setShowQRCode(false);
    onClose();
  };

  const shareOptions = [
    {
      id: "facebook",
      label: "Facebook",
      icon: ShareIcons.Facebook,
      onClick: handleFacebookShare,
      bgColor: "bg-[#1877F2]",
    },
    {
      id: "messenger",
      label: "Messenger",
      icon: ShareIcons.Messenger,
      onClick: handleMessengerShare,
      bgColor: "bg-[#0084FF]",
    },
    {
      id: "qrcode",
      label: "QR Code",
      icon: ShareIcons.QRCode,
      onClick: handleQRCode,
      bgColor: "bg-transparent border border-white",
    },
    {
      id: "link",
      label: isLinkCopied ? "Đã copy!" : "Link",
      icon: ShareIcons.Link,
      onClick: handleCopyLink,
      bgColor: "bg-transparent border border-white",
    },
  ];

  return (
    <>
      {/* Modal */}
      <div
        className="bg-[#1e2128] rounded-lg p-4 w-full relative shadow-xl border border-[#2a2d36]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={showQRCode ? handleCloseQRCode : handleModalClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#282b32] hover:bg-[#373945] flex items-center justify-center text-white transition-colors"
          aria-label="Đóng"
        >
          {ShareIcons.Close}
        </button>

        {showQRCode ? (
          <QRCodeDisplay url={url} onBack={handleCloseQRCode} />
        ) : (
          <>
            <h2 className="text-lg font-bold text-white mb-4 text-center">
              Chia sẻ
            </h2>
            <ShareOptionsGrid options={shareOptions} layout={layout} />
          </>
        )}
      </div>
    </>
  );
}
