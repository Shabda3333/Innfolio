// import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useUserContext } from "../../context/UserContext.jsx";
import ThirdLayout from "../../layouts/secondLayout.jsx";
import UploadProjectComponent from "../../components/UploadProject.jsx"

const UploadProject = () => {
//   const { user, setUser } = useUserContext();
//   const navigate = useNavigate();

//   const [inputValue, setInputValue] = useState({
//     about: "",
//   });
//   console.log(user);
//   const { about } = inputValue;

//   const handleOnSubmit = (e) => {
//     try {

//     e.preventDefault();
//     var testObject = { ...user };
//     testObject.about = inputValue.about;

//     setUser(testObject);
//     console.log("User has been set");
//     console.log(user);

//     navigate("/account-setup/user-skills");
    
//     } catch (error) {
//       console.log(error.message);
//     }
//   };

//   const handleOnChange = (e) => {
//     const { name, value } = e.target;
//     setInputValue({
//       ...inputValue,
//       [name]: value,
//     });
//     console.log(inputValue);
//   };
  return (
    <div >
      <ThirdLayout>
        <div className=" margin-wrapper position-center pt-[150px] w-[70rem] h-[68rem] px-[120px] pb-[150px]">
         <UploadProjectComponent/>
        </div>
      </ThirdLayout>
    </div>
  );
};

export default UploadProject;
