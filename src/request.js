// https://api.themoviedb.org/3/discover/movie?api_key=a3fa4b1669da1e693de9f443049b28c5&with_genres=28

const requests = {
  trendingmovies:
    "https://api.themoviedb.org/3/trending/all/week?api_key=a3fa4b1669da1e693de9f443049b28c5",
  netflixOriginals:
    "https://api.themoviedb.org/3/discover/tv?api_key=a3fa4b1669da1e693de9f443049b28c5&with_networks=213",
  topRated:
    "https://api.themoviedb.org/3/movie/top_rated?api_key=a3fa4b1669da1e693de9f443049b28c5&language=en-US&page=1",
  allGenre:
    "https://api.themoviedb.org/3/genre/movie/list?api_key=a3fa4b1669da1e693de9f443049b28c5&language=en-US",
  imageBaseurl: "https://image.tmdb.org/t/p/original",
  genreBaseurl:
    "https://api.themoviedb.org/3/discover/movie?api_key=a3fa4b1669da1e693de9f443049b28c5&with_genres=",
};

export default requests;
