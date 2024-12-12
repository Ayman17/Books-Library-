import React from "react";

export default function Loading() {
  // TODO: work on loading that not appear in home page
  return (
    <div className=" vh-100 d-flex justify-content-center align-items-center">
      <div className="spinner-grow text-success" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}
