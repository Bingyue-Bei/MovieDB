import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import { fetchMovies } from "../Actions";

import { MovieList } from "../components/MovieList";
import PropTypes from "prop-types";
import { PageNav } from "../components/PageNav";
import { SortButtons } from "../components/SortButtons";
import { SearchBar } from "../components/SearchBar";

const Home = function () {
  const dispatch = useDispatch();

  const movies = useSelector((state) => state.movies);
  const totalPage = useSelector((state) => state.totalPage);
  const currentPage = useSelector((state) => state.currentPage);
  const [page, setPage] = useState(currentPage);
  const [query, setQuery] = useState("");

  useEffect(() => {
    dispatch(fetchMovies(page, query));
  }, [dispatch, query, page]);

  return (
    <div className="home-page">
      <div className="home-page-actions">
        <SortButtons />
        <SearchBar query={query} page={page} setQuery={setQuery} />
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
