// import React from 'react'
import SecondLayout from "../../layouts/secondLayout";
import { useUserContext } from "../../context/UserContext.jsx";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import ContinueButton from "../../components/LoginSignupButton.jsx";

const user_professional_role = () => {
  const { user, setUser } = useUserContext();
  const navigate = useNavigate();

  const [inputValue, setInputValue] = useState({
    role: "",
  });
  console.log(user);
  const { role } = inputValue;

  const handleOnSubmit = (e) => {
    try {

    e.preventDefault();
    var testObject = { ...user };
    testObject.role = inputValue.role;

    setUser(testObject);
    console.log("User has been set");
    console.log(user);

    navigate("/account-setup/user-about");
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
                <div className="professional-role flex flex-col gap-4">
                  <label
                    htmlFor="professional-role"
                    className="text-lg text-white"
                  >
                    Enter your Professional Role
                  </label>
                  <input
                    type="text"
                    id="professional-role"
                    name="role"
                    value={role}
                    onChange={handleOnChange}
                    placeholder="eg: UI Designer"
                    className="bg-[rgba(255,255,255,0.1)] border-[1px] border-[#8f8f8f] text-white px-10 py-3 rounded-full"
                  />
                </div>
                <button type="submit" className="w-3/12">
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

export default user_professional_role;
