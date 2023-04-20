import { MovieItem } from "./MovieItem";

export const MovieList = ({ movies }) => {
  return (
    <div className="movie-list-container">
      {movies.length
        ? movies.map((element, index) => (
            <MovieItem element={element} index={index} />
          ))
        : ""}
    </div>
  );
};
