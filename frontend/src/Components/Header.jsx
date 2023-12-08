import React from "react";
import { FaUser } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { SetLoader } from "../redux/loader/loadersSlice";

const Header = () => {
  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleBrand = async (e) => {
    e.preventDefault();
    dispatch(SetLoader(true))
    await new Promise((resolve) => setTimeout( resolve, 500));
    navigate("/");
    dispatch(SetLoader(false));
  }

  const handleAccount = async (e) => {
    e.preventDefault();
    dispatch(SetLoader(true));

    if (currentUser) {
      // Simulate an API call with a delay
      await new Promise((resolve) => setTimeout(resolve, 500));
      navigate("/account");
    } else {
      // Simulate an API call with a delay
      await new Promise((resolve) => setTimeout(resolve, 500));
      navigate("/login");
    }

    dispatch(SetLoader(false));
  };

  const handleAdd = async (e) => {
    e.preventDefault();
    dispatch(SetLoader(true));

    // Simulate an API call with a delay
    await new Promise((resolve) => setTimeout(resolve, 500));
    navigate("/bids&products");

    dispatch(SetLoader(false));
  };

  return (
    <div className="bg-cyan-200">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-2">
        <div className="flex">
          <img
            src="https://logo.com/image-cdn/images/kts928pd/production/396f6f3c7f506eb9674c2a6e244249faeda83b00-424x419.png?w=1080&q=72"
            alt="logo"
            className=" h-16 w-15 rounded-full"
          />
          
            <h1 onClick={handleBrand} className="font-bold text-2xl mt-5 ml-5 text-green-600 cursor-pointer">MERN Bikroy</h1>
        
        </div>
        <ul className="flex gap-12">
          <li>
            <button
              onClick={handleAccount}
              className="text-green-700 flex items-center gap-3 hover:underline"
            >
              <FaUser />
              {currentUser && (
                <span className="text-green-700 text-xl align-self-start font-bold">
                  {currentUser.username}
                </span>
              )}
            </button>
          </li>
          <li>
            <button onClick={handleAdd} className=" text-yellow-600 hover:underline">Post your Add</button>
          </li>
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
