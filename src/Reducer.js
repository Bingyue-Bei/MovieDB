//import { FETCH_MOVIES } from "./constant"
import {
  BLOCK_MOVIE,
  RECEIVE_MOVIES,
  UNBLOCK_MOVIE,
  RECEIVE_TOTAL_PAGE_COUNT,
  RECEIVE_CURRENT_PAGE,
  SORT_BY_TITLE,
  SORT_BY_VOTE,
  SORT_BY_VOTE_AVERAGE,
  SORT_BY_RELEASE_DATE,
} from "./Actions";

const initialState = {
  movies: [],
  likedMovies: [],
  blockMovies: [],
  totalPage: 0,
  currentPage: 1,
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_MOVIES:
      return {
        ...state,
        movies: action.payload,
      };
    case RECEIVE_TOTAL_PAGE_COUNT:
      return {
        ...state,
        totalPage: action.payload,
      };
    case RECEIVE_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };
    case SORT_BY_TITLE:
      return {
        ...state,
        movies: state.movies.slice().sort((a, b) => {
          if (a.title < b.title) {
            return -1;
          }
          if (a.title > b.title) {
            return 1;
          }
          return 0;
        }),
      };
    case "likedList/like":
      return state;
    case "likedList/dislike":
      return state;
    case BLOCK_MOVIE:
      if (
        state.blockMovies.find(
          (element) => element.movie_id === action.payload.movie_id
        )
      ) {
        return state;
      } else
        return {
          ...state,
          blockMovies: [...state.blockMovies, action.payload],
        };
    case UNBLOCK_MOVIE:
      const newList = state.blockMovies.filter(
        (element) => element !== action.payload
      );
      return {
        ...state,
        blockMovies: newList,
      };

    default:
      return state;
  }
};

export default Reducer;
