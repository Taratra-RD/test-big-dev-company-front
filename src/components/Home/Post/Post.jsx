import React, { useEffect, useState } from "react";
import "../css/Post.css";
import { AiFillLike } from "react-icons/ai";
import { MdModeComment } from "react-icons/md";
import { BiLike, BiSolidLike } from "react-icons/bi";
import axiosAuth from "../../../api/axiosAuth";
import { api } from "../../../api/api";
import useGetToken from "../../../hooks/useGetToken";
import { getElapsedTime } from "../../../hooks/services";

export default function Post({
  post,
  setNewComment,
  setPostForComment,
  newComment,
}) {
  const { decode } = useGetToken();
  const [like, setLike] = useState();
  const [numberComment, setNumberComment] = useState(0);
  const date1 = new Date();

  const showComment = (id) => {
    setPostForComment(true);
    setNewComment({
      post_id: id,
      user_id: decode && decode.id,
    });
  };

  const handleLike = (id) => {
    axiosAuth
      .post(api + "/like/" + id, { user_id: decode.id })
      .then((res) => {
        setLike(res.data.result[0] && res.data.result[0].choice);
        alert("You have cliked on Like !");
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    axiosAuth
      .post(api + "/comment/get", { post_id: post && post.id })
      .then((res) => setNumberComment(res.data.result.length))
      .catch((err) => console.log(err));
  }, [like, post]);

  return (
    <div className="post" onClick={() => showComment(post && post.id)}>
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
            <span>{numberComment}</span>
            <MdModeComment className="span" />
          </div>
        </div>
        <div className="footer--like">
          {like ? (
            <BiSolidLike
              style={{ fontSize: "30px" }}
              onClick={() => handleLike(post.id)}
            />
          ) : (
            <BiLike
              style={{ fontSize: "30px" }}
              onClick={() => handleLike(post.id)}
            />
          )}
        </div>
      </div>
    </div>
  );
}
