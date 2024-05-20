// import React from 'react'
import TestImage from "../assets/test_image.jpg";
import Image1 from "/Users/shabdashrestha/Downloads/project II/Innfolio/frontend/src/assets/imgg1.jpeg";
import Heart from "../assets/heart.svg";

const UserProjectCard = () => {
  return (
    <div className="w-[16rem] flex flex-col gap-2">
      <div className="image-container w-full h-[15rem] bg-cover overflow-hidden rounded-2xl">
        <img src={Image1} alt="test image" />
      </div>
      <div className="card-info flex justify-between items-center">
        <div className="name flex justify-center items-center gap-3">
          <p className=" text-base font-medium hover:cursor-pointer">    </p>
        </div>
        <div className="stats flex justify-center items-center gap-1">
          <img src={Heart} alt="heart" />
          <p className="text-white text-base font-medium">500</p>
        </div>
      </div>
    </div>
  );
};

export default UserProjectCard;
