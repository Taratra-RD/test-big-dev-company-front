import React, { useEffect, useState } from "react";
import "../css/PostForm.css";
import { MdClose } from "react-icons/md";
import axiosAuth from "../../../api/axiosAuth";
import { api } from "../../../api/api";
import useGetToken from "../../../hooks/useGetToken";

export default function PostForm({ setShowPostForm }) {
  const [newPost, setNewPost] = useState({});
  const { decode } = useGetToken();

  const addPost = (e) => {
    e.preventDefault();
    console.log(newPost);
    axiosAuth
      .post(api + "/post", newPost)
      .then((res) => {
        alert("Post add successfully");
        setShowPostForm(false);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    decode && setNewPost((prevState) => ({ ...prevState, user_id: decode.id }));
  }, []);

  return (
    <div className="post--form">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <h3 className="post--form--title">Something in mind ?</h3>
        <MdClose onClick={() => setShowPostForm(false)} />
      </div>

      <form className="form" onSubmit={addPost}>
        <div className="form--title">
          <input
            type="text"
            className="form--title--input"
            onChange={(e) =>
              setNewPost((prevState) => ({
                ...prevState,
                title: e.target.value,
              }))
            }
          />
        </div>
        <div className="form--content">
          <textarea
            className="form--content--text"
            onChange={(e) =>
              setNewPost((prevState) => ({
                ...prevState,
                content: e.target.value,
              }))
            }
          ></textarea>
        </div>
        <div>
          <button className="form--button">Publish</button>
        </div>
      </form>
    </div>
  );
}
