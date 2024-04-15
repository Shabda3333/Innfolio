// import React from 'react'
import { Link, useNavigate } from "react-router-dom";
// import { useState } from "react";
import { useUserContext } from "../../context/UserContext.jsx";
import SecondLayout from "../../layouts/secondLayout";
import ContinueButton from "../../components/LoginSignupButton.jsx";

const UploadProjectAsk = () => {
    const{user}=useUserContext();
  console.log(user);
  return (
    <div>
      <SecondLayout>
        <div className="margin-wrapper position-center pt-[48px] w-full h-[38rem] px-[120px]">
          <div className="content-wrapper w-full h-full flex flex-col justify-between items-end p-20 form-background border-[1px] border-dark-grey px-20 rounded-[1.875rem]">
            <div className="top-elements w-full flex flex-col gap-9">
              <h3 className="text-white text-4xl font-semibold">
                Account Setup
              </h3>
              <form action="" >
                <div className="upload-project-ask flex flex-col gap-4">
                  <label htmlFor="upload-project-ask" className="text-lg text-white">
                    Create Your First Project?
                  </label>
                
                </div>
                <button className="w-3/12 pt-6">
                <Link to="/account-setup/upload-project" >
                    <ContinueButton title="Continue" />
                </Link>
                </button>
              </form>
            </div>
          </div>
        </div>
      </SecondLayout>
    </div>
  );
};

export default UploadProjectAsk;
