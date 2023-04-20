import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import {
  fetchMovies,
} from "../Actions";

import { MovieList } from "./MovieList";
import PropTypes from "prop-types";
import { PageNav } from "./PageNav";
import { SortButtons } from "./SortButtons";

const Home = function () {
  const dispatch = useDispatch();

  const movies = useSelector((state) => state.movies);
  const totalPage = useSelector((state) => state.totalPage);
  const currentPage = useSelector((state) => state.currentPage);
  const [page, setPage] = useState(currentPage);
  const [query, setQuery] = useState("");

 

  const handleSearch = (query) => {
    dispatch(fetchMovies(page, query));
    setQuery("");
  };

  useEffect(() => {
    dispatch(fetchMovies(page, query));
  }, [dispatch, query, page]);

  return (
    <div className="home-page">
      <div className="home-page-actions">
       <SortButtons />
        <div className="search-box">
          <input
            type="text"
            placeholder="Search movies"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
            }}
          />
          <button onClick={handleSearch}>Search</button>
        </div>
        <PageNav
          totalPage={totalPage}
          currentPage={currentPage}
          page={page}
          setPage={setPage}
        />
      </div>

      <MovieList movies={movies} />
    </div>
  );
};

Home.propTypes = {
  movies: PropTypes.array.isRequired,
};

export default Home;
