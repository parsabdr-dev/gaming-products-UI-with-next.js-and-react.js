import { useEffect, useState } from 'react';
import { fetchGameDetails } from './api';
import { RawgGameDetails } from './types';

export const useGameDetails = (id: string) => {
  const [game, setGame] = useState<RawgGameDetails | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadGame = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchGameDetails(id);
        setGame(data);
      } catch {
        setError('Failed to load game details');
      } finally {
        setLoading(false);
      }
    };

    loadGame();
  }, [id]);

  return { game, loading, error };
};