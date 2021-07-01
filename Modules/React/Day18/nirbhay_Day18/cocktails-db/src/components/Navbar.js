import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaCocktail,
  FaBars,
  FaSearch,
  FaUser,
  FaShoppingCart,
} from "react-icons/fa";

export default function Navbar(props) {
  const handleSubmit = props.handleSubmit;
  const handleToggle = props.handleToggle;
  const toggle = props.toggle;

  const [searchBox, setSearchBox] = useState("");

  const onFormSubmit = (e) => {
    e.preventDefault();
    handleSubmit(searchBox);
  };

  const handleClick = () => {
    handleToggle(true);
  };

  const handleChange = (e) => {
    setSearchBox(e.target.value);
    handleSubmit(e.target.value);
  };

  const handleBlur = () => {
    document.getElementById("root").style.background =
      "linear-gradient(to right, #ff8080 60%, #ffe8e8 40%)";
    document.getElementById("root").style.backgroundAttachment = "fixed";
    document.body.style.background =
      "linear-gradient(to right, #ff8080 60%, #ffe8e8 40%)";
    handleToggle(false);
  };

  return (
    <div className="navbar navbar-expand-lg">
      <div className="container-fluid ps-4 pe-4">
        <Link to="/" className="navbar-brand text-white" onClick={handleBlur}>
          <FaCocktail /> TheCocktailDB
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mynavbar"
          aria-expanded="false"
        >
          <FaBars className="text-white" />
        </button>
        <div className="collapse navbar-collapse" id="mynavbar">
          <ul className="navbar-nav ms-lg-2 mb-2">
            {!toggle && (
              <>
                <li className="nav-item">
                  <Link to="/" className="nav-link text-white px-3">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/about" className="nav-link text-white px-3">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/" className="nav-link text-white px-3">
                    Contact
                  </Link>
                </li>
              </>
            )}
          </ul>
          <form
            onSubmit={onFormSubmit}
            className="d-flex justify-content-end w-100"
          >
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="search cocktails"
                value={searchBox}
                onClick={handleClick}
                onChange={handleChange}
              />
              <button type="submit" className="btn">
                <FaSearch />
              </button>
            </div>
            <div className="d-flex justify-content-center align-items-center px-3">
              <FaUser className="mx-2" />
              <FaShoppingCart className="mx-2" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
