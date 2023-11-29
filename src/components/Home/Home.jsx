import React, { useState } from "react";
import "./css/Home.css";
import PostList from "./Post/PostList";
import PostForm from "./PostForm/PostForm";

export default function Home() {
  const [showPostForm, setShowPostForm] = useState(false);
  var formPost = <PostForm setShowPostForm={setShowPostForm} />;
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
          <PostList />
        </div>
      </div>
      <div className="home--right">
        <h2>Comments</h2>
      </div>
    </div>
  );
}
