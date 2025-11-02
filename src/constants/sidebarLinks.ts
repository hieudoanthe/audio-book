import { SidebarIcons } from "./sidebarIcons";

export interface SidebarLink {
  href: string;
  label: string;
  icon: React.ReactNode;
}

export const mainLinks: SidebarLink[] = [
  { href: "/", label: "Trang chủ", icon: SidebarIcons.Home },
  { href: "/vip", label: "Mua gói VIP", icon: SidebarIcons.Vip },
  { href: "/library", label: "Thư viện", icon: SidebarIcons.Library },
  { href: "/ranking", label: "Bảng xếp hạng", icon: SidebarIcons.Ranking },
  {
    href: "/listening",
    label: "Nội dung đang nghe",
    icon: SidebarIcons.Listening,
  },
  { href: "/telecom", label: "Gói Viễn thông", icon: SidebarIcons.Telecom },
];

export const categoryLinks: SidebarLink[] = [
  { href: "/books", label: "Sách nói", icon: SidebarIcons.Book },
  { href: "/stories", label: "Truyện nói", icon: SidebarIcons.Story },
  { href: "/podcast", label: "Podcast", icon: SidebarIcons.Podcast },
  { href: "/summaries", label: "Sách tóm tắt", icon: SidebarIcons.Summary },
  { href: "/kids", label: "Thiếu nhi", icon: SidebarIcons.Kids },
];
