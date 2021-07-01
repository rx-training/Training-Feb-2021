import React from "react";
import logo from "../../LogoCityTour.png";
import "./navbar.scss";

export default function Navbar() {
  return (
    <nav className="navbar">
      <img src={logo} alt="CityTours" height="40" />
      <ul className="nav-links">
        <li>
          <a href="/" className="nav-link">
            Home
          </a>
        </li>
        <li>
          <a href="/" className="nav-link">
            About
          </a>
        </li>
        <li>
          <a href="/" className="nav-link active">
            Tours
          </a>
        </li>
      </ul>
    </nav>
  );
}
