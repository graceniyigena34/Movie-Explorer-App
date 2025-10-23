export async function getAllMovies() {
  const res = await fetch("https://api.tvmaze.com/shows");
  const data = await res.json();
  return data;
}

export async function getMovieById(id) {
  const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
  const data = await res.json();
  return data;
}


