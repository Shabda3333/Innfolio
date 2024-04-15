// import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useUserContext } from "../../context/UserContext.jsx";
import SecondLayout from "../../layouts/secondLayout";
import ContinueButton from "../../components/LoginSignupButton.jsx";

const UserAbout = () => {
  const { user, setUser } = useUserContext();
  const navigate = useNavigate();

  const [inputValue, setInputValue] = useState({
    about: "",
  });
  console.log(user);
  const { about } = inputValue;

  const handleOnSubmit = (e) => {
    try {

    e.preventDefault();
    var testObject = { ...user };
    testObject.about = inputValue.about;

    setUser(testObject);
    console.log("User has been set");
    console.log(user);

    navigate("/account-setup/upload-project-ask");
    
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
                <div className="about flex flex-col gap-4">
                  <label
                    htmlFor="about"
                    className="text-lg text-white"
                  >
                    Write Something About Yourself
                  </label>
                  <textarea
                    rows={6}
                    type="text"
                    id="about"
                    name="about"
                    value={about}
                    onChange={handleOnChange}
                    placeholder="eg: Hi, I am ......"
                    className="bg-[rgba(255,255,255,0.1)] border-[1px] border-[#8f8f8f] text-white px-10 py-3 rounded-2xl"
                  />
                </div>
                <button type="submit" className="w-3/12 pt-6">
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

export default UserAbout;
