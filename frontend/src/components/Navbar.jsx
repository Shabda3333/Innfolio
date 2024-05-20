import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import InnfolioLogo from "../assets/innfolio.svg";
import UploadButton from "./UploadButton";
import TestImage from "../assets/test_image.jpg";
import { useCookies } from "react-cookie";
// import { useUserContext } from '../context/UserContext.jsx';
// import { useEffect } from 'react';
import { useAuth } from "../context/AuthContext.jsx";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [cookies, removeCookie] = useCookies([]);
  const { user, logout } = useAuth();
  const userData = user || {};

  const Logout = () => {
    logout();
    removeCookie("token");
    navigate("/");
  };

  return (
    <div className="w-full navbar-bg py-8 px-[7.5rem] background-blur-one flex justify-between fixed top-0 z-30">
      <img src={InnfolioLogo} alt="logo" />
      <div className="right flex justify-between items-center gap-[3.25rem]">
        <div className="links flex items-center gap-[3.25rem] text-base">
          <Link
            to="/explore"
            style={{
              color: location.pathname === "/explore" ? "cyan" : "white",
            }}
          >
            Explore
          </Link>
          <Link
            to="/profile"
            style={{
              color: location.pathname === "/profile" ? "cyan" : "white",
            }}
          >
            Profile
          </Link>
          <Link
            to="/search"
            style={{
              color: location.pathname === "/search" ? "cyan" : "white",
            }}
          >
            Search
          </Link>
          <Link
            to="/bookmark"
            style={{
              color: location.pathname === "/bookmark" ? "cyan" : "white",
            }}
          >
            Bookmarks
          </Link>
        </div>
        <Link to="/upload-project">
          <UploadButton />
        </Link>
        <Link to="/edit-profile">
          <div className="profile-picture w-12 h-12 rounded-full overflow-hidden ">
            <img src={TestImage} alt="test image" />
          </div>
        </Link>
        <button className="text-white" onClick={Logout}>
          <span className="material-symbols-outlined text-3xl">logout</span>
        </button>
      </div>
    </div>
  );
};

export default Navbar;

//************************************ */

// import React, { useState, useRef, useEffect } from 'react';
// import { Link, useLocation, useNavigate } from 'react-router-dom';
// import InnfolioLogo from '../assets/innfolio.svg';
// import UploadButton from './UploadButton';
// import TestImage from '../assets/test_image.jpg';
// import { useCookies } from 'react-cookie';
// import { useAuth } from '../context/AuthContext.jsx';

// const Navbar = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [cookies, removeCookie] = useCookies([]);
//   const { user, logout } = useAuth();
//   const userData = user || {};

//   const Logout = () => {
//     logout();
//     removeCookie('token');
//     navigate('/');
//   };

//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const dropdownRef = useRef(null);

//   const toggleDropdown = () => {
//     setDropdownOpen(!dropdownOpen);
//   };

//   const closeDropdown = (event) => {
//     if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//       setDropdownOpen(false);
//     }
//   };

//   useEffect(() => {
//     document.addEventListener('mousedown', closeDropdown);
//     return () => {
//       document.removeEventListener('mousedown', closeDropdown);
//     };
//   }, []);

//   return (
//     <div className="w-full navbar-bg py-8 px-[7.5rem] background-blur-one flex justify-between fixed top-0 z-30">
//       <img src={InnfolioLogo} alt="logo" />
//       <div className="right flex justify-between items-center gap-[3.25rem]">
//         <div className="links flex items-center gap-[3.25rem] text-base">
//           <Link
//             to="/explore"
//             style={{
//               color: location.pathname === '/explore' ? 'cyan' : 'white',
//             }}
//           >
//             Explore
//           </Link>
//           <Link
//             to="/profile"
//             style={{
//               color: location.pathname === '/profile' ? 'cyan' : 'white',
//             }}
//           >
//             Profile
//           </Link>
//           <Link
//             to="/search"
//             style={{
//               color: location.pathname === '/search' ? 'cyan' : 'white',
//             }}
//           >
//             Search
//           </Link>
//           <Link
//             to="/bookmark"
//             style={{
//               color: location.pathname === '/bookmark' ? 'cyan' : 'white',
//             }}
//           >
//             Bookmarks
//           </Link>
//         </div>
//         <UploadButton />
//         <div className="profile-picture w-12 h-12 rounded-full overflow-hidden" onClick={toggleDropdown} ref={dropdownRef}>
//           <img src={TestImage} alt="test image" />
//           {dropdownOpen && (
//             <div className="dropdown">
//               <ul>
//                 <li>Edit Profile</li>
//                 <li onClick={Logout}>Log Out</li>
//               </ul>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;
