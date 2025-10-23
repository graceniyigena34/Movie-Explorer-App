import { useState, useMemo } from "react";
import useFetchMovies from "../hooks/useFetchMovies";
import useFavorites from "../hooks/useFavorites";
import SearchBar from "../components/SearchBar";
import CategoryFilter from "../components/CategoryFilter";
import MovieCard from "../components/MovieCard";

export default function Home() {
  const { movies, loading, error } = useFetchMovies();
  const { favorites, toggleFavorite } = useFavorites();
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

  const genres = useMemo(() => {
    const set = new Set();
    movies.forEach((m) => m.genres.forEach((g) => set.add(g)));
    return Array.from(set);
  }, [movies]);

  const filtered = movies.filter(
    (m) =>
      m.name.toLowerCase().includes(search.toLowerCase()) &&
      (!category || m.genres.includes(category))
  );

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (error) return <p className="text-center mt-10 text-red-400">{error}</p>;

  return (
    <div className="p-6">
      <SearchBar value={search} onChange={setSearch} />
      <CategoryFilter genres={genres} selected={category} onChange={setCategory} />

      {filtered.length === 0 && <p className="text-center">No movies found.</p>}

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-4">
        {filtered.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            isFavorite={favorites.some((f) => f.id === movie.id)}
            onToggleFavorite={toggleFavorite}
          />
        ))}
      </div>
    </div>
  );
}


