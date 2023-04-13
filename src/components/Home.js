import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies } from '../Actions';

function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMovies(10));
  }, []);

  const movies = useSelector(state => state.movies);

  return (
    <div>
    
    </div>
  );
}

export default Home;
