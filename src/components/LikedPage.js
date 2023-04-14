import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { likedMovies, dislikedMovies } from '../Actions';

function LikedPage() {
  const [newElement, setNewElement] = useState('');
  const dispatch = useDispatch();
  const list = useSelector(state => state.likeMovies);
  function handleAddElement() {
    const baseURL = `https://api.themoviedb.org/3/movie/${newElement}?api_key=6ebbb29dce0cec38629a6d732af0b3da&language=en-US`
    fetch(baseURL)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        if (data.success === undefined) {
          dispatch(likeMovies(data));
        } else {
          alert("invalid movie id!");
        }
      })
    setNewElement('');
  }

  function handleRemoveElement(element) {
    dispatch(dislikeMovies(element));
  }
  return (
    <div className="movie-list-container">
      {list.map(element => (
        <div className='movie-container'>
          <img src={`http://image.tmdb.org/t/p/w500${element.poster_path}`} className="poster" />
          <p>{element.title}</p>
          <button onClick={() => handleRemoveElement(element)}>Remove</button>
        </div>))}
      <div className="input-container">
        <input value={newElement} onChange={e => { setNewElement(e.target.value) }} />
        <button onClick={handleAddElement}>Add</button>
      </div>
    </div>
  );
}

export default LikedPage;