import React from "react";
import SectionTitle from "./common/SectionTitle";
import Card from "./Card";
const Movies = ({ movies, loading }) => {
  return (
    <>
      <SectionTitle title=" Movies" />

      <div className="movies-wrapper flex-wrap">
        {loading
          ? "Wait"
          : movies.map((movie) => (
              <Card
                key={movie._id}
                movieId={movie._id}
                movieTitle={movie.title}
                movieImgUrl={movie.image}
                movieRating={movie.rating}
              />
            ))}
      </div>
    </>
  );
};

export default Movies;
