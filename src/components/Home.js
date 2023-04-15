import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import {
  fetchMovies,
  sortByTitle,
  sortByTitleDesc,
  sortByVote,
  sortByVoteDesc,
  sortByVoteAverage,
  sortByVoteAverageDesc,
  sortByReleaseDate,
  sortByReleaseDateDesc,
} from "../Actions";

import MovieDetail from "./MovieDetail";
import PropTypes from "prop-types";

// Prev, Next Button, Sort Button,
const Home = function () {
  const dispatch = useDispatch();

  const [titleAscending, setTitleAscending] = useState(false);
  const [voteAscending, setVoteAscending] = useState(false);
  const [voteAvgAscending, setVoteAvgAscending] = useState(false);
  const [dateAscending, setDateAscending] = useState(false);

  //access fetched movies and total page number from store
  const movies = useSelector((state) => state.movies);
  const totalPage = useSelector((state) => state.totalPage);
  const currentPage = useSelector((state) => state.currentPage);
  const [page, setPage] = useState(currentPage);
  const posterUrl = "https://image.tmdb.org/t/p/w500";


  const sortTitle = () => {
    if (titleAscending) {
      dispatch(sortByTitleDesc());
      setTitleAscending(false);
    } else {
      dispatch(sortByTitle());
      setTitleAscending(true);
    }
  };

  const sortVote = () => {
    if (voteAscending) {
      dispatch(sortByVoteDesc());
      setVoteAscending(false);
    } else {
      dispatch(sortByVote());
      setVoteAscending(true);
    }
  };

  const sortVoteAvg = () => {
    if (voteAvgAscending) {
      dispatch(sortByVoteAverageDesc());
      setVoteAvgAscending(false);
    } else {
      dispatch(sortByVoteAverage());
      setVoteAvgAscending(true);
    }
  };

  const sortReleaseDate = () => {
    if (dateAscending) {
      dispatch(sortByReleaseDateDesc());
      setDateAscending(false);
    } else {
      dispatch(sortByReleaseDate());
      setDateAscending(true);
    }
  };

  useEffect(() => {
    dispatch(fetchMovies(page));
  }, [dispatch, page]);

  const nextPage = () => {
    setPage(page + 1);
  };

  const previousPage = () => {
    setPage(page - 1);
  };

  return (
    <div className="home-page">
      <div className="home-page-actions">
        <div className="sorting-buttons">
          <button onClick={() => sortTitle()}>Title</button>
          <button onClick={() => sortVote()}>Vote Count</button>
          <button onClick={() => sortVoteAvg()}>Vote Average</button>
          <button onClick={() => sortReleaseDate()}>Release Date</button>
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

Home.propTypes = {
  movies: PropTypes.array.isRequired,
};


export default Home;
