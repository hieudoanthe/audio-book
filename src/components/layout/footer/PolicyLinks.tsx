"use client";
import Link from "next/link";

export default function PolicyLinks() {
  return (
    <div className="space-y-4">
      <div className="font-bold text-base">CHÍNH SÁCH</div>
      <div className="space-y-2 text-sm text-zinc-300">
        <Link
          href="/terms"
          className="block hover:text-white transition-colors"
        >
          Điều khoản sử dụng
        </Link>
        <Link
          href="/privacy"
          className="block hover:text-white transition-colors"
        >
          Chính sách bảo mật
        </Link>
        <Link
          href="/mobifone"
          className="block hover:text-white transition-colors"
        >
          Bảo mật thông tin Mobifone
        </Link>
      </div>

      {/* Certification Badge */}
      <div className="flex items-center gap-3 mt-6">
        <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center shrink-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="white"
          >
            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
          </svg>
        </div>
        <div className="text-xs">
          <div className="font-semibold text-white">ĐÃ THÔNG BÁO</div>
          <div className="text-zinc-400">BỘ CÔNG THƯƠNG</div>
        </div>
      </div>
    </div>
  );
}
