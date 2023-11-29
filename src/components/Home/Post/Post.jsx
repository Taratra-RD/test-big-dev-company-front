import React from "react";
import "../css/Post.css";
import { AiFillLike } from "react-icons/ai";
import { MdModeComment } from "react-icons/md";
import { BiLike } from "react-icons/bi";

export default function Post({ post }) {
  const date1 = new Date();

  function getElapsedTime(date1, date2) {
    const timeDifference = Math.abs(date1 - date2);

    const seconds = Math.floor(timeDifference / 1000);
    if (seconds >= 86400) {
      const days = Math.floor(seconds / 86400);
      return `${days} day${days !== 1 ? "s" : ""}`;
    } else if (seconds >= 3600) {
      const hours = Math.floor(seconds / 3600);
      return `${hours} hour${hours !== 1 ? "s" : ""}`;
    } else if (seconds >= 60) {
      const minutes = Math.floor(seconds / 60);
      return `${minutes} minute${minutes !== 1 ? "s" : ""}`;
    } else {
      return `${seconds} second${seconds !== 1 ? "s" : ""}`;
    }
  }
  return (
    <div className="post">
      <div className="post--head">
        <span className="post--name">{post && post.username}</span>
        <span className="creation--date">
          {post && getElapsedTime(date1, new Date(post.createaAt))} ago
        </span>
      </div>
      <div className="post--body">
        <h4 className="post--title">{post && post.title}</h4>
        <div className="post--content">{post && post.content}</div>
      </div>
      <div className="post--footer">
        <div className="footer--number">
          <div>
            <AiFillLike className="span" />
            <span>{post && post.like_number}</span>
          </div>
          <div>
            <span>5</span>
            <MdModeComment className="span" />
          </div>
        </div>
        <div className="footer--like">
          <BiLike style={{ fontSize: "30px" }} />
        </div>
      </div>
    </div>
  );
}
