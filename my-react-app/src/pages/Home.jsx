import React, { useState } from "react";
import { useFetchMovies } from "../hooks/useFetchMovies";
import MovieCard from "../components/MovieCard";
import SearchBar from "../components/SearchBar";

const Home = () => {
  const { trendingMovies, popularMovies, loading, error } = useFetchMovies();
  const [searchValue, setSearchValue] = useState("");

  if (loading) return <p>Loading movies...</p>;
  if (error) return <p>Error: {error}</p>;

  // Filter movies based on search input
  const filteredTrending = trendingMovies.filter((movie) =>
    movie.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  const filteredPopular = popularMovies.filter((movie) =>
    movie.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <div>
      <h1>Movie Explorer</h1>

      {/* Search bar */}
      <SearchBar value={searchValue} onChange={setSearchValue} />

      <h2>Trending Movies</h2>
      <div className="movie-list flex flex-wrap">
        {filteredTrending.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>

      <h2>Popular Movies</h2>
      <div className="movie-list flex flex-wrap">
        {filteredPopular.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Home;

