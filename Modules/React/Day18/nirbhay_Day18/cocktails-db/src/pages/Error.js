import React from "react";
import { Link } from "react-router-dom";

export default function Error() {
  return (
    <div className="row about">
      <div className="col-lg-7 pt-5 text-center">
        <h1 className="text-white">Oops! It's a Dead End</h1>
        <Link
          to="/"
          className="btn text-white my-5"
          style={{ background: "#ffb4b4" }}
        >
          Back Home
        </Link>
      </div>
    </div>
  );
}
