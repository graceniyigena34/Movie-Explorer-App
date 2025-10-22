import { useState, useEffect } from 'react';
import { fetchShows, Show } from '@/utils/api';

export const useFetchMovies = () => {
  const [movies, setMovies] = useState<Show[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadMovies = async () => {
      try {
        setLoading(true);
        const data = await fetchShows();
        setMovies(data);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    loadMovies();
  }, []);

  return { movies, loading, error };
};
