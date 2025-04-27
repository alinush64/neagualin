import React from "react";
import { Link } from "react-router-dom";
import "../styles/SeriesCard.css";

const SeriesCard = ({ series }) => {
  return (
    <div className="movie-card">
      <img src={series.image} alt={series.title} className="series-image" />
      <h3>{series.title} ({series.year})</h3>
      <p>{series.quality}</p>
      <Link to={`/series/${series.id}`} className="btn">Detalii</Link>
    </div>
  );
};

export default SeriesCard;
