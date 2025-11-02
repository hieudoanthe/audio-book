import { useState } from "react";

export interface UseShareHandlersProps {
  url: string;
  onClose: () => void;
}

export function useShareHandlers({ url, onClose }: UseShareHandlersProps) {
  const [isLinkCopied, setIsLinkCopied] = useState(false);

  const handleFacebookShare = () => {
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      url
    )}`;
    window.open(facebookUrl, "_blank", "width=600,height=400");
    onClose();
  };

  const handleMessengerShare = () => {
    const messengerUrl = `https://www.facebook.com/dialog/send?link=${encodeURIComponent(
      url
    )}&app_id=YOUR_APP_ID&redirect_uri=${encodeURIComponent(url)}`;
    window.open(messengerUrl, "_blank", "width=600,height=400");
    onClose();
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setIsLinkCopied(true);
      setTimeout(() => {
        setIsLinkCopied(false);
        onClose();
      }, 1500);
    } catch (err) {
      // Fallback for older browsers
      const textArea = document.createElement("textarea");
      textArea.value = url;
      textArea.style.position = "fixed";
      textArea.style.opacity = "0";
      document.body.appendChild(textArea);
      textArea.select();
      try {
        document.execCommand("copy");
        setIsLinkCopied(true);
        setTimeout(() => {
          setIsLinkCopied(false);
          onClose();
        }, 1500);
      } catch (err) {
        console.error("Failed to copy:", err);
      }
      document.body.removeChild(textArea);
    }
  };

  return {
    isLinkCopied,
    handleFacebookShare,
    handleMessengerShare,
    handleCopyLink,
  };
}

