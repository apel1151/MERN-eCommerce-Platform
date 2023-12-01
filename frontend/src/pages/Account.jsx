import React, { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { CiBag1, CiSettings } from "react-icons/ci";
import { IoIosLogOut } from "react-icons/io";
import Add from "../Components/Add";
import Profile from "../Components/Profile";
import Setting from "../Components/Setting";

const Account = () => {
  const [activeButton, setActiveButton] = useState("profile");
  const [profile, setProfile] = useState(true);
  const [add, setAdd] = useState(false);
  const [setting, setSetting] = useState(false);

  const handleProfile = (profile) => {
    setActiveButton(profile);
    setProfile(true);
    setAdd(false);
    setSetting(false);
  };

  const handleAdd = (add) => {
    setActiveButton(add);
    setAdd(true);
    setProfile(false);
    setSetting(false);
  };

  const handleSetting = (setting) => {
    setActiveButton(setting);
    setProfile(false);
    setAdd(false);
    setSetting(true);
  };

  const handleLogout = (logout) => {
    setActiveButton(logout);
  };

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl mt-4 p-2">Account</h1>
      <hr className="border border-x-4 border-cyan-400" />
      <div className=" flex p-2 gap-12">
        <ul className="">
          <li
            className={`flex gap-3 p-3 rounded-md w-52 ${
              activeButton === "profile" && profile
                ? "bg-cyan-300 text-gray"
                : ""
            } `}
          >
            <span>
              <CgProfile className="text-2xl" />
            </span>{" "}
            <button onClick={() => handleProfile("profile")}>My Profile</button>
          </li>
          <li
            className={`flex gap-3 p-3 rounded-md w-52 ${
              activeButton === "add" && add ? "bg-cyan-300 text-gray" : ""
            }`}
          >
            <span>
              <CiBag1 className="text-2xl" />
            </span>{" "}
            <button onClick={() => handleAdd("add")}>My Add</button>
          </li>
          <li
            className={`flex gap-3 p-3 rounded-md w-52 ${
              activeButton === "settings" && setting
                ? "bg-cyan-300 text-gray"
                : ""
            }`}
          >
            <span>
              <CiSettings className="text-2xl" />
            </span>{" "}
            <button onClick={() => handleSetting("settings")}>Setting</button>
          </li>
          <li
            className={`flex gap-3 p-3 rounded-md w-52 ${
              activeButton === "logout" ? "bg-cyan-300 text-gray" : ""
            }`}
          >
            <span>
              <IoIosLogOut className="text-2xl" />
            </span>{" "}
            <button onClick={() => handleLogout("logout")}>Logout</button>
          </li>
        </ul>
        <hr className="border border-t-2 h-vertical border-cyan-400"/>
        {profile && <Profile />}
        {add && <Add />}
        {setting && <Setting />}
      </div>
    </div>
  );
};

export default Account;
