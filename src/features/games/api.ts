import axios from 'axios';
import { GamesResponse, RawgGameDetails } from './types';

const rawgApi = axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: process.env.NEXT_PUBLIC_RAWG_KEY,
  },
});

export const fetchGames = async (params?: {
  page?: number;
  page_size?: number;
  search?: string;
  genres?: string;
  platforms?: string;
}): Promise<GamesResponse> => {
  const response = await rawgApi.get<GamesResponse>('/games', { params });
  return response.data;
};

export const fetchGameDetails = async (id: string | number): Promise<RawgGameDetails> => {
  const response = await rawgApi.get<RawgGameDetails>(`/games/${id}`);
  return response.data;
};