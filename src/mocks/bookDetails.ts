import type { BookDetail } from "@/types/interfaces/book";
import type { Book } from "@/types/interfaces/book";
import {
  mockAllQualityBooks,
  mockSingleQualityBooksCategory,
  mockAllEngagingStories,
  mockSingleEngagingStoriesCategory,
  mockAllPostcardShowcase,
  mockSinglePostcardShowcaseCategory,
  mockFeaturedBooks,
  mockNewContents,
} from "./books";
import { mockBooksWithDescriptions } from "./booksWithDescriptions";

// Pre-defined detailed mock data
export const mockBookDetails: Record<string, BookDetail> = {
  "1": {
    id: "1",
    title: "Enzyme Tự Nhiên Hỗ Trợ Bệnh Nhân Ung Thư",
    author: "Trịnh Xuân Đức",
    imageUrl:
      "https://voiz-prod.s3-wewe.cloud.cmctelecom.vn/uploads/avatar/filename/417865/webp_4eef1b1bdec8bbd1.webp",
    duration: "7 giờ 57 phút 58 giây",
    narrator: "Ngọc Thúy",
    channel: "Trịnh Xuân Đức",
    price: 108800,
    rating: 4.8,
    ratingCount: 7,
    synopsis:
      "Âm nhạc với một số tần số âm thanh đặc biệt có khả năng đánh thức những luân xa nhất định tại một vùng bất kỳ trong cơ thể. Khi các luân xa được đánh thức, năng lượng sẽ được khơi thông và lưu chuyển, giúp cơ thể tự phục hồi và chữa lành. Enzyme tự nhiên trong cơ thể người có khả năng chữa bệnh tuyệt vời, đặc biệt là trong việc hỗ trợ điều trị ung thư.",
    chapters: [
      {
        id: "1",
        number: "00",
        title: "Lời Cảm Ơn – Lời Nói Đầu",
        duration: "3:09",
      },
      {
        id: "2",
        number: "1.1",
        title:
          "Chương 1. Enzyme Trong Cơ Thể Người Chữa Bệnh Như Thế Nào? - Chúng ta tiêu tốn enzyme cho việc ăn, uống, hít thở...",
        duration: "18:22",
      },
      {
        id: "3",
        number: "1.2",
        title:
          "Chương 1. Enzyme Trong Cơ Thể Người Chữa Bệnh Như Thế Nào? - Cơ chế chữa bệnh của enzyme trong cơ thể người",
        duration: "5:49",
      },
      {
        id: "4",
        number: "1.3",
        title:
          "Chương 1. Enzyme Trong Cơ Thể Người Chữa Bệnh Như Thế Nào? – Khả năng tự chữa bệnh và tự làm lành vết thương của cơ thể. Tế bào gốc và enzyme có vai trò thế nào trong quá trình này?",
        duration: "11:04",
      },
      {
        id: "5",
        number: "1.4",
        title:
          "Chương 1. Enzyme Trong Cơ Thể Người Chữa Bệnh Như Thế Nào? - Tại sao khi bị ốm, bị ung thư chúng ta lại không muốn ăn và ăn cũng không tiêu, thức ăn ít được hấp thụ?",
        duration: "3:03",
      },
      {
        id: "6",
        number: "2.1",
        title:
          "Chương 2. Các Nguồn Năng Lượng Tự Nhiên Để Chữa Bệnh - Nước là gì?",
        duration: "29:20",
      },
      {
        id: "7",
        number: "2.2",
        title:
          "Chương 2. Các Nguồn Năng Lượng Tự Nhiên Để Chữa Bệnh - Ion âm và ion dương ảnh hưởng đến sức khỏe",
        duration: "29:14",
      },
      {
        id: "8",
        number: "2.3",
        title:
          "Chương 2. Các Nguồn Năng Lượng Tự Nhiên Để Chữa Bệnh - Điện từ trường",
        duration: "33:50",
      },
      {
        id: "9",
        number: "2.4",
        title:
          "Chương 2. Các Nguồn Năng Lượng Tự Nhiên Để Chữa Bệnh - Sóng nhạc",
        duration: "28:44",
      },
    ],
    relatedBooks: [
      {
        id: "2",
        title: "Thiên Thần Ác Quỷ",
        author: "Dan Brown",
        imageUrl:
          "https://voiz-prod.s3-wewe.cloud.cmctelecom.vn/uploads/avatar/filename/417783/webp_8a68642f426069d1.webp",
      },
      {
        id: "3",
        title: "Tỉnh Thức",
        author: "Eckhart Tolle",
        imageUrl:
          "https://voiz-prod.s3-wewe.cloud.cmctelecom.vn/uploads/avatar/filename/444582/webp_01d4931aa7402344.webp",
      },
      {
        id: "4",
        title: "Đại Địa Chấn Kinh Tế",
        author: "Linda Yueh",
        imageUrl:
          "https://voiz-prod.s3-wewe.cloud.cmctelecom.vn/uploads/avatar/filename/445010/webp_be4f552c56b308a7.webp",
      },
      {
        id: "5",
        title: "Vô Gia Đình",
        author: "Hector Malot",
        imageUrl:
          "https://voiz-prod.s3-wewe.cloud.cmctelecom.vn/uploads/avatar/filename/444997/webp_52261b8e26bd4e43.webp",
      },
      {
        id: "6",
        title: "Nghiệp Quật",
        author: "Nhật Chiêu",
        imageUrl:
          "https://voiz-prod.s3-wewe.cloud.cmctelecom.vn/uploads/avatar/filename/444994/webp_1d3ccccd0cea62f4.webp",
      },
      {
        id: "7",
        title: "Tư Duy Ngược",
        author: "Adam Grant",
        imageUrl:
          "https://voiz-prod.s3-wewe.cloud.cmctelecom.vn/uploads/avatar/filename/444918/webp_7d2b489a625616df.webp",
      },
    ],
  },
};

