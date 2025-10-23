import useFavorites from "../hooks/useFavorites";
import MovieCard from "../components/MovieCard";
import { Link } from "react-router-dom";

export default function Favorites() {
  const { favorites, toggleFavorite } = useFavorites();

  if (favorites.length === 0)
    return <p className="text-center mt-10">You have 0 favorite movies.</p>;

  return (
    <div className="p-6 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
      {favorites.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          isFavorite={true}
          onToggleFavorite={toggleFavorite}
        />
      ))}
    </div>
  );
}
