import React, { useState, useEffect } from "react";
import requests from "./request";
import "./Row.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

let Row = ({ title, url }) => {
  let [movies, setMovies] = useState([]);
  let [trailerId, setTrailerID] = useState("");

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

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

  async function getMovieTrailer(movie) {
    let trailer = await movieTrailer(
      movie?.name || movie?.title || movie?.original_title
    )
      .then((url) => {
        return url;
      })
      .catch((e) => {
        console.log(e);
      });
    trailer &&
      setTrailerID(trailer.split("https://www.youtube.com/watch?v=")[1]);
  }

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
              onClick={() => {
                getMovieTrailer(movie);
              }}
            />
          );
        })}
      </div>
      {trailerId ? (
        <YouTube
          autoplay
          videoId={trailerId}
          opts={opts}
          onReady={(e) => {
            // e.target.pauseVideo();
          }}
          className="Row__youtube"
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default Row;
