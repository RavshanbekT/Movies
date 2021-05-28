import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

//custom components
import { MovieContext } from "../Data/movieController";
import CastCard from "../Components/common/cast-card";
import SectionTitle from "../Components/common/SectionTitle";
import CommentCard from "../Components/common/comment-card";
import MovieDetailsComponent from "../Components/MovieDetails";
import WatchSection from "../Components/WatchSection";
const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const Movies = useContext(MovieContext);
  const movieQuality = [480, 720, 1080];
  useEffect(() => {
    if (Movies !== null) {
      Movies.data.forEach((element) => {
        if (element._id === id) {
          setMovie(element);
        }
      });
    }
  });

  console.log(movie);
  return (
    <div className="movie-details__container">
      {movie === null ? (
        "Waiting"
      ) : (
        <MovieDetailsComponent
          movieImg={movie.image}
          movieTitle={movie.title}
          movieReleaseDate={movie.releaseYear}
          movieCountry={movie.country}
          movieQuality={movieQuality}
        />
      )}
      <WatchSection />
      <div className="movie-details__cast-section">
        <SectionTitle title="Cast" />
        <div className="movies-wrapper">
          <CastCard
            castImg="http://img.koreatimes.co.kr/upload/newsV2/images/202011/fb142cd0fde340ff8510cbb2ccebc888.jpg/dims/resize/740/optimize"
            castName="Youn Yuh-jung"
          />
          <CastCard
            castImg="http://res.heraldm.com/content/image/2021/02/24/20210224000660_0.jpg"
            castName="Han Ye-ri"
          />
        </div>
      </div>
      <div className="comment-section">
        <div className="comment-section--left">
          <SectionTitle title="Comments" />
          <CommentCard
            userImg="http://res.heraldm.com/content/image/2021/02/24/20210224000660_0.jpg"
            userName="Ravshanbek Tursunbaev"
            commentDate="May 11 2020"
            commentTime="at 14:55"
            commentText=" Congrats for oscar winning best supporting actress. Winning best
             supporting actress"
          />
        </div>
        <div className="comment-section--right">WE Recommend</div>
      </div>
    </div>
  );
};

export default MovieDetails;
