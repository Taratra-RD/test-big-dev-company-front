import React, { useEffect, useState } from "react";
import axiosAuth from "../../../api/axiosAuth";
import { api } from "../../../api/api";

export default function CommentForm({ newComment, setNewComment }) {
  const addComment = (e) => {
    e.preventDefault();
    let form = document.getElementsByName("comment-form")[0];
    axiosAuth
      .post(api + "/comment", newComment)
      .then((res) => {
        alert("Add a new comment!");
        form.reset();
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="comment--form">
      <form className="form" onSubmit={addComment} name="comment-form">
        <div className="form--content">
          <textarea
            className="form--content--text"
            onChange={(e) =>
              setNewComment((prevState) => ({
                ...prevState,
                content: e.target.value,
              }))
            }
          ></textarea>
        </div>
        <div>
          <button className="form--button">Comment</button>
        </div>
      </form>
    </div>
  );
}
