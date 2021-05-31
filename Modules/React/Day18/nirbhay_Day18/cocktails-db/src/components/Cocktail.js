import React from "react";
import { Link } from "react-router-dom";

export default function Cocktail({
  image,
  id,
  name,
  info,
  glass,
  ingredients,
}) {
  const fingredients = ingredients.filter((e) => e != null);
  return (
    <div className="col">
      <div className="card">
        <Link to={`/cocktail/${id}`}>
          <img src={image} alt="" className="card-img-top" />
        </Link>
        <h6 className="card-title pt-2 pb-1 m-0">{name}</h6>
        <p className="card-text p-0 m-0 text-muted">{glass}</p>
        <p className="card-text p-0 m-0 text-muted">
          {fingredients.length}/15 Ingedients
        </p>
      </div>
    </div>
  );
}
