// import React from 'react'
import SecondLayout from "../../layouts/secondLayout";
import ContinueButton from "../../components/LoginSignupButton.jsx";

const user_skills = () => {
  return (
    <div>
    <SecondLayout>
      <div className="margin-wrapper position-center pt-[48px] w-full h-[38rem] px-[120px]">
        <div className="content-wrapper w-full h-full flex flex-col justify-between items-end p-20 form-background border-[1px] border-dark-grey px-20 rounded-[1.875rem]">
          <div className="top-elements w-full flex flex-col gap-9">
            <h3 className="text-white text-4xl font-semibold">
              Account Setup
            </h3>
            <form action="">
              <div className="professional-role flex flex-col gap-4">
                <label
                  htmlFor="professional-role"
                  className="text-lg text-white"
                >
                  Whats are Your Skills?
                </label>
                <input
                  type="text"
                  id="professional-role"
                  placeholder="eg: figma, vector art, illustrations"
                  className="bg-[rgba(255,255,255,0.1)] border-[1px] border-[#8f8f8f] text-white px-10 py-3 rounded-full"
                />
              </div>
            </form>
          </div>
          <button className="w-3/12">
            <ContinueButton title="Continue" />
          </button>
        </div>
      </div>
    </SecondLayout>
  </div>
  );
};

export default user_skills;
