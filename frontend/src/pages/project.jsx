// import React from 'react'
import { Link } from "react-router-dom";
import MainLayout from "../layouts/mainLayout.jsx";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TestImage from "../assets/test_image.jpg";
import TestImage2 from "../assets/testimg2.jpg";


const Project = () => {
  return (
    <div className="bg-black">
      <div className="background-gradients z-10">
        <div className="first-gradient w-[62rem] h-[62rem] rotate-[78deg] absolute top-[-437px] left-[-517px] bg-white rounded-full gradient-one z-10 blur-[150px] opacity-40"></div>
        <div className="second-gradient w-[36rem] h-[36rem] rotate-[59.79deg] absolute top-[382px] right-[-382px] bg-white rounded-full gradient-one z-10 blur-[150px] opacity-40"></div>
        {/* <div className="third-gradient w-[45rem] h-[45rem] rotate-[59.79deg] absolute top-[957px] left-[-692px] bg-white rounded-full gradient-one z-10 blur-[150px] opacity-40"></div> */}
      </div>
      <Navbar></Navbar>
      <MainLayout>
        <div className="w-full flex flex-col gap-8 pb-40 px-60">
          <div className="flex flex-col gap-2">
            <p className="text-white text-[2rem] text-shadow-one font-semibold">
              Project title goes here
            </p>
            <p className="text-cyan text-[1 rem] text-shadow-one font-semibold">
              View Project
            </p>
          </div>
          <div className="flex justify-center bg-dark-grey rounded-2xl ">
            <div className="p-12">
              <img
                className="image-container w-fit bg-cover overflow-hidden rounded-2xl"
                src={TestImage2}
                alt="test image"
              />
            </div>
          </div>

          <div className="card-info flex justify-between items-center">
            <div className="name flex justify-center items-center gap-3">
              <div className="profile-picture w-7 h-7 bg-white rounded-full overflow-hidden">
                <img src={TestImage} alt="test image" />
              </div>
              <p className="text-white text-base font-large">Swikriti Suwal</p>
            </div>
            <div className="stats flex justify-center items-center gap-2">
            <span class="material-symbols-outlined text-white">favorite</span>
              <span class="material-symbols-outlined text-white">bookmark</span>
            </div>
          </div>
        </div>
        <Footer />
      </MainLayout>
    </div>
  );
};

export default Project;