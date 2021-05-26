import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import waterHomeHero from "../images/water-homeHero3.png";
import Banner from "../components/Banner";
import Services from "../components/Services";
import FeaturedRooms from "../components/FeaturedRooms";

export default function Home() {
  return (
    <>
      <Hero hero="homeHero">
        <Banner
          heading="welcome to the"
          title="Beach Resort"
          subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque id dolor repellend, aperiam saepe amet iusto praesentium pariatur! Ipsum, et Lorem ipsum dolor sit amet consectetur"
        >
          <Link to="/rooms" className="btn btn-outline-light mt-4 px-3">
            Get your room
          </Link>
        </Banner>
        <div className="fog align-self-end w-100 d-none d-lg-block">
          <img src={waterHomeHero} alt="" className="w-100 h-100" />
        </div>
      </Hero>
      <Services />
      <FeaturedRooms />
    </>
  );
}
