import React from "react";
import Logo from "../Images/3.jpg";
import { FaFacebookF } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";

import './navbar.scss'
export const Navbar = (props) => {
const{id}=props
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

      <div class="collapse navbar-collapse " id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto align-items-center  ">
    
          <li class="nav-item mx-3">
            <a class="nav-link " href={`http://localhost:3000/Home/${id}`}>
              Home
            </a>
          </li>
          <li class="nav-item  mx-3">
            <a class="nav-link"href={`http://localhost:3000/Portal/${id}`}>
              Deposit
            </a>
          </li>
          <li class="nav-item  mx-3">
            <a class="nav-link" href={`http://localhost:3000/Portal/${id}/Withdrawl`}>
              Withdrawl
            </a>
          </li>
          <li class="nav-item  mx-3">
            <a class="nav-link" href={`http://localhost:3000/Portal/${id}/NEFT`}>
              Transfer
            </a>
          </li>
          <li class="nav-item  mx-3">
            <a class="nav-link" href={`http://localhost:3000/Portal/${id}/Delete`}>
              Close A/c
            </a>
          </li>
          <li class="nav-item mx-3 ">
            <a class="nav-link" href="#why">
              About Us
            </a>
          </li>
        </ul>
        <div>
          <span className="p-3 h4"><FaFacebookF></FaFacebookF></span>
          <span className="p-3 h4"><AiFillInstagram></AiFillInstagram></span>
          <span className="p-3 h4"><AiOutlineTwitter></AiOutlineTwitter></span>
        </div>
      </div>
    </nav>
  );
};
