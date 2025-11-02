import type { BookDetail } from "./book";

export interface AuthorDetail {
  id: string;
  name: string;
  imageUrl: string;
  description: string;
  albums: BookDetail[];
  notableAuthors?: AuthorBasic[];
}

export interface AuthorBasic {
  id: string;
  name: string;
  imageUrl: string;
}

export interface AuthorDetailPageProps {
  author: AuthorDetail;
}

export interface AuthorHeaderProps {
  author: AuthorDetail;
}

export interface AuthorIntroductionProps {
  author: AuthorDetail;
}

export interface NotableAuthorsProps {
  authors: AuthorBasic[];
}

export interface AuthorAlbumsListProps {
  author: {
    albums: BookDetail[];
    name: string;
  };
}
