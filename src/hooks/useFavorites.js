import { useState, useEffect } from 'react';

const STORAGE_KEY = 'react_movie_explorer_favs_v1';

export default function useFavorites() {
  const [favorites, setFavorites] = useState(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites));
    } catch {}
  }, [favorites]);

  const addFavorite = (movie) => {
    setFavorites(prev => {
      if (prev.some(m => m.id === movie.id)) return prev;
      return [...prev, movie];
    });
  };

  const removeFavorite = (id) => {
    setFavorites(prev => prev.filter(m => m.id !== id));
  };

  const toggleFavorite = (movie) => {
    if (favorites.some(m => m.id === movie.id)) removeFavorite(movie.id);
    else addFavorite(movie);
  };

  return { favorites, addFavorite, removeFavorite, toggleFavorite, setFavorites };
}


