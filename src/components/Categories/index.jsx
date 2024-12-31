import React, { useEffect, useState } from "react";
import CategoryCard from "../CategoryCard";
import axios from "axios";
import { getDomain } from "../../constant/domain";
import Loading from "../Loading";

export default function Categories() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState("loading");
  function getCategories() {
    axios
      .get(
        `${getDomain()}/books/v1/volumes?q=subject:fiction&key=AIzaSyBQAECvHFwhxREoiGP71WeRcOKknHliShI`
      )
      .then(({ data: { items } }) => {
        let categoryList = Array.from(
          new Set(items.map((item) => item.volumeInfo.categories).flat())
        );
        setCategories(categoryList);
        setLoading("done");
      });
  }
  useEffect(() => {
    getCategories();
  }, []);
  return (
    <>
      {loading === "loading" ? (
        <Loading />
      ) : (
        <div className="row justify-content-center align-items-center align-content-center vh-100 gy-3 ">
          {categories.map((catName, i) => (
            <CategoryCard key={i} name={catName} />
          ))}
        </div>
      )}
    </>
  );
}
