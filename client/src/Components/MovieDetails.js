import React from "react";
import GameOfThrones from "../Assets/video.mp4";
const MovieDetails = (props) => {
  const { movieImg, movieTitle, movieReleaseDate, movieCountry, movieQuality } =
    props;
  return (
    <div className="movie-details">
      <div className="movie-details__wrapper-image">
        <div style={{ width: "30rem", height: "40rem" }}>
          <img
            src={movieImg}
            alt={movieTitle}
            className="movie-details--main-image"
          />
        </div>
      </div>
      <div className="movie-details__wrapper-description">
        <h3 className="movie-details__wrapper-description--heading">
          {movieTitle}
        </h3>
        <h5 className="movie-details__wrapper-description--secondary">
          realease date:
        </h5>
        <span>{movieReleaseDate}</span>
        <h5 className="movie-details__wrapper-description--secondary">
          country:
        </h5>
        <span>{movieCountry}</span>
        <h5 className="movie-details__wrapper-description--secondary">
          available in:
        </h5>
        <div className="movie-details__wrapper-description__quality-box">
          {movieQuality.map((quality) => {
            if (quality === 720 || quality === 1080) {
              return <span>{quality} HD</span>;
            }
            if (quality === 480) {
              return <span>{quality} mp4</span>;
            }
            return <span>{quality}HD</span>;
          })}
        </div>
        <form method="get" action={GameOfThrones}>
          <button
            type="submit"
            className="btn btn-primary movie-details__wrapper-description--btn"
          >
            Download
          </button>
        </form>
      </div>
      <div className="movie-details__wrapper-related"></div>
    </div>
  );
};

export default MovieDetails;
