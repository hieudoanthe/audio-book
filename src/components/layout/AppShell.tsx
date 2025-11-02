"use client";
import { useState } from "react";
import Navbar from "./navbar/Navbar";
import Sidebar from "./sidebar/Sidebar";
import { AudioPlayerBar } from "@/components/player";
import type { AppShellProps } from "@/types/interfaces/layout";

export default function AppShell({ children }: AppShellProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="h-screen overflow-hidden">
      <div className="flex h-full">
        <Sidebar
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
        />
        <div className="flex-1 min-h-0 min-w-0 h-full flex flex-col overflow-hidden">
          <Navbar onMenuClick={() => setIsSidebarOpen(true)} />
          <main className="flex-1 overflow-y-auto thin-scrollbar pb-20">
            <div className="mx-auto w-full max-w-[1650px] pl-6 lg:pl-10 pr-4 lg:pr-6 py-6">
              {children}
            </div>
          </main>
          <AudioPlayerBar />
        </div>
      </div>
    </div>
  );
}
