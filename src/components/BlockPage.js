import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { blockMovies, unblockMovies } from '../Actions';

const IMAGE_URL = 

function fetchMovie(movieID) {
    const baseURL = `https://api.themoviedb.org/3/movie/${movieID}?api_key=6ebbb29dce0cec38629a6d732af0b3da&language=en-US`
    fetch(baseURL)
        .then(response=>response.json()).then(data=>console.log(data))
        /*
        .then(data=> data.poster_path)
        .then(poster_path => `http://image.tmdb.org/t/p/w500${poster_path}`)
        .then()
        */
}

function fetchPoster(poster_path) {
  const posterURL = `http://image.tmdb.org/t/p/w500${poster_path}`;
  return posterURL;
}

function BlockPage() {
    const [newElement, setNewElement] = useState('');
    const dispatch = useDispatch();
    const list = useSelector(state => state.blockMovies);
    function handleAddElement() {
      const baseURL = `https://api.themoviedb.org/3/movie/${newElement}?api_key=6ebbb29dce0cec38629a6d732af0b3da&language=en-US`
      fetch(baseURL)
        .then(response=>response.json())
        .then(data=>{console.log(data); dispatch(blockMovies(data));})
      setNewElement('');
    }
    
      function handleRemoveElement(element) {
        dispatch(unblockMovies(element));
      }
    return (
        <div>
          <ul>
            {list.map(element => (
              <li key={element.title}>
                {element.title}
                <button onClick={() => handleRemoveElement(element)}>Remove</button>
              </li>
            ))}
          </ul>
          <input value={newElement} onChange={e => {setNewElement(e.target.value)}} />
          <button onClick={handleAddElement}>Add</button>
        </div>
      );
}

export default BlockPage;