import React from 'react';
import '../styles/Home.css'; 

const Home = () => {
  return (
    <div className="home-container">
      <div className="intro-section">
        <h1>Descoperă cele mai bune filme și seriale!</h1>
        <p>
          Bun venit pe site-ul nostru! Aici poți viziona filme și seriale de top,
          din diverse genuri, complet gratuit și fără limită! Explorează colecția noastră
          vastă de titluri și începe să te bucuri de o experiență de neuitat.
        </p>
      </div>

      <div className="popular-section">
        <h2>Filme Populare</h2>
        <div className="grid-container">
          <div className="movie-card">
            <img src="/images/interstellar.jpg" alt="Interstellar" />
          </div>
          <div className="movie-card">
            <img src="/images/avatar.jpg" alt="Avatar" />
          </div>
          <div className="movie-card">
            <img src="/images/avengers.jpg" alt="The Avengers" />
          </div>
          <div className="movie-card">
            <img src="/images/inception.jpg" alt="Inception" />
          </div>
        </div>
      </div>

      <div className="popular-section">
        <h2>Seriale Populare</h2>
        <div className="grid-container">
          <div className="movie-card">
            <img src="/images/bb.jpg" alt="Serial 1" />
          </div>
          <div className="movie-card">
            <img src="/images/got.jpg" alt="Serial 2" />
          </div>
          <div className="movie-card">
            <img src="/images/peaky.jpg" alt="Serial 3" />
          </div>
          <div className="movie-card">
            <img src="/images/rickandmor.jpg" alt="Serial 4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
