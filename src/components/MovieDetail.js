import { useState } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import axios from "axios";
import PropTypes from "prop-types";

function MovieDetail({ movie }) {
  const [open, setOpen] = useState(false);
  const [clickedMovie, setClickedMovie] = useState({});
  const handleClose = () => {
    setClickedMovie({});
    setOpen(false);
  };

  return (
    <>
      <div>
        <h4
          id="movie-title"
          onClick={() => {
            axios
              .get(
                `https://api.themoviedb.org/3/movie/${movie.id}?api_key=6ebbb29dce0cec38629a6d732af0b3da&language=en-US`
              )
              .then((res) => {
                setClickedMovie(res.data);
              });
            setOpen(true);
          }}
        >
          {movie.title}
        </h4>

        <Modal open={open} onClose={handleClose}>
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: 775,
              height: 480,
              bgcolor: "background.paper",
              border: "2px solid #000",
              borderRadius: "5px",
              boxShadow: 24,
              pt: 2,
              px: 4,
              pb: 3,
            }}
          >
            <img
              className="image-bg"
              src={`https://image.tmdb.org/t/p/original${clickedMovie.backdrop_path}`}
              alt="background-img"
            />
            <div className="movie-detail">
              <div className="move-detail-item">
                <img
                  className="movie-detail-poster"
                  src={`https://image.tmdb.org/t/p/original${clickedMovie.poster_path}`}
                  alt="poster"
                />
              </div>

              <div className="move-detail-item" id="movie-text">
                <h1>{clickedMovie.title}</h1>

                {clickedMovie.genres ? (
                  clickedMovie.genres.map((genre, index) => (
                    <button
                      key={index}
                      className={`movie-genre-${genre.name.split(" ")[0]}`}
                    >
                      {genre.name}
                    </button>
                  ))
                ) : (
                  <></>
                )}
                <p style={{ fontWeight: "bold" }}>
                  Overview: {clickedMovie.overview}
                </p>

                <div className="movie-companies">
                  {clickedMovie.production_companies ? (
                    clickedMovie.production_companies.map((company, index) =>
                      company.logo_path == null ? (
                        <></>
                      ) : (
                        <img
                          src={`https://image.tmdb.org/t/p/original${company.logo_path}`}
                          alt="company-logo"
                          key={index}
                          className="company-img"
                        />
                      )
                    )
                  ) : (
                    <></>
                  )}
                </div>
              </div>

              <div className="move-detail-item">
                <button className="button-close" onClick={handleClose}>
                  Close
                </button>
              </div>
            </div>
          </Box>
        </Modal>
      </div>
      <div>
        <p>{movie.release_date}</p>
        <p style={{"marginLeft":"15px"}}>Vote: {movie.vote_average}</p>
      </div>
    </>
  );
}

MovieDetail.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
  }).isRequired,
};

export default MovieDetail;
