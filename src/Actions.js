export const RECEIVE_MOVIES = "RECEIVE_MOVIES";
export const BLOCK_MOVIE = "BLOCK_MOVIE";
export const UNBLOCK_MOVIE = "UNBLOCK_MOVIE";
export const RECEIVE_TOTAL_PAGE_COUNT = "RECEIVE_TOTAL_PAGE_COUNT";
export const RECEIVE_CURRENT_PAGE = "RECEIVE_CURRENT_PAGE";
export const SORT_BY_TITLE = "SORT_BY_TITLE";
export const SORT_BY_TITLE_DESC = "SORT_BY_TITLE_DESC";
export const SORT_BY_VOTE = "SORT_BY_VOTE";
export const SORT_BY_VOTE_DESC = "SORT_BY_VOTE_DESC";
export const SORT_BY_VOTE_AVERAGE = "SORT_BY_VOTE_AVERAGE";
export const SORT_BY_VOTE_AVERAGE_DESC = "SORT_BY_VOTE_AVERAGE_DESC";
export const SORT_BY_RELEASE_DATE = "SORT_BY_RELEASE_DATE";
export const SORT_BY_RELEASE_DATE_DESC = "SORT_BY_RELEASE_DATE_DESC";

// add by cchen 20230413 for `like page` ticket
export const LIKED_MOVIES = "LIKED_MOVIES";
export const DISLIKED_MOVIES = "DISLIKED_MOVIES";

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

export const fetchMovies =
  (pageNum = 1) =>
  (dispatch) =>
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=6ebbb29dce0cec38629a6d732af0b3da&language=en-US&page=${pageNum}`
    )
      .then((response) => response.json()) // Extract JSON data from response
      .then((data) => {
        dispatch(receiveCurrentPage(data.page));
        dispatch(receiveTotalPageCount(data.total_pages));
        dispatch(receiveMovies(data.results));
      }); // Dispatch action with extracted data
