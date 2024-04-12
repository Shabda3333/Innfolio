// import { Link } from "react-router-dom";
import MainLayout from "../layouts/mainLayout.jsx";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProjectCard from "../components/ProjectCard.jsx";
import SearchBar from "../components/SearchBar.jsx";


const explore = () => {
  return (
    <div className="bg-black">
      <div className="background-gradients z-10">
        {/* <div className="first-gradient w-[62rem] h-[62rem] rotate-[78deg] absolute top-[-437px] left-[-517px] bg-white rounded-full gradient-one z-10 blur-[150px] opacity-40"></div> */}
       
      </div>
      <Navbar></Navbar>
      <MainLayout>
      <SearchBar/>
        <div className="projects-container grid grid-cols-4 gap-14 mb-32">
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
        <Footer />
      </MainLayout>
     
    </div>
    
  );
};

export default explore;
