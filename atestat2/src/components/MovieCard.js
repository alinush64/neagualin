import React from "react";
import { Link } from "react-router-dom";
import "../styles/styles.css";

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <img src={movie.image} alt={movie.title} />
      <h3>{movie.title} ({movie.year})</h3>
      <p>{movie.quality}</p>
      <Link to={`/movies/${movie.id}`} className="btn">Detalii</Link>
    </div>
  );
};

export default MovieCard;

