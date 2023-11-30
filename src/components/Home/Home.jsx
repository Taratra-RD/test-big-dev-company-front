import React, { useEffect, useState } from "react";
import "./css/Home.css";
import PostList from "./Post/PostList";
import PostForm from "./PostForm/PostForm";
import CommentForm from "./Comment/CommentForm";
import CommentList from "./Comment/CommentList";
import { useNavigate } from "react-router-dom";
import useLogout from "../../hooks/useLogout";
import useGetToken from "../../hooks/useGetToken";

export default function Home() {
  const [showPostForm, setShowPostForm] = useState(false);
  const [postForComment, setPostForComment] = useState(false);
  const [newComment, setNewComment] = useState({});
  const navigate = useNavigate();
  const { signOut } = useLogout();
  const { decode } = useGetToken();

  var formPost = <PostForm setShowPostForm={setShowPostForm} />;

  useEffect(() => {
    const token = sessionStorage.getItem("token");

    !token && navigate("/login");
  }, [showPostForm, newComment, navigate, signOut]);

  return (
    <div className="home">
      <div className="home--left">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h2>Articles</h2>
          <button onClick={signOut} style={{ height: "2rem" }}>
            Logout
          </button>
        </div>

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
            newComment={newComment}
          />
        </div>
      </div>
      <div style={{ width: "35%" }}>
        <nav style={{ height: "10vh", display: "flex", alignItems: "center" }}>
          <div className="username--logo">
            {decode && decode.username.charAt(0).toUpperCase()}
          </div>
          <div className="username">{decode && decode.username}</div>
        </nav>
        <div className="home--right">
          <h2 style={{ height: "5vh" }}>Comments</h2>

          <div
            className="home--right--body"
            style={{ height: "75vh", marginBlock: "0", paddingBlock: "0" }}
          >
            {postForComment ? (
              <div
                className="home--comment--list"
                style={{ height: "100%", marginBlock: "0", paddingBlock: "0" }}
              >
                <CommentList newComment={newComment} />
                <CommentForm
                  style={{ height: "25%", marginBlock: "0", paddingBlock: "0" }}
                  newComment={newComment}
                  setNewComment={setNewComment}
                />
              </div>
            ) : (
              <button style={{ width: "10rem", fontSize: "24px" }}>
                Click on post to show it Comments !
              </button>
            )}
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}
