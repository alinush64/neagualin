import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import MoviePage from "./pages/MoviePage";
import Series from "./pages/Series";
import SeriesPage from "./pages/SeriesPage"; 


const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/movies" element={<Movies />} />
  <Route path="/movies/:id" element={<MoviePage />} />
  <Route path="/series" element={<Series />} /> {}
  <Route path="/series/:id" element={<SeriesPage />} />
</Routes>

    </div>
  );
};

export default App;
