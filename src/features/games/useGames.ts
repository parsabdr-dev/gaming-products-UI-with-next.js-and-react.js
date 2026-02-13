import { useEffect, useState } from 'react';
import { fetchGames } from './api';
import { RawgGame } from './types';

export interface GamesFilters {
  search: string;
  genre: string;
  platform: string;
  page: number;
}

const PAGE_SIZE = 12;

export const useGames = () => {
  const [games, setGames] = useState<RawgGame[]>([]);
  const [total, setTotal] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const [filters, setFilters] = useState<GamesFilters>({
    search: '',
    genre: '',
    platform: '',
    page: 1,
  });

  const loadGames = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchGames({
        page: filters.page,
        page_size: PAGE_SIZE,
        search: filters.search || undefined,
        genres: filters.genre || undefined,
        platforms: filters.platform || undefined,
      });
      setGames(data.results);
      setTotal(data.count);
    } catch {
      setError('Failed to load games');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadGames();
  }, [filters]);

  const updateFilters = (newFilters: Partial<GamesFilters>) => {
    setFilters(prev => ({ ...prev, ...newFilters, page: 1 }));
  };

  const changePage = (page: number) => {
    setFilters(prev => ({ ...prev, page }));
  };

  return {
    games,
    total,
    loading,
    error,
    filters,
    updateFilters,
    changePage,
  };
};