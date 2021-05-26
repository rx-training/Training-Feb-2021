import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import { FaPhoneAlt, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Navber(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark w-100">
      <div className="container">
        <Link to="/" className="navbar-brand">
          <img src={logo} alt="" height="37" />
        </Link>
        <button
          type="button"
          className="navbar-toggler mx-2"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-expanded="false"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse d-lg-flex justify-content-lg-end"
          id="navbarText"
        >
          <ul className="navbar-nav p-2">
            <li className="nav-item px-4">
              <Link to="/" className="nav-link text-white active">
                Home
              </Link>
            </li>
            <li className="nav-item px-4">
              <Link to="/rooms/" className="nav-link text-white">
                Rooms
              </Link>
            </li>
            <li className="nav-item px-4">
              <Link to="" className="nav-link text-white">
                <FaPhoneAlt /> +91 9102029202
              </Link>
            </li>
            <li className="nav-item">
              <Link to="" className="nav-link text-white">
                <FaFacebook />
              </Link>
            </li>
            <li className="nav-item">
              <Link to="" className="nav-link text-white">
                <FaTwitter />
              </Link>
            </li>
            <li className="nav-item">
              <Link to="" className="nav-link text-white">
                <FaInstagram />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
