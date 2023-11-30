import React from "react";
import "./css/Comment.css";
import { getElapsedTime } from "../../../hooks/services";

export default function Comment({ comment }) {
  const date1 = new Date();
  return (
    <div className="comment">
      <div className="comment--head">
        <span className="comment--name">{comment && comment.username}</span>
        <span className="creation--date">
          {comment && getElapsedTime(date1, new Date(comment.createdAt))} ago
        </span>
      </div>
      <div className="comment--body">
        <div className="comment--content">{comment && comment.content}</div>
      </div>
    </div>
  );
}
