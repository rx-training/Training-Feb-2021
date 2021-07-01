import React, { Component } from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import RoomsContainer from "../components/RoomsContainer";

export default class Rooms extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <Hero hero="roomsHero">
          <Banner title="our rooms">
            <Link to="/" className="btn btn-outline-light mt-4 px-3">
              Return Home
            </Link>
          </Banner>
        </Hero>
        <RoomsContainer />
      </>
    );
  }
}
