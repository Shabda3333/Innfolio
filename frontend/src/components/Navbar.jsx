// import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import InnfolioLogo from "../assets/innfolio.svg";
import UploadButton from "./UploadButton";
import TestImage from "../assets/test_image.jpg";
import { useCookies } from "react-cookie";
<<<<<<< HEAD


const Navbar = () => {

  

=======
import { useUserContext } from "../context/UserContext.jsx";
import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext.jsx";

const Navbar = () => {
>>>>>>> 75534a27982550096af8678b115ef87c89b3659b
  const navigate = useNavigate();
  const [cookies, removeCookie] = useCookies([]);

  const { user, logout } = useAuth();

  const userData = user || {};

  const Logout = () => {
    logout();
    removeCookie("token");
    navigate("/");
  };
  return (
    <div className="w-full navbar-bg py-8 px-[7.5rem] background-blur-one flex justify-between fixed top-0 z-30">
      <img src={InnfolioLogo} alt="logo" />
      <div className="right flex justify-between items-center gap-[3.25rem]">
        <div className="links flex items-center gap-[3.25rem] text-base">
          <Link to="/explore" className="text-white font-medium">
            Explore
          </Link>
          <Link to="/profile" className="text-cyan font-semibold">
            Profile
          </Link>
          <Link to="/search" className="text-white font-medium">
            Search
          </Link>
<<<<<<< HEAD
          <Link to="/bookmark" className="text-white font-medium">
            Bookmarks
=======
          <Link to="/" className="text-white font-medium">
            {userData.username}
>>>>>>> 75534a27982550096af8678b115ef87c89b3659b
          </Link>
        </div>
        <UploadButton />
        <div className="profile-picture w-12 h-12 bg-white rounded-full overflow-hidden">
          <img src={TestImage} alt="test image" />
        </div>
        <button className=" text-white ">
          <span onClick={Logout} className="material-symbols-outlined text-3xl">
            logout
          </span>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
