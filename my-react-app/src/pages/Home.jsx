import React from "react";
import { useFetchMovies } from "../hooks/useFetchMovies";

const Home = () => {
  const { trendingMovies, popularMovies, loading, error } = useFetchMovies();

  if (loading) return <p>Loading movies...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>Trending Movies</h2>
      <div className="movie-list">
        {trendingMovies.map((movie) => (
          <div key={movie.id} className="movie-card">
            <img src={movie.image?.medium} alt={movie.name} />
            <h3>{movie.name}</h3>
            <p>⭐ {movie.rating?.average || "N/A"}</p>
          </div>
        ))}
      </div>

      <h2>Popular Movies</h2>
      <div className="movie-list">
        {popularMovies.map((movie) => (
          <div key={movie.id} className="movie-card">
            <img src={movie.image?.medium} alt={movie.name} />
            <h3>{movie.name}</h3>
            <p>⭐ {movie.rating?.average || "N/A"}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
