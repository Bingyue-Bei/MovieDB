//import { FETCH_MOVIES } from "./constant"
import {BLOCK_MOVIE, RECEIVE_MOVIES, UNBLOCK_MOVIE} from "./Actions"
const initialState = {
  movies: [],
  likedMovies: [],
  blockMovies: [],
};

const Reducer = (state=initialState, action)=>{
    switch(action.type) {
        case RECEIVE_MOVIES:
            return {
                ...state,
                movies: action.payload,
            }
        case 'likedList/like':
            return state
        case 'likedList/dislike':
            return state
        case BLOCK_MOVIE:
            console.log(state.blockMovies)
            if (state.blockMovies.includes(action.payload)) {
                return state
            } else return {
                ...state, 
                blockMovies: [...state.blockMovies, action.payload]}
        case UNBLOCK_MOVIE:
            const newList = state.blockMovies.filter(element => element !== action.payload);
            return {
                ...state,
                blockMovies: newList}

        default:
            return state
    }
}

export default Reducer;