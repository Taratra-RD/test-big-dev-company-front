import React from "react";
import useGetPost from "../../../hooks/useGetPost";
import Post from "./Post";

export default function PostList({ setPostForComment, setNewComment }) {
  const { posts } = useGetPost();
  return (
    <div className="post--list">
      {posts.map((post, index) => (
        <Post
          post={post}
          key={index}
          setNewComment={setNewComment}
          setPostForComment={setPostForComment}
        />
      ))}
    </div>
  );
}
