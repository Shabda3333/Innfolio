// import React from 'react'
// import { Link } from "react-router-dom";
import Popup from "reactjs-popup";
import MainLayout from "../layouts/mainLayout.jsx";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ExperienceCard from "../components/ExperienceCard.jsx";
import ProjectCard from "../components/ProjectCard.jsx";

import TestImage from "../assets/test_image.jpg";
import CTAButton from "../components/LoginSignupButton.jsx";
import AddButton from "../assets/add-filled.svg";
import UploadProjectPopup from "../components/UploadProject.jsx";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";
import { useState, useEffect } from "react";
// import { useUserContext } from "../context/UserContext.jsx";

const EditProfile = () => {
  const { user } = useAuth();

  const userData = user || {};

  const [work, setWork] = useState([]);
  const [project, setProject] = useState([]);

  const filteredWorkData = work.filter((w) => userData._id === w.user_id);
  console.log(filteredWorkData);

  const filteredProjectData = project.filter((p) => userData._id=== p.user_id)
  console.log(filteredProjectData);



  useEffect(() => {
    fetch("http://localhost:3333/api/work")
      .then((response) => response.json())
      .then((data) => setWork(data))
      .catch((error) => console.error("Error fetching categories: ", error));
  }, []);

  useEffect(() => {
    fetch("http://localhost:3333/api/project")
      .then((response) => response.json())
      .then((data) => setProject(data))
      .catch((error) => console.error("Error fetching categories: ", error));
  }, []);

  return (
    <div className="bg-black">
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
                  About
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
            <img
              src={AddButton}
              alt="add button"
              className="absolute right-10 bottom-6"
            />
          </div>
        </div>
        <div className="work-history flex flex-col gap-4 mb-14 pb-12">
          <div className="heading-wrapper w-full flex justify-between items-center pb-10">
            <h3 className="text-white text-3xl w-full font-medium text-shadow-one">
              Work History
            </h3>
            <button>
              <Link to="/add-work">
                <img src={AddButton} alt="add button" />
              </Link>
            </button>
          </div>
          <div className="experiences w-[110%] grid grid-cols-3 justify-between gap-y-8 ">
            {filteredWorkData &&
              filteredWorkData.map((experience, index) => (
                <ExperienceCard
                  key={index}
                  dateFrom={experience.dateFrom}
                  dateTo={experience.dateTo}
                  role={experience.role}
                  company={experience.company}
                  address={experience.address}
                />
              ))}
          </div>
        </div>
        <div className="projects-container flex flex-col">
          <div className="my-projects flex flex-col gap-4 mb-24">
            <div className="heading-wrapper w-full flex justify-between items-center pb-10">
              <h3 className="text-white text-3xl font-medium text-shadow-one">
                Projects
              </h3>
              <Link to="/upload-project">
                <img src={AddButton} alt="add button" />
              </Link>
              {/* <Popup
                trigger={
                  <button>
                    <img src={AddButton} alt="add button" />
                  </button>
                }
              >
                {(close) => (
                  <div className="popup-container fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                    <UploadProjectPopup closePopup={close} />
                  </div>
                )}
              </Popup> */}
            </div>
            <div className="projects-container grid grid-cols-4 gap-14">
            {filteredProjectData && filteredProjectData.map((project, index) => (
            
            <ProjectCard
              key={index}
              thumbnail={project.thumbnail}
              user_id={project.user_id}
              project_id={project._id}
              
            />
          ))}
            </div>
            <div className="see-more-wrapper w-full flex justify-end">
              <p className="text-cyan font-medium">See More</p>
            </div>
          </div>
        </div>
        <div className="cta-wrapper w-[40%] flex gap-8 mb-20">
          <Link to="/profile">
            <CTAButton title="Save" />
          </Link>
          <Link to="/profile">
            <CTAButton title="Cancel" />
          </Link>
        </div>
        <Footer />
      </MainLayout>
    </div>
  );
};

export default EditProfile;
