import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Header = () => {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <div className="bg-cyan-200">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-2">
        <div className="flex">
          <img
            src="https://banner2.cleanpng.com/20180419/sfq/kisspng-retail-computer-icons-e-commerce-sales-mega-offer-5ad81eeaa23fc8.2308391515241131306646.jpg"
            alt="logo"
            className=" h-16 w-15 rounded-full"
          />
          <Link to="/">
            <h1 className="font-bold text-2xl mt-5 ml-5">MERN Bikroy</h1>
          </Link>
        </div>
        <ul className="flex gap-12">
          <Link to="/account">
            <li>
              My Account{" "}
              {currentUser && (
                <span className="font-semibold text-red-700">{currentUser.username}</span>
              )}
            </li>
          </Link>
          <Link to="/signup">
            <li>Post your Add</li>
          </Link>
        </ul>
      </div>

      <div className="flex items-center mx-auto max-w-2xl p-1">
        <input
          type="text"
          placeholder="Search..."
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
        />
        <button className="m-4 border w-24 h-9 border-blue-500 rounded-md p-1 focus:border-blue-300 focus:ring bg-blue-400 text-white hover:bg-blue-500">
          Search
        </button>
      </div>
    </div>
  );
};

export default Header;
