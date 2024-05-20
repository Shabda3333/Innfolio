// import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import ThirdLayout from "../layouts/thirdLayout.jsx";
import { useAuth } from "../context/AuthContext.jsx";
import UploadPhotoIcon from "../assets/upload_photo.svg";
import ContinueButton from "../components/LoginSignupButton.jsx";
import UploadField from "../components/UploadField.jsx";
import UploadMutliple from "../components/UploadMultiple.jsx";

const UploadProject = () => {
  // const { user } = useAuth();
  // const userData = user || {};

  // console.log("userdata", userData._id);
  // // const { user, setUser } = useUserContext();
  // const navigate = useNavigate();

  // const [inputValue, setInputValue] = useState({
  //   user_id: userData._id,
  //   title: "",
  //   introduction: "",
  //   role: "",
  //   skills: "",
  //   summary: "",
  //   // photos: "",
  //   thumbnail: "",
  // });

  // useEffect(() => {
  //   setInputValue({
  //     user_id: userData._id,
  //     title: "",
  //     introduction: "",
  //     role: "",
  //     skills: "",
  //     summary: "",
  //     // photos: "",
  //     thumbnail: "",
  //   });
  // }, [userData]);

  // useEffect(() => {
  //   console.log("input value from useeffect: ", inputValue);
  // }, [inputValue]);

  // const { title, introduction, role, skills, summary, thumbnail } =
  //   inputValue;

  // const handleOnSubmit = async (e) => {
  //   try {
  //     e.preventDefault();

  //     // var inputValue = { ...work };

  //     // setWork(inputValue);
  //     // console.log("Work has been set");
  //     console.log(JSON.stringify(inputValue));
  //     console.log("before")
  //     const response = await fetch(`http://localhost:3333/api/project`, {

  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(inputValue),
  //     });
  //     console.log("success")
  //     if (!response.ok) {
  //       console.log("error")
  //       throw new Error("Failed to update project");
  //     }

  //     //     const data = await response.json();
  //     //     console.log(data);

  //     //     navigate("/explore");
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // };

  // const handleOnChange = (e) => {
  //   const { name, value } = e.target;
  //   setInputValue({
  //     ...inputValue,
  //     [name]: value,
  //   });
  //   console.log(" this is input", inputValue);
  // };

  return (
    <div>
      <ThirdLayout>
        <div className=" margin-wrapper position-center pt-[150px] w-full h-screen px-[120px] pb-[150px]">
          <div className="content-wrapper w-full flex flex-col gap-9 justify-between items-end p-20 form-background border-[1px] border-dark-grey px-20 rounded-[1.875rem]">
            <div className="top-elements w-full flex flex-col gap-9 pb-9">
              <h3 className="text-white text-4xl font-semibold">
                Upload Project
              </h3>
              <form>  
                {/* onSubmit={handleOnSubmit} */}
                <div className="title flex flex-col gap-4 pb-10">
                  <label htmlFor="title" className="text-lg text-white">
                    Project Title
                  </label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    // value={inputValue.title}
                    // onChange={handleOnChange}
                    placeholder=" "
                    className="bg-[rgba(255,255,255,0.1)] border-[1px] border-[#8f8f8f] text-white px-10 py-3 rounded-full"
                  />
                </div>

                <div className="role flex flex-col gap-4 pb-10">
                  <label htmlFor="role" className="text-lg text-white">
                    Your Role
                  </label>
                  <input
                    type="text"
                    id="role"
                    name="role"
                    // value={inputValue.role}
                    // onChange={handleOnChange}
                    placeholder=" "
                    className="bg-[rgba(255,255,255,0.1)] border-[1px] border-[#8f8f8f] text-white px-10 py-3 rounded-full"
                  />
                </div>

                <div className="introduction flex flex-col gap-4 pb-10">
                  <label htmlFor="introduction" className="text-lg text-white">
                    Introduction
                  </label>
                  <textarea
                    rows={6}
                    type="text"
                    id="introduction"
                    name="introduction"
                    // value={inputValue.introduction}
                    // onChange={handleOnChange}
                    placeholder=" "
                    className="bg-[rgba(255,255,255,0.1)] border-[1px] border-[#8f8f8f] text-white px-10 py-3 rounded-2xl"
                  />
                </div>
                <div className="skills flex flex-col gap-4 pb-10">
                  <label htmlFor="skills" className="text-lg text-white">
                    Skills Used
                  </label>
                  <input
                    type="text"
                    id="skills"
                    name="skills"
                    // value={inputValue.skills}
                    // onChange={handleOnChange}
                    placeholder=" "
                    className="bg-[rgba(255,255,255,0.1)] border-[1px] border-[#8f8f8f] text-white px-10 py-3 rounded-full"
                  />
                </div>
                {/* <div className="photos flex flex-col gap-4 pb-10">
                  <label htmlFor="photos" className="text-lg text-white">
                    Upload Samples
                  </label>
                  <UploadMutliple
                    id="photos"
                    name="photos"
                    value={inputValue.photos}
                    onChange={handleOnChange}
                  />
                </div> */}

                <div className="summary flex flex-col gap-4 pb-10">
                  <label htmlFor="summary" className="text-lg text-white">
                    Summary
                  </label>
                  <textarea
                    rows={6}
                    type="text"
                    id="summary"
                    name="summary"
                    // value={inputValue.summary}
                    // onChange={handleOnChange}
                    placeholder=" "
                    className="bg-[rgba(255,255,255,0.1)] border-[1px] border-[#8f8f8f] text-white px-10 py-3 rounded-2xl"
                  />
                </div>

                <div className="thumbnail flex flex-col gap-4 pb-10">
                  <label htmlFor="thumnail" className="text-lg text-white">
                    Upload Thumbnail
                  </label>
                  <UploadField
                    id="thumbnail"
                    name="thumbnail"
                    // value={inputValue.thumbnail}
                    // onChange={handleOnChange}
                  />
                </div>
                <button type="submit" className="w-3/12 pt-6">
                  <Link to="/edit-profile">
                    <ContinueButton title="Upload" />
                  </Link>
                </button>
              </form>
            </div>
          </div>
        </div>
      </ThirdLayout>
    </div>
  );
};

export default UploadProject;
