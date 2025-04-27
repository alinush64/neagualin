import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">Cinema</div>
      <div className="nav-links">
        <Link to="/">Acasă</Link>
        <Link to="/movies">Filme</Link>
        <Link to="/series">Seriale</Link>
      </div>
    </nav>
  );
}

export default Navbar;
