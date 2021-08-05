import {
  POPULAR_BASE_URL,
  SEARCH_BASE_URL,
  MOVIE_ENDPOINT,
  CREDITS_ENDPOINT,
  API_URL,
} from "./config.js";

export const fetchMovies = async (movie, loadMore, searchTerm) => {
  const endpoint = searchTerm
    ? `${SEARCH_BASE_URL}${searchTerm}&page=${
        loadMore ? movie.currentPage + 1 : 1
      }`
    : `${POPULAR_BASE_URL}&page=${loadMore ? movie.currentPage + 1 : 1}`;

  const result = await (await fetch(endpoint)).json();

  return {
    ...movie,
    movies: loadMore
      ? [...movie.movies, ...result.results]
      : [...result.results],
    heroImage: movie.heroImage || result.results[0],
    currentPage: result.page,
    totalPages: result.total_pages,
  };
};

export const getMovieDetail = async (movieId) => {
  const endpoint = MOVIE_ENDPOINT(movieId);
  const creditsEndpoint = CREDITS_ENDPOINT(movieId);

  const result = await (await fetch(endpoint)).json();
  const creditResult = await (await fetch(creditsEndpoint)).json();

  const directors = creditResult.crew.filter(
    (member) => member.job === "Director"
  );

  return {
    ...result,
    actors:creditResult.cast,
    directors
  }
};
