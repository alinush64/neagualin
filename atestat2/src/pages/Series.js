import React from "react";
import series from "../data/SeriesData"; 
import SeriesCard from "../components/SeriesCard";
import "../styles/styles.css";

const Series = () => {
  return (
    <div className="movies-container">
      <h1>Seriale</h1>
      <div className="movies-grid">
        {series.map((s) => (
          <SeriesCard key={s.id} series={s} />
        ))}
      </div>
    </div>
  );
};

export default Series; 
