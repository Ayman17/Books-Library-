import React from "react";

export default function CategoryCard({ name }) {
  return (
    <div className="col-sm-3">
        <div className="bg-danger rounded-3 p-3 text-center">
          <h1>{name}</h1>
        </div>
    </div>
  );
}
