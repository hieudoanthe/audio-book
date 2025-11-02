"use client";
import { FooterIcons } from "@/constants/footerIcons";

export default function SocialMedia() {
  return (
    <div className="space-y-4">
      <div className="font-bold text-base">TÌM CHÚNG TÔI TRÊN</div>
      <div className="flex items-center gap-3">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-zinc-100 transition-colors"
          aria-label="Facebook"
        >
          <div className="text-[#1e2128] scale-75">{FooterIcons.Facebook}</div>
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-zinc-100 transition-colors"
          aria-label="Instagram"
        >
          <div className="text-[#1e2128] scale-75">{FooterIcons.Instagram}</div>
        </a>
        <a
          href="https://youtube.com"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-zinc-100 transition-colors"
          aria-label="YouTube"
        >
          <div className="text-[#1e2128] scale-75">{FooterIcons.YouTube}</div>
        </a>
        <a
          href="https://zalo.me"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-zinc-100 transition-colors"
          aria-label="Zalo"
        >
          <div className="text-[#1e2128] scale-75">{FooterIcons.Zalo}</div>
        </a>
      </div>
    </div>
  );
}
