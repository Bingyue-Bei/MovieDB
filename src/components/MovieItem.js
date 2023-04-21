import MovieDetail from "./MovieDetail";
import { useDispatch, useSelector } from "react-redux";
import { likedMovies, dislikedMovies, blockMovies, unblockMovies } from "../Actions";
import { posterUrl } from "../constant";

export const MovieItem = ({ element, index }) => {
  const dispatch = useDispatch();
  const likedList = useSelector((state) => state.likedMovies);
    const blockedList = useSelector((state) => state.blockMovies);


  const handleLike = (element) => {
    const movieIndex = likedList.findIndex((movie) => movie.id === element.id);
    if (movieIndex === -1) {
      dispatch(likedMovies(element));
    } else {
      dispatch(dislikedMovies(element));
    }
  };

    const handleBlock = (element) => {
      const movieIndex = blockedList.findIndex(
        (movie) => movie.id === element.id
      );
      if (movieIndex === -1) {
        dispatch(blockMovies(element));
      } else {
        dispatch(unblockMovies(element));
      }
    };


  return (
    <div className="movie-list-card" key={index}>
      <img
        src={posterUrl + element.poster_path}
        alt={"Poster of " + element.title}
      ></img>
      <MovieDetail movie={element} />
      <div className="movie-list-card__action">
        <div className="like-icon" onClick={() => handleLike(element)}>
          {likedList.findIndex((movie) => movie.id === element.id) === -1
            ? "Like"
            : "Liked!!!"}
        </div>
        <div className="block-icon" onClick={() => handleBlock(element)}>
          {blockedList.findIndex((movie) => movie.id === element.id) === -1
            ? "Block"
            : "Blocked!!!"}
        </div>
      </div>
    </div>
  );
};
