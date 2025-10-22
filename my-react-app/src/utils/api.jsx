import React, { useState, useEffect } from "react";
import MovieDetails from "../pages/MovieDetails";
import SearchBar from "../components/SearchBar";

const Api = () => {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const getMovieRequest = async () => {
    const url = "https://api.tvmaze.com/shows";
    const response = await fetch(url);
    const responseJson = await response.json();
    setMovies(responseJson);
  };

  useEffect(() => {
    getMovieRequest();
  }, []);

  // Filter movies based on searchValue
  const filteredMovies = movies.filter((movie) =>
    movie.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <div className="container-fluid">
      <div className="row mb-4">
        {/* Render SearchBar correctly with uppercase */}
        <SearchBar value={searchValue} onChange={setSearchValue} />
      </div>

      <div className="row">
        <MovieDetails movies={filteredMovies} />
      </div>
    </div>
  );
};

export default Api;


