import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Details() {
  const [details, setDetails] = useState(null)
  function getDetails() {
    axios
      .get("https://www.googleapis.com/books/v1/volumes/KVGd-NabpW0C")
      .then(({data}) => {
        setDetails(data)
      })
      .catch((err) => {
        console.log(err);
      });
  }
  useEffect(() => {
    getDetails();
  }, []);
  return (
    <div className="row bg-danger">
      <div className="col-lg-8 bg-warning">
        <div className=" bg-success">
          <h1>hello</h1>
        </div>
      </div>
      <div className="col-lg-4 bg-info">
        <div className=" bg-secondary">
          <h1>hello</h1>
        </div>
      </div>
    </div>
  );
}
