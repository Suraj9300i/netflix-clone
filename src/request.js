// https://api.themoviedb.org/3/discover/movie?api_key=a3fa4b1669da1e693de9f443049b28c5&with_genres=28

const requests = {
  trendingmovies:
    "https://api.themoviedb.org/3/trending/all/week?api_key=a3fa4b1669da1e693de9f443049b28c5",
  netflixOriginals:
    "https://api.themoviedb.org/3/network/213?api_key=a3fa4b1669da1e693de9f443049b28c5",
  topRated:
    "https://api.themoviedb.org/3/movie/top_rated?api_key=a3fa4b1669da1e693de9f443049b28c5&language=en-US&page=1",
  allGenre:
    "https://api.themoviedb.org/3/genre/movie/list?api_key=a3fa4b1669da1e693de9f443049b28c5&language=en-US",
  imageBaseurl: "https://image.tmdb.org/t/p/original",
};

export default requests;
