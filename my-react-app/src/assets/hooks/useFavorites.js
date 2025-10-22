import { useState, useEffect } from 'react';

const FAVORITES_KEY = 'movieFavorites';

export const useFavorites = () => {
  const [favorites, setFavorites] = useState<number[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem(FAVORITES_KEY);
    if (stored) {
      try {
        setFavorites(JSON.parse(stored));
      } catch (e) {
        console.error('Failed to parse favorites', e);
      }
    }
  }, []);

  const addFavorite = (id: number) => {
    setFavorites((prev) => {
      const updated = [...prev, id];
      localStorage.setItem(FAVORITES_KEY, JSON.stringify(updated));
      return updated;
    });
  };

  const removeFavorite = (id: number) => {
    setFavorites((prev) => {
      const updated = prev.filter((fav) => fav !== id);
      localStorage.setItem(FAVORITES_KEY, JSON.stringify(updated));
      return updated;
    });
  };

  const isFavorite = (id: number) => favorites.includes(id);

  return { favorites, addFavorite, removeFavorite, isFavorite };
};

