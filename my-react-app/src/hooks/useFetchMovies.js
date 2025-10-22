import { useState, useEffect } from "react";

// Custom hook to fetch movies
export const useFetchMovies = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch trending movies
  const getTrendingMovies = async () => {
    try {
      const res = await fetch("https://api.tvmaze.com/shows");
      if (!res.ok) throw new Error("Failed to fetch trending movies");
      const data = await res.json();
      setTrendingMovies(data.slice(0, 12));
    } catch (err) {
      setError(err.message);
    }
  };

  // Fetch popular movies (sorted by rating)
  const getPopularMovies = async () => {
    try {
      const res = await fetch("https://api.tvmaze.com/shows");
      if (!res.ok) throw new Error("Failed to fetch popular movies");
      const data = await res.json();
      const sorted = data.sort((a, b) => b.rating.average - a.rating.average);
      setPopularMovies(sorted.slice(0, 12));
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      await Promise.all([getTrendingMovies(), getPopularMovies()]);
      setLoading(false);
    };
    fetchData();
  }, []);

  return { trendingMovies, popularMovies, loading, error };
};

