// import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useUserContext } from "../../context/UserContext.jsx";
import ThirdLayout from "../../layouts/thirdLayout";
import ContinueButton from "../../components/LoginSignupButton.jsx";
import UploadPhotoIcon from "../../assets/upload_photo.svg";
import { useAuth } from "../../context/AuthContext.jsx";

const AddWork = () => {

    const {user}= useAuth();
    const userData=user || {}

    console.log("userdata",userData._id)
  // const { user, setUser } = useUserContext();
  const navigate = useNavigate();

  const [inputValue, setInputValue] = useState({
    user_id: userData._id,
    role: "",
    dateFrom: "",
    dateTo: "",
    company: "",
    address: "",
  });

  useEffect(()=>{
      setInputValue({
        user_id: userData._id,
        role: "",
        dateFrom: "",
        dateTo: "",
        company: "",
        address: "",
      })
  }, [userData])

  useEffect(()=>{
    console.log('input value from useeffect: ', inputValue);
  }, [inputValue])

  const { role, dateFrom, dateTo, company, address } = inputValue;

  const handleOnSubmit = async (e) => {
    try {
      e.preventDefault();

      // var inputValue = { ...work };

      // setWork(inputValue);
      // console.log("Work has been set");
      console.log( JSON.stringify(inputValue));

      const response = await fetch(`http://localhost:3333/api/work`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inputValue),
      });

      if (!response.ok) {
        throw new Error("Failed to update user");
      }

      //     const data = await response.json();
      //     console.log(data);

      //     navigate("/explore");
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
    console.log(" this is input",inputValue);
  };
  return (
    <div>
      <ThirdLayout>
        <div className=" margin-wrapper position-center pt-[150px] w-full h-screen px-[120px] pb-[150px]">
          <div className="content-wrapper w-full flex flex-col gap-9 justify-between items-end p-20 form-background border-[1px] border-dark-grey px-20 rounded-[1.875rem]">
            <div className="top-elements w-full flex flex-col gap-9 pb-9">
              <h3 className="text-white text-4xl font-semibold">
                Add Work Experience
              </h3>
              <form  onSubmit={handleOnSubmit}>
                {/*  */}
                <div className="wrole flex flex-col gap-4 pb-10">
                  <label htmlFor="wrole" className="text-lg text-white">
                    Your Role
                  </label>
                  <input
                    type="text"
                    id="role"
                    name="role"
                    value={inputValue.role}
                    onChange={handleOnChange}
                    placeholder=" "
                    className="bg-[rgba(255,255,255,0.1)] border-[1px] border-[#8f8f8f] text-white px-10 py-3 rounded-full"
                  />
                </div>

                <div className=" grid grid-cols-2 gap-6">
                  <div className="dateFrom flex flex-col w-full gap-4 pb-10">
                    <label htmlFor="dateFrom" className="text-lg text-white">
                      Start from
                    </label>
                    <input
                      type="date"
                      id="dateFrom"
                      name="dateFrom"
                      value={inputValue.dateFrom}
                      onChange={handleOnChange}
                      placeholder=" "
                      className="bg-[rgba(255,255,255,0.1)] border-[1px] border-[#8f8f8f] text-white px-10 py-3 rounded-full"
                    />
                  </div>
                  <div className="dateTo flex flex-col w-full gap-4 pb-10">
                    <label htmlFor="dateTo" className="text-lg text-white">
                      End Date
                    </label>
                    <input
                      type="date"
                      id="dateTo"
                      name="dateTo"
                      value={inputValue.dateTo}
                      onChange={handleOnChange}
                      placeholder=" "
                      className="bg-[rgba(255,255,255,0.1)] border-[1px] border-[#8f8f8f] text-white px-10 py-3 rounded-full"
                    />
                  </div>
                </div>

                <div className="company flex flex-col gap-4 pb-10">
                  <label htmlFor="company" className="text-lg text-white">
                    Company's Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={inputValue.company}
                    onChange={handleOnChange}
                    placeholder=" "
                    className="bg-[rgba(255,255,255,0.1)] border-[1px] border-[#8f8f8f] text-white px-10 py-3 rounded-full"
                  />
                </div>

                <div className="address flex flex-col gap-4 pb-10">
                  <label htmlFor="address" className="text-lg text-white">
                    Company Address
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={inputValue.address}
                    onChange={handleOnChange}
                    placeholder=" "
                    className="bg-[rgba(255,255,255,0.1)] border-[1px] border-[#8f8f8f] text-white px-10 py-3 rounded-full"
                  />
                </div>

                <button type="submit" className="w-3/12 pt-6">
                  <Link to="/account-setup/user-skills">
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

export default AddWork;
