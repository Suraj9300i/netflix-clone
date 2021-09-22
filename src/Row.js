import React, { useState, useEffect } from "react";
import requests from "./request";
import "./Row.css";

let Row = ({ title, url }) => {
  let [movies, setMovies] = useState([]);

  useEffect(() => {
    async function f() {
      let response = await fetch(url)
        .then((response) => {
          return response.json();
        })
        .catch((error) => {
          console.log(error);
        });
      setMovies(response?.results);
    }
    f();
  }, [url]);

  return (
    <div className="Row">
      <h3 className="Row__title">{title}</h3>
      <div className="Row__posters">
        {movies.map((movie) => {
          return (
            <img
              key={movie?.id}
              className="Row__posters-poster"
              src={`${requests.imageBaseurl}${
                movie?.poster_path || movie?.backdrop_path
              }`}
              alt={movie?.name || movie?.title}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Row;
