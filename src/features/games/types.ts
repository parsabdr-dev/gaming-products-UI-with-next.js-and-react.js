export interface RawgGame {
  id: number;
  name: string;
  background_image: string;
  rating: number;
  released: string;
  genres: { id: number; name: string }[];
  platforms: { platform: { id: number; name: string } }[];
}

export interface RawgGameDetails extends RawgGame {
  description_raw: string;
  website: string;
}

export interface GamesResponse {
  count: number;
  results: RawgGame[];
}