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

  const { user, setUser } = useUserContext();
  console.log(user);

  const navigate = useNavigate();
  const [cookies, removeCookie] = useCookies([]);
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const verifyCookie = async () => {
      // if (!cookies.token) {
      //   navigate("/login");
      //   console.log("No cookies")
      //   return;
      // }

      try {
        const { data } = await axios.post(
          "http://localhost:3333/api/auth/",
          {},
          { withCredentials: true }
        );
        const { status, user } = data;
        if (status) {
          setUsername(user);
          toast(`Hello ${user}`, {
            position: "bottom-left",
          });
        } else {
          removeCookie("token");
          navigate("/");
        }
      } catch (error) {
        removeCookie("token");
        navigate("/");
      } finally {
        setLoading(false);
      }
    };

    verifyCookie();
  }, [cookies, navigate, removeCookie]);

  if (loading) {
    return null; // or a loading spinner
  }
  return (
    <div className="bg-black">
      <div className="background-gradients z-10">
        {/* <div className="first-gradient w-[62rem] h-[62rem] rotate-[78deg] absolute top-[-437px] left-[-517px] bg-white rounded-full gradient-one z-10 blur-[150px] opacity-40"></div> */}
       
      </div>
      <Navbar />
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
        <ToastContainer/>
      </MainLayout>
     
    </div>
    
  );
};

export default Explore;
