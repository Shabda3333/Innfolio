// import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useUserContext } from "../context/UserContext.jsx";
import MainLayout from "../layouts/mainLayout.jsx";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProjectCard from "../components/ProjectCard.jsx";
import SearchBar from "../components/SearchBar.jsx";


const Explore = () => {

 
  return (
    <div className="bg-black">
      <div className="background-gradients z-10">
        {/* <div className="first-gradient w-[62rem] h-[62rem] rotate-[78deg] absolute top-[-437px] left-[-517px] bg-white rounded-full gradient-one z-10 blur-[150px] opacity-40"></div> */}
       
      </div>
      <Navbar />
      <MainLayout>
      <SearchBar/>
       
        <Footer />
        <ToastContainer/>
      </MainLayout>
     
    </div>
    
  );
};

export default Explore;
