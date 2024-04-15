// import React from 'react'
import { Link, isRouteErrorResponse, useNavigate } from "react-router-dom";
import InnfolioLogo from "../assets/innfolio.svg";
import UploadButton from "./UploadButton";
import TestImage from "../assets/test_image.jpg"
import { useCookies } from "react-cookie";
import { useUserContext } from "../context/UserContext.jsx";
import { useEffect } from "react";

const Navbar = () => {
const {setUser} = useUserContext();

useEffect(() => {
  const verifyCookie = async () => {
    // if (!cookies.token) {
    //   navigate("/login");
    //   console.log("No cookies")
    //   return;
    // }

    try {
      const { data } = await axios.post(
        "http://localhost:4000/api/user/",
        {},
        { withCredentials: true }
      );
      const { status, user,userid } = data;
      if (status) {
        fetch(`http://localhost:3333/api/user/${userid}`)
          .then((response) => response.json())
          .then((data)=> setUser(data))
          .catch((error)=> console.error("Erorr fetching user data: ",error));
      } else {
        removeCookie("token");
        navigate("/login");
      }
    } catch (error) {
      removeCookie("token");
      navigate("/login");
    } finally {
      setLoading(false);
    }
  };

  verifyCookie();
}, [cookies, navigate, removeCookie]);
if (loading) {
  return null; // or a loading spinner
}

  

  const navigate = useNavigate();
  const [cookies, removeCookie] = useCookies([]);
  const Logout = () => {
    removeCookie("token");
    navigate("/");
  };
  return (
    <div className="w-full navbar-bg py-8 px-[7.5rem] background-blur-one flex justify-between fixed top-0 z-30">
      <img src={InnfolioLogo} alt="logo" />
      <div className="right flex justify-between items-center gap-[3.25rem]">
        <div className="links flex items-center gap-[3.25rem] text-base">
          <Link to="/explore" className="text-white font-medium">
            Explore
          </Link>
          <Link to="/profile" className="text-cyan font-semibold">
            Profile
          </Link>
          <Link to="/search" className="text-white font-medium">
            Search
          </Link>
          <Link to="/" className="text-white font-medium">
            Bookmarks
          </Link>
        </div>
        <UploadButton/>
        <div className="profile-picture w-12 h-12 bg-white rounded-full overflow-hidden">
            <img src={TestImage} alt="test image" />
        </div>
        <button className=" text-white ">
          <span onClick={Logout} className="material-symbols-outlined text-3xl">
            logout
          </span>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
