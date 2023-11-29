import React from "react";
import "./css/Home.css";
import PostForm from "./PostForm/PostForm";

export default function Home() {
  return (
    <div className="home">
      <div className="home--post--form">
        <PostForm />
      </div>
    </div>
  );
}
