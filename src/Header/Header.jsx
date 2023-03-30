import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="mt-3 flex justify-between items-center">
      <h1 className="text-3xl font-bold">My Blog</h1>
      <img
        className="rounded-[50%] w-12"
        src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
        alt=""
      />
    </div>
  );
};

export default Header;
