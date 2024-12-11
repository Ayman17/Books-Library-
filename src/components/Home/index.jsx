import axios from "axios";
import React, { useEffect, useState } from "react";
import "./style.css";
import Loading from "../../Loading";

export default function Home() {
  const [books, setBooks] = useState([]);
  function getBooks() {
    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=subject:fiction&key=AIzaSyBQAECvHFwhxREoiGP71WeRcOKknHliShI`
      )
      .then(({ data: { items } }) => {
        console.log(items);
        let filtered = items.filter((item) => item.id !== "xZNVDAaxrGIC");
        console.log(filtered);
        setBooks(filtered);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  useEffect(() => {
    getBooks();
  }, []);
  return (
    <>
      {!books ? (
        <Loading />
      ) : (
        <div className="row">
          <div className="col-md-4 d-flex flex-column justify-content-center">
            <div className="descriptionBorder w-25"></div>
            <div className="">
              <h2 className="fw-bolder">
                Explore, Discover <br /> and <br /> Borrow <br /> Your Next
                Great Read
              </h2>
            </div>
            <div className="descriptionBorder w-75"></div>
          </div>
          {books.map((book, i) => (
            <div key={i} className="col-md-4 col-lg-2">
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
          ))}
          {/* Repeat for test */}
          {books.map((book, i) => (
            <div key={i} className="col-md-2 col-xl-2 bookCard">
              <div className="h-100 text-center">
                <img
                  className=" w-100 h-75"
                  src={book.volumeInfo.imageLinks.thumbnail}
                  alt="book image"
                />
                <h3 className="h5 pt-2">{book.volumeInfo.title}</h3>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
