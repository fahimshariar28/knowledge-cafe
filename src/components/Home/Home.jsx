import React, { useState } from "react";
import "./Home.css";
import Posts from "../Posts/Posts";
import SideBar from "../SideBar/SideBar";

const Home = () => {
  const [readTime, setReadTime] = useState(0);

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

  return (
    <div className="grid grid-cols-3 gap-3">
      <div className="col-span-2">
        <Posts handleReadTime={handleReadTime}></Posts>
      </div>
      <div>
        <SideBar readTime={readTime}></SideBar>
      </div>
    </div>
  );
};

export default Home;
