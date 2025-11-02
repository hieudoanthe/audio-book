"use client";
import Link from "next/link";
import type { SidebarLink } from "@/constants/sidebarLinks";

interface NavLinkProps {
  item: SidebarLink;
  isActive: boolean;
}

export default function NavLink({ item, isActive }: NavLinkProps) {
  const baseItem =
    "flex items-center gap-2 rounded px-3 py-2 text-base transition-colors hover:bg-[#282b32] hover:text-white";

  // Define icon colors for different links
  const getIconColorClass = (href: string) => {
    switch (href) {
      case "/books": // Sách nói
        return "text-blue-500";
      case "/stories": // Truyện nói
        return "text-green-500";
      case "/podcast": // Podcast
        return "text-orange-500";
      case "/summaries": // Sách tóm tắt
        return "text-red-500";
      case "/kids": // Thiếu nhi
        return "text-blue-400";
      default:
        return "";
    }
  };

  const iconColorClass = getIconColorClass(item.href);

  return (
    <Link
      className={`${baseItem} ${isActive ? "bg-[#282b32] text-white" : ""}`}
      href={item.href}
      aria-current={isActive ? "page" : undefined}
    >
      <span className={`shrink-0 ${iconColorClass}`}>{item.icon}</span>
      <span>{item.label}</span>
    </Link>
  );
}
