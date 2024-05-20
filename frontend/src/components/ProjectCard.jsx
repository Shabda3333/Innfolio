import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router

import TestImage from "../assets/test_image.jpg";
import Image3 from "/Users/shabdashrestha/Downloads/project II/Innfolio/frontend/src/assets/imgg3.jpeg"
import TestImage2 from "../assets/testimg2.jpg";
import Heart from "../assets/heart.svg";

const ProjectCard = () => {
  return (
    <Link to="/project"> 
      <div className="w-[16rem] flex flex-col gap-2">
        <div className="image-container w-full h-[15rem] bg-cover overflow-hidden rounded-2xl">
          <img src={Image3} alt="test image" className=' h-full'/>
        </div>
        <div className="card-info flex justify-between items-center">
          <div className="name flex justify-center items-center gap-3">
              <div className="profile-picture w-7 h-7 bg-white rounded-full overflow-hidden">
                <img src={TestImage} alt="test image" />
              </div>
              <p className="text-white text-base font-medium">Swikriti Suwal</p>
          </div>
          <div className="stats flex justify-center items-center gap-1">
              <img src={Heart} alt="heart" />
              <p className="text-white text-base font-medium">500</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;

