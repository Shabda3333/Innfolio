// import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import SecondLayout from "../../layouts/secondLayout.jsx";
import LoginSignupButton from "../../components/LoginSignupButton.jsx";
import SetupAccountIllustration from "../../assets/illustrations/setup_account_illustration.svg";

const Signup = () => {
  // const navigate = useNavigate();
  return (
    <div>
      <SecondLayout>
        <div className="wrapper position-center flex flex-col justify-center items-center gap-8">
          <img
            src={SetupAccountIllustration}
            alt="Setup Account Illustration"
          />
          <div className="text flex flex-col justify-center items-center gap-3.5">
            <h3 className="text-white text-4xl font-semibold">
              Set Up Your Account
            </h3>
            <p className="text-white text-lg font-regular">
              Join us now to start crafting and exploring portfolios.
            </p>
          </div>
          <div className="cta-wrapper w-1/2">
            <Link to="professional-role">
              <LoginSignupButton title="Continue" />
            </Link>
          </div>
        </div>
      </SecondLayout>
    </div>
  );
};

export default Signup;
