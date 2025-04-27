import React from "react";
import movies from "../data/MoviesData";
import MovieCard from "../components/MovieCard";
import "../styles/styles.css";

const Movies = () => {
  return (
    <div className="movies-container">
      <h1>Filme</h1>
      <div className="movies-grid">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Movies;
