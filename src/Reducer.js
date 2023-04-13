//import { FETCH_MOVIES } from "./constant"
import { RECEIVE_MOVIES } from "./Actions";

const initialState = {
  movies: [],
  likedMovies: [],
  blockMovies: [],
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_MOVIES:
      return {
        ...state,
        movies: action.payload,
      };
    /*
        case 'likedList/like':
            return {}
        case 'likedList/dislike':
            return {}
        case 'blockList/block':
            return {}
        case 'blockList/unblock':
            return {} */
    default:
      return state;
  }
};

export default Reducer;
