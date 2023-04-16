import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { likedMovies, dislikedMovies } from '../Actions';
import MovieDetail from "./MovieDetail";
import PropTypes from "prop-types";



function LikedPage() {
  const [newElement, setNewElement] = useState('');
  const dispatch = useDispatch();
  const list = useSelector(state => state.likedMovies);

  function handleRemoveElement(element) {
    dispatch(dislikedMovies(element));
  }
  return (
    <div className="movie-list-container">
      {list.map((element) => (
        <div className="movie-container">
          <img
            src={`http://image.tmdb.org/t/p/w500${element.poster_path}`}
            className="poster" alt="poster"
          />
          <p>{element.title}</p>
          <MovieDetail movie={element} />
          <button onClick={() => handleRemoveElement(element)}>Remove</button>
        </div>
      ))}
    </div>
  );
}

LikedPage.propTypes = {
  // List of movies that the user has liked
  likedMovies: PropTypes.array.isRequired,

  // Redux dispatch function for liking movies
  likedMoviesAction: PropTypes.func.isRequired,

  // Redux dispatch function for disliking movies
  dislikedMovies: PropTypes.func.isRequired,
};
export default LikedPage;