// import React from 'react'
import { Link } from "react-router-dom";
import InnfolioLogo from "../assets/innfolio.svg";
// import UploadIcon from "../assets/upload.svg";
import UploadButton from "./UploadButton";
import TestImage from "../assets/test_image.jpg"

const Navbar = () => {
  return (
    <div className="w-full navbar-bg py-8 px-[7.5rem] flex justify-between">
      <img src={InnfolioLogo} alt="logo" />
      <div className="right flex justify-between items-center gap-[3.25rem]">
        <div className="links flex items-center gap-[3.25rem] text-sm">
          <Link to="/" className="text-white font-medium">
            Explore
          </Link>
          <Link to="/" className="text-cyan font-semibold">
            Profile
          </Link>
          <Link to="/" className="text-white font-medium">
            Search
          </Link>
          <Link to="/" className="text-white font-medium">
            Bookmarks
          </Link>
        </div>
        <UploadButton/>
        <div className="profile-picture w-12 h-12 bg-white rounded-full overflow-hidden">
            <img src={TestImage} alt="test image" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
