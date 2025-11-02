"use client";

export default function AudioPlayerLoading() {
  return (
    <div className="fixed inset-0 bg-linear-to-b from-[#1e2128] via-[#2a2d36] to-[#1e2128] z-50 flex items-center justify-center pb-20">
      <div className="text-white text-lg">Đang tải...</div>
    </div>
  );
}
