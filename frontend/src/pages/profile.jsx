// import React from 'react'
import { Link } from "react-router-dom";
import MainLayout from "../layouts/mainLayout.jsx";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SkillChip from "../components/SkillChip.jsx";
import ExperienceCard from "../components/ExperienceCard.jsx";
import ProjectCard from "../components/ProjectCard.jsx";
import TwitterLogo from "../assets/icons/twitter.svg";
import FacebookLogo from "../assets/icons/facebook.svg";
import InstagramLogo from "../assets/icons/instagram.svg";
import GithubLogo from "../assets/icons/github.svg";
import TestImage from "../assets/test_image.jpg";
import { useUserContext } from "../context/UserContext.jsx";


const profile = () => {
    const {user}= useUserContext()
    console.log(user.username)
  return (
    <div className="bg-black">
      <div className="background-gradients z-10">
        <div className="first-gradient w-[62rem] h-[62rem] rotate-[78deg] absolute top-[-437px] left-[-517px] bg-white rounded-full gradient-one z-10 blur-[150px] opacity-40"></div>
        <div className="second-gradient w-[36rem] h-[36rem] rotate-[59.79deg] absolute top-[382px] right-[-382px] bg-white rounded-full gradient-one z-10 blur-[150px] opacity-40"></div>
        <div className="third-gradient w-[45rem] h-[45rem] rotate-[59.79deg] absolute top-[957px] left-[-692px] bg-white rounded-full gradient-one z-10 blur-[150px] opacity-40"></div>
      </div>
      <Navbar></Navbar>
      <MainLayout>
        <div className="introduction w-full flex justify-between items-start mb-14">
          <div className="text w-[45rem] flex flex-col gap-4">
            <div className="main-information flex flex-col gap-0">
              <p className="text-white text-[2.5rem] text-shadow-one font-medium">
                Hello,
              </p>
              <p className="text-white text-[4.5rem] text-shadow-one font-semibold">
                I'm <span className="text-gradient-one">{user.username}</span>
              </p>
              <p className="text-white text-[2.5rem] text-shadow-one font-medium">
                {user.role}
              </p>
            </div>
            <p className="description text-white text-lg font-regular">
              {user.about}
            </p>
            <div className="socials flex items-center gap-8">
              <Link to="/">
                <img src={TwitterLogo} alt="twitter logo" />
              </Link>
              <Link to="/">
                <img src={InstagramLogo} alt="instagram logo" />
              </Link>
              <Link to="/">
                <img src={FacebookLogo} alt="facebook logo" />
              </Link>
              <Link to="/">
                <img src={GithubLogo} alt="github logo" />
              </Link>
            </div>
          </div>
          <div className="photo w-[24rem] h-[24rem] relative">
            <div className="photo-border absolute w-[24rem] h-[24rem] rounded-full gradient-two"></div>
            <div className="photo-container position-center w-[23rem] h-[23rem] rounded-full overflow-hidden">
              <img src={TestImage} alt="test image" />
            </div>
          </div>
        </div>
        <div className="my-skills flex flex-col gap-4 mb-14">
          <h3 className="text-white text-[3.25rem] font-semibold text-shadow-one">
            My <span className="text-gradient-one">Skills</span>
          </h3>
          <div className="skills flex gap-8">
            {user.skills.map((skill, index) => (
              <SkillChip key={index} name={skill} />
            ))}
          </div>

        </div>
        <div className="work-experience flex flex-col gap-4 mb-14">
          <h3 className="text-white text-[3.25rem] font-semibold text-shadow-one">
            Work <span className="text-gradient-one">Experience</span>
          </h3>
          <div className="experiences grid grid-cols-3 gap-8">
            <ExperienceCard />
            <ExperienceCard />
            <ExperienceCard />
            <ExperienceCard />
            <ExperienceCard />
            <ExperienceCard />
          </div>
        </div>
        <div className="my-projects flex flex-col gap-4 mb-24">
          <h3 className="text-white text-[3.25rem] font-semibold text-shadow-one">
            My <span className="text-gradient-one">Projects</span>
          </h3>
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
        </div>
        <Footer />
      </MainLayout>
    </div>
  );
};

export default profile;
