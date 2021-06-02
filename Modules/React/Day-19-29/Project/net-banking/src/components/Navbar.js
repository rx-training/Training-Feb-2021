import React from "react";
import Logo from "../../src/components/Images/3.jpg";
import { AiFillHome } from 'react-icons/ai';
export const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-md navbar-light bg-light">
      <a className="navbar-brand" href="http://localhost:3000/">
        <img style={{ height: "60px", width: "100px" }} alt="logo" src={Logo} />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse mr-5 ml-5" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto align-items-center  ">
          <li class="nav-item active ml-5 ">
            <a class="nav-link" href="#Home">
            Home
            </a>
          </li>
          <li class="nav-item ml-5">
            <a class="nav-link " href="#About">
              About
            </a>
          </li>
          <li class="nav-item ml-5 ">
            <a class="nav-link" href="#why">
              Why To Choose Us
            </a>
          </li>
         

        </ul>
        <form class="form-inline my-2 my-lg-0">
          <input
            class="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
            Search
          </button>
        </form>
      </div>
    </nav>
  );
};
