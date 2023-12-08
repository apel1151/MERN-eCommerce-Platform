import React from "react";
import { useSelector } from "react-redux";

const Profile = () => {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <div className=" p-4 flex flex-col gap-5">
      <div> <span className=" font-bold">Username:</span> {currentUser.username}</div>
      <div> <span className="font-bold">Email:</span> {currentUser.email}</div>
      <div> <span className="font-bold">Created:</span> {currentUser.createdAt}</div>
    </div>
  );
};

export default Profile;
