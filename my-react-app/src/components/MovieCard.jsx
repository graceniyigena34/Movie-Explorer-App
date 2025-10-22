import React from "react";

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card border rounded-lg p-2 m-2 shadow-md w-48">
      <img
        src={movie.image?.medium || "https://via.placeholder.com/210x295"}
        alt={movie.name}
        className="rounded-md w-full h-auto"
      />
      <h3 className="text-lg font-bold mt-2">{movie.name}</h3>
      <p>⭐ {movie.rating?.average || "N/A"}</p>
      <p className="text-sm text-gray-500">{movie.genres?.join(", ")}</p>
    </div>
  );
};

export default MovieCard;

