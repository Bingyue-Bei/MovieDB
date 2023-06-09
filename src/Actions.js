import {
  RECEIVE_MOVIES,
  BLOCK_MOVIE,
  UNBLOCK_MOVIE,
  RECEIVE_TOTAL_PAGE_COUNT,
  RECEIVE_CURRENT_PAGE,
  SORT_BY_TITLE,
  SORT_BY_TITLE_DESC,
  SORT_BY_VOTE,
  SORT_BY_VOTE_DESC,
  SORT_BY_VOTE_AVERAGE,
  SORT_BY_VOTE_AVERAGE_DESC,
  SORT_BY_RELEASE_DATE,
  SORT_BY_RELEASE_DATE_DESC,
  LIKED_MOVIES,
  DISLIKED_MOVIES,
} from "./constant";


export const receiveMovies = (movies) => ({
  type: RECEIVE_MOVIES,
  payload: movies,
});

export const receiveTotalPageCount = (num) => ({
  type: RECEIVE_TOTAL_PAGE_COUNT,
  payload: num,
});

export const receiveCurrentPage = (num) => ({
  type: RECEIVE_CURRENT_PAGE,
  payload: num,
});

export const sortByTitle = () => ({
  type: SORT_BY_TITLE,
});

export const sortByTitleDesc = () => ({
  type: SORT_BY_TITLE_DESC,
});

export const sortByVote = () => ({
  type: SORT_BY_VOTE,
});

export const sortByVoteDesc = () => ({
  type: SORT_BY_VOTE_DESC,
});

export const sortByVoteAverage = () => ({
  type: SORT_BY_VOTE_AVERAGE,
});

export const sortByVoteAverageDesc = () => ({
  type: SORT_BY_VOTE_AVERAGE_DESC,
});

export const sortByReleaseDate = () => ({
  type: SORT_BY_RELEASE_DATE,
});

export const sortByReleaseDateDesc = () => ({
  type: SORT_BY_RELEASE_DATE_DESC,
});

export const blockMovies = (movie) => ({
  type: BLOCK_MOVIE,
  payload: movie,
});

export const unblockMovies = (movie) => ({
  type: UNBLOCK_MOVIE,
  payload: movie,
});

// likeMovies() dislikeMovies() add by cchen 20230413 for `like page` ticket
export const likedMovies = (movie) => ({
  type: LIKED_MOVIES,
  payload: movie,
});

export const dislikedMovies = (movie) => ({
  type: DISLIKED_MOVIES,
  payload: movie,
});

export const fetchMovies = (page = 1, query = "") => {
  let endpoint = `https://api.themoviedb.org/3/movie/popular?api_key=6ebbb29dce0cec38629a6d732af0b3da&language=en-US&page=${page}`;
  if (query !== "") {
    endpoint = `https://api.themoviedb.org/3/search/movie?api_key=6ebbb29dce0cec38629a6d732af0b3da&language=en-US&query=${query}&page=${page}`;
  }
  return (dispatch) =>
    fetch(endpoint)
      .then((response) => response.json()) // Extract JSON data from response
      .then((data) => {
        dispatch(receiveCurrentPage(data.page));
        dispatch(receiveTotalPageCount(data.total_pages));
        dispatch(receiveMovies(data.results));
      });
};
