import { useDispatch, useSelector } from "react-redux";
import React, { useState, useEffect } from "react";
import { fetchMovies, sortByTitle, likedMovies } from "../Actions";
import MovieDetail from "./MovieDetail";
// Prev, Next Button, Sort Button,
const Home = function () {
  const dispatch = useDispatch();

  //access fetched movies and total page number from store
  const movies = useSelector((state) => state.movies);
  const totalPage = useSelector((state) => state.totalPage);
  const currentPage = useSelector((state) => state.currentPage);
  const [page, setPage] = useState(currentPage);
  const posterUrl = "https://image.tmdb.org/t/p/w500";

   useEffect(() => {
     dispatch(fetchMovies(page));
   }, [page]);

    const nextPage = () => {
      setPage(page + 1);
    };

    const previousPage = () => {
      setPage(page - 1);
    };

    const handleLike = (element) => {
      dispatch(likedMovies(element));
    };

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
          {page === 1 ? (
            <button disabled={true}>No Previous</button>
          ) : (
            <button onClick={previousPage}>Previous</button>
          )}
          <p>
            {currentPage} / {totalPage}
          </p>
          {page === 37870 ? (
            <button disabled={true}>No Next</button>
          ) : (
            <button onClick={nextPage}>Next</button>
          )}
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
                  <MovieDetail movie={element} />
                  <div className="movie-list-card__action">
                    <div className="like-icon" onClick={() => handleLike(element)} >Like</div>
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
