import "./Homepage.css";
import Banner from "./Banner";
import requests from "./request";
import Row from "./Row";
import { useState, useEffect } from "react";

function Homepage() {
  const [genres, setgenres] = useState([]);

  useEffect(() => {
    async function f() {
      let response = await fetch(requests.allGenre)
        .then((response) => {
          return response.json();
        })
        .catch((error) => {
          console.log(error);
        });
      setgenres(response?.genres);
    }
    f();
  }, []);

  return (
    <div className="Homepage">
      <Banner url={requests.netflixOriginals}></Banner>
      <div className="Rows">
        <Row title="Netflix Originals" url={requests.netflixOriginals}></Row>
        <Row title="Trending Movies" url={requests.trendingmovies}></Row>
        <Row title="Top Rated" url={requests.topRated}></Row>
        {genres.map((genre) => (
          <Row
            key={genre.id}
            title={genre.name}
            url={`${requests.genreBaseurl}${genre.id}`}
          ></Row>
        ))}
      </div>
    </div>
  );
}

export default Homepage;
