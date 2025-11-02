import type { Book } from "@/types/interfaces/book";
import type { Author } from "@/types/interfaces/book";

// suggested books
export const mockFeaturedBooks: Book[] = [
  {
    id: "1",
    title: "Binh Thư Yếu Lược - Hưng Đạo Vương Trần Quốc Tuấn",
    author: "Nhiều tác giả",
    imageUrl:
      "https://voiz-prod.s3-wewe.cloud.cmctelecom.vn/uploads/avatar/filename/417865/webp_4eef1b1bdec8bbd1.webp",
  },
  {
    id: "2",
    title: "Tay Ngang Làm Nên Thương Hiệu",
    author: "Accidental Branding",
    imageUrl:
      "https://voiz-prod.s3-wewe.cloud.cmctelecom.vn/uploads/avatar/filename/417783/webp_8a68642f426069d1.webp",
  },
  {
    id: "3",
    title: "Con Đường Chính Trực",
    author: "Martha Beck",
    imageUrl:
      "https://voiz-prod.s3-wewe.cloud.cmctelecom.vn/uploads/avatar/filename/444582/webp_01d4931aa7402344.webp",
  },
  {
    id: "4",
    title: "Dạy Trẻ Kỹ Năng An Toàn",
    author: "Kids Book",
    imageUrl:
      "https://voiz-prod.s3-wewe.cloud.cmctelecom.vn/uploads/avatar/filename/429774/webp_4909d0fd9a42575e.webp",
  },
  {
    id: "5",
    title: "Làm Chủ Tư Duy Thay Đổi Vận Mệnh",
    author: "Adam Khoo",
    imageUrl:
      "https://voiz-prod.s3-wewe.cloud.cmctelecom.vn/uploads/avatar/filename/414677/webp_f7c1975de218d992.webp",
  },
  {
    id: "6",
    title: "Đắc Nhân Tâm",
    author: "Dale Carnegie",
    imageUrl: "https://firstnews.vn/upload/products/original/-1726817123.jpg",
  },
  {
    id: "7",
    title: "7 Thói Quen Hiệu Quả",
    author: "Stephen R. Covey",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHbaF2--7giNWoU-SwjfJYL0voZZ36tHhv0g&s",
  },
  {
    id: "8",
    title: "Tư Duy Nhanh Và Chậm",
    author: "Daniel Kahneman",
    imageUrl:
      "https://bizweb.dktcdn.net/thumb/grande/100/197/269/products/462558750-1083111936819329-1957541486232979466-n.png?v=1730363480047",
  },
  {
    id: "9",
    title: "Bí Mật Tư Duy Triệu Phú",
    author: "T. Harv Eker",
    imageUrl:
      "https://voiz-prod.s3-wewe.cloud.cmctelecom.vn/uploads/avatar/filename/963/webp_f4513b3bfeeff84cf6c3cdef5c261d1970cad72e.webp",
  },
  {
    id: "10",
    title: "Cha Giàu Cha Nghèo",
    author: "Robert Kiyosaki",
    imageUrl:
      "https://bookfun.vn/wp-content/uploads/2024/10/cha-giau-cha-ngheo.jpg",
  },
];

// quality books
export const mockQualityBooksCategories: string[] = [
  "Tất cả",
  "Tâm linh",
  "Kinh tế",
  "Chính trị",
  "Lịch sử, Văn hoá",
  "Hồi ký & Tiểu sử",
  "Lãnh đạo",
  "Quản lý công ty",
  "Khởi nghiệp",
  "Tài chính, Đầu tư",
  "PR & Marketing",
  "Sales, bán hàng",
  "Chuyển đổi số",
  "Tự do tài chính",
  "Tâm lý học",
  "Trí tuệ cảm xúc",
  "Giao tiếp",
  "Quản lý thời gian",
  "Hạt giống têm hồn",
];

