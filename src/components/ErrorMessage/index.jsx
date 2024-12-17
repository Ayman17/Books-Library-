import React from "react";

export default function ErrorMessage({errorMessage}) {
  return <h3 className=" alert alert-danger text-center">{errorMessage}</h3>;
}
