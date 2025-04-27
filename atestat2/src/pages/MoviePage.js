import React, { useState } from "react";
import { useParams } from "react-router-dom";
import movies from "../data/MoviesData";
import "./MoviePage.css";
import CustomVideoPlayer from "../components/CustomVideoPlayer";

const MoviePage = () => {
  const { id } = useParams();
  const selectedMovie = movies.find((movie) => movie.id === id);
  const [showPlayer, setShowPlayer] = useState(false);
  const [adClicksRemaining, setAdClicksRemaining] = useState(2);

  const handlePlayClick = (e) => {
    e.preventDefault();

    if (adClicksRemaining > 0) {
      window.open("https://www.amazon.com/", "_blank");
      window.open("https://www.amazon.com/", "_blank");
      setAdClicksRemaining(adClicksRemaining - 1);
    } else {
      setShowPlayer(true);
    }
  };

  if (!selectedMovie) {
    return <div className="error-message">Film negăsit</div>;
  }

  return (
    <div className="movie-container">
      <div className="left-column">
        <img
          className="movie-detail-image"
          src={selectedMovie.image}
          alt={selectedMovie.title}
        />
        <h1>{selectedMovie.title} ({selectedMovie.year})</h1>
        <p><strong>Calitate:</strong> {selectedMovie.quality}</p>
        <p>{selectedMovie.description}</p>

        {selectedMovie.trailer && !showPlayer && (
          <button type="button" className="play-button" onClick={handlePlayClick}>
            Play Film
          </button>
        )}
      </div>

      <div className="right-column">
        {showPlayer && selectedMovie.trailer && (
          <div>
            <h2>Trailer</h2>
            <CustomVideoPlayer videoSrc={selectedMovie.trailer} />
          </div>
        )}
      </div>
    </div>
  );
};

export default MoviePage;
