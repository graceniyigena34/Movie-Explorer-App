import React from 'react';

const MovieDetails = ({ movies }) => {
  return (
    <div className="movie-list">
      {movies.map((movie, index) => (
        <div key={movie.id || index} className="movie-item">
          <img 
            src={movie.image?.medium} 
            alt={movie.name} 
            style={{ width: '200px', borderRadius: '8px' }}
          />
          <h3>{movie.name}</h3>
          <p>{movie.genres.join(', ')}</p>
        </div>
      ))}
    </div>
  );
};

export default MovieDetails;
