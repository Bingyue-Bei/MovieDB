import { useDispatch } from "react-redux";
import { fetchMovies } from "../Actions";

export const SearchBar = ({ query, page, setQuery }) => {
  const dispatch = useDispatch();
  const handleSearch = (query) => {
    dispatch(fetchMovies(page, query));
    setQuery("");
  };

  return (
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
  );
};
