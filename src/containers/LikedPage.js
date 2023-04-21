import { useDispatch, useSelector } from "react-redux";
import { dislikedMovies } from "../Actions";
import MovieDetail from "../components/MovieDetail";
import PropTypes from "prop-types";

function LikedPage() {
  const dispatch = useDispatch();
  const list = useSelector((state) => state.likedMovies);

  function handleRemoveElement(element) {
    dispatch(dislikedMovies(element));
  }
  return (
    <div className="movie-list-container">
      {list.length !== 0 ? (
        list.map((element) => (
          <div className="movie-container">
            <img
              src={`http://image.tmdb.org/t/p/w500${element.poster_path}`}
              className="poster"
              alt="poster"
            />
            <p>{element.title}</p>
            <MovieDetail movie={element} />
            <button onClick={() => handleRemoveElement(element)}>Remove</button>
          </div>
        ))
      ) : (
        <h1>No movies in this list!</h1>
      )}
    </div>
  );
}

LikedPage.propTypes = {
  likedMovies: PropTypes.array.isRequired,

  likedMoviesAction: PropTypes.func.isRequired,

  dislikedMovies: PropTypes.func.isRequired,
};
export default LikedPage;
