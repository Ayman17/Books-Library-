import axios from "axios";
import React, { useEffect, useState } from "react";
import ErrorMessage from "../ErrorMessage";

export default function Details() {
  const [bookId, setBookId] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  function getDetails() {
    axios
      .get(`https://www.googleapis.com/books/v1/volumes/FOHtDwAAQBAJ`)
      .then(({ data }) => {
        setBookId(data.id);
      })
      .catch(({ message }) => {
        setErrorMessage(message);
      });
  }
  useEffect(() => {
    getDetails();
  }, []);
  return (
    <>
      {errorMessage ? (
        <ErrorMessage errorMessage={errorMessage} />
      ) : (
        <div className="row bg-danger">
          <div className="col-lg-8 bg-warning">
            <div className=" bg-success">
              <h1>hello</h1>
            </div>
          </div>
          <div className="col-lg-4 bg-info">
            <div className=" bg-secondary">
              <img
                className="w-75"
                src={`https://books.google.com/books/content/images/frontcover/${bookId}?fife=w480-h690`}
                alt="Book Image"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
