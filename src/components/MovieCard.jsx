import { Link } from "react-router-dom";

export default function MovieCard({ movie, isFavorite, onToggleFavorite }) {
  return (
    <div className="bg-slate-800 rounded-xl overflow-hidden shadow-md hover:shadow-accent/40 transition">
      <img
        src={movie.image?.medium || "https://via.placeholder.com/210x295?text=No+Image"}
        alt={movie.name}
        className="w-full object-cover"
      />
      <div className="p-3">
        <h3 className="font-bold text-lg truncate">{movie.name}</h3>
        <p className="text-sm text-gray-400">{movie.genres.join(", ")}</p>
        <div className="flex justify-between items-center mt-2">
          <Link
            to={`/movie/${movie.id}`}
            className="text-gray-400  font-bold text-sm hover:underline"
          >
            View Details
          </Link>
          <button
            onClick={() => onToggleFavorite(movie)}
            className={`px-2 py-1 rounded-lg text-xs font-semibold ${
              isFavorite ? " text-white" : "bg-gray-600 "
            }`}
          >
            {isFavorite ? "❤️" : "🤍"}
          </button>
        </div>
      </div>
    </div>
  );
}



