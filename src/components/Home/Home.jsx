import React, { useState } from "react";
import "./Home.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Posts from "../Posts/Posts";
import SideBar from "../SideBar/SideBar";

const Home = () => {
  const [readTime, setReadTime] = useState(0);
  const [bookmark, setBookmark] = useState([]);

  const handleReadTime = (time) => {
    const previousReadTime = JSON.parse(localStorage.getItem("readTime"));
    if (previousReadTime) {
      const sum = previousReadTime + time;
      localStorage.setItem("readTime", sum);
      setReadTime(sum);
    } else {
      localStorage.setItem("readTime", time);
      setReadTime(time);
    }
  };

  const handleBookMark = (id, title) => {
    const previousBookmark = JSON.parse(localStorage.getItem("bookmark"));
    let newBookmark = [];
    const bookmarkBlog = { id, title };
    if (previousBookmark) {
      const isThisBookMarked = previousBookmark.find(
        (marked) => marked.id == id
      );

      if (isThisBookMarked) {
        toast.error("Already Added", {
          position: toast.POSITION.TOP_RIGHT,
        });
      } else {
        newBookmark.push(...previousBookmark, bookmarkBlog);
        localStorage.setItem("bookmark", JSON.stringify(newBookmark));
      }
    } else {
      newBookmark.push(bookmarkBlog);
      localStorage.setItem("bookmark", JSON.stringify(newBookmark));
    }
    setBookmark(newBookmark);
  };

  return (
    <div className="lg:grid grid-cols-3 gap-3">
      <div className="col-span-2">
        <Posts
          handleBookMark={handleBookMark}
          handleReadTime={handleReadTime}
        ></Posts>
      </div>
      <div>
        <SideBar bookmark={bookmark} readTime={readTime}></SideBar>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Home;
