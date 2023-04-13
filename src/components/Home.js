import {useDispatch, useSelector} from 'react-redux'
import React, { useEffect } from 'react';
import { fetchMovies } from '../Actions'
// Prev, Next Button, Sort Button, 
const Home = function() {
    const dispatch = useDispatch();
    useEffect(() => {
        fetchMovies(10);
      }, []);
    const movies = useSelector(state=>state.movies);
    console.log(movies);
      return (
        <div>
          
        </div>
      );
}
export default Home;