
import {
  BLOCK_MOVIE,
  RECEIVE_MOVIES,
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
    case SORT_BY_TITLE_DESC:
      return {
        ...state,
        movies: state.movies.slice().sort((a, b) => {
          if (b.title < a.title) {
            return -1;
          }
          if (b.title > a.title) {
            return 1;
          }
          return 0;
        }),
      };
    case SORT_BY_VOTE:
      return {
        ...state,
        movies: state.movies.slice().sort((a, b) => {
          return a.vote_count - b.vote_count;
        }),
      };
    case SORT_BY_VOTE_DESC:
      return {
        ...state,
        movies: state.movies.slice().sort((a, b) => {
          return b.vote_count - a.vote_count;
        }),
      };
    case SORT_BY_VOTE_AVERAGE:
      return {
        ...state,
        movies: state.movies.slice().sort((a, b) => {
          return a.vote_average - b.vote_average;
        }),
      };
    case SORT_BY_VOTE_AVERAGE_DESC:
      return {
        ...state,
        movies: state.movies.slice().sort((a, b) => {
          return b.vote_average - a.vote_average;
        }),
      };
    case SORT_BY_RELEASE_DATE:
      return {
        ...state,
        movies: state.movies.slice().sort((a, b) => {
          return new Date(a.release_date) - new Date(b.release_date);
        }),
      };
    case SORT_BY_RELEASE_DATE_DESC:
      return {
        ...state,
        movies: state.movies.slice().sort((a, b) => {
          return new Date(b.release_date) - new Date(a.release_date);
        }),
      };
    case BLOCK_MOVIE:
      if (
        state.blockMovies.find(
          (element) => element.id === action.payload.id
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
        (element) => element.id !== action.payload.id
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
