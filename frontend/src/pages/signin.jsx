import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import SecondLayout from "../layouts/secondLayout.jsx";
import LoginSignupButton from "../components/LoginSignupButton.jsx";
import SignInIllustration from "../assets/illustrations/sign_in_illustration.svg";

const Signup = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };
  const handleError = () =>
    toast.error("Enter valid value", {
      
      position: "bottom-left",
    });
  const handleSuccess = () =>
    toast.success("Success", {
      
      position: "bottom-right",
    });
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:3333/api/user/signup",
        {
          ...inputValue,
        },
        { withCredentials: true }
      );
      const { success, message } = data;
      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          navigate("/");
        }, 1000);
      } else {
        handleError(message);
      }
    } catch (error) {
      console.log(error);
    }
    setInputValue({
      ...inputValue,
      email: "",
      password: "",
    });
  };

  return (
    <div className="">
      <SecondLayout>
        <div className="main-wrapper w-full position-center flex justify-between items-center px-[120px]">
          <div className="illustration">
            <img src={SignInIllustration} alt="Sign In Illustration" />
          </div>
          <div className="form w-[38rem] flex flex-col gap-8 form-background border-[1px] border-dark-grey px-20 py-24 rounded-[1.875rem]">
            <div className="heading flex flex-col gap-2">
              <h3 className="text-white text-4xl font-semibold">
                Welcome Back!
              </h3>
              <p className="text-white text-lg">
                Log in and continue access to your account.
              </p>
            </div>
            <form className="input-fields flex flex-col gap-6" onSubmit={handleSubmit}>
              <div className="email flex flex-col gap-2">
                <label htmlFor="email" className="text-lg text-white">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your Email"
                  className="bg-[rgba(255,255,255,0.1)] border-[1px] border-[#8f8f8f] text-white px-10 py-3 rounded-full"
                  onChange={handleOnChange}
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
                  onChange={handleOnChange}
                />
              </div>
            </form>
            <div className="call-to-actions flex flex-col gap-4">
              <button type = "submit">
                <LoginSignupButton title="Sign In" />
              </button>
              <p className="text-white font-regular">
                Don't have an account?
                <Link to="/signup">
                  <span className="text-cyan font-medium"> Sign Up</span>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </SecondLayout>
      <ToastContainer />
    </div>
  );
};

export default Signup;