export const mockAllQualityBooks: Book[] = [
  {
    id: "1",
    title: "Đại Địa Chấn Kinh Tế",
    author: "Nhiều tác giả",
    imageUrl:
      "https://voiz-prod.s3-wewe.cloud.cmctelecom.vn/uploads/avatar/filename/445010/webp_be4f552c56b308a7.webp",
  },
  {
    id: "2",
    title: "OSHO - Tỉnh Thức. Bí Quyết Cân Bằng Cuộc Sống",
    author: "OSHO",
    imageUrl:
      "https://voiz-prod.s3-wewe.cloud.cmctelecom.vn/uploads/avatar/filename/444997/webp_52261b8e26bd4e43.webp",
  },
  {
    id: "3",
    title: "Người Lạ Với Chính Ta",
    author: "Thiên Long",
    imageUrl:
      "https://voiz-prod.s3-wewe.cloud.cmctelecom.vn/uploads/avatar/filename/445064/webp_03d584166efbcd90.webp",
  },
  {
    id: "4",
    title: "Những Người Dẫn Lối",
    author: "Nhiều tác giả",
    imageUrl:
      "https://voiz-prod.s3-wewe.cloud.cmctelecom.vn/uploads/avatar/filename/444916/webp_44229e0428810a28.webp",
  },
  {
    id: "5",
    title: "Tính Bản Ác",
    author: "Nhiều tác giả",
    imageUrl:
      "https://voiz-prod.s3-wewe.cloud.cmctelecom.vn/uploads/avatar/filename/444994/webp_1d3ccccd0cea62f4.webp",
  },
  {
    id: "6",
    title: "Thiết Kế Tổ Chức",
    author: "Henry Mintzberg",
    imageUrl:
      "https://voiz-prod.s3-wewe.cloud.cmctelecom.vn/uploads/avatar/filename/444959/webp_89ad7eea7c6ae87b.webp",
  },
  {
    id: "7",
    title: "Ánh Sáng Trong Ta",
    author: "Nhiều tác giả",
    imageUrl:
      "https://voiz-prod.s3-wewe.cloud.cmctelecom.vn/uploads/avatar/filename/444879/webp_07cf52250899ba05.webp",
  },
  {
    id: "8",
    title: "Làm Người Hoàn Hảo - Sống Sao Cho Vừa Lòng Thiên Hạ",
    author: "Daniel Kahneman",
    imageUrl:
      "https://voiz-prod.s3-wewe.cloud.cmctelecom.vn/uploads/avatar/filename/444918/webp_7d2b489a625616df.webp",
  },
];

export const mockSingleQualityBooksCategory: Record<string, Book[]> = {
  "Tâm linh": [
    {
      id: "tl-1",
      title: "OSHO - Tỉnh Thức: Bí quyết cân bằng cuộc sống",
      author: "OSHO",
      imageUrl:
        "https://voiz-prod.s3-wewe.cloud.cmctelecom.vn/uploads/avatar/filename/444997/webp_52261b8e26bd4e43.webp",
    },
    {
      id: "tl-2",
      title: "Nghiệp Quật (Instant Karma)",
      author: "David Michie",
      imageUrl:
        "https://voiz-prod.s3-wewe.cloud.cmctelecom.vn/uploads/avatar/filename/444711/webp_b4bf284e6a0538b2.webp",
    },
    {
      id: "tl-3",
      title: "OSHO - Đường Vào Thiền",
      author: "OSHO",
      imageUrl:
        "https://voiz-prod.s3-wewe.cloud.cmctelecom.vn/uploads/avatar/filename/444507/webp_5ff0a1d2cd82621d.webp",
    },
    {
      id: "tl-4",
      title: "OSHO - Tự Do, Như Chim Tung Cánh",
      author: "OSHO",
      imageUrl:
        "https://voiz-prod.s3-wewe.cloud.cmctelecom.vn/uploads/avatar/filename/444271/webp_ba461bfccb7a88d4.webp",
    },
    {
      id: "tl-5",
      title: "Làm Mới Vườn Tâm",
      author: "Suối Thông",
      imageUrl:
        "https://voiz-prod.s3-wewe.cloud.cmctelecom.vn/uploads/avatar/filename/444288/webp_fb0b093c083046d6.webp",
    },
    {
      id: "tl-6",
      title: "Đọc Ngôn Sứ, Nói Về Yêu",
      author: "OSHO",
      imageUrl:
        "https://voiz-prod.s3-wewe.cloud.cmctelecom.vn/uploads/avatar/filename/438250/webp_354bcf351a7d382c.webp",
    },
    {
      id: "tl-7",
      title: "Trí Tuệ Của Sự Từ Bi",
      author: "Đức Đạt Lai Lạt Ma & Victor Chan",
      imageUrl:
        "https://voiz-prod.s3-wewe.cloud.cmctelecom.vn/uploads/avatar/filename/438182/webp_af71cfc7ac9a1472.webp",
    },
  ],
};

