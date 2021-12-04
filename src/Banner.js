import React, { useEffect, useState } from "react";
import "./Banner.css";
import Navbar from "./Navbar";
import requests from "./request";

let Banner = ({ url}) => {
  let [movie, setMovie] = useState();
  useEffect(() => {
    async function fun() {
      let response = await fetch(url)
        .then((response) => {
          return response.json();
        })
        .catch((error) => {
          console.log(error);
        });
      setMovie(response.results[Math.floor(Math.random() * 20)]);
    }
    fun();
  }, [url]);

  let truncateString = (str) => {
    if (str) {
      if (str.length <= 120) return str;
      return `${str.substring(0, 120)}....`;
    }
  };

  return (
    <header>
      <div
        className="Banner"
        style={{
          backgroundImage: `url(
            ${requests.imageBaseurl}${
            movie?.backdrop_path || movie?.poster_path
          }
          )`,
        }}
      >
        <Navbar></Navbar>

        <div className="Banner-center">
          <h1 className="Banner__title">
            {movie?.name ||
              movie?.title ||
              movie?.original_name ||
              movie?.original_title}
          </h1>
          <div className="Banner__Buttons">
            <button className="Banner__Buttons-button">Play</button>
            <button className="Banner__Buttons-button">MyList</button>
          </div>
          <p className="Banner__discription">
            {truncateString(movie?.overview)}
          </p>
        </div>
        <div className="Banner-gradient"></div>
      </div>
    </header>
  );
};

export default Banner;
