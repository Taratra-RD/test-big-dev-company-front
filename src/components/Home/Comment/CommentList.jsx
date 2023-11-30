import React from "react";
import "./css/CommentList.css";
import useGetComment from "../../../hooks/useGetComment";
import Comment from "./Comment";

export default function CommentList({ newComment }) {
  const { comments } = useGetComment(newComment && newComment.post_id);

  return (
    <div
      className="comment--list"
      style={{ height: "73%", marginBlock: "0", paddingBlock: "0" }}
    >
      {comments &&
        comments.map((comment, index) => (
          <Comment comment={comment} key={index} />
        ))}
    </div>
  );
}