// engaging stories
export const mockEngagingStoriesCategories: string[] = [
  "Tất cả",
  "Việt Nam danh tác",
  "Kinh điển quốc tế",
  "Kỳ ảo (Fantasy)",
  "Truyện cổ tích",
  "Truyện ngắn - Tản văn",
  "Ngôn tình",
  "Trinh thám",
  "Truyền cảm hứng",
  "Kinh dị",
  "Lịch sử",
];

export const mockAllEngagingStories: Book[] = [
  {
    id: "1",
    title: "Làm Bạn Với Bầu Trời",
    author: "Nguyễn Nhật Ánh",
    imageUrl:
      "https://voiz-prod.s3-wewe.cloud.cmctelecom.vn/uploads/avatar/filename/417076/webp_75f3ddb32dddc6c5.webp",
  },
  {
    id: "2",
    title: "Kính Vạn Hoa",
    author: "Nguyễn Nhật Ánh",
    imageUrl:
      "https://voiz-prod.s3-wewe.cloud.cmctelecom.vn/uploads/avatar/filename/418760/webp_83aadcd4f3f72ded.webp",
  },
  {
    id: "3",
    title: "Con Trai Con Gái",
    author: "Hồ Huy Sơn",
    imageUrl:
      "https://voiz-prod.s3-wewe.cloud.cmctelecom.vn/uploads/avatar/filename/429863/webp_f340a31ab1873bb9.webp",
  },
  {
    id: "4",
    title: "Yêu Một Người Khó Lắm",
    author: "Hamlet Trương",
    imageUrl:
      "https://voiz-prod.s3-wewe.cloud.cmctelecom.vn/uploads/avatar/filename/444914/webp_611e44c43f23e36a.webp",
  },
  {
    id: "5",
    title: "Tú Tài Thủy Tinh",
    author: "Cao Việt Dũng",
    imageUrl:
      "https://voiz-prod.s3-wewe.cloud.cmctelecom.vn/uploads/avatar/filename/444894/webp_56817908a164451a.webp",
  },
  {
    id: "6",
    title: "Mình Sinh Ra Đâu Phải Để Buồn",
    author: "Hamlet Trương",
    imageUrl:
      "https://voiz-prod.s3-wewe.cloud.cmctelecom.vn/uploads/avatar/filename/444844/webp_72bfff3eedf8d3e6.webp",
  },
];

export const mockSingleEngagingStoriesCategory: Record<string, Book[]> = {
  "Việt Nam danh tác": [
    {
      id: "vndt-1",
      title: "Tuyển Tập Truyện Ngắn",
      author: "Khái Hưng",
      imageUrl:
        "https://voiz-prod.s3-wewe.cloud.cmctelecom.vn/uploads/avatar/filename/444273/webp_8dbca9b36af9a6f1.webp",
    },
    {
      id: "vndt-2",
      title: "Tuyển Tập Truyện Ngắn",
      author: "Nhất Linh",
      imageUrl:
        "https://voiz-prod.s3-wewe.cloud.cmctelecom.vn/uploads/avatar/filename/444425/webp_28c9cf358c0e27ae.webp",
    },
    {
      id: "vndt-3",
      title: "Ăn Theo Thuở, Ở Theo Thời",
      author: "Hồ Biểu Chánh",
      imageUrl:
        "https://voiz-prod.s3-wewe.cloud.cmctelecom.vn/uploads/avatar/filename/438180/webp_eb30a3e5b7c3b541.webp",
    },
  ],
  "Kinh điển quốc tế": [
    {
      id: "kdtq-1",
      title: "Tú Tài Thủy Tinh",
      author: "Cao Việt Dũng",
      imageUrl:
        "https://voiz-prod.s3-wewe.cloud.cmctelecom.vn/uploads/avatar/filename/444894/webp_56817908a164451a.webp",
    },
  ],
};

// postcard showcase
export const mockPostcardShowcaseCategories: string[] = [
  "Tất cả",
  "Văn hóa",
  "Giải trí",
  "Kiến thức",
  "Pháp thoại",
  "Truyện ma",
  "Tâm sự",
  "Học ngoại ngữ",
];

