// import React from 'react'
import { Link } from "react-router-dom";
import MainLayout from "../layouts/mainLayout.jsx";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import Image1 from "/Users/shabdashrestha/Downloads/project II/Innfolio/frontend/src/assets/imgg1.jpeg";
import Image2 from "/Users/shabdashrestha/Downloads/project II/Innfolio/frontend/src/assets/imgg3.jpeg"
import Image3 from "/Users/shabdashrestha/Downloads/project II/Innfolio/frontend/src/assets/imgg3.jpeg"
import Image4 from "/Users/shabdashrestha/Downloads/project II/Innfolio/frontend/src/assets/imgg4.jpeg"
import TestImage from "../assets/test_image.jpg";
import TestImage2 from "../assets/testimg2.jpg";
import SkillChip from "../components/SkillChip.jsx";

const ProjectDetails = () => {
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
            <p className="text-white text-[3rem] text-shadow-one font-semibold">
              Project title goes here
            </p>
            <p className="text-cyan text-[1 rem] text-shadow-one">
              Swikriti Suwal
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

          <div className="w-full flex flex-col gap-14">
            <div className="project-introduction flex flex-col gap-4">
              <h3 className="text-white text-[2rem] font-semibold text-shadow-one">
                <span className="text-gradient-one">Introduction</span>
              </h3>
              <p className="project-introduction text-white text-lg font-regular">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </div>
            <div className="role flex flex-col gap-4">
              <h3 className="text-white text-[2rem] font-semibold text-shadow-one">
                <span className="text-gradient-one">My Role</span>
              </h3>
              <p className="role text-white text-[1.5rem] font-regular">
                Lead Designer
              </p>
            </div>
            <div className="skills flex flex-col gap-4">
              <h3 className="text-white text-[2rem] font-semibold text-shadow-one">
                <span className="text-gradient-one">Skills Used</span>
              </h3>
              <div className="skills flex gap-8">
                <SkillChip name="HTML" />
                <SkillChip name="CSS" />
                <SkillChip name="Tailwind" />
                <SkillChip name="JavaScript" />
              </div>
            </div>

            <div className="project-samples flex flex-col gap-4">
              <h3 className="text-white text-[2rem] font-semibold text-shadow-one">
                <span className="text-gradient-one">Work Samples</span>
              </h3>
              <div className="projects-container grid grid-cols-2 gap-14">
                <div className="image-container w-full h-[24rem] bg-cover overflow-hidden rounded-2xl">
                  <img src={Image1} alt="test image 1" className=" h-full object-fill" />
                </div>
                <div className="image-container w-full h-[24rem] bg-cover overflow-hidden rounded-2xl">
                  <img src={Image2} alt="test image 2" className=" h-full object-fill"/>
                </div>
                <div className="image-container w-full h-[24rem] bg-cover overflow-hidden rounded-2xl">
                  <img src={Image3} alt="test image 3" className=" h-full object-fill" />
                </div>
                <div className="image-container w-full h-[24rem] bg-cover overflow-hidden rounded-2xl">
                  <img src={Image4} alt="test image 4" className=" h-full object-fill"/>
                </div>
              </div>
            </div>

            <div className="summary flex flex-col gap-4">
              <h3 className="text-white text-[2rem] font-semibold text-shadow-one">
                <span className="text-gradient-one">Summary</span>
              </h3>
              <p className="summary text-white text-lg font-regular">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </div>

            <div className="card-info flex justify-between items-center">
              <div className="name flex justify-center items-center gap-3">
                <div className="profile-picture w-7 h-7 bg-white rounded-full overflow-hidden">
                  <img src={TestImage} alt="test image" />
                </div>
                <p className="text-white text-base font-large">
                  Swikriti Suwal
                </p>
              </div>
              <div className="stats flex justify-center items-center gap-2">
                <span class="material-symbols-outlined text-white">
                  favorite
                </span>
                <span class="material-symbols-outlined text-white">
                  bookmark
                </span>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </MainLayout>
    </div>
  );
};

export default ProjectDetails;
