// import React from 'react'
import { Link } from "react-router-dom";
import InnfolioLogo from "../assets/innfolio.svg";
import UploadButton from "./UploadButton";

const Footer = () => {
  return (
    <div className="bg-dark-grey w-full rounded-2xl border-[1px] border-[#8F8F8F] relative overflow-hidden">
      <div className="w-[62rem] h-[62rem] rotate-[78deg] absolute top-[-800px] left-[-600px] bg-white rounded-full gradient-one z-10 blur-[150px]"></div>
      <div className="w-[62rem] h-[62rem] rotate-[78deg] absolute bottom-[-800px] right-[-700px] bg-white rounded-full gradient-one z-10 blur-[150px]"></div>
      <div className="flex-wrapper flex justify-center items-center z-20">
        <div className="content-container w-[34rem] py-10 flex flex-col justify-center items-center gap-12">
          <img src={InnfolioLogo} alt="logo" />
          <div className="links w-full text-white font-medium text-lg flex justify-between">
            <Link to="/">Home</Link>
            <Link to="/">Profile</Link>
            <Link to="/">Search</Link>
            <Link to="/">Bookmark</Link>
          </div>
          <div className="share-project flex flex-col justify-center items-center gap-6">
            <p className="text-lg text-cyan text-shadow-one font-medium">
              Share your Projects Now
            </p>
            <UploadButton />
          </div>
          <p className="text-sm text-white">@Innfolio2024</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
