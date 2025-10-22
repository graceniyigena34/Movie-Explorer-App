import React, { useState, useEffect } from "react";
import MovieDetails from "../pages/MovieDetails";


const Api = () => {
  const [movies, setMovies] = useState([]);
 


  const getMovieRequest = async () => {
    const url = "https://api.tvmaze.com/shows";
    const response = await fetch(url);
    const responseJson = await response.json();
    setMovies(responseJson);
  };

  useEffect(() => {
    getMovieRequest();
  }, []);

  return (
    <div>
      <div className="row">
        <MovieDetails movies={movies} />
      </div>
    </div>
  );
};

export default Api;

