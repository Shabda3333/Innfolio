// import React from 'react'
// import { Link } from "react-router-dom";
import Popup from "reactjs-popup";
import MainLayout from "../layouts/mainLayout.jsx";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ExperienceCard from "../components/ExperienceCard.jsx";
import ProjectCard from "../components/ProjectCardEditable.jsx";
import TestImage from "../assets/test_image.jpg";
import CTAButton from "../components/LoginSignupButton.jsx";
import AddButton from "../assets/add-filled.svg";
import UploadProjectPopup from "../components/UploadProject.jsx";
// import { useUserContext } from "../context/UserContext.jsx";

const EditProfile = () => {
  return (
    <div className="bg-black">
      {/* <div className="background-gradients z-10">
      <div className="first-gradient w-[62rem] h-[62rem] rotate-[78deg] absolute top-[-437px] left-[-517px] bg-white rounded-full gradient-one z-10 blur-[150px] opacity-40"></div>
      <div className="second-gradient w-[36rem] h-[36rem] rotate-[59.79deg] absolute top-[382px] right-[-382px] bg-white rounded-full gradient-one z-10 blur-[150px] opacity-40"></div>
      <div className="third-gradient w-[45rem] h-[45rem] rotate-[59.79deg] absolute top-[957px] left-[-692px] bg-white rounded-full gradient-one z-10 blur-[150px] opacity-40"></div>
    </div> */}
      <Navbar></Navbar>
      <MainLayout>
        <div className="introduction w-full flex justify-between items-start mb-24">
          <div className="form-wrapper w-[45rem] flex flex-col gap-4">
            <form className="input-fields flex flex-col gap-12">
              <div className="fname flex flex-col gap-2">
                <label htmlFor="fname" className="text-lg text-white">
                  Full Name
                </label>
                <input
                  type="text"
                  id="fname"
                  name="username"
                  //   value={username}
                  //   onChange={handleOnChange}
                  placeholder=""
                  className="bg-[rgba(255,255,255,0.1)] border-[1px] border-[#8f8f8f] text-white px-10 py-3 rounded-full"
                />
              </div>
              <div className="professional-role flex flex-col gap-2">
                <label
                  htmlFor="professional-role"
                  className="text-lg text-white"
                >
                  Professional Role
                </label>
                <input
                  type="text"
                  id="professional-role"
                  name="email"
                  //   value={email}
                  //   onChange={handleOnChange}
                  placeholder=""
                  className="bg-[rgba(255,255,255,0.1)] border-[1px] border-[#8f8f8f] text-white px-10 py-3 rounded-full"
                />
              </div>
              <div className="about flex flex-col gap-4">
                <label htmlFor="about" className="text-lg text-white">
                  Write Something About Yourself
                </label>
                <textarea
                  rows={6}
                  type="text"
                  id="about"
                  name="about"
                  // value={about}
                  // onChange={handleOnChange}
                  placeholder=""
                  className="bg-[rgba(255,255,255,0.1)] border-[1px] border-[#8f8f8f] text-white px-10 py-3 rounded-2xl"
                />
              </div>
              <div className="skills flex flex-col gap-2">
                <label htmlFor="skills" className="text-lg text-white">
                  Skills
                </label>
                <input
                  type="text"
                  id="skills"
                  name="username"
                  //   value={username}
                  //   onChange={handleOnChange}
                  placeholder=""
                  className="bg-[rgba(255,255,255,0.1)] border-[1px] border-[#8f8f8f] text-white px-10 py-3 rounded-full"
                />
              </div>
            </form>
          </div>
          <div className="photo w-[24rem] h-[24rem] relative">
            <div className="photo-border absolute w-[24rem] h-[24rem] rounded-full gradient-two"></div>
            <div className="photo-container position-center w-[23rem] h-[23rem] rounded-full overflow-hidden">
              <img src={TestImage} alt="test image" />
            </div>
            <Popup
              trigger={
                <button>
                  <img
                    src={AddButton}
                    alt="add button"
                    className="absolute right-10 bottom-6"
                  />
                </button>
              }
            >
              {(close) => (
                <div className="popup-container fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                  <UploadProjectPopup closePopup={close} />
                </div>
              )}
            </Popup>
          </div>
        </div>
        <div className="work-history flex flex-col gap-4 mb-14">
          <div className="heading-wrapper w-full flex justify-between items-center">
            <h3 className="text-white text-xl font-medium text-shadow-one">
              Work History
            </h3>
            <img src={AddButton} alt="test image" className="scale-75" />
          </div>
          <div className="experiences w-[110%] grid grid-cols-3 justify-between gap-y-8 ">
            <ExperienceCard />
            <ExperienceCard />
            <ExperienceCard />
            <ExperienceCard />
            <ExperienceCard />
            <ExperienceCard />
          </div>
        </div>
        <div className="projects-container flex flex-col">
          <div className="my-projects flex flex-col gap-4 mb-24">
            <div className="heading-wrapper w-full flex justify-between items-center">
              <h3 className="text-white text-xl font-medium text-shadow-one">
                Projects
              </h3>
              <img src={AddButton} alt="test image" className="scale-75" />
            </div>
            <div className="projects-container grid grid-cols-4 gap-14">
              <ProjectCard />
              <ProjectCard />
              <ProjectCard />
              <ProjectCard />
              <ProjectCard />
              <ProjectCard />
              <ProjectCard />
              <ProjectCard />
              <ProjectCard />
              <ProjectCard />
              <ProjectCard />
              <ProjectCard />
            </div>
            <div className="see-more-wrapper w-full flex justify-end">
              <p className="text-cyan font-medium">See More</p>
            </div>
          </div>
        </div>
        <div className="cta-wrapper w-[40%] flex gap-8 mb-20">
          <CTAButton title="Save" />
          <CTAButton title="Cancel" />
        </div>
        <Footer />
      </MainLayout>
    </div>
  );
};

export default EditProfile;
