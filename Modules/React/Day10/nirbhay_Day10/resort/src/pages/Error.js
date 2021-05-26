import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";

export default function Error() {
  return (
    <>
      <Hero hero="errorHero">
        <Banner title="404" subtitle="Page Not Found">
          <Link to="/" className="btn btn-outline-light mt-4 px-3">
            Return Home
          </Link>
        </Banner>
      </Hero>
    </>
  );
}