export const mockAllPostcardShowcase: Book[] = [
  {
    id: "1",
    title: "Các Nhân Vật Đỉnh Nhất Của Marvel",
    author: "Nhiều tác giả",
    imageUrl:
      "https://voiz-prod.s3-wewe.cloud.cmctelecom.vn/uploads/avatar/filename/2178/webp_d4b46f69a38271fb1cdcf21993e95e88950817f1.webp",
  },
  {
    id: "2",
    title: "Ghiền English Radio",
    author: "Nhiều tác giả",
    imageUrl:
      "https://voiz-prod.s3-wewe.cloud.cmctelecom.vn/uploads/avatar/filename/2324/webp_79c08a655a9e130a10e3eddb7597171cbb6cc82b.webp",
  },
  {
    id: "3",
    title: "Bát Chánh Đạo",
    author: "Nhiều tác giả",
    imageUrl:
      "https://voiz-prod.s3-wewe.cloud.cmctelecom.vn/uploads/avatar/filename/611/webp_f835461a2858291a9eb686e247f1fce60a8b471b.webp",
  },
  {
    id: "4",
    title: "U Là Trời !",
    author: "Nhiều tác giả",
    imageUrl:
      "https://voiz-prod.s3-wewe.cloud.cmctelecom.vn/uploads/avatar/filename/418417/webp_d759555a07801b18.webp",
  },
  {
    id: "5",
    title: "Trường Thành Có Gì?",
    author: "Gió",
    imageUrl:
      "https://voiz-prod.s3-wewe.cloud.cmctelecom.vn/uploads/avatar/filename/1990/webp_f1a2b47e2a57d6d8f561aeb30b8bd6aca31ff1e7.webp",
  },
  {
    id: "6",
    title: "Tôi Du Học Thất Bại",
    author: "Minh Quân",
    imageUrl:
      "https://voiz-prod.s3-wewe.cloud.cmctelecom.vn/uploads/avatar/filename/746/webp_ad95a538a2a9e2b24e2b79ee3ae33d4b1fd9e72e.webp",
  },
];

export const mockSinglePostcardShowcaseCategory: Record<string, Book[]> = {
  "Văn hóa": [
    {
      id: "vh-1",
      title: "Phòng Hét",
      author: "Tạ Đình Cường",
      imageUrl:
        "https://voiz-prod.s3-wewe.cloud.cmctelecom.vn/uploads/avatar/filename/418108/webp_4a1c5094d6beb7d9.webp",
    },
    {
      id: "vh-2",
      title: "Nổ Bỏng Tai",
      author: "Nhiều tác giả",
      imageUrl:
        "https://voiz-prod.s3-wewe.cloud.cmctelecom.vn/uploads/avatar/filename/418147/webp_4dd34bce3a3dcbf8.webp",
    },
    {
      id: "vh-3",
      title: "COFFE AROUND",
      author: "Cáo",
      imageUrl:
        "https://voiz-prod.s3-wewe.cloud.cmctelecom.vn/uploads/avatar/filename/418029/webp_1bde52da7d8a0abf.webp",
    },
  ],
  "Giải trí": [
    {
      id: "gt-1",
      title: "Chạy Tết",
      author: "Sitcom",
      imageUrl:
        "https://voiz-prod.s3-wewe.cloud.cmctelecom.vn/uploads/avatar/filename/427211/webp_d95c91a22f1aec75.webp",
    },
  ],
};

// new contents
export const mockNewContents: Book[] = [
  {
    id: "1",
    title: "Cây Mạ Ly Huyền Bí",
    author: "Phạm Huy Hoàng",
    imageUrl:
      "https://voiz-prod.s3-wewe.cloud.cmctelecom.vn/uploads/avatar/filename/1891/webp_ce1d5e5558d845ca0ef277a917e69003e1112780.webp",
  },
  {
    id: "2",
    title: "Thiền Định Và Tâm Trí Diệu Kỳ",
    author: "Nguyễn Văn Tân",
    imageUrl:
      "https://voiz-prod.s3-wewe.cloud.cmctelecom.vn/uploads/avatar/filename/428031/webp_3b5fe953186b9a4a.webp",
  },
  {
    id: "3",
    title: "Đôi Bạn Tốt",
    author: "Nguyễn Ngọc Ánh",
    imageUrl:
      "https://voiz-prod.s3-wewe.cloud.cmctelecom.vn/uploads/avatar/filename/1840/webp_57b4ad3d071021d4d972906f8816f4cecb2ce6f8.webp",
  },
  {
    id: "4",
    title: "Người Giỏi Không Phải Là Người Làm Tất Cả",
    author: "Thái Duy Phương",
    imageUrl:
      "https://voiz-prod.s3-wewe.cloud.cmctelecom.vn/uploads/avatar/filename/1043/webp_9c6070cfdc56ede3.webp",
  },
  {
    id: "5",
    title: "13 Điều Người Có Tinh Thần Thép Không Làm",
    author: "James Clear",
    imageUrl:
      "https://voiz-prod.s3-wewe.cloud.cmctelecom.vn/uploads/avatar/filename/2107/webp_e29dfd22b50a07235a5b5c19f95e12446e6fdbc3.webp",
  },
  {
    id: "6",
    title: "Giải Mã Đàn Ông",
    author: "Tiến sĩ Barbara De Angelis",
    imageUrl:
      "https://voiz-prod.s3-wewe.cloud.cmctelecom.vn/uploads/avatar/filename/428042/webp_f0b236d982992c7d.webp",
  },
];

