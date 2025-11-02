"use client";
import { FooterIcons } from "@/constants/footerIcons";

export default function CompanyInfo() {
  return (
    <div className="space-y-4">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
          <div className="w-6 h-6 rounded-full border-2 border-[#1e2128] flex items-center justify-center">
            <div className="w-3 h-3 rounded-full bg-[#1e2128]"></div>
          </div>
        </div>
        <div>
          <div className="text-xl font-bold">AUDIO BOOK</div>
          <div className="text-xs text-zinc-400 uppercase">Connects Wisdom</div>
        </div>
      </div>

      {/* Company Name */}
      <div className="font-semibold text-sm">CÔNG TY TNHH CÔNG NGHỆ HENQ</div>

      {/* Contact Info */}
      <div className="space-y-3 text-sm text-zinc-300">
        <div className="flex items-center gap-3">
          <span className="text-white">{FooterIcons.Phone}</span>
          <span>0345 510 055</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-white">{FooterIcons.Email}</span>
          <span>support@wewe.vn</span>
        </div>
        <div className="flex items-start gap-3">
          <span className="text-white mt-0.5">{FooterIcons.Location}</span>
          <span>44 Lê Văn Duyệt, P1, Q. Bình Thạnh, TP. HCM</span>
        </div>
      </div>
    </div>
  );
}
