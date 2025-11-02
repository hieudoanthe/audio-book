"use client";
import { QRCodeSVG } from "qrcode.react";

interface QRCodeDisplayProps {
  url: string;
  onBack: () => void;
}

export default function QRCodeDisplay({ url, onBack }: QRCodeDisplayProps) {
  return (
    <div className="flex flex-col items-center gap-4">
      <h2 className="text-xl font-bold text-white mb-2">QR Code</h2>
      <div className="bg-white p-4 rounded-lg">
        <QRCodeSVG value={url} size={200} />
      </div>
      <p className="text-gray-400 text-sm text-center max-w-xs">
        Quét mã QR để mở liên kết trên thiết bị khác
      </p>
      <button
        onClick={onBack}
        className="mt-2 px-4 py-2 rounded bg-[#373945] text-white hover:bg-[#2a2d36] transition-colors text-sm"
      >
        Quay lại
      </button>
    </div>
  );
}