// Featured Authors
export const mockFeaturedAuthors: Author[] = [
  {
    id: "a1",
    name: "Nguyễn Nhật Ánh",
    description:
      "Nhà văn Nguyễn Nhật Ánh sinh ngày 7 tháng 5 năm 1955 tại tỉnh Quảng Nam. Ông là một trong những nhà văn nổi tiếng nhất Việt Nam với nhiều tác phẩm được yêu thích.",
    imageUrl:
      "https://voiz-prod.s3-wewe.cloud.cmctelecom.vn/uploads/avatar/filename/417865/webp_4eef1b1bdec8bbd1.webp",
  },
  {
    id: "a2",
    name: "Nguyên Phong",
    description:
      "Dịch giả Nguyên Phong tên thật là Vũ Văn Du, sinh năm 1950 tại Hà Nội. Ông là dịch giả nổi tiếng với các tác phẩm về tâm linh và phát triển bản thân.",
    imageUrl:
      "https://voiz-prod.s3-wewe.cloud.cmctelecom.vn/uploads/avatar/filename/417783/webp_8a68642f426069d1.webp",
  },
  {
    id: "a3",
    name: "Hồ Chí Minh",
    description:
      "Chủ tịch Hồ Chí Minh là một nhà ái quốc chân chính, nhà cách mạng vĩ đại, người sáng lập Đảng Cộng sản Việt Nam và nước Việt Nam Dân chủ Cộng hòa.",
    imageUrl:
      "https://voiz-prod.s3-wewe.cloud.cmctelecom.vn/uploads/avatar/filename/444582/webp_01d4931aa7402344.webp",
  },
  {
    id: "a4",
    name: "Adam Khoo",
    description:
      "Là một doanh nhân người Singapore, đồng thời là diễn giả và tác giả của nhiều cuốn sách nổi tiếng về phát triển bản thân và làm chủ tư duy.",
    imageUrl:
      "https://voiz-prod.s3-wewe.cloud.cmctelecom.vn/uploads/avatar/filename/414677/webp_f7c1975de218d992.webp",
  },
  {
    id: "a5",
    name: "Higashino Keigo",
    description:
      "Higashino Keigo cùng với gia tài là các tác phẩm trinh thám nổi tiếng, được mệnh danh là bậc thầy của thể loại truyện trinh thám Nhật Bản.",
    imageUrl:
      "https://voiz-prod.s3-wewe.cloud.cmctelecom.vn/uploads/avatar/filename/417783/webp_8a68642f426069d1.webp",
  },
  {
    id: "a6",
    name: "Napoleon Hill",
    description:
      "Napoleon Hill là một tác giả người Mỹ, một trong những người sáng lập của thể loại sách phát triển bản thân hiện đại với cuốn sách 'Nghĩ giàu và làm giàu'.",
    imageUrl:
      "https://voiz-prod.s3-wewe.cloud.cmctelecom.vn/uploads/avatar/filename/428042/webp_f0b236d982992c7d.webp",
  },
  {
    id: "a7",
    name: "Nguyễn Mạnh Tuấn",
    description:
      "Nhà văn, đồng thời là nhà biên kịch, ông là tác giả của các cuốn tiểu thuyết nổi tiếng về đề tài xã hội và con người Việt Nam.",
    imageUrl:
      "https://voiz-prod.s3-wewe.cloud.cmctelecom.vn/uploads/avatar/filename/429774/webp_4909d0fd9a42575e.webp",
  },
];

// Popular Keywords
export const mockPopularKeywords: string[] = [
  "Nguyễn Nhật Ánh",
  "Osho",
  "đọc vị bất kỳ ai",
  "nghĩ nhiều làm sao chill",
  "thói quen sinh tiền",
  "tư duy ngược",
  "vô gia đình",
  "nghiệp quật",
  "cổ học",
];
