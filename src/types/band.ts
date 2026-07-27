export interface Band {
  id: number;
  name: string;
  slug: string;
  image: string;

  genre: string;
  country: string;
  formed: number;

  description: string;
  history: string;

  members: string[];

  albums: number[];
}