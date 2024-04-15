// import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useUserContext } from "../../context/UserContext.jsx";
import SecondLayout from "../../layouts/secondLayout";
import ContinueButton from "../../components/LoginSignupButton.jsx";

const UserSkills = () => {
  const { user, setUser } = useUserContext();
  const navigate = useNavigate();

  const [inputValue, setInputValue] = useState({
    skills: "",
  });
  console.log(user);
  const { skills } = inputValue;

  const handleOnSubmit = async (e) => {
    try {
      e.preventDefault();
  
      var testObject = { ...user };
  
      const separatedArray = inputValue.skills.split(",");
      testObject.skills = separatedArray;
  
      setUser(testObject);
      testObject.password = null;
      console.log("User has been set");
      console.log(user);
  
      const response = await fetch(`http://localhost:3333/api/user/${testObject._id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(testObject)
      });
  
      if (!response.ok) {
        throw new Error('Failed to update user');
      }
  
      const data = await response.json();
      console.log(data);
  
      navigate("/explore");
  
    } catch (error) {
      console.log(error.message);
    }
  };
  
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
    console.log(inputValue);
  };
  return (
    <div>
      <SecondLayout>
        <div className="margin-wrapper position-center pt-[48px] w-full h-[38rem] px-[120px]">
          <div className="content-wrapper w-full h-full flex flex-col justify-between items-end p-20 form-background border-[1px] border-dark-grey px-20 rounded-[1.875rem]">
            <div className="top-elements w-full flex flex-col gap-9">
              <h3 className="text-white text-4xl font-semibold">
                Account Setup
              </h3>
              <form action="" onSubmit={handleOnSubmit}>
                <div className="skills flex flex-col gap-4">
                  <label htmlFor="skills" className="text-lg text-white">
                    Whats are Your Skills?
                  </label>
                  <input
                    type="text"
                    id="skills"
                    name="skills"
                    value={skills}
                    onChange={handleOnChange}
                    placeholder="eg: figma, vector art, illustrations"
                    className="bg-[rgba(255,255,255,0.1)] border-[1px] border-[#8f8f8f] text-white px-10 py-3 rounded-full"
                  />
                </div>
                <button className="w-3/12 pt-6">
                  
                    <ContinueButton title="Continue" />
                  
                </button>
              </form>
            </div>
          </div>
        </div>
      </SecondLayout>
    </div>
  );
};

export default UserSkills;
