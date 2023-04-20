import { useDispatch, useSelector } from "react-redux";
import { unblockMovies } from "../Actions";
import MovieDetail from "./MovieDetail";
import PropTypes from "prop-types";

function BlockPage() {
  const dispatch = useDispatch();
  const list = useSelector((state) => state.blockMovies);

  function handleRemoveElement(element) {
    dispatch(unblockMovies(element));
  }
  return (
    <div className="movie-list-container">
      {list.length !== 0 ? (
        list.map((element) => (
          <div className="movie-container" key={element.id}>
            <img
              src={`http://image.tmdb.org/t/p/w500${element.poster_path}`}
              className="poster"
              alt="poster"
            />
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

BlockPage.propTypes = {
  blockMovies: PropTypes.array.isRequired,

  blockMoviesAction: PropTypes.func.isRequired,

  unblockMovies: PropTypes.func.isRequired,
};

export default BlockPage;
