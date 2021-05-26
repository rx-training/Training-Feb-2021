import React from "react";

export default function Banner({ children, heading, title, subtitle }) {
  return (
    <div className="banner col-10 col-md-6 col-lg-6">
      <h4 className="h4 text-uppercase m-0">{heading}</h4>
      <h1 className="display-4 text-uppercase m-0">{title}</h1>
      <p className="p mx-lg-5 px-lg-5 m-0 lh-sm">{subtitle}</p>
      {children}
    </div>
  );
}
