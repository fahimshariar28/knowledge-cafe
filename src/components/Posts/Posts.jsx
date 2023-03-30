import React from "react";
import "./Posts.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";

const Posts = () => {
  return (
    <div>
      <div className="w-1/2">
        <img
          className="w-full rounded-md"
          src="https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80"
          alt=""
        />
        <div className="mt-3 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img
              className="w-12 rounded-[50%]"
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              alt=""
            />
            <div>
              <h4 className="text-xl font-semibold">Name</h4>
              <p>Publish Date</p>
            </div>
          </div>
          <div>
            <p>
              min read
              <span className="cursor-pointer ms-2">
                <FontAwesomeIcon icon={faBookmark} />
              </span>
            </p>
          </div>
        </div>
        <h2 className="text-4xl font-bold">
          How to get your first job as a self-taught programmer
        </h2>
        <p className="underline cursor-pointer text-blue-500">Mark as Read</p>
      </div>
    </div>
  );
};

export default Posts;
