import React from "react";
import "./SinglePost.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";

const SinglePost = ({ post, handleReadTime, handleBookMark }) => {
  const { id, title, blogImg, authorName, authorImg, publishDate, time } = post;
  return (
    <div className="mt-10">
      <div>
        <img className="w-full rounded-md" src={blogImg} alt="" />
        <div className="mt-3 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img
              className="w-12 rounded-[50%] aspect-square"
              src={authorImg}
              alt=""
            />
            <div>
              <h4 className="text-xl font-semibold">{authorName}</h4>
              <p>Publish in: {publishDate}</p>
            </div>
          </div>
          <div>
            <p>
              {time}
              min read
              <button
                onClick={() => handleBookMark(id, title)}
                className="ms-2"
              >
                <FontAwesomeIcon icon={faBookmark} />
              </button>
            </p>
          </div>
        </div>
        <h2 className="text-4xl font-bold">{title}</h2>
        <button
          onClick={() => handleReadTime(time)}
          className="underline text-blue-500"
        >
          Mark as Read
        </button>
      </div>
    </div>
  );
};

export default SinglePost;
