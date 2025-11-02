"use client";
import CompanyInfo from "./CompanyInfo";
import AppDownload from "./AppDownload";
import PolicyLinks from "./PolicyLinks";
import SocialMedia from "./SocialMedia";

export default function Footer() {
  return (
    <footer className="bg-[#1e2128] text-white border-t border-zinc-700">
      <div className="mx-auto w-full max-w-[1650px] px-6 lg:px-10 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <CompanyInfo />
          <AppDownload />
          <PolicyLinks />
          <SocialMedia />
        </div>
      </div>
    </footer>
  );
}
