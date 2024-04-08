// import React from 'react'
import MainLayout from "../layouts/mainLayout.jsx";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SkillChip from "../components/SkillChip.jsx";
import ExperienceCard from "../components/ExperienceCard.jsx";
import ProjectCard from "../components/ProjectCard.jsx";

const profile = () => {
  return (
    <div className="bg-black">
      <Navbar></Navbar>
      <MainLayout>
        <div className="flex">
          <SkillChip name = "HTML"/>
          <SkillChip name = "CSS"/>
          <SkillChip name = "Tailwind"/>
          <SkillChip name = "JavaScript"/>
        </div>
        <ExperienceCard/>
        <ProjectCard/>
        <Footer></Footer>
      </MainLayout>
    </div>
  );
};

export default profile;
