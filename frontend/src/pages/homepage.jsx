// import React from 'react'
import SecondLayout from "../layouts/secondLayout";
import BgShapes1 from "../assets/illustrations/bg_shapes_1.svg";
import BgShapes2 from "../assets/illustrations/bg_shapes_2.svg";
import Laptop from "../assets/illustrations/laptop.svg";
import MobileMic from "../assets/illustrations/mobile_mic.svg";
import LoginSignupButton from "../components/LoginSignupButton";
import {Link} from "react-router-dom";

const Homepage = () => {
  return (
    <div className="wrapper">
      <SecondLayout>
        <div className="center-content position-center w-[53rem] flex flex-col justify-center items-center gap-20">
          <div className="text flex flex-col gap-8 justify-center items-center">
            <p className="text-white text-3xl font-regular">Welcome to <span className="text-cyan">Innfolio</span></p>
            <h3 className="text-white text-7xl font-semibold text-center">Unlock Your Professional Brilliance</h3>
            <p className="text-cyan text-4xl font-medium">Craft <span className="text-white font-regular">Portfolio of Excellence</span></p>
          </div>
          <div className="call-to-actions w-1/2 flex justify-between items-center">
            <Link to = "/signin">
              <LoginSignupButton title = "Sign In" />
            </Link>
            <Link to = "/signup">
              <LoginSignupButton title = "Sign Up"/>
            </Link>
          </div>
        </div>
        <div className="background-illustrations relative w-full">
          <img src={BgShapes1} alt="abstract shapes" className="fixed top-[275px]" />
          <img src={BgShapes2} alt="abstract shapes" className="fixed right-0 top-[600px]" />
          <img src={MobileMic} alt="mobile mic illustration" className="fixed top-[-46px] right-0" />
          <img
            src={Laptop}
            alt="laptop illustration"
            className="fixed bottom-0 left-0"
          />
        </div>
      </SecondLayout>
    </div>
  );
};

export default Homepage;
