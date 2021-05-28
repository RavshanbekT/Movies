import React from "react";
import { AiTwotoneHeart } from "react-icons/ai";
const CommentCard = (props) => {
  const { userImg, userName, commentDate, commetTime, commentText } = props;

  return (
    <div className="comment-card">
      <div className="user-wrapper">
        <div className="user-box"></div>
      </div>
      <div className="comment-card__user-comment-wrapper">
        <h4 className="comment-card--headline">
          {userName} <span>{commentDate}</span> <span>{commetTime}</span>{" "}
          <AiTwotoneHeart /> 0
        </h4>
        <p className="comment-card--user-comment">{commentText}</p>
      </div>
    </div>
  );
};

export default CommentCard;
