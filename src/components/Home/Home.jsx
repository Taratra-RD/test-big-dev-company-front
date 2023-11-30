import React, { useEffect, useState } from "react";
import "./css/Home.css";
import PostList from "./Post/PostList";
import PostForm from "./PostForm/PostForm";
import CommentForm from "./Comment/CommentForm";

export default function Home() {
  const [showPostForm, setShowPostForm] = useState(false);
  const [postForComment, setPostForComment] = useState(false);
  const [newComment, setNewComment] = useState({});

  var formPost = <PostForm setShowPostForm={setShowPostForm} />;

  useEffect(() => {
    console.log(newComment);
  }, [showPostForm, newComment]);
  return (
    <div className="home">
      <div className="home--left">
        <h2>Articles</h2>
        <div className="home--post--form">
          <button
            type="text"
            className="form--pop--button"
            onClick={() => setShowPostForm(true)}
          >
            Add New Articles
          </button>
          {showPostForm ? formPost : ""}
        </div>
        <div className="home--post--list">
          <PostList
            setNewComment={setNewComment}
            setPostForComment={setPostForComment}
          />
        </div>
      </div>
      <div className="home--right">
        <h2>Comments</h2>
        <div className="home--right--body">
          {postForComment ? (
            <CommentForm
              newComment={newComment}
              setNewComment={setNewComment}
            />
          ) : (
            <button>Click on post to show it Comments !</button>
          )}
        </div>
      </div>
    </div>
  );
}
