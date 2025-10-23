import { useEffect, useState } from "react";
import { getAllMovies } from "../utils/api";

export default function useFetchMovies() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchMovies() {
      try {
        const data = await getAllMovies();
        console.log("Movies fetched:", data); 
        setMovies(data);
      } catch (err) {
        console.log("Fetch error:", err);
        setError("Failed to load movies");
      } finally {
        setLoading(false);
      }
    }
    fetchMovies();
  }, []);

  return { movies, loading, error };
}


