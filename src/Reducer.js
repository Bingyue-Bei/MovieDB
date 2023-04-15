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
  
  // add by cchen 20230413 for `like page` ticket
  LIKED_MOVIES,
  DISLIKED_MOVIES,

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

    // add by cchen 20230413 for `like page` ticket
    case LIKED_MOVIES:
      if (
        state.likedMovies.find(
          (element) => element.id === action.payload.id
        )
      ) {
        return state;
      } else
        return {
          ...state,
          likedMovies: [...state.likedMovies, action.payload],
        };
    case DISLIKED_MOVIES:
      const afterList = state.likedMovies.filter(
        (element) => element !== action.payload
      );
      return {
        ...state,
        likedMovies: afterList,
      };
    
    default:
      return state;
  }
};

export default Reducer;
