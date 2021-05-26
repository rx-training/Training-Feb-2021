import React from "react";

export default function Title(props) {
  return (
    <div className="title p-4">
      <h3 className="text-uppercase text-center mx-auto"> {props.title} </h3>
      <div className="titleborder"></div>
    </div>
  );
}
