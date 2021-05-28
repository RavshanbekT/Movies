import React from "react";
import ReactPlayer from "react-player";
const WatchSection = () => {
  return (
    <div className="movie-details__watch-section">
      <ReactPlayer
        controls
        width="60rem"
        height="30rem"
        url="https://youtu.be/KQ0gFidlro8"
        className="videos-container--video"
      />
      <div className="description">
        <h3 className="description-heading">
          A little bit about <span>Minary</span>
        </h3>
        <p className="description-text">
          A tender and sweeping story about what roots us, Minari follows a
          Korean-American family that moves to a tiny Arkansas farm in search of
          their own American Dream. The family home changes completely with the
          arrival of their sly, foul-mouthed, but incredibly loving grandmother.
          Amidst the instability and challenges of this new life in the rugged
          Ozarks, Minari shows the undeniable resilience of family and what
          really makes a home.
        </p>
      </div>
    </div>
  );
};

export default WatchSection;
