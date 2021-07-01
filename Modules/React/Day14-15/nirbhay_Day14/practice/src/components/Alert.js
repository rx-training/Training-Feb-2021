import React from "react";

export default function Alert({ type, text }) {
  return (
    <div
      className={`alert col-md-8 mx-auto p-2 my-3 text-center alert-${type}`}
    >
      {text}
    </div>
  );
}
