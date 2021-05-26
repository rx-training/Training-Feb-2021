import React from "react";

export default function BoilingVerdict(props) {
  if (props.celsius >= 100)
    return <h3 style={{ color: "red" }}>The water would boil.</h3>;
  return <h3 style={{ color: "green" }}>The water would not boil.</h3>;
}
