import axios from "axios";
import React, { useEffect, useState } from "react";
import "./style.css";
import Loading from "../../Loading";
import { getDomain } from "../../constant/domain";
import BookCard from "../BookCard";
import ErrorMessage from "../ErrorMessage";

export default function Home() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState("loading");
  const [errorMessage, setErrorMessage] = useState("");
  function getBooks() {
    axios
      .get(
        `${getDomain()}/books/v1/volumes?q=subject:fiction&key=AIzaSyBQAECvHFwhxREoiGP71WeRcOKknHliShI`
      )
      .then(({ data: { items } }) => {
        let filtered = items.filter((item) => item.id !== "xZNVDAaxrGIC");
        setBooks(filtered);
        setLoading("done");
      })
      .catch(({ message }) => {
        setErrorMessage(message);
        setLoading("error");
      });
  }
  useEffect(() => {
    getBooks();
  }, []);
  return (
    <>
      {loading === "loading" ? (
        <Loading />
      ) : loading === "error" ? (
        <ErrorMessage errorMessage={errorMessage} />
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
            <BookCard key={i} book={book} />
          ))}
        </div>
      )}
    </>
  );
}
