import React from "react";

const StarRating = (props) => {
  const { rating } = props;
  const maxRating = 5;
  let ratingPercentage = (rating / maxRating) * 100;
  ratingPercentage = `${Math.round(ratingPercentage / 10) * 10}%`;
  return (
    <>
      <div className="stars-outer">
        <div
          style={{ width: `${ratingPercentage}` }}
          className="stars-inner"
        ></div>
      </div>
      <span className="number-rating">{rating}</span>
    </>
  );
};

export default StarRating;
