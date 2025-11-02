"use client";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { mainLinks, categoryLinks } from "@/constants/sidebarLinks";
import { NavbarIcons } from "@/constants/navbarIcons";
import NavLink from "./NavLink";

interface SidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export default function Sidebar({ isOpen = false, onClose }: SidebarProps) {
  const pathname = usePathname();
  const isActive = (href: string) =>
    href === "/"
      ? pathname === "/" || pathname.startsWith("/home")
      : pathname.startsWith(href);

  // Close sidebar when route changes
  useEffect(() => {
    if (onClose && isOpen) {
      onClose();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  // Prevent body scroll when sidebar is open on mobile
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      {/* Backdrop for mobile and tablet */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
          aria-hidden="true"
        />
      )}
      <aside
        className={`
          fixed lg:static inset-y-0 left-0 z-50 w-64
          flex flex-col gap-2 border-r bg-[#1e2128] text-[#abafbb] min-h-screen p-4
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
        `}
      >
        {/* Close button (mobile and tablet only) */}
        <button
          onClick={onClose}
          className="lg:hidden absolute top-4 right-4 rounded p-2 hover:bg-[#282b32] hover:text-white text-white"
          aria-label="Đóng menu"
        >
          {NavbarIcons.Close}
        </button>

        <div className="flex items-center justify-center gap-2 mb-4">
          <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
            <div className="w-6 h-6 rounded-full border-2 border-[#1e2128] flex items-center justify-center">
              <div className="w-3 h-3 rounded-full bg-[#1e2128]"></div>
            </div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white">AUDIO BOOK</div>
            <div className="text-sm text-zinc-400 uppercase">
              Connects Wisdom
            </div>
          </div>
        </div>
        <nav className="space-y-3">
          {mainLinks.map((item) => (
            <NavLink
              key={item.href}
              item={item}
              isActive={isActive(item.href)}
            />
          ))}
        </nav>
        <div className="mt-6 text-sm uppercase text-zinc-400">Danh mục</div>
        <nav className="space-y-3">
          {categoryLinks.map((item) => (
            <NavLink
              key={item.href}
              item={item}
              isActive={isActive(item.href)}
            />
          ))}
        </nav>
        <button className="mt-25 rounded bg-orange-500 px-3 py-2 font-semibold text-white">
          Cài đặt App
        </button>
      </aside>
    </>
  );
}
