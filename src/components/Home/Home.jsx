import React from "react";
import "./Home.css";
import Posts from "../Posts/Posts";

const Home = () => {
  return (
    <div className="grid grid-cols-2 gap-3">
      <div>
        <Posts></Posts>
      </div>
      <div>
        <p>sidebar</p>
      </div>
    </div>
  );
};

export default Home;
