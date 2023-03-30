import React from "react";
import "./Home.css";
import Posts from "../Posts/Posts";

const Home = () => {
  return (
    <div className="grid grid-cols-3 gap-3">
      <div className="col-span-2">
        <Posts></Posts>
      </div>
      <div>
        <p>sidebar</p>
      </div>
    </div>
  );
};

export default Home;
