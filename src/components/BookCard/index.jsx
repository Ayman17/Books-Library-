import React from "react";

export default function BookCard({book}) {
  return (
    <div className="col-md-4 col-lg-2">
      <div className="h-100 text-center">
        <img
          className=" w-100 h-75"
          src={book.volumeInfo.imageLinks.thumbnail}
          alt="book image"
        />
        <h3 className="h4 pt-2">
          {book.volumeInfo.title ? book.volumeInfo.title : "Unknown"}
        </h3>
      </div>
    </div>
  );
}
