import { link } from "joi";
import React from "react";
import { Link } from "react-router-dom";

export default function BookCard({ book }) {
  return (
    <div className="col-md-4 col-lg-2">
      <Link
        to={`/details/${book.id}`}
        className="text-decoration-none text-reset"
      >
        <div className="h-100 text-center">
          <img
            className=" w-100 h-75"
            // TODO: Improve the images resolution with this link https://books.google.com/books/content/images/frontcover/KVGd-NabpW0C?fife=w480-h690
            src={`https://books.google.com/books/content/images/frontcover/${book.id}?fife=w480-h690`}
            alt="book image"
          />
          <h3 className="h4 pt-2 ">
            {book.volumeInfo.title ? book.volumeInfo.title : "Unknown"}
          </h3>
        </div>
      </Link>
    </div>
  );
}
