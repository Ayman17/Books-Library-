import React from "react";

export default function Loading() {
  return (
    <div className=" vh-100 d-flex justify-content-center align-items-center">
      <div class="spinner-grow text-success" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}
