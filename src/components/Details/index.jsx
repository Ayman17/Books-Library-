import axios from "axios";
import React, { useEffect, useState } from "react";
import ErrorMessage from "../ErrorMessage";
import Loading from "../Loading";
import { useParams } from "react-router-dom";

export default function Details() {
  const {id} = useParams()
  const [details, setDetails] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState("loading");
  const [sanitizedDescription, setSanitizedDescription] = useState(null);

  function getDetails() {
    console.log(id)
    axios
      .get(`https://www.googleapis.com/books/v1/volumes/${id}`)
      .then(({ data }) => {
        setDetails(data);
        setSanitizedDescription(data?.volumeInfo.description);
        setLoading("done");
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
      ) : loading === "loading" ? (
        <Loading />
      ) : (
        <div className="row gy-5">
           <div className="col-lg-4 ">
            <div className="">
              <img
                className="w-100"
                src={`https://books.google.com/books/content/images/frontcover/${details?.id}?fife=w480-h690`}
                alt="Book image"
              />
            </div>
          </div>
          <div className="col-lg-8 ">
            <div className=" ">
              <h1>{details?.volumeInfo.title}</h1>
              <div
                className=" "
                dangerouslySetInnerHTML={{ __html: sanitizedDescription }}
              ></div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
