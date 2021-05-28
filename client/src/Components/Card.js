import React from "react";
import limitMovieTitle from "../Utils/limitMovieTitle";
import StarRating from "./common/starRating";

const Card = (props) => {
  const { movieImgUrl, movieTitle, movieRating, movieId } = props;

  return (
    <div className="movie-card flex-basis-auto">
      <div className="movie-card__img-wrapper">
        <img src={movieImgUrl} alt={movieTitle} className="movie-card--img" />
      </div>
      <div className="movie-card__desc">
        <h3 className="movie-card__desc--title">
          {limitMovieTitle(movieTitle, 18)}
        </h3>
        <div className="star-box">
          <StarRating rating={movieRating} />
        </div>
        <a className="movie-card__desc--check-btn" href={`/${movieId}`}>
          Check
        </a>
      </div>
    </div>
  );
};

export default Card;
