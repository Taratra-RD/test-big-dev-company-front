import React from "react";
import "../css/PostForm.css";

export default function PostForm() {
  return (
    <div className="post--form">
      <h3 className="post--form--title">Something in mind ?</h3>
      <form className="form">
        <div className="form--title">
          <input type="text" className="form--title--input" />
        </div>
        <div className="form--content">
          <textarea className="form--content--text"></textarea>
        </div>
        <div>
          <button className="form--button">Publish</button>
        </div>
      </form>
    </div>
  );
}
