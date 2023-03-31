import React, { useEffect, useState } from "react";
import "./SideBar.css";

const SideBar = ({ readTime, bookmark }) => {
  const [time, setTime] = useState(readTime);
  const [bookMark, setBookMark] = useState([]);

  useEffect(() => {
    const getReadTime = localStorage.getItem("readTime");
    setTime(getReadTime);
  }, [readTime]);
  useEffect(() => {
    const getBookmark = JSON.parse(localStorage.getItem("bookmark"));
    setBookMark(getBookmark);
  }, [bookmark]);

  return (
    <div className="mt-10">
      <div className="w-9/12 mx-auto">
        <h3 className="text-2xl font-bold text-center">
          Read Time:
          <span>{time ? time : 0}</span>
        </h3>
      </div>
      <div className="bg-gray-100 rounded mt-3 p-2">
        <h3 className="text-xl font-bold text-center">
          BookMarked Blogs:{bookMark ? bookMark.length : 0}
        </h3>
        {bookMark
          ? bookMark.map((bk) => (
              <div className="text-center bg-white font-semibold text-lg m-1 rounded">
                <h3>{bk.title}</h3>
              </div>
            ))
          : null}
      </div>
    </div>
  );
};

export default SideBar;
