// import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useUserContext } from "../../context/UserContext.jsx";
import ThirdLayout from "../../layouts/thirdLayout";
import ContinueButton from "../../components/LoginSignupButton.jsx";
import UploadPhotoIcon from "../../assets/upload_photo.svg";

const UploadWorkExp = () => {
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
        <div className=" margin-wrapper position-center pt-[150px] w-full h-screen px-[120px] pb-[150px]">
          <div className="content-wrapper w-full flex flex-col gap-9 justify-between items-end p-20 form-background border-[1px] border-dark-grey px-20 rounded-[1.875rem]">
            <div className="top-elements w-full flex flex-col gap-9 pb-9">
              <h3 className="text-white text-4xl font-semibold">
                Add Your Work Experience
              </h3>
              <form action="" > 
              {/* onSubmit={handleOnSubmit} */}
              <div className="title flex flex-col gap-4 pb-10">
                  <label htmlFor="title" className="text-lg text-white">
                    Project Title
                  </label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    // value={title}
                    // onChange={handleOnChange}
                    placeholder=" "
                    className="bg-[rgba(255,255,255,0.1)] border-[1px] border-[#8f8f8f] text-white px-10 py-3 rounded-full"
                  />
                </div>
                <div className="introduction flex flex-col gap-4 pb-10">
                  <label
                    htmlFor="introduction"
                    className="text-lg text-white"
                  >
                    Introduction
                  </label>
                  <textarea
                    rows={6}
                    type="text"
                    id="introduction"
                    name="introduction"
                    // value={introduction}
                    // onChange={handleOnChange}
                    placeholder=" "
                    className="bg-[rgba(255,255,255,0.1)] border-[1px] border-[#8f8f8f] text-white px-10 py-3 rounded-2xl"
                  />
                </div>
                <div className="project-skills flex flex-col gap-4 pb-10">
                  <label htmlFor="project-skills" className="text-lg text-white">
                    Skills Used
                  </label>
                  <input
                    type="text"
                    id="project-skills"
                    name="project-skills"
                    // value={project-skills}
                    // onChange={handleOnChange}
                    placeholder=" "
                    className="bg-[rgba(255,255,255,0.1)] border-[1px] border-[#8f8f8f] text-white px-10 py-3 rounded-full"
                  />
                </div>
                <div className="upload-samples flex flex-col gap-4 pb-10">
                  <label htmlFor="upload-samples" className="text-lg text-white">
                    Upload Samples
                  </label>
                  <button>
                      <div className="upload-samples-area h-[12rem] dashed-border flex justify-center items-center">
                        <div className="icon-container w-14 h-14 bg-white flex justify-center items-center rounded-full">
                          <img src={UploadPhotoIcon} alt="upload photo icon" />
                        </div>
                      </div>
                  </button>
                </div>

                <div className="summanry flex flex-col gap-4 pb-10">
                  <label
                    htmlFor="summary"
                    className="text-lg text-white"
                  >
                    Summary
                  </label>
                  <textarea
                    rows={6}
                    type="text"
                    id="summary"
                    name="summary"
                    // value={summary}
                    // onChange={handleOnChange}
                    placeholder=" "
                    className="bg-[rgba(255,255,255,0.1)] border-[1px] border-[#8f8f8f] text-white px-10 py-3 rounded-2xl"
                  />
                </div>

                <div className="upload-thumbnail flex flex-col gap-4 pb-10">
                  <label htmlFor="upload-thumnail" className="text-lg text-white">
                    Upload Thumbnail
                  </label>
                  <button>
                      <div className="upload-thumbnail-area h-[12rem] dashed-border flex justify-center items-center">
                        <div className="icon-container w-14 h-14 bg-white flex justify-center items-center rounded-full">
                          <img src={UploadPhotoIcon} alt="upload photo icon" />
                        </div>
                      </div>
                  </button>
                </div>
                <button type="submit" className="w-3/12 pt-6">
                <Link to="/account-setup/user-skills" >
                  <ContinueButton title="Continue" />
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

export default UploadWorkExp;
