import React from "react";

const MovieCard = ({ movies }) => {
  return (
    <div data-testid="movie-card" style={{ display:"grid",gridTemplateColumns: "repeat(3, 1fr)" }} >
      {movies.map((movie, index) => (
        <div style={{boxShadow:"0 0 10px black"}} >
          <img src={movie.poster} alt={movie.title} />
          <h2>{movie.title}</h2>
          <h2>Year: {movie.year}</h2>
          <h2>ID: {movie.id}</h2>
          <h2>Type: {movie.type}</h2>
          <h2>Rating: {movie.rating}</h2>
        </div>
      ))}
    </div>
  );
};

export default MovieCard;
