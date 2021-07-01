import React from "react";
import Cocktail from "./Cocktail";

export default function CocktailList({ loading, cocktails }) {
  if (loading) {
    return <h3 className="text-center text-muted py-3">Loading...</h3>;
  }
  if (cocktails.length < 1) {
    return (
      <h3 className="text-center text-muted py-3">
        No cocktails matched your search criteria
      </h3>
    );
  }
  return (
    <section className="container">
      <p className="text-muted text-end" style={{ fontSize: "0.9rem" }}>
        You searched for <b>{cocktails.length} cocktails</b>
      </p>
      <div className="row row-cols-1 row-cols-md-3 g-4 px-4">
        {cocktails.map((item) => {
          return <Cocktail key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
}
