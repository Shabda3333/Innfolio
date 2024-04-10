// import React from 'react'
import { Link } from "react-router-dom";
import SecondLayout from "../layouts/secondLayout.jsx";
import LoginSignupButton from "../components/LoginSignupButton.jsx";
import SignUpIllustration from "../assets/illustrations/sign_up_illustration.svg";

const Signup = () => {
  return (
    <div>
      <SecondLayout>
        <div className="main-wrapper w-full position-center flex justify-between items-center px-[120px]">
          <div className="illustration">
            <img src={SignUpIllustration} alt="Sign In Illustration" />
          </div>
          <div className="form w-[38rem] flex flex-col gap-6 form-background border-[1px] border-dark-grey px-16 py-12 rounded-[1.875rem]">
            <div className="heading flex flex-col gap-2">
              <h3 className="text-white text-4xl font-semibold">
                Create an Account
              </h3>
              <p className="text-white text-lg">
                Join us now to start crafting and exploring portfolios.
              </p>
            </div>
            <div className="input-fields flex flex-col gap-3">
              <div className="fname flex flex-col gap-2">
                <label htmlFor="fname" className="text-lg text-white">
                  Full Name
                </label>
                <input
                  type="text"
                  id="fname"
                  placeholder="Enter your Full Name"
                  className="bg-[rgba(255,255,255,0.1)] border-[1px] border-[#8f8f8f] text-white px-10 py-3 rounded-full"
                />
              </div>
              <div className="email flex flex-col gap-2">
                <label htmlFor="email" className="text-lg text-white">
                  Email
                </label>
                <input
                  type="text"
                  id="email"
                  placeholder="Enter your Email"
                  className="bg-[rgba(255,255,255,0.1)] border-[1px] border-[#8f8f8f] text-white px-10 py-3 rounded-full"
                />
              </div>
              <div className="password flex flex-col gap-2">
                <label htmlFor="password" className="text-lg text-white">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  placeholder="Enter your Password"
                  className="bg-[rgba(255,255,255,0.1)] border-[1px] border-[#8f8f8f] text-white px-10 py-3 rounded-full"
                />
              </div>
              <div className="confirm-password flex flex-col gap-2">
                <label htmlFor="confirmPassword" className="text-lg text-white">
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  placeholder="Enter your Password"
                  className="bg-[rgba(255,255,255,0.1)] border-[1px] border-[#8f8f8f] text-white px-10 py-3 rounded-full"
                />
              </div>
            </div>
            <div className="call-to-actions flex flex-col gap-4">
              <LoginSignupButton title="Sign Up" />
              <p className="text-white font-regular">
                Already have an account?
                <Link to="/signin">
                  <span className="text-cyan font-medium"> Sign In</span>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </SecondLayout>
    </div>
  );
};

export default Signup;
