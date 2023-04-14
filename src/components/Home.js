import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import { fetchMovies, sortByTitle } from "../Actions";
import MovieDetail from "./MovieDetail";
// Prev, Next Button, Sort Button,
const Home = function () {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovies());
  }, []);

  //access fetched movies and total page number from store
  const movies = useSelector((state) => state.movies);
  const totalPage = useSelector((state) => state.totalPage);
  const currentPage = useSelector((state) => state.currentPage);

  const posterUrl = "https://image.tmdb.org/t/p/w500";

  return (
    <div className="home-page">
      <div className="home-page-actions">
        <div className="sorting-buttons">
          <button onClick={() => dispatch(sortByTitle())}>Title</button>
          <button>Vote Count</button>
          <button>Vote Average</button>
          <button>Release Date</button>
        </div>
        <div className="page-info">
          <button>Prev</button>
          <p>
            {currentPage} / {totalPage}
          </p>
          <button>Next</button>
        </div>
      </div>

      <div className="movie-list-container">
        {movies.length
          ? movies.map((element, index) => {
              return (
                <div className="movie-list-card" key={index}>
                  <img
                    src={posterUrl + element.poster_path}
                    alt={"Poster of " + element.title}
                  ></img>
                  {/* <p className="movie-list-card__title">{element.title}</p> */}
                  <MovieDetail movie = {element } />
                  <div className="movie-list-card__action">
                    <div className="like-icon">Like</div>
                    <div className="block-icon">Block</div>
                  </div>
                </div>
              );
            })
          : ""}
      </div>
    </div>
  );
};
export default Home;
