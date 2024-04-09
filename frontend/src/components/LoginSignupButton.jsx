// import React from "react";

const LoginSignupButton = ({ title }) => {
  return (
    <div className="button-wrapper w-full flex justify-center items-center gap-2.5 px-16 py-3 rounded-full gradient-two ext-shadow-one upload-project-button-shadow">
      <p className="text-white font-medium text-xl">{title}</p>
    </div>
  );
};

export default LoginSignupButton;
