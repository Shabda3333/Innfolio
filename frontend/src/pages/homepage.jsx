<<<<<<< HEAD

// import React from "react";
import MainLayout from "../layouts/mainLayout";


const Homepage = () => {
  return (
    <MainLayout>
      <div>
        <img src="./src/assets/innfolio..svg" alt="" />
      </div>

      <div className=" bg-transparent text-white font-general-sans h-[80vh] flex flex-col justify-center items-center ">
        <h2 className=" font-thin text-2xl">
          Welcome, to <span className="text-cyan">Innfolio</span>
        </h2>
        <h1 className=" font-semibold text-7xl pt-[32px] pd-[10px]">
          Unlock Your
        </h1>
        <h1 className=" font-semibold text-7xl pt-[10px] pd-[32px]">
          Professional Brilliance
        </h1>
        <h2 className=" font-medium text-5xl pt-[32px] ">
          <span className="text-cyan font-semibold">Craft</span> Portfolio of
          Excellence
        </h2>
      </div>
     
    </MainLayout>
  );
};

=======
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
          <div className="call-to-actions w-full flex justify-center items-center gap-8">
            <Link to = "/signin">
              <LoginSignupButton title = "Sign In"/>
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

>>>>>>> fcdf2a30353ea23a618b299e818456f54f6fab34
export default Homepage;