function findBookById(
  id: string,
  category: "books" | "stories" | "podcast" | "summaries" | "kids"
): Book | null {
  let allBooks: Book[] = [];
  let categoryBooks: Record<string, Book[]> = {};

  switch (category) {
    case "books":
      const featuredBook = mockFeaturedBooks.find((b) => b.id === id);
      if (featuredBook) {
        const qualityBook = mockAllQualityBooks.find((b) => b.id === id);
        if (qualityBook) {
          allBooks = mockAllQualityBooks;
          categoryBooks = mockSingleQualityBooksCategory;
        } else {
          return featuredBook;
        }
      } else {
        const newContentBook = mockNewContents?.find((b) => b.id === id);
        if (newContentBook) {
          const qualityBook = mockAllQualityBooks.find((b) => b.id === id);
          if (qualityBook) {
            allBooks = mockAllQualityBooks;
            categoryBooks = mockSingleQualityBooksCategory;
          } else {
            return newContentBook;
          }
        } else {
          allBooks = mockAllQualityBooks;
          categoryBooks = mockSingleQualityBooksCategory;
        }
      }
      break;
    case "stories":
      allBooks = mockAllEngagingStories;
      categoryBooks = mockSingleEngagingStoriesCategory;
      break;
    case "podcast":
      allBooks = mockAllPostcardShowcase;
      categoryBooks = mockSinglePostcardShowcaseCategory;
      break;
    case "summaries":
    case "kids":
      return mockBooksWithDescriptions.find((b) => b.id === id) || null;
    default:
      return null;
  }

  let book = allBooks.find((b) => b.id === id);

  if (!book) {
    for (const books of Object.values(categoryBooks)) {
      book = books.find((b) => b.id === id);
      if (book) break;
    }
  }

  return book || null;
}

function generateDefaultChapters(book: Book): BookDetail["chapters"] {
  return [
    {
      id: `${book.id}-1`,
      number: "01",
      title: `${book.title} - Phần 1`,
      duration: "15:00",
    },
    {
      id: `${book.id}-2`,
      number: "02",
      title: `${book.title} - Phần 2`,
      duration: "18:30",
    },
    {
      id: `${book.id}-3`,
      number: "03",
      title: `${book.title} - Phần 3`,
      duration: "22:45",
    },
    {
      id: `${book.id}-4`,
      number: "04",
      title: `${book.title} - Phần 4`,
      duration: "20:15",
    },
    {
      id: `${book.id}-5`,
      number: "05",
      title: `${book.title} - Phần 5`,
      duration: "19:00",
    },
    {
      id: `${book.id}-6`,
      number: "06",
      title: `${book.title} - Phần 6`,
      duration: "21:30",
    },
    {
      id: `${book.id}-7`,
      number: "07",
      title: `${book.title} - Phần 7`,
      duration: "23:15",
    },
    {
      id: `${book.id}-8`,
      number: "08",
      title: `${book.title} - Phần 8`,
      duration: "24:00",
    },
    {
      id: `${book.id}-9`,
      number: "09",
      title: `${book.title} - Phần 9`,
      duration: "25:30",
    },
    {
      id: `${book.id}-10`,
      number: "10",
      title: `${book.title} - Phần 10`,
      duration: "26:15",
    },
    {
      id: `${book.id}-11`,
      number: "11",
      title: `${book.title} - Phần 11`,
      duration: "27:00",
    },
    {
      id: `${book.id}-12`,
      number: "12",
      title: `${book.title} - Phần 12`,
      duration: "27:45",
    },
    {
      id: `${book.id}-13`,
      number: "13",
      title: `${book.title} - Phần 13`,
      duration: "28:30",
    },
    {
      id: `${book.id}-14`,
      number: "14",
      title: `${book.title} - Phần 14`,
      duration: "29:15",
    },
    {
      id: `${book.id}-15`,
      number: "15",
      title: `${book.title} - Phần 15`,
      duration: "30:00",
    },
    {
      id: `${book.id}-16`,
      number: "16",
      title: `${book.title} - Phần 16`,
      duration: "30:45",
    },
    {
      id: `${book.id}-17`,
      number: "17",
      title: `${book.title} - Phần 17`,
      duration: "31:30",
    },
  ];
}

