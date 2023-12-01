import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="bg-slate-200">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-4">
        <Link to="/">
          <h1 className="font-bold">MERN Bikroy</h1>
        </Link>
        <ul className="flex gap-12">
          <Link to="/account">
            <li>My Account</li>
          </Link>
          <Link to="/login">
            <li>Post your Add</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;
