import React, { useState } from "react";
import { useParams } from "react-router-dom";
import series from "../data/SeriesData";
import "./MoviePage.css";
import CustomVideoPlayer from "../components/CustomVideoPlayer";

const SeriesPage = () => {
  const { id } = useParams();
  const selectedSeries = series.find((s) => s.id === id);
  const [showPlayer, setShowPlayer] = useState(false);
  const [adClicksRemaining, setAdClicksRemaining] = useState(2);

  const handlePlayClick = (e) => {
    e.preventDefault();

    if (adClicksRemaining > 0) {
      window.open("https://www.amazon.com/", "_blank");

      setTimeout(() => {
        window.open("https://www.ebay.com/", "_blank");
      }, 500);

      setAdClicksRemaining(adClicksRemaining - 1);
    } else {
      setShowPlayer(true);
    }
  };

  if (!selectedSeries) {
    return <div className="error-message">Serial negăsit</div>;
  }

  return (
    <div className="movie-container">
      <div className="left-column">
        <img
          className="movie-detail-image"
          src={selectedSeries.image}
          alt={selectedSeries.title}
        />
        <h1>{selectedSeries.title} ({selectedSeries.year})</h1>
        <p><strong>Calitate:</strong> {selectedSeries.quality}</p>
        <p>{selectedSeries.description}</p>

        {selectedSeries.trailer && !showPlayer && (
          <button type="button" className="play-button" onClick={handlePlayClick}>
            Play Serial
          </button>
        )}
      </div>

      <div className="right-column">
        {showPlayer && selectedSeries.trailer && (
          <div>
            <h2>Trailer</h2>
            <CustomVideoPlayer videoSrc={selectedSeries.trailer} />
          </div>
        )}
      </div>
    </div>
  );
};

export default SeriesPage;
