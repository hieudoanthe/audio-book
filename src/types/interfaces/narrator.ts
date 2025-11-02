import type { BookDetail } from "./book";

export interface NarratorDetail {
  id: string;
  name: string;
  albums: BookDetail[];
}

export interface NarratorDetailPageProps {
  narrator: NarratorDetail;
}

export interface NarratorHeaderProps {
  narrator: NarratorDetail;
}

export interface NarratorAlbumsListProps {
  narrator: {
    albums: BookDetail[];
    name: string;
  };
}
