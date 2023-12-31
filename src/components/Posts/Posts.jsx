import React, { useEffect, useState } from "react";
import SinglePost from "../SinglePost/SinglePost";
import "./Posts.css";

const Posts = ({ handleReadTime, handleBookMark }) => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);
  return (
    <div>
      {posts.map((post) => (
        <SinglePost
          handleBookMark={handleBookMark}
          handleReadTime={handleReadTime}
          post={post}
          key={post.id}
        ></SinglePost>
      ))}
    </div>
  );
};

export default Posts;
