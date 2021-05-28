import React from "react";

const CastCard = (props) => {
  const { castImg, castName } = props;
  return (
    <div className="cast-card">
      <img src={castImg} alt="cast-card" />
      <h4>{castName}</h4>
    </div>
  );
};

export default CastCard;
