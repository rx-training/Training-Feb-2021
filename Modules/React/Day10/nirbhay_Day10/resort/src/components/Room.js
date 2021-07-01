import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import defaultImage from "../images/room-2.jpeg";

export default function Room(props) {
  const { name, images, price, slug, description } = props.room;
  return (
    <div className="col-md-4 py-3">
      <div className="card">
        <div className="card-img-top">
          <div className="price-tag py-1 px-3">
            <p className="fw-bold mb-0" style={{ letterSpacing: "0.1rem" }}>
              {" "}
              ${price}{" "}
            </p>
            <p className="my-0" style={{ fontSize: "0.7rem" }}>
              per night
            </p>
          </div>
          <div className="shutter">
            <Link
              to={`/rooms/${slug}`}
              className="btn btn-outline-light text-uppercase p-2 px-3"
            >
              Features
            </Link>
          </div>
          <img src={images[0] || defaultImage} className="w-100" alt="" />
        </div>
        <div className="card-body">
          <h5 className="card-title text-capitalize fw-bold">{name}</h5>
          <p className="card-text text-muted">
            {description.substring(0, 150)}{" "}
            <span className="fw-bolder" style={{ letterSpacing: "0.15rem" }}>
              ...
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

Room.propTypes = {
  room: PropTypes.shape({
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    price: PropTypes.number.isRequired,
  }),
};