function generateRelatedBooks(
  currentBookId: string,
  category: "books" | "stories" | "podcast" | "summaries" | "kids"
): Book[] {
  let allBooks: Book[] = [];

  switch (category) {
    case "books":
      allBooks = [
        ...mockAllQualityBooks,
        ...(mockFeaturedBooks || []),
        ...(mockNewContents || []),
      ];
      break;
    case "stories":
      allBooks = mockAllEngagingStories;
      break;
    case "podcast":
      allBooks = mockAllPostcardShowcase;
      break;
    case "summaries":
    case "kids":
      allBooks = mockBooksWithDescriptions;
      break;
  }

  return allBooks.filter((b) => b.id !== currentBookId).slice(0, 6);
}

function hashString(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash; // Convert to 32-bit integer
  }
  return Math.abs(hash);
}

function deterministicValue(id: string, min: number, max: number): number {
  const hash = hashString(id);
  return (hash % (max - min + 1)) + min;
}

function deterministicFloat(
  id: string,
  min: number,
  max: number,
  decimals: number = 1
): number {
  const hash = hashString(id + "_float");
  const range = max - min;
  const value =
    min + (hash % (range * Math.pow(10, decimals))) / Math.pow(10, decimals);
  return Number(value.toFixed(decimals));
}

// List of narrators - mỗi narrator sẽ đọc nhiều sách
const NARRATORS = [
  "Thiên Long", // Narrator chính với nhiều books
  "Ka Nguyễn",
  "Ngọc Thúy",
  "Minh Tuấn",
  "Hồng Nhung",
  "Thanh Hoa",
  "Vân Anh",
  "Quang Huy",
  "Thu Hương",
  "Thanh Vân",
];

// Helper function to assign narrator based on book id (deterministic)
// Thiên Long sẽ được gán cho nhiều books (khoảng 50-60% các books để đảm bảo > 8 cuốn)
function assignNarratorToBook(bookId: string): string {
  const hash = hashString(bookId);
  const hashValue = Math.abs(hash);

  // 60% chance for Thiên Long (hashValue % 10 < 6), 40% for others
  // Điều này đảm bảo từ ~31 cuốn sẽ có khoảng 18-19 cuốn cho Thiên Long
  if (hashValue % 10 < 6) {
    return "Thiên Long";
  }

  // Distribute remaining books to other narrators
  const otherNarrators = NARRATORS.filter((n) => n !== "Thiên Long");
  const narratorIndex = ((hashValue % 10) - 6) % otherNarrators.length;
  return otherNarrators[narratorIndex] || NARRATORS[0];
}

function createBookDetailFromBook(
  book: Book,
  category: "books" | "stories" | "podcast" | "summaries" | "kids"
): BookDetail {
  const bookWithDescription = mockBooksWithDescriptions.find(
    (b) => b.id === book.id
  );

  const description = bookWithDescription?.description;

  const hours = deterministicValue(book.id, 3, 7); // 3-7 hours
  const minutes = deterministicValue(book.id + "_min", 0, 59);
  const seconds = deterministicValue(book.id + "_sec", 0, 59);
  const duration = `${hours} giờ ${minutes} phút ${seconds} giây`;

  const price = deterministicValue(book.id + "_price", 50000, 250000); // 50k - 250k
  const rating = deterministicFloat(book.id + "_rating", 3.5, 5.0, 1); // 3.5 - 5.0
  const ratingCount = deterministicValue(book.id + "_count", 5, 55); // 5 - 55

  const narrator = assignNarratorToBook(book.id);

  return {
    ...book,
    description,
    synopsis: description,
    duration,
    narrator: narrator,
    channel: book.author,
    price,
    rating,
    ratingCount,
    chapters: generateDefaultChapters(book),
    relatedBooks: generateRelatedBooks(book.id, category),
  };
}

export function getBookDetailById(
  id: string,
  category: "books" | "stories" | "podcast" | "summaries" | "kids" = "books",
  source?: "featured" | "new" | "quality"
): BookDetail | null {
  if (category === "books" && source) {
    let book: Book | null = null;

    if (source === "featured") {
      book = mockFeaturedBooks.find((b) => b.id === id) || null;
    } else if (source === "new") {
      book = mockNewContents?.find((b) => b.id === id) || null;
    } else if (source === "quality") {
      book = mockAllQualityBooks.find((b) => b.id === id) || null;
      if (!book) {
        for (const books of Object.values(mockSingleQualityBooksCategory)) {
          book = books.find((b) => b.id === id) || null;
          if (book) break;
        }
      }
    }

    if (book) {
      const preDefinedDetail = mockBookDetails[id];
      if (
        preDefinedDetail &&
        preDefinedDetail.title === book.title &&
        preDefinedDetail.author === book.author
      ) {
        return preDefinedDetail;
      }
      return createBookDetailFromBook(book, category);
    }
  }

  const book = findBookById(id, category);

  if (book) {
    const preDefinedDetail = mockBookDetails[id];

    if (
      preDefinedDetail &&
      preDefinedDetail.title === book.title &&
      preDefinedDetail.author === book.author
    ) {
      return preDefinedDetail;
    }

    return createBookDetailFromBook(book, category);
  }

  if (mockBookDetails[id]) {
    return mockBookDetails[id];
  }

  return null;
}
