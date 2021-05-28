import React from "react";

const SectionTitle = (props) => {
  const { title } = props;
  return (
    <div className="title-wrapper">
      <h3 className="title-wrapper--title">{title}</h3>
    </div>
  );
};

export default SectionTitle;
