import React from "react";
import loadingGif from "../images/gif/loading.gif";

export default function Loading() {
  return (
    <div className="text-center py-3">
      <img src={loadingGif} alt="" />
      <h4>rooms data loading...</h4>
    </div>
  );
}
