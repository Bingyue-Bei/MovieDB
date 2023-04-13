import { Link } from "react-router-dom";

export const RECEIVE_MOVIES = "RECEIVE_MOVIES";
export const BLOCK_MOVIE = "BLOCK_MOVIE";
export const UNBLOCK_MOVIE = "UNBLOCK_MOVIE";

export const receiveMovies = (movies) => ({
  type: RECEIVE_MOVIES,
  payload: movies,
});

export const blockMovies = movie => ({
  type: BLOCK_MOVIE,
  payload: movie
});

export const unblockMovies = movie => ({
  type: UNBLOCK_MOVIE,
  payload: movie
});

export const fetchMovies = (pageNum) => dispatch => (
  fetch(`https://api.themoviedb.org/3/movie/popular?api_key=6ebbb29dce0cec38629a6d732af0b3da&language=en-US&page=${pageNum}`)
    .then(response => response.json()) // Extract JSON data from response
    .then(data => {
        dispatch(receiveMovies(data.results))}) // Dispatch action with extracted data
);