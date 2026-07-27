export interface Album {
  id: number;
  title: string;
  slug: string;

  cover: string;

  year: number;

  bandId: number;

  genre: string;

  description: string;
}