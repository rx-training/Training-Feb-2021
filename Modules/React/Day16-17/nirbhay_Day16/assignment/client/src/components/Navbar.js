import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar navbar-expand-lg p-1">
      <div className="container">
        <Link to="/" className="navbar-brand text-white">
          <img src="/uploads/react.png" alt="" height="40" className="me-2" />
          Student Card
        </Link>
        <ul className="navbar-nav list-group-horizontal">
          <li className="nav-item px-2">
            <Link to="/" className="nav-link text-white">
              Home
            </Link>
          </li>
          <li className="nav-item px-2">
            <Link to="/view-students/" className="nav-link text-white">
              StudentsList
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
