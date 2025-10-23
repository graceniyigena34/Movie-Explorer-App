import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieById } from "../utils/api";
import useFavorites from "../hooks/useFavorites";

export default function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const { favorites, toggleFavorite } = useFavorites();

  useEffect(() => {
    async function load() {
      const data = await getMovieById(id);
      setMovie(data);
      setLoading(false);
    }
    load();
  }, [id]);

  if (loading) return <p className="text-center mt-10">Loading details...</p>;
  if (!movie) return <p className="text-center mt-10">Movie not found.</p>;

  const isFav = favorites.some((f) => f.id === movie.id);

  return (
    <div className="p-6 flex flex-col md:flex-row gap-6">
      <img
        src={movie.image?.original}
        alt={movie.name}
        className="w-full md:w-1/3 rounded-lg"
      />
      <div>
        <h2 className="text-3xl font-bold mb-2">{movie.name}</h2>
        <p className="text-gray-400 mb-2">{movie.genres.join(", ")}</p>
        <p dangerouslySetInnerHTML={{ __html: movie.summary }} className="mb-4" />
        <button
          onClick={() => toggleFavorite(movie)}
          className={`px-4 py-2 rounded-lg font-semibold ${
            isFav ? "bg-accent text-white" : "bg-gray-600 hover:bg-accent"
          }`}
        >
          {isFav ? "Remove Favorite" : "Add to Favorites"}
        </button>
      </div>
    </div>
  );
}
