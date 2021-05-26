import React from "react";

export default function Hero({ children, hero }) {
  return (
    <div className={hero}>
      <div className="shadow d-flex flex-column w-100">{children}</div>
    </div>
  );
}

Hero.defaultProps = {
  hero: "defaultHero",
};
