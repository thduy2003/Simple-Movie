export const fetcher = (...args) => fetch(...args).then((res) => res.json());
export const apiKey = `631f00a19098cc0e85e78597345f9e30`;
const tmdbEndPoint = `https://api.themoviedb.org/3/movie`;
const tmdbEndPointSearch = `https://api.themoviedb.org/3/search/movie`;
export const tmdbApi = {
  getMovieList: (type, page = 1) =>
    `${tmdbEndPoint}/${type}?api_key=${apiKey}&page=${page}`,
  getMovieDetails: (movieId) => `${tmdbEndPoint}/${movieId}?api_key=${apiKey}`,
  getMovieSearch: (query, page) =>
    `${tmdbEndPointSearch}?api_key=${apiKey}&query=${query}&page=${page}`,
  getMovieMeta: (movieId, type) =>
    `${tmdbEndPoint}/${movieId}/${type}?api_key=${apiKey}`,
  imageOriginal: (url) => `https://image.tmdb.org/t/p/original/${url}`,
  image500: (url) => `https://image.tmdb.org/t/p/w500/${url}`,
};
