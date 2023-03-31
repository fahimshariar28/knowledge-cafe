import React, { useEffect, useState } from "react";
import "./SideBar.css";

const SideBar = ({ readTime }) => {
  const [time, setTime] = useState(readTime);

  useEffect(() => {
    const getReadTime = localStorage.getItem("readTime");
    setTime(getReadTime);
  }, [readTime]);

  return (
    <div className="mt-10">
      <div className="w-9/12 mx-auto">
        <h3 className="text-2xl font-bold text-center">
          Read Time:
          <span>{time}</span>
        </h3>
      </div>
      <div className="bg-gray-100 rounded mt-3">
        <h3 className="text-xl font-bold text-center">BookMarked Blogs:</h3>
      </div>
    </div>
  );
};

export default SideBar;
