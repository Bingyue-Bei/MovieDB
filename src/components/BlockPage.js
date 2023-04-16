import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { blockMovies, unblockMovies } from '../Actions';
import MovieDetail from "./MovieDetail";
/*
function fetchMovie(movieID) {
    const baseURL = `https://api.themoviedb.org/3/movie/${movieID}?api_key=6ebbb29dce0cec38629a6d732af0b3da&language=en-US`
    fetch(baseURL)
        .then(response=>response.json()).then(data=>console.log(data))
        
        .then(data=> data.poster_path)
        .then(poster_path => `http://image.tmdb.org/t/p/w500${poster_path}`)
        .then()
        
}

function fetchPoster(poster_path) {
  const posterURL = `http://image.tmdb.org/t/p/w500${poster_path}`;
  return posterURL;
}
*/
function BlockPage() {
  const [newElement, setNewElement] = useState('');
  const dispatch = useDispatch();
  const list = useSelector(state => state.blockMovies);
  function handleAddElement() {
    const baseURL = `https://api.themoviedb.org/3/movie/${newElement}?api_key=6ebbb29dce0cec38629a6d732af0b3da&language=en-US`
    fetch(baseURL)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        if (data.success === undefined) {
          dispatch(blockMovies(data));
        } else {
          alert("invalid movie id!");
        }
      })
    setNewElement('');
  }

  function handleRemoveElement(element) {
    dispatch(unblockMovies(element));
  }
  return (
    <div className="movie-list-container">
      {list.map((element) => (
        <div className="movie-container">
          <img
            src={`http://image.tmdb.org/t/p/w500${element.poster_path}`}
            className="poster"
          />
          {/* <p>{element.title}</p> */}
          <MovieDetail movie={element} />
          <button onClick={() => handleRemoveElement(element)}>Remove</button>
        </div>
      ))}
      <div className="input-container">
        <input
          value={newElement}
          onChange={(e) => {
            setNewElement(e.target.value);
          }}
        />
        <button onClick={handleAddElement}>Add</button>
      </div>
    </div>
  );
}

export default BlockPage;