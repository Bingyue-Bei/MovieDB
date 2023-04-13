export const RECEIVE_MOVIES = "RECEIVE_MOVIES";

export const receiveMovies = (movies) => ({
  type: RECEIVE_MOVIES,
  payload: movies,
});

export const fetchMovies =
  (pageNum = 1) =>
  (dispatch) =>
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=6ebbb29dce0cec38629a6d732af0b3da&language=en-US&page=${pageNum}`
    )
      .then((response) => response.json()) // Extract JSON data from response
      .then((data) => {
        dispatch(receiveMovies(data.results));
      }); // Dispatch action with extracted data
