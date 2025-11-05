import type { EmblaOptionsType } from "embla-carousel";

export interface Book {
  id: string;
  title: string;
  author: string;
  imageUrl: string;
}

export interface BookCardProps {
  id: string;
  title: string;
  author: string;
  imageUrl: string;
  onClick?: () => void;
}

export interface Author {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
}

export interface AuthorCardProps {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  onClick?: () => void;
}

export interface BookWithDescription extends Book {
  description?: string;
}

export interface BookSection {
  title: string;
  books: Book[];
  category: string;
}

export interface Chapter {
  id: string;
  number: string;
  title: string;
  duration: string; // e.g., "3:09", "18:22"
  audioUrl?: string; // URL to audio file
}

export interface BookDetail extends Book {
  description?: string;
  duration?: string; // e.g., "7 giờ 57 phút 58 giây"
  narrator?: string; // Người đọc
  channel?: string; // Kênh
  price?: number; // Giá bán lẻ
  originalPrice?: number; // Giá gốc (nếu có)
  rating?: number; // Đánh giá trung bình (e.g., 4.8)
  ratingCount?: number; // Số lượng đánh giá
  synopsis?: string; // Lời tựa
  chapters?: Chapter[]; // Danh sách chương
  relatedBooks?: Book[]; // Sách liên quan
}
