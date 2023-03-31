import React, { useEffect, useState } from "react";
import "./SideBar.css";

const SideBar = ({ readTime }) => {
  //   console.log(props);

  const [time, setTime] = useState(0);
  useEffect(() => {
    let updatedReadTime = 0;
    updatedReadTime = time + readTime;
    setTime(updatedReadTime);
  }, [readTime]);

  return (
    <div className="mt-10">
      <div className="w-9/12 mx-auto">
        <h3 className="text-2xl font-bold text-center">
          Watch Time:
          <span>{time}</span>
        </h3>
      </div>
    </div>
  );
};

export default SideBar;
